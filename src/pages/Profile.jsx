import React, { useState } from 'react';
import { User, Mail, Phone, Calendar, MapPin, Activity, Bell, Shield, Moon } from 'lucide-react';
import { userProfile } from '../data/dummyHealthData';

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    name: userProfile.name,
    email: userProfile.email,
    age: userProfile.age,
    phone: '+1 (555) 123-4567',
    address: '123 Main St, Boston, MA',
    emergencyContact: 'John Johnson - (555) 987-6543',
    bloodType: 'O+',
    allergies: ['Penicillin', 'Pollen'],
    conditions: userProfile.conditions
  });

  const [settings, setSettings] = useState({
    emailNotifications: true,
    smsAlerts: false,
    shareDataForResearch: true,
    darkMode: false,
    twoFactorAuth: true
  });

  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
      <h1 style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>Profile Settings</h1>

      {/* Profile Header */}
      <div style={{
        backgroundColor: 'white',
        borderRadius: '12px',
        padding: '32px',
        marginBottom: '24px',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
        display: 'flex',
        alignItems: 'center',
        gap: '24px',
        flexWrap: 'wrap'
      }}>
        <div style={{
          width: '100px',
          height: '100px',
          borderRadius: '50%',
          backgroundColor: '#E8F3F5',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <User size={50} color="#2A7A8C" />
        </div>
        
        <div style={{ flex: 1 }}>
          <h2 style={{ margin: '0 0 8px 0' }}>{profile.name}</h2>
          <p style={{ margin: '0 0 4px 0', color: '#6C757D' }}>{profile.email}</p>
          <p style={{ margin: 0, color: '#6C757D' }}>Member since January 2024</p>
        </div>
        
        <button
          onClick={() => setIsEditing(!isEditing)}
          style={{
            padding: '10px 20px',
            backgroundColor: isEditing ? '#E8F3F5' : '#2A7A8C',
            color: isEditing ? '#2A7A8C' : 'white',
            border: isEditing ? '1px solid #2A7A8C' : 'none',
            borderRadius: '6px',
            cursor: 'pointer'
          }}
        >
          {isEditing ? 'Cancel' : 'Edit Profile'}
        </button>
      </div>

      {/* Two Column Layout */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
        {/* Personal Information */}
        <div style={{
          backgroundColor: 'white',
          borderRadius: '12px',
          padding: '24px',
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
        }}>
          <h3 style={{ marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <User size={20} color="#2A7A8C" /> Personal Information
          </h3>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div>
              <label style={{ fontSize: '13px', color: '#6C757D', display: 'block', marginBottom: '4px' }}>
                Full Name
              </label>
              {isEditing ? (
                <input
                  type="text"
                  value={profile.name}
                  onChange={(e) => setProfile({...profile, name: e.target.value})}
                  style={{
                    width: '100%',
                    padding: '8px',
                    border: '1px solid #E9ECEF',
                    borderRadius: '4px'
                  }}
                />
              ) : (
                <p style={{ margin: 0 }}>{profile.name}</p>
              )}
            </div>

            <div>
              <label style={{ fontSize: '13px', color: '#6C757D', display: 'block', marginBottom: '4px' }}>
                Email
              </label>
              {isEditing ? (
                <input
                  type="email"
                  value={profile.email}
                  onChange={(e) => setProfile({...profile, email: e.target.value})}
                  style={{
                    width: '100%',
                    padding: '8px',
                    border: '1px solid #E9ECEF',
                    borderRadius: '4px'
                  }}
                />
              ) : (
                <p style={{ margin: 0 }}>{profile.email}</p>
              )}
            </div>

            <div>
              <label style={{ fontSize: '13px', color: '#6C757D', display: 'block', marginBottom: '4px' }}>
                Phone
              </label>
              {isEditing ? (
                <input
                  type="tel"
                  value={profile.phone}
                  onChange={(e) => setProfile({...profile, phone: e.target.value})}
                  style={{
                    width: '100%',
                    padding: '8px',
                    border: '1px solid #E9ECEF',
                    borderRadius: '4px'
                  }}
                />
              ) : (
                <p style={{ margin: 0 }}>{profile.phone}</p>
              )}
            </div>

            <div>
              <label style={{ fontSize: '13px', color: '#6C757D', display: 'block', marginBottom: '4px' }}>
                Address
              </label>
              {isEditing ? (
                <input
                  type="text"
                  value={profile.address}
                  onChange={(e) => setProfile({...profile, address: e.target.value})}
                  style={{
                    width: '100%',
                    padding: '8px',
                    border: '1px solid #E9ECEF',
                    borderRadius: '4px'
                  }}
                />
              ) : (
                <p style={{ margin: 0 }}>{profile.address}</p>
              )}
            </div>

            <div>
              <label style={{ fontSize: '13px', color: '#6C757D', display: 'block', marginBottom: '4px' }}>
                Emergency Contact
              </label>
              {isEditing ? (
                <input
                  type="text"
                  value={profile.emergencyContact}
                  onChange={(e) => setProfile({...profile, emergencyContact: e.target.value})}
                  style={{
                    width: '100%',
                    padding: '8px',
                    border: '1px solid #E9ECEF',
                    borderRadius: '4px'
                  }}
                />
              ) : (
                <p style={{ margin: 0 }}>{profile.emergencyContact}</p>
              )}
            </div>
          </div>
        </div>

        {/* Medical Information */}
        <div style={{
          backgroundColor: 'white',
          borderRadius: '12px',
          padding: '24px',
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
        }}>
          <h3 style={{ marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Activity size={20} color="#2A7A8C" /> Medical Information
          </h3>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div>
              <label style={{ fontSize: '13px', color: '#6C757D', display: 'block', marginBottom: '4px' }}>
                Age
              </label>
              <p style={{ margin: 0 }}>{profile.age} years</p>
            </div>

            <div>
              <label style={{ fontSize: '13px', color: '#6C757D', display: 'block', marginBottom: '4px' }}>
                Blood Type
              </label>
              <p style={{ margin: 0 }}>{profile.bloodType}</p>
            </div>

            <div>
              <label style={{ fontSize: '13px', color: '#6C757D', display: 'block', marginBottom: '4px' }}>
                Known Conditions
              </label>
              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                {profile.conditions.map((condition, index) => (
                  <span key={index} style={{
                    padding: '4px 12px',
                    backgroundColor: '#E8F3F5',
                    color: '#2A7A8C',
                    borderRadius: '20px',
                    fontSize: '13px'
                  }}>
                    {condition}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <label style={{ fontSize: '13px', color: '#6C757D', display: 'block', marginBottom: '4px' }}>
                Allergies
              </label>
              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                {profile.allergies.map((allergy, index) => (
                  <span key={index} style={{
                    padding: '4px 12px',
                    backgroundColor: '#FFF3F0',
                    color: '#ED6A5E',
                    borderRadius: '20px',
                    fontSize: '13px'
                  }}>
                    {allergy}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Notification Settings */}
        <div style={{
          backgroundColor: 'white',
          borderRadius: '12px',
          padding: '24px',
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
        }}>
          <h3 style={{ marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Bell size={20} color="#2A7A8C" /> Notification Settings
          </h3>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <label style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <input
                type="checkbox"
                checked={settings.emailNotifications}
                onChange={(e) => setSettings({...settings, emailNotifications: e.target.checked})}
              />
              Email Notifications
            </label>
            
            <label style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <input
                type="checkbox"
                checked={settings.smsAlerts}
                onChange={(e) => setSettings({...settings, smsAlerts: e.target.checked})}
              />
              SMS Alerts for Medications
            </label>
            
            <label style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <input
                type="checkbox"
                checked={settings.shareDataForResearch}
                onChange={(e) => setSettings({...settings, shareDataForResearch: e.target.checked})}
              />
              Share Anonymous Data for Research
            </label>
          </div>
        </div>

        {/* Privacy & Security */}
        <div style={{
          backgroundColor: 'white',
          borderRadius: '12px',
          padding: '24px',
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
        }}>
          <h3 style={{ marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Shield size={20} color="#2A7A8C" /> Privacy & Security
          </h3>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span>Two-Factor Authentication</span>
              <label className="switch">
                <input
                  type="checkbox"
                  checked={settings.twoFactorAuth}
                  onChange={(e) => setSettings({...settings, twoFactorAuth: e.target.checked})}
                />
                <span style={{
                  width: '40px',
                  height: '20px',
                  backgroundColor: settings.twoFactorAuth ? '#2A7A8C' : '#E9ECEF',
                  display: 'inline-block',
                  borderRadius: '20px',
                  position: 'relative',
                  cursor: 'pointer'
                }}>
                  <span style={{
                    width: '16px',
                    height: '16px',
                    backgroundColor: 'white',
                    borderRadius: '50%',
                    position: 'absolute',
                    top: '2px',
                    left: settings.twoFactorAuth ? '22px' : '2px',
                    transition: 'left 0.2s'
                  }} />
                </span>
              </label>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span>Dark Mode</span>
              <label className="switch">
                <input
                  type="checkbox"
                  checked={settings.darkMode}
                  onChange={(e) => setSettings({...settings, darkMode: e.target.checked})}
                />
                <span style={{
                  width: '40px',
                  height: '20px',
                  backgroundColor: settings.darkMode ? '#2A7A8C' : '#E9ECEF',
                  display: 'inline-block',
                  borderRadius: '20px',
                  position: 'relative',
                  cursor: 'pointer'
                }}>
                  <span style={{
                    width: '16px',
                    height: '16px',
                    backgroundColor: 'white',
                    borderRadius: '50%',
                    position: 'absolute',
                    top: '2px',
                    left: settings.darkMode ? '22px' : '2px',
                    transition: 'left 0.2s'
                  }} />
                </span>
              </label>
            </div>

            <button style={{
              padding: '10px',
              backgroundColor: 'transparent',
              border: '1px solid #2A7A8C',
              color: '#2A7A8C',
              borderRadius: '6px',
              cursor: 'pointer',
              marginTop: '8px'
            }}>
              Change Password
            </button>
            
            <button style={{
              padding: '10px',
              backgroundColor: 'transparent',
              border: '1px solid #ED6A5E',
              color: '#ED6A5E',
              borderRadius: '6px',
              cursor: 'pointer'
            }}>
              Download My Data (GDPR)
            </button>
          </div>
        </div>
      </div>

      {/* Save Button when Editing */}
      {isEditing && (
        <div style={{
          position: 'sticky',
          bottom: '24px',
          marginTop: '24px',
          textAlign: 'center'
        }}>
          <button
            onClick={() => setIsEditing(false)}
            style={{
              padding: '16px 48px',
              backgroundColor: '#2E7D32',
              color: 'white',
              border: 'none',
              borderRadius: '40px',
              cursor: 'pointer',
              fontSize: '16px',
              fontWeight: 'bold',
              boxShadow: '0 4px 12px rgba(46, 125, 50, 0.3)'
            }}
          >
            Save Changes
          </button>
        </div>
      )}
    </div>
  );
};

export default Profile;