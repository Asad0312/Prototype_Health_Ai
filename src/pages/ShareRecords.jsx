import React, { useState } from 'react';
import { Share2, User, Mail, Clock, CheckCircle, Plus } from 'lucide-react';

const ShareRecords = () => {
  const [sharedWith, setSharedWith] = useState([
    { id: 1, name: 'Dr. Smith', email: 'dr.smith@hospital.com', access: 'Full', expiry: '2024-02-15' },
    { id: 2, name: 'Dr. Johnson', email: 'dr.johnson@clinic.com', access: 'Lab Results Only', expiry: '2024-01-30' }
  ]);

  const [showAddForm, setShowAddForm] = useState(false);
  const [newShare, setNewShare] = useState({
    name: '',
    email: '',
    access: 'Full',
    expiry: ''
  });

  const handleShare = () => {
    setSharedWith([...sharedWith, { id: Date.now(), ...newShare }]);
    setShowAddForm(false);
    setNewShare({ name: '', email: '', access: 'Full', expiry: '' });
  };

  const handleRevoke = (id) => {
    setSharedWith(sharedWith.filter(item => item.id !== id));
  };

  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
      <h1 style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>Share Records</h1>

      {/* Access Stats */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '20px',
        marginBottom: '32px'
      }}>
        <div style={{
          backgroundColor: 'white',
          padding: '20px',
          borderRadius: '12px',
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
        }}>
          <User size={24} color="#2A7A8C" />
          <div style={{ fontSize: '24px', fontWeight: 'bold', marginTop: '8px' }}>
            {sharedWith.length}
          </div>
          <div style={{ color: '#6C757D', fontSize: '14px' }} Active Providers />
        </div>
        
        <div style={{
          backgroundColor: 'white',
          padding: '20px',
          borderRadius: '12px',
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
        }}>
          <Clock size={24} color="#F4A261" />
          <div style={{ fontSize: '24px', fontWeight: 'bold', marginTop: '8px' }}>2</div>
          <div style={{ color: '#6C757D', fontSize: '14px' }}>Pending Access</div>
        </div>
        
        <div style={{
          backgroundColor: 'white',
          padding: '20px',
          borderRadius: '12px',
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
        }}>
          <Share2 size={24} color="#2E7D32" />
          <div style={{ fontSize: '24px', fontWeight: 'bold', marginTop: '8px' }}>15</div>
          <div style={{ color: '#6C757D', fontSize: '14px' }}>Total Shares</div>
        </div>
      </div>

      {/* Add New Share Button */}
      <button
        onClick={() => setShowAddForm(!showAddForm)}
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          padding: '12px 20px',
          backgroundColor: showAddForm ? '#E8F3F5' : '#2A7A8C',
          color: showAddForm ? '#2A7A8C' : 'white',
          border: showAddForm ? '1px solid #2A7A8C' : 'none',
          borderRadius: '8px',
          cursor: 'pointer',
          marginBottom: '24px',
          fontWeight: '500'
        }}
      >
        <Plus size={20} />
        {showAddForm ? 'Cancel' : 'Share with New Provider'}
      </button>

      {/* Add Share Form */}
      {showAddForm && (
        <div style={{
          backgroundColor: 'white',
          padding: '24px',
          borderRadius: '12px',
          marginBottom: '32px',
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
        }}>
          <h3 style={{ marginBottom: '20px' }}>Share with Healthcare Provider</h3>
          
          <div style={{ marginBottom: '16px' }}>
            <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500' }}>
              Provider Name
            </label>
            <input
              type="text"
              value={newShare.name}
              onChange={(e) => setNewShare({...newShare, name: e.target.value})}
              style={{
                width: '100%',
                padding: '10px',
                border: '1px solid #E9ECEF',
                borderRadius: '6px'
              }}
              placeholder="Dr. Name"
            />
          </div>

          <div style={{ marginBottom: '16px' }}>
            <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500' }}>
              Email
            </label>
            <input
              type="email"
              value={newShare.email}
              onChange={(e) => setNewShare({...newShare, email: e.target.value})}
              style={{
                width: '100%',
                padding: '10px',
                border: '1px solid #E9ECEF',
                borderRadius: '6px'
              }}
              placeholder="doctor@hospital.com"
            />
          </div>

          <div style={{ marginBottom: '16px' }}>
            <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500' }}>
              Access Level
            </label>
            <select
              value={newShare.access}
              onChange={(e) => setNewShare({...newShare, access: e.target.value})}
              style={{
                width: '100%',
                padding: '10px',
                border: '1px solid #E9ECEF',
                borderRadius: '6px'
              }}
            >
              <option value="Full">Full Access</option>
              <option value="Lab Results Only">Lab Results Only</option>
              <option value="Medications Only">Medications Only</option>
              <option value="View Only">View Only</option>
            </select>
          </div>

          <div style={{ marginBottom: '20px' }}>
            <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500' }}>
              Access Expiry
            </label>
            <input
              type="date"
              value={newShare.expiry}
              onChange={(e) => setNewShare({...newShare, expiry: e.target.value})}
              style={{
                width: '100%',
                padding: '10px',
                border: '1px solid #E9ECEF',
                borderRadius: '6px'
              }}
            />
          </div>

          <button
            onClick={handleShare}
            style={{
              padding: '12px 24px',
              backgroundColor: '#2A7A8C',
              color: 'white',
              border: 'none',
              borderRadius: '6px',
              cursor: 'pointer',
              width: '100%',
              fontSize: '16px'
            }}
          >
            Grant Access
          </button>
        </div>
      )}

      {/* Shared With List */}
      <h2 style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>Currently Shared With</h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        {sharedWith.map((share) => (
          <div key={share.id} style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '16px',
            backgroundColor: 'white',
            borderRadius: '12px',
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <div style={{
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                backgroundColor: '#E8F3F5',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#2A7A8C'
              }}>
                <User size={20} />
              </div>
              <div>
                <h4 style={{ margin: 0 }}>{share.name}</h4>
                <p style={{ margin: '4px 0 0', fontSize: '13px', color: '#6C757D' }}>
                  {share.email} • {share.access} • Expires: {share.expiry}
                </p>
              </div>
            </div>
            <button
              onClick={() => handleRevoke(share.id)}
              style={{
                padding: '6px 12px',
                backgroundColor: '#FFF3F0',
                color: '#ED6A5E',
                border: '1px solid #ED6A5E',
                borderRadius: '6px',
                cursor: 'pointer',
                fontSize: '12px'
              }}
            >
              Revoke
            </button>
          </div>
        ))}
      </div>

      {/* Access Log */}
      <div style={{
        marginTop: '32px',
        padding: '20px',
        backgroundColor: '#F8F9FA',
        borderRadius: '12px'
      }}>
        <h3 style={{ marginBottom: '16px' }}>Recent Access Log</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <div style={{ fontSize: '14px', color: '#6C757D' }}>
            <CheckCircle size={14} color="#2E7D32" style={{ display: 'inline', marginRight: '8px' }} />
            Dr. Smith accessed your records today at 10:30 AM
          </div>
          <div style={{ fontSize: '14px', color: '#6C757D' }}>
            <CheckCircle size={14} color="#2E7D32" style={{ display: 'inline', marginRight: '8px' }} />
            Dr. Johnson viewed lab results yesterday
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShareRecords;