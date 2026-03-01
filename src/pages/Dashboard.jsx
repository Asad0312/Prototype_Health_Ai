import React from 'react';
import { useAuth } from '../context/AuthContext';
import HealthScoreCard from '../components/dashboard/HealthScoreCard';
import HealthMetricCard from '../components/dashboard/HealthMetricCard';
import AlertBox from '../components/dashboard/AlertBox';
import TrendChart from '../components/dashboard/TrendChart';
import { Heart, Droplets, Activity, TrendingUp } from 'lucide-react';
import './Dashboard.css';  // ← CSS Import

const Dashboard = () => {
  const { user, addHealthMetric } = useAuth();

  if (!user) {
    return (
      <div className="loading-container">
        <div>Loading your health data...</div>
      </div>
    );
  }

  // Default data for new users
  const healthMetrics = user.healthMetrics || {
    bloodPressure: [{ date: '2024-01', systolic: 120, diastolic: 80 }],
    hba1c: [{ date: '2024-01', value: 5.5 }],
    weight: [{ date: '2024-01', value: 150 }],
    heartRate: [{ date: '2024-01', value: 72 }]
  };

  const alerts = user.alerts || [];
  const medications = user.medications || [];

  const latestBP = healthMetrics.bloodPressure[healthMetrics.bloodPressure.length - 1] || 
                   { systolic: 120, diastolic: 80 };
  const latestHbA1c = healthMetrics.hba1c[healthMetrics.hba1c.length - 1] || { value: 5.5 };

  return (
    <div className="dashboard-container">
      {/* Header Section */}
      <div className="dashboard-header">
        <div>
          <h1>Welcome back, {user.name}! 👋</h1>
          <p className="member-since">
            Member since {new Date(user.joinDate).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}
          </p>
        </div>
        <button
          onClick={() => {
            addHealthMetric('bloodPressure', {
              systolic: Math.floor(Math.random() * (140 - 110) + 110),
              diastolic: Math.floor(Math.random() * (90 - 70) + 70)
            });
          }}
          className="add-data-btn"
        >
          + Add Test Reading
        </button>
      </div>

      {/* Alerts Section */}
      {alerts.length > 0 && (
        <div className="alerts-section">
          <h2>Active Alerts</h2>
          <div className="alerts-list">
            {alerts.map(alert => (
              <AlertBox key={alert.id} alert={alert} />
            ))}
          </div>
        </div>
      )}

      {/* Health Score */}
      <div className="health-score-section">
        <HealthScoreCard score={user.healthScore || 100} />
      </div>

      {/* Metrics Grid */}
      <div className="metrics-grid">
        <HealthMetricCard
          title="Blood Pressure"
          value={`${latestBP.systolic}/${latestBP.diastolic}`}
          unit="mmHg"
          icon={<Heart size={24} />}
          color="#ED6A5E"
          trend={+5.2}
        />
        
        <HealthMetricCard
          title="HbA1c"
          value={latestHbA1c.value}
          unit="%"
          icon={<Droplets size={24} />}
          color="#F4A261"
          trend={+9.8}
        />
        
        <HealthMetricCard
          title="Heart Rate"
          value={healthMetrics.heartRate[healthMetrics.heartRate.length - 1]?.value || 72}
          unit="bpm"
          icon={<Activity size={24} />}
          color="#4A90E2"
          trend={-2}
        />
        
        <HealthMetricCard
          title="Weight"
          value={healthMetrics.weight[healthMetrics.weight.length - 1]?.value || 150}
          unit="lbs"
          icon={<TrendingUp size={24} />}
          color="#2E7D32"
          trend={-2.4}
        />
      </div>

      {/* Charts Section */}
      <div className="charts-grid">
        <div className="chart-card">
          <h3>Blood Pressure Trend</h3>
          <TrendChart 
            data={healthMetrics.bloodPressure}
            dataKey="systolic"
            color="#ED6A5E"
          />
        </div>
        
        <div className="chart-card">
          <h3>Weight Trend</h3>
          <TrendChart 
            data={healthMetrics.weight}
            dataKey="value"
            color="#2E7D32"
          />
        </div>
      </div>

      {/* Medications Section */}
      {medications.length > 0 && (
        <div className="medications-section">
          <h2>Current Medications</h2>
          <div className="medications-list">
            {medications.map(med => (
              <div key={med.id} className="medication-item">
                <div className="medication-info">
                  <h4>{med.name} {med.dosage}</h4>
                  <p>{med.frequency} • Next: {med.time}</p>
                </div>
                <span className="medication-adherence">
                  ✓ {med.adherence}% adherence
                </span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Quick Stats Footer */}
      <div style={{ 
        marginTop: '32px', 
        padding: '16px',
        background: '#E8F3F5',
        borderRadius: '8px',
        textAlign: 'center',
        color: '#2A7A8C',
        fontSize: '14px'
      }}>
        <p>HealthGuard AI is actively monitoring your health data. Last updated: Just now</p>
      </div>
    </div>
  );
};

export default Dashboard;