 import React from 'react';
import { Link } from 'react-router-dom';
import { Activity, Heart, Shield, TrendingUp, AlertCircle } from 'lucide-react';
import './LandingPage.css';

const LandingPage = () => {
  const handleFeatureClick = () => {
    alert('Please login first! Use sarah@example.com for demo. 😊');
  };

  return (
    <div className="landing-container">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <div className="logo-section">
            <Activity size={72} className="logo-icon" />
            <h1 className="main-title">
              Health<span>Guard</span> AI
            </h1>
          </div>
          <h2 className="hero-subtitle">
            Your <strong>AI-Powered</strong> Health Guardian
          </h2>
          <p className="hero-desc">
            Track vitals in real-time • Get AI insights • Never miss medications • 
            Live charts & trends • Smart alerts 24/7
          </p>
          
          {/* Stats */}
          <div className="stats-row">
            <div className="stat-item">
              <div className="stat-number">10K+</div>
              <div>Happy Users</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">99.9%</div>
              <div>Uptime</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">24/7</div>
              <div>AI Monitoring</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="cta-buttons">
            <Link to="/login" className="btn-primary large">
              <Heart size={24} />
              Start Free Trial
            </Link>
            <Link to="/login" className="btn-secondary large">
              Demo Login
            </Link>
          </div>

          {/* Demo Users */}
          <div className="demo-users">
            <p>Try Demo: <strong>sarah@example.com</strong></p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="features-section">
        <div className="container">
          <h3 className="section-title">Why Choose HealthGuard AI?</h3>
          <div className="features-grid">
            <div className="feature-card" onClick={handleFeatureClick}>
              <div className="feature-icon-wrapper">
                <Heart className="feature-icon" />
              </div>
              <h4>Vitals Dashboard</h4>
              <p>Real-time BP, heart rate, HbA1c tracking with interactive charts & trends</p>
              <button className="feature-btn">Try Now</button>
            </div>
            <div className="feature-card" onClick={handleFeatureClick}>
              <div className="feature-icon-wrapper">
                <AlertCircle className="feature-icon" />
              </div>
              <h4>Smart Alerts</h4>
              <p>AI detects anomalies & sends instant notifications before issues escalate</p>
              <button className="feature-btn">Try Now</button>
            </div>
            <div className="feature-card" onClick={handleFeatureClick}>
              <div className="feature-icon-wrapper">
                <TrendingUp className="feature-icon" />
              </div>
              <h4>Health Score</h4>
              <p>Daily AI health score + personalized recommendations & insights</p>
              <button className="feature-btn">Try Now</button>
            </div>
            <div className="feature-card" onClick={handleFeatureClick}>
              <div className="feature-icon-wrapper">
                <Shield className="feature-icon" />
              </div>
              <h4>Med Adherence</h4>
              <p>Medication reminders with 95%+ adherence tracking & reports</p>
              <button className="feature-btn">Try Now</button>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="trust-section">
        <div className="container">
          <p>
            <strong>Trusted by 10K+ users</strong> • HIPAA Compliant • AI-Powered • 
            Works offline • Instant sync
          </p>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
