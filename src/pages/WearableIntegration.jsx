import React, { useState } from 'react';
import { Watch, Activity, Heart, Moon, Footprints, Battery, Bluetooth, RefreshCw, Apple, Chrome } from 'lucide-react';
import { wearableData } from '../data/dummyHealthData';

const WearableIntegration = () => {
  const [connectedDevices, setConnectedDevices] = useState([
    { id: 1, name: 'Apple Watch Series 8', type: 'apple', battery: 78, lastSync: '2024-01-16 08:30 AM', connected: true },
    { id: 2, name: 'Fitbit Charge 5', type: 'fitbit', battery: 45, lastSync: '2024-01-15 10:15 PM', connected: false }
  ]);

  const [heartRateData, setHeartRateData] = useState(wearableData.heartRate);
  const [stepsData, setStepsData] = useState(wearableData.steps);
  const [sleepData, setSleepData] = useState(wearableData.sleep);
  
  const [isSyncing, setIsSyncing] = useState(false);
  const [showConnectModal, setShowConnectModal] = useState(false);

  const handleSync = () => {
    setIsSyncing(true);
    // Simulate sync
    setTimeout(() => {
      setIsSyncing(false);
      // Update with new random data
      setHeartRateData({
        average: Math.floor(Math.random() * (80 - 65) + 65),
        resting: Math.floor(Math.random() * (72 - 60) + 60),
        lastSync: new Date().toLocaleString()
      });
    }, 2000);
  };

  const toggleDevice = (id) => {
    setConnectedDevices(devices =>
      devices.map(device =>
        device.id === id ? { ...device, connected: !device.connected } : device
      )
    );
  };

  const weeklySteps = stepsData.weekly || [6542, 7234, 8912, 5432, 7654, 8243, 6842];
  const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
      <h1 style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>Wearable Integration</h1>

      {/* Header Stats */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: '20px',
        marginBottom: '32px'
      }}>
        <div style={{
          backgroundColor: 'white',
          padding: '20px',
          borderRadius: '12px',
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
        }}>
          <Heart size={24} color="#ED6A5E" />
          <div style={{ fontSize: '24px', fontWeight: 'bold', marginTop: '8px' }}>
            {heartRateData.average}
          </div>
          <div style={{ color: '#6C757D', fontSize: '14px' }}>Avg Heart Rate (bpm)</div>
        </div>

        <div style={{
          backgroundColor: 'white',
          padding: '20px',
          borderRadius: '12px',
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
        }}>
          <Footprints size={24} color="#2A7A8C" />
          <div style={{ fontSize: '24px', fontWeight: 'bold', marginTop: '8px' }}>
            {stepsData.today?.toLocaleString() || 6842}
          </div>
          <div style={{ color: '#6C757D', fontSize: '14px' }}>Steps Today</div>
        </div>

        <div style={{
          backgroundColor: 'white',
          padding: '20px',
          borderRadius: '12px',
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
        }}>
          <Moon size={24} color="#4A90E2" />
          <div style={{ fontSize: '24px', fontWeight: 'bold', marginTop: '8px' }}>
            {sleepData.hours || 7.2}h
          </div>
          <div style={{ color: '#6C757D', fontSize: '14px' }}>Sleep Last Night</div>
        </div>

        <div style={{
          backgroundColor: 'white',
          padding: '20px',
          borderRadius: '12px',
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
        }}>
          <Activity size={24} color="#F4A261" />
          <div style={{ fontSize: '24px', fontWeight: 'bold', marginTop: '8px' }}>
            {heartRateData.resting}
          </div>
          <div style={{ color: '#6C757D', fontSize: '14px' }}>Resting Heart Rate</div>
        </div>
      </div>

      {/* Sync Button & Status */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '24px',
        padding: '16px',
        backgroundColor: '#E8F3F5',
        borderRadius: '12px'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <Bluetooth size={20} color="#2A7A8C" />
          <span>Last Sync: {heartRateData.lastSync || '2024-01-16 08:30 AM'}</span>
        </div>
        <button
          onClick={handleSync}
          disabled={isSyncing}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            padding: '10px 20px',
            backgroundColor: isSyncing ? '#E9ECEF' : '#2A7A8C',
            color: isSyncing ? '#6C757D' : 'white',
            border: 'none',
            borderRadius: '6px',
            cursor: isSyncing ? 'not-allowed' : 'pointer'
          }}
        >
          <RefreshCw size={18} className={isSyncing ? 'spin' : ''} />
          {isSyncing ? 'Syncing...' : 'Sync Now'}
        </button>
      </div>

      {/* Connected Devices */}
      <h2 style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>Connected Devices</h2>
      <div style={{ display: 'grid', gap: '16px', marginBottom: '32px' }}>
        {connectedDevices.map((device) => (
          <div key={device.id} style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '20px',
            backgroundColor: 'white',
            borderRadius: '12px',
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <div style={{
                width: '48px',
                height: '48px',
                borderRadius: '12px',
                backgroundColor: device.type === 'apple' ? '#000000' : '#00B0B9',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white'
              }}>
                {device.type === 'apple' ? <Apple size={28} /> : <Watch size={28} />}
              </div>
              <div>
                <h4 style={{ margin: 0 }}>{device.name}</h4>
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginTop: '8px' }}>
                  <span style={{ fontSize: '13px', color: '#6C757D', display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <Battery size={14} color={device.battery > 20 ? '#2E7D32' : '#ED6A5E'} />
                    {device.battery}%
                  </span>
                  <span style={{ fontSize: '13px', color: '#6C757D' }}>
                    Last: {device.lastSync}
                  </span>
                </div>
              </div>
            </div>
            <button
              onClick={() => toggleDevice(device.id)}
              style={{
                padding: '8px 16px',
                backgroundColor: device.connected ? '#E8F3F5' : '#2A7A8C',
                color: device.connected ? '#2A7A8C' : 'white',
                border: device.connected ? '1px solid #2A7A8C' : 'none',
                borderRadius: '20px',
                cursor: 'pointer'
              }}
            >
              {device.connected ? 'Connected' : 'Connect'}
            </button>
          </div>
        ))}
      </div>

      {/* Connect New Device Button */}
      <button
        onClick={() => setShowConnectModal(true)}
        style={{
          width: '100%',
          padding: '16px',
          backgroundColor: 'white',
          border: '2px dashed #2A7A8C',
          borderRadius: '12px',
          color: '#2A7A8C',
          fontSize: '16px',
          fontWeight: '500',
          cursor: 'pointer',
          marginBottom: '32px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '8px'
        }}
      >
        <Watch size={20} />
        Connect New Device
      </button>

      {/* Weekly Activity Chart */}
      <div style={{
        backgroundColor: 'white',
        borderRadius: '12px',
        padding: '24px',
        marginBottom: '24px',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
      }}>
        <h3 style={{ marginBottom: '20px' }}>Weekly Steps</h3>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', height: '200px' }}>
          {weeklySteps.map((steps, index) => (
            <div key={index} style={{ textAlign: 'center', width: '12%' }}>
              <div style={{
                height: `${(steps / 10000) * 180}px`,
                backgroundColor: '#2A7A8C',
                borderRadius: '8px 8px 0 0',
                transition: 'height 0.3s',
                minHeight: '4px'
              }} />
              <div style={{ marginTop: '8px', fontSize: '12px', color: '#6C757D' }}>{days[index]}</div>
              <div style={{ fontSize: '11px', fontWeight: 'bold' }}>{steps}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Health Metrics from Wearables */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gap: '24px',
        marginBottom: '32px'
      }}>
        {/* Heart Rate Zones */}
        <div style={{
          backgroundColor: 'white',
          borderRadius: '12px',
          padding: '20px',
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
        }}>
          <h3 style={{ marginBottom: '16px' }}>Heart Rate Zones</h3>
          <div style={{ marginBottom: '12px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
              <span style={{ fontSize: '14px' }}>Resting Zone (50-60%)</span>
              <span style={{ fontSize: '14px', fontWeight: 'bold' }}>2h 15m</span>
            </div>
            <div style={{ height: '8px', backgroundColor: '#E9ECEF', borderRadius: '4px' }}>
              <div style={{ width: '30%', height: '100%', backgroundColor: '#4A90E2', borderRadius: '4px' }} />
            </div>
          </div>
          <div style={{ marginBottom: '12px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
              <span style={{ fontSize: '14px' }}>Fat Burn Zone (60-70%)</span>
              <span style={{ fontSize: '14px', fontWeight: 'bold' }}>3h 45m</span>
            </div>
            <div style={{ height: '8px', backgroundColor: '#E9ECEF', borderRadius: '4px' }}>
              <div style={{ width: '45%', height: '100%', backgroundColor: '#F4A261', borderRadius: '4px' }} />
            </div>
          </div>
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
              <span style={{ fontSize: '14px' }}>Cardio Zone (70-80%)</span>
              <span style={{ fontSize: '14px', fontWeight: 'bold' }}>1h 20m</span>
            </div>
            <div style={{ height: '8px', backgroundColor: '#E9ECEF', borderRadius: '4px' }}>
              <div style={{ width: '20%', height: '100%', backgroundColor: '#ED6A5E', borderRadius: '4px' }} />
            </div>
          </div>
        </div>

        {/* Sleep Quality */}
        <div style={{
          backgroundColor: 'white',
          borderRadius: '12px',
          padding: '20px',
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
        }}>
          <h3 style={{ marginBottom: '16px' }}>Sleep Analysis</h3>
          <div style={{ textAlign: 'center', marginBottom: '20px' }}>
            <div style={{ fontSize: '36px', fontWeight: 'bold', color: '#2A7A8C' }}>{sleepData.hours || 7.2}h</div>
            <div style={{ color: '#6C757D' }}>Total Sleep</div>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-around' }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '20px', fontWeight: 'bold', color: '#4A90E2' }}>4h 20m</div>
              <div style={{ fontSize: '12px', color: '#6C757D' }}>Deep Sleep</div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '20px', fontWeight: 'bold', color: '#F4A261' }}>2h 30m</div>
              <div style={{ fontSize: '12px', color: '#6C757D' }}>Light Sleep</div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '20px', fontWeight: 'bold', color: '#ED6A5E' }}>0h 30m</div>
              <div style={{ fontSize: '12px', color: '#6C757D' }}>REM</div>
            </div>
          </div>
        </div>
      </div>

      {/* Activity Goals */}
      <div style={{
        backgroundColor: 'white',
        borderRadius: '12px',
        padding: '20px',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
      }}>
        <h3 style={{ marginBottom: '16px' }}>Today's Activity Goals</h3>
        <div style={{ marginBottom: '16px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
            <span>Steps: {stepsData.today?.toLocaleString() || 6842} / 10,000</span>
            <span>{Math.round(((stepsData.today || 6842) / 10000) * 100)}%</span>
          </div>
          <div style={{ height: '10px', backgroundColor: '#E9ECEF', borderRadius: '5px' }}>
            <div style={{
              width: `${((stepsData.today || 6842) / 10000) * 100}%`,
              height: '100%',
              backgroundColor: '#2A7A8C',
              borderRadius: '5px'
            }} />
          </div>
        </div>
        
        <div style={{ marginBottom: '16px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
            <span>Active Minutes: 32 / 60</span>
            <span>53%</span>
          </div>
          <div style={{ height: '10px', backgroundColor: '#E9ECEF', borderRadius: '5px' }}>
            <div style={{
              width: '53%',
              height: '100%',
              backgroundColor: '#F4A261',
              borderRadius: '5px'
            }} />
          </div>
        </div>

        <div>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
            <span>Calories: 1,850 / 2,200</span>
            <span>84%</span>
          </div>
          <div style={{ height: '10px', backgroundColor: '#E9ECEF', borderRadius: '5px' }}>
            <div style={{
              width: '84%',
              height: '100%',
              backgroundColor: '#ED6A5E',
              borderRadius: '5px'
            }} />
          </div>
        </div>
      </div>

      {/* Connect Modal */}
      {showConnectModal && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0,0,0,0.5)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 1000
        }}>
          <div style={{
            backgroundColor: 'white',
            borderRadius: '16px',
            padding: '32px',
            width: '90%',
            maxWidth: '400px'
          }}>
            <h2 style={{ marginBottom: '20px' }}>Connect Device</h2>
            
            <div style={{ marginBottom: '20px' }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '16px',
                padding: '16px',
                border: '1px solid #E9ECEF',
                borderRadius: '8px',
                marginBottom: '12px',
                cursor: 'pointer'
              }}
              onClick={() => {
                alert('Demo: Apple Watch connected!');
                setShowConnectModal(false);
              }}>
                <Apple size={32} />
                <div>
                  <h4 style={{ margin: 0 }}>Apple Watch</h4>
                  <p style={{ margin: '4px 0 0', fontSize: '13px', color: '#6C757D' }}>Series 3 or later</p>
                </div>
              </div>

              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '16px',
                padding: '16px',
                border: '1px solid #E9ECEF',
                borderRadius: '8px',
                cursor: 'pointer'
              }}
              onClick={() => {
                alert('Demo: Fitbit connected!');
                setShowConnectModal(false);
              }}>
                <Watch size={32} />
                <div>
                  <h4 style={{ margin: 0 }}>Fitbit</h4>
                  <p style={{ margin: '4px 0 0', fontSize: '13px', color: '#6C757D' }}>Charge, Versa, Sense</p>
                </div>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '12px' }}>
              <button
                onClick={() => setShowConnectModal(false)}
                style={{
                  flex: 1,
                  padding: '12px',
                  backgroundColor: '#E9ECEF',
                  border: 'none',
                  borderRadius: '6px',
                  cursor: 'pointer'
                }}
              >
                Cancel
              </button>
              <button
                style={{
                  flex: 1,
                  padding: '12px',
                  backgroundColor: '#2A7A8C',
                  color: 'white',
                  border: 'none',
                  borderRadius: '6px',
                  cursor: 'pointer'
                }}
              >
                Connect
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Add spin animation */}
      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .spin {
          animation: spin 1s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default WearableIntegration;