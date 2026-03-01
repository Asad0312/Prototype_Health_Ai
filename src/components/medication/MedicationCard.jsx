import React from 'react';
import { Pill } from 'lucide-react';

const MedicationCard = ({ medication }) => {
  return (
    <div style={{
      backgroundColor: 'white',
      borderRadius: '12px',
      padding: '16px',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
        <div style={{
          width: '40px',
          height: '40px',
          borderRadius: '10px',
          backgroundColor: '#E8F3F5',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#2A7A8C'
        }}>
          <Pill size={20} />
        </div>
        <div>
          <h4 style={{ margin: 0 }}>{medication.name} {medication.dosage}</h4>
          <p style={{ fontSize: '13px', color: '#6C757D', margin: '4px 0 0' }}>
            {medication.frequency}
          </p>
        </div>
      </div>
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        fontSize: '14px'
      }}>
        <span>Next: {medication.time}</span>
        <span style={{ color: '#2E7D32' }}>Adherence: {medication.adherence}%</span>
      </div>
    </div>
  );
};

export default MedicationCard;