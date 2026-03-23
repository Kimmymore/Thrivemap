import { useState } from 'react';
import { DIMENSIONS } from '../data/scoring';

const TEMP_LABELS = ['❄️ Very cold', 'Cold', 'Mild / temperate', 'Warm', '☀️ Tropical hot'];

function tempLabel(val) {
  const idx = Math.round((val / 100) * (TEMP_LABELS.length - 1));
  return TEMP_LABELS[Math.min(idx, TEMP_LABELS.length - 1)];
}

function WeightSlider({ dim, value, onChange }) {
  const pct = Math.round(value);
  return (
    <div className="pref-row">
      <div className="pref-row-header">
        <span className="pref-label">{dim.label}</span>
        <span className={`pref-value ${value < 20 ? 'low' : value >= 70 ? 'high' : ''}`}>
          {value < 20 ? 'Off' : value < 40 ? 'Low' : value < 65 ? 'Medium' : 'High'}
        </span>
      </div>
      <input
        type="range"
        min={0}
        max={100}
        step={5}
        value={value}
        onChange={e => onChange(Number(e.target.value))}
        aria-label={`${dim.label} importance`}
        className="pref-slider"
        style={{ '--pct': `${pct}%` }}
      />
      <p className="pref-desc">{dim.description}</p>
    </div>
  );
}

export default function Preferences({ persons, weights, tempPref, minSun, onNext, onBack }) {
  const [localWeights, setLocalWeights] = useState(weights);
  const [localTemp, setLocalTemp] = useState(tempPref);
  const [localSun, setLocalSun] = useState(minSun);

  const updateWeight = (key, val) => {
    setLocalWeights(prev => ({ ...prev, [key]: val }));
  };

  // Non-climate dimensions
  const otherDimensions = DIMENSIONS.filter(d => d.key !== 'climate');

  return (
    <div className="step-container">
      <div className="step-hero">
        <h2 className="step-title">What matters most to you?</h2>
        <p className="step-subtitle">
          We've pre-filled smart defaults based on your profile. Adjust the sliders
          to match your priorities — then see your personalised country ranking.
        </p>
      </div>

      {/* Climate section */}
      <div className="pref-section">
        <h3 className="pref-section-title">🌡️ Climate preferences</h3>

        <div className="pref-row">
          <div className="pref-row-header">
            <span className="pref-label">Temperature preference</span>
            <span className="pref-value">{tempLabel(localTemp)}</span>
          </div>
          <input
            type="range"
            min={0}
            max={100}
            step={5}
            value={localTemp}
            onChange={e => setLocalTemp(Number(e.target.value))}
            aria-label="Temperature preference"
            className="pref-slider temp-slider"
            style={{ '--pct': `${localTemp}%` }}
          />
          <div className="temp-scale-labels">
            <span>❄️ Arctic cold</span>
            <span>Tropical hot ☀️</span>
          </div>
          <p className="pref-desc">
            Slide towards your ideal climate — from icy Scandinavia to year-round tropical warmth.
          </p>
        </div>

        <div className="pref-row">
          <div className="pref-row-header">
            <span className="pref-label">Minimum sunshine hours / day</span>
            <span className="pref-value">{localSun.toFixed(1)}h</span>
          </div>
          <input
            type="range"
            min={3}
            max={10}
            step={0.5}
            value={localSun}
            onChange={e => setLocalSun(Number(e.target.value))}
            aria-label="Minimum daily sunshine hours"
            className="pref-slider"
            style={{ '--pct': `${((localSun - 3) / 7) * 100}%` }}
          />
          <div className="temp-scale-labels">
            <span>3h (northern winter)</span>
            <span>10h (tropical)</span>
          </div>
          <p className="pref-desc">
            Countries with less sunshine than this minimum will score lower on climate.
          </p>
        </div>

        <div className="pref-row">
          <div className="pref-row-header">
            <span className="pref-label">Climate — importance</span>
            <span className={`pref-value ${localWeights.climate < 20 ? 'low' : localWeights.climate >= 70 ? 'high' : ''}`}>
              {localWeights.climate < 20 ? 'Off' : localWeights.climate < 40 ? 'Low' : localWeights.climate < 65 ? 'Medium' : 'High'}
            </span>
          </div>
          <input
            type="range"
            min={0}
            max={100}
            step={5}
            value={localWeights.climate}
            onChange={e => updateWeight('climate', Number(e.target.value))}
            aria-label="Climate importance"
            className="pref-slider"
            style={{ '--pct': `${localWeights.climate}%` }}
          />
          <p className="pref-desc">
            How much should climate match affect a country's overall score?
          </p>
        </div>
      </div>

      {/* All other dimensions */}
      <div className="pref-section">
        <h3 className="pref-section-title">⚖️ What matters to your happiness?</h3>
        <p className="pref-section-note">
          Move each slider to reflect how important this dimension is to you.
          <strong> Off</strong> = ignore this,&nbsp;
          <strong>High</strong> = this is a deciding factor.
        </p>

        {otherDimensions.map(dim => (
          <WeightSlider
            key={dim.key}
            dim={dim}
            value={localWeights[dim.key] ?? 50}
            onChange={val => updateWeight(dim.key, val)}
          />
        ))}
      </div>

      <div className="step-actions">
        <button className="btn-secondary" onClick={onBack}>← Back</button>
        <button className="btn-primary" onClick={() => onNext(localWeights, localTemp, localSun)}>
          Show my results →
        </button>
      </div>
    </div>
  );
}
