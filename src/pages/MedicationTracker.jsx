import React, { useState } from 'react';
import MedicationCard from '../components/medication/MedicationCard';
import AdherenceTracker from '../components/medication/AdherenceTracker';
import { medications } from '../data/dummyHealthData';
import { Bell, Calendar, CheckCircle, AlertTriangle } from 'lucide-react';

const MedicationTracker = () => {
  const [meds, setMeds] = useState(medications);
  const [todayDoses, setTodayDoses] = useState({
    lisinopril: false,
    metformin: false
  });

  const handleTakeDose = (medName) => {
    setTodayDoses(prev => ({
      ...prev,
      [medName.toLowerCase()]: true
    }));
  };

  const totalAdherence = Math.round(
    (Object.values(todayDoses).filter(v => v).length / Object.values(todayDoses).length) * 100
  );

  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
      <h1 style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>Medication Tracker</h1>

      {/* Today's Summary */}
      <div style={{
        backgroundColor: 'white',
        borderRadius: '12px',
        padding: '20px',
        marginBottom: '24px',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
      }}>
        <h2 style={{ marginBottom: '16px' }}>Today's Summary</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }}>
          <div>
            <div style={{ fontSize: '14px', color: '#6C757D' }}>Total Medications</div>
            <div style={{ fontSize: '24px', fontWeight: 'bold' }}>{meds.length}</div>
          </div>
          <div>
            <div style={{ fontSize: '14px', color: '#6C757D' }}>Taken Today</div>
            <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#2E7D32' }}>
              {Object.values(todayDoses).filter(v => v).length}
            </div>
          </div>
          <div>
            <div style={{ fontSize: '14px', color: '#6C757D' }}>Adherence Rate</div>
            <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#2A7A8C' }}>
              {totalAdherence}%
            </div>
          </div>
        </div>
        <AdherenceTracker percentage={totalAdherence} />
      </div>

      {/* Active Medications */}
      <h2 style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>Active Medications</h2>
      <div style={{ display: 'grid', gap: '16px', marginBottom: '24px' }}>
        {meds.map((med) => (
          <div key={med.id} style={{ position: 'relative' }}>
            <MedicationCard medication={med} />
            <button
              onClick={() => handleTakeDose(med.name)}
              disabled={todayDoses[med.name.toLowerCase()]}
              style={{
                position: 'absolute',
                top: '16px',
                right: '16px',
                padding: '8px 16px',
                backgroundColor: todayDoses[med.name.toLowerCase()] ? '#E8F3F5' : '#2A7A8C',
                color: todayDoses[med.name.toLowerCase()] ? '#2A7A8C' : 'white',
                border: 'none',
                borderRadius: '20px',
                cursor: todayDoses[med.name.toLowerCase()] ? 'default' : 'pointer',
                fontSize: '13px',
                fontWeight: '500'
              }}
            >
              {todayDoses[med.name.toLowerCase()] ? '✓ Taken' : 'Mark Taken'}
            </button>
          </div>
        ))}
      </div>

      {/* Refill Alerts */}
      <div style={{
        backgroundColor: '#FFF3F0',
        borderRadius: '12px',
        padding: '20px',
        marginTop: '24px'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
          <AlertTriangle size={20} color="#ED6A5E" />
          <h3 style={{ margin: 0, color: '#ED6A5E' }}>Refill Alerts</h3>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <strong>Metformin 500mg</strong>
              <p style={{ margin: '4px 0 0', fontSize: '13px', color: '#6C757D' }}>
                Refill by Jan 25, 2024
              </p>
            </div>
            <button style={{
              padding: '8px 16px',
              backgroundColor: '#2A7A8C',
              color: 'white',
              border: 'none',
              borderRadius: '6px',
              cursor: 'pointer'
            }}>Order Refill</button>
          </div>
        </div>
      </div>

      {/* Reminder Settings */}
      <div style={{
        marginTop: '24px',
        padding: '20px',
        backgroundColor: 'white',
        borderRadius: '12px',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
          <Bell size={20} color="#2A7A8C" />
          <h3 style={{ margin: 0 }}>Reminders</h3>
        </div>
        <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
          <label style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <input type="checkbox" defaultChecked /> Morning (8:00 AM)
          </label>
          <label style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <input type="checkbox" defaultChecked /> Evening (8:00 PM)
          </label>
          <label style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <input type="checkbox" /> SMS Alerts
          </label>
        </div>
      </div>
    </div>
  );
};

export default MedicationTracker;