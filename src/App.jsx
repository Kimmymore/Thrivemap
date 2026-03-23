import { useState, useEffect, useCallback } from 'react';
import ProfileSetup from './components/ProfileSetup';
import Preferences from './components/Preferences';
import Results from './components/Results';
import { COUNTRIES } from './data/countries';
import {
  fetchEqualdexData,
  mergeEqualdexData,
  scoreCountry,
  suggestWeights,
  DEFAULT_WEIGHTS,
} from './data/scoring';
import './App.css';

const STEPS = ['profile', 'preferences', 'results'];

export default function App() {
  const [step, setStep] = useState('profile');

  const [persons, setPersons] = useState([
    { gender: '', orientation: '', race: '' },
  ]);

  const [weights, setWeights] = useState(DEFAULT_WEIGHTS);
  const [tempPref, setTempPref] = useState(50);
  const [minSun, setMinSun] = useState(5);

  const [countries, setCountries] = useState(COUNTRIES);
  const [equaldexStatus, setEqualdexStatus] = useState('idle');
  const [scored, setScored] = useState([]);

  useEffect(() => {
    setEqualdexStatus('loading');
    fetchEqualdexData().then(liveData => {
      if (liveData && Object.keys(liveData).length > 0) {
        setCountries(mergeEqualdexData(COUNTRIES, liveData));
        setEqualdexStatus('ok');
      } else {
        setEqualdexStatus('error');
      }
    });
  }, []);

  const computeScores = useCallback(() => {
    const results = countries.map(c => ({
      ...c,
      ...scoreCountry(c, persons, weights, tempPref, minSun),
    }));
    results.sort((a, b) => b.total - a.total);
    setScored(results);
  }, [countries, persons, weights, tempPref, minSun]);

  const handleProfileNext = (updatedPersons) => {
    setPersons(updatedPersons);
    setWeights(suggestWeights(updatedPersons));
    setStep('preferences');
  };

  const handlePreferencesNext = (updatedWeights, updatedTempPref, updatedMinSun) => {
    setWeights(updatedWeights);
    setTempPref(updatedTempPref);
    setMinSun(updatedMinSun);
    setStep('results');
  };

  useEffect(() => {
    if (step === 'results') computeScores();
  }, [step, computeScores]);

  const stepIndex = STEPS.indexOf(step);

  return (
    <div className="app">
      <header className="app-header">
        <div className="header-inner">
          <div className="logo">
            <span className="logo-icon">🌈</span>
            <span className="logo-text">ThriveMap</span>
          </div>
          <nav className="step-nav" aria-label="Steps">
            {['Profile', 'Preferences', 'Results'].map((label, i) => (
              <button
                key={label}
                className={`step-btn ${i === stepIndex ? 'active' : ''} ${i < stepIndex ? 'done' : ''}`}
                onClick={() => i < stepIndex && setStep(STEPS[i])}
                disabled={i > stepIndex}
                aria-current={i === stepIndex ? 'step' : undefined}
              >
                <span className="step-num">{i < stepIndex ? '✓' : i + 1}</span>
                <span className="step-label">{label}</span>
              </button>
            ))}
          </nav>
        </div>
      </header>

      <main className="app-main">
        {step === 'profile' && (
          <ProfileSetup persons={persons} onNext={handleProfileNext} />
        )}
        {step === 'preferences' && (
          <Preferences
            persons={persons}
            weights={weights}
            tempPref={tempPref}
            minSun={minSun}
            onNext={handlePreferencesNext}
            onBack={() => setStep('profile')}
          />
        )}
        {step === 'results' && (
          <Results
            scored={scored}
            persons={persons}
            weights={weights}
            equaldexStatus={equaldexStatus}
            onBack={() => setStep('preferences')}
            onReset={() => {
              setStep('profile');
              setPersons([{ gender: '', orientation: '', race: '' }]);
              setWeights(DEFAULT_WEIGHTS);
              setTempPref(50);
              setMinSun(5);
            }}
          />
        )}
      </main>

      <footer className="app-footer">
        <p>
          LGBTQ+ data: <a href="https://equaldex.com" target="_blank" rel="noreferrer">Equaldex</a>
          {equaldexStatus === 'ok' && <span className="badge live">● live</span>}
          {equaldexStatus === 'error' && <span className="badge cached">● built-in data</span>}
          {equaldexStatus === 'loading' && <span className="badge loading-ind">● updating…</span>}
          {' · '}Safety, healthcare &amp; cost data from public indices.
          {' · '}Scores are generalisations — individual experiences vary.
        </p>
        <p className="footer-love">Made with ❤️ for everyone who deserves a place to thrive.</p>
      </footer>
    </div>
  );
}
