import React from 'react';

const AdherenceTracker = ({ percentage }) => {
  return (
    <div style={{ marginTop: '16px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
        <span style={{ fontSize: '14px' }}>Weekly Adherence</span>
        <span style={{ fontSize: '14px', fontWeight: 'bold', color: '#2E7D32' }}>
          {percentage}%
        </span>
      </div>
      <div style={{
        width: '100%',
        height: '8px',
        backgroundColor: '#E9ECEF',
        borderRadius: '4px',
        overflow: 'hidden'
      }}>
        <div style={{
          width: `${percentage}%`,
          height: '100%',
          backgroundColor: '#2E7D32',
          borderRadius: '4px'
        }} />
      </div>
    </div>
  );
};

export default AdherenceTracker;