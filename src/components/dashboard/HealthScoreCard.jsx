import React from 'react';
import './HealthScoreCard.css';

const HealthScoreCard = ({ score }) => {
  const getScoreColor = (score) => {
    if (score >= 80) return '#2E7D32';
    if (score >= 60) return '#F4A261';
    return '#ED6A5E';
  };

  const getScoreMessage = (score) => {
    if (score >= 80) return 'Excellent';
    if (score >= 60) return 'Good';
    if (score >= 40) return 'Fair';
    return 'Needs Attention';
  };

  const color = getScoreColor(score);
  const message = getScoreMessage(score);

  return (
    <div className="health-score-card">
      <div className="score-header">
        <h3>HealthGuard Score</h3>
        <span className="score-trend">-2 from last month</span>
      </div>
      
      <div className="score-display">
        <svg className="score-ring" viewBox="0 0 120 120">
          <circle
            className="score-ring-bg"
            cx="60"
            cy="60"
            r="54"
            fill="none"
            stroke="#E9ECEF"
            strokeWidth="8"
          />
          <circle
            className="score-ring-fill"
            cx="60"
            cy="60"
            r="54"
            fill="none"
            stroke={color}
            strokeWidth="8"
            strokeLinecap="round"
            strokeDasharray={`${2 * Math.PI * 54}`}
            strokeDashoffset={`${2 * Math.PI * 54 * (1 - score / 100)}`}
            transform="rotate(-90 60 60)"
          />
        </svg>
        
        <div className="score-value">
          <span className="value">{score}</span>
          <span className="max">/100</span>
        </div>
      </div>
      
      <div className="score-footer">
        <p className="score-message" style={{ color }}>
          {message}
        </p>
        <p className="score-description">
          Based on your vitals, labs, and medications
        </p>
      </div>
    </div>
  );
};

export default HealthScoreCard;