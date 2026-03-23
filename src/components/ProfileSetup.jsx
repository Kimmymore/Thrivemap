import { useState } from 'react';
import { GENDER_OPTIONS, ORIENTATION_OPTIONS, RACIAL_GROUPS } from '../data/countries';

const raceOptions = Object.entries(RACIAL_GROUPS).map(([value, label]) => ({ value, label }));

function PersonCard({ person, index, onChange }) {
  const label = index === 0 ? 'Person 1' : 'Person 2';

  return (
    <div className="person-card">
      <h3 className="person-title">{label}</h3>

      <div className="field-group">
        <label className="field-label" htmlFor={`gender-${index}`}>Gender</label>
        <select
          id={`gender-${index}`}
          className="field-select"
          value={person.gender}
          onChange={e => onChange({ ...person, gender: e.target.value })}
        >
          <option value="">Select…</option>
          {GENDER_OPTIONS.map(o => (
            <option key={o.value} value={o.value}>{o.label}</option>
          ))}
        </select>
      </div>

      <div className="field-group">
        <label className="field-label" htmlFor={`orient-${index}`}>Sexual orientation</label>
        <select
          id={`orient-${index}`}
          className="field-select"
          value={person.orientation}
          onChange={e => onChange({ ...person, orientation: e.target.value })}
        >
          <option value="">Select…</option>
          {ORIENTATION_OPTIONS.map(o => (
            <option key={o.value} value={o.value}>{o.label}</option>
          ))}
        </select>
      </div>

      <div className="field-group">
        <label className="field-label" htmlFor={`race-${index}`}>Race / ethnicity</label>
        <select
          id={`race-${index}`}
          className="field-select"
          value={person.race}
          onChange={e => onChange({ ...person, race: e.target.value })}
        >
          <option value="">Select…</option>
          {raceOptions.map(o => (
            <option key={o.value} value={o.value}>{o.label}</option>
          ))}
        </select>
        <p className="field-hint">
          Used to personalise the racial experience score for each country.
        </p>
      </div>
    </div>
  );
}

export default function ProfileSetup({ persons, onNext }) {
  const [localPersons, setLocalPersons] = useState(persons);
  const [error, setError] = useState('');

  const updatePerson = (i, updated) => {
    const next = [...localPersons];
    next[i] = updated;
    setLocalPersons(next);
    setError('');
  };

  const setCount = (n) => {
    if (n === 1) setLocalPersons([localPersons[0]]);
    if (n === 2) setLocalPersons([localPersons[0], localPersons[1] || { gender: '', orientation: '', race: '' }]);
  };

  const handleNext = () => {
    const incomplete = localPersons.some(p => !p.gender || !p.orientation || !p.race);
    if (incomplete) {
      setError('Please fill in all fields for each person.');
      return;
    }
    onNext(localPersons);
  };

  return (
    <div className="step-container">
      <div className="step-hero">
        <h1 className="step-title">Where can you live a happy, equal life?</h1>
        <p className="step-subtitle">
          Tell us about yourself — or you and your partner — and we'll show you which countries
          offer the legal protections, social acceptance and quality of life that match your needs.
        </p>
      </div>

      <div className="person-count-toggle">
        <span className="toggle-label">I'm searching as:</span>
        <button
          className={`toggle-btn ${localPersons.length === 1 ? 'active' : ''}`}
          onClick={() => setCount(1)}
        >
          An individual
        </button>
        <button
          className={`toggle-btn ${localPersons.length === 2 ? 'active' : ''}`}
          onClick={() => setCount(2)}
        >
          A couple
        </button>
      </div>

      <div className={`persons-grid ${localPersons.length === 2 ? 'two-up' : ''}`}>
        {localPersons.map((p, i) => (
          <PersonCard
            key={i}
            person={p}
            index={i}
            onChange={updated => updatePerson(i, updated)}
          />
        ))}
      </div>

      {error && <p className="form-error" role="alert">{error}</p>}

      <div className="step-actions">
        <button className="btn-primary" onClick={handleNext}>
          Set my preferences →
        </button>
      </div>

      <p className="privacy-note">
        Your answers never leave your browser. No data is stored or sent to any server.
      </p>
    </div>
  );
}
