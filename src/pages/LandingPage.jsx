import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Activity, 
  Shield, 
  Heart, 
  Clock, 
  ArrowRight, 
  CheckCircle,
  Smartphone,
  Cloud,
  Brain,
  Users,
  Star,
  ChevronRight
} from 'lucide-react';
import './LandingPage.css';

const LandingPage = () => {
  return (
    <div className="landing-page">
      {/* Navbar */}
      <nav className="landing-nav">
        <div className="container">
          <div className="nav-logo">
            <Activity size={28} color="#2A7A8C" />
            <span>HealthGuard AI</span>
          </div>
          <div className="nav-links">
            <a href="#features">Features</a>
            <a href="#how-it-works">How It Works</a>
            <a href="#testimonials">Testimonials</a>
            <Link to="/login" className="nav-btn">Login</Link>
            <Link to="/register" className="nav-btn-primary">Get Started</Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <div className="hero-badge">
                <span>✨ AI-Powered Health Assistant</span>
              </div>
              <h1>
                Your Personal <span className="highlight">Health Guardian</span>
                <br />
                Always Watching, Always Caring
              </h1>
              <p>
                HealthGuard AI transforms your medical records into actionable insights.
                Get AI-powered health predictions, medication reminders, and real-time alerts.
              </p>
              <div className="hero-buttons">
                <Link to="/register" className="btn-primary">
                  Start Free Trial <ArrowRight size={18} />
                </Link>
                <Link to="/login" className="btn-outline">
                  Sign In
                </Link>
              </div>
              <div className="hero-stats">
                <div className="stat">
                  <span className="stat-number">10k+</span>
                  <span className="stat-label">Active Users</span>
                </div>
                <div className="stat">
                  <span className="stat-number">98%</span>
                  <span className="stat-label">Satisfaction</span>
                </div>
                <div className="stat">
                  <span className="stat-number">24/7</span>
                  <span className="stat-label">AI Support</span>
                </div>
              </div>
            </div>
            <div className="hero-image">
              <div className="dashboard-preview">
                <img src="/dashboard-preview.png" alt="Dashboard Preview" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="features">
        <div className="container">
          <div className="section-header">
            <h2>Why Choose HealthGuard AI?</h2>
            <p>Everything you need to manage your health intelligently</p>
          </div>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon"><Brain size={32} color="#2A7A8C" /></div>
              <h3>AI-Powered Insights</h3>
              <p>Get smart predictions about your health trends and potential risks before they become serious.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon"><Heart size={32} color="#2A7A8C" /></div>
              <h3>Health Score</h3>
              <p>Your overall health at a glance with our proprietary HealthGuard Score (0-100).</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon"><Shield size={32} color="#2A7A8C" /></div>
              <h3>Secure & Private</h3>
              <p>End-to-end encryption. Your data belongs to you. HIPAA & GDPR compliant.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon"><Smartphone size={32} color="#2A7A8C" /></div>
              <h3>Wearable Integration</h3>
              <p>Connect Apple Watch, Fitbit, and more. Real-time health monitoring.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon"><Clock size={32} color="#2A7A8C" /></div>
              <h3>Medication Reminders</h3>
              <p>Never miss a dose. Smart reminders and adherence tracking.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon"><Cloud size={32} color="#2A7A8C" /></div>
              <h3>Share with Doctors</h3>
              <p>Securely share your health records with any healthcare provider.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="how-it-works">
        <div className="container">
          <div className="section-header">
            <h2>How It Works</h2>
            <p>Simple steps to better health management</p>
          </div>
          <div className="steps">
            <div className="step">
              <div className="step-number">1</div>
              <div className="step-icon">📄</div>
              <h3>Upload Your Records</h3>
              <p>Upload medical reports, lab results, and prescriptions. Our AI extracts all data.</p>
            </div>
            <div className="step-arrow">→</div>
            <div className="step">
              <div className="step-number">2</div>
              <div className="step-icon">🤖</div>
              <h3>AI Analyzes</h3>
              <p>Machine learning models analyze trends and identify potential risks.</p>
            </div>
            <div className="step-arrow">→</div>
            <div className="step">
              <div className="step-number">3</div>
              <div className="step-icon">📊</div>
              <h3>Get Insights</h3>
              <p>Receive personalized health insights, alerts, and actionable recommendations.</p>
            </div>
            <div className="step-arrow">→</div>
            <div className="step">
              <div className="step-number">4</div>
              <div className="step-icon">👨‍⚕️</div>
              <h3>Share with Doctor</h3>
              <p>Share your complete health history with your healthcare provider.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-card">
              <span className="stat-number">50k+</span>
              <span className="stat-label">Medical Reports Processed</span>
            </div>
            <div className="stat-card">
              <span className="stat-number">95%</span>
              <span className="stat-label">Medication Adherence Rate</span>
            </div>
            <div className="stat-card">
              <span className="stat-number">24/7</span>
              <span className="stat-label">AI Health Monitoring</span>
            </div>
            <div className="stat-card">
              <span className="stat-number">100+</span>
              <span className="stat-label">Connected Doctors</span>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="testimonials">
        <div className="container">
          <div className="section-header">
            <h2>What Our Users Say</h2>
            <p>Real stories from real people</p>
          </div>
          <div className="testimonials-grid">
            <div className="testimonial-card">
              <div className="stars">★★★★★</div>
              <p>"HealthGuard AI saved my life! It detected a dangerous medication interaction that my doctor missed. I'm forever grateful."</p>
              <div className="user">
                <div className="user-avatar">S</div>
                <div className="user-info">
                  <h4>Sarah Johnson</h4>
                  <span>Pre-diabetic patient</span>
                </div>
              </div>
            </div>
            <div className="testimonial-card">
              <div className="stars">★★★★★</div>
              <p>"Finally, all my health data in one place! The AI insights are incredibly accurate. Best health app I've ever used."</p>
              <div className="user">
                <div className="user-avatar">M</div>
                <div className="user-info">
                  <h4>Michael Chen</h4>
                  <span>Hypertension patient</span>
                </div>
              </div>
            </div>
            <div className="testimonial-card">
              <div className="stars">★★★★★</div>
              <p>"As a cardiologist, this tool helps me see my patients' complete history. It's a game-changer for healthcare."</p>
              <div className="user">
                <div className="user-avatar">D</div>
                <div className="user-info">
                  <h4>Dr. Smith</h4>
                  <span>Cardiologist</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="pricing">
        <div className="container">
          <div className="section-header">
            <h2>Simple, Transparent Pricing</h2>
            <p>Choose the plan that works for you</p>
          </div>
          <div className="pricing-grid">
            <div className="pricing-card">
              <div className="pricing-badge">Free</div>
              <h3>Basic</h3>
              <div className="price">₹0<span>/month</span></div>
              <ul>
                <li><CheckCircle size={16} /> Up to 10 reports</li>
                <li><CheckCircle size={16} /> Basic health score</li>
                <li><CheckCircle size={16} /> Medication reminders</li>
                <li><CheckCircle size={16} /> Email support</li>
              </ul>
              <Link to="/register" className="btn-outline w-100">Get Started</Link>
            </div>
            <div className="pricing-card popular">
              <div className="popular-badge">Most Popular</div>
              <h3>Premium</h3>
              <div className="price">₹199<span>/month</span></div>
              <ul>
                <li><CheckCircle size={16} /> Unlimited reports</li>
                <li><CheckCircle size={16} /> Advanced AI insights</li>
                <li><CheckCircle size={16} /> Wearable integration</li>
                <li><CheckCircle size={16} /> Share with doctors</li>
                <li><CheckCircle size={16} /> Priority support</li>
              </ul>
              <Link to="/register" className="btn-primary w-100">Start Free Trial</Link>
            </div>
            <div className="pricing-card">
              <div className="pricing-badge">Family</div>
              <h3>Family</h3>
              <div className="price">₹499<span>/month</span></div>
              <ul>
                <li><CheckCircle size={16} /> Up to 5 family members</li>
                <li><CheckCircle size={16} /> All Premium features</li>
                <li><CheckCircle size={16} /> Family dashboard</li>
                <li><CheckCircle size={16} /> 24/7 phone support</li>
                <li><CheckCircle size={16} /> Emergency alerts</li>
              </ul>
              <Link to="/register" className="btn-outline w-100">Get Started</Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Take Control of Your Health?</h2>
            <p>Join thousands of users who are already using HealthGuard AI</p>
            <Link to="/register" className="btn-large">
              Start Your Free Trial <ChevronRight size={20} />
            </Link>
            <p className="cta-note">No credit card required. Free for 14 days.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="landing-footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-logo">
              <Activity size={24} color="#2A7A8C" />
              <span>HealthGuard AI</span>
              <p>Your personal AI health companion.</p>
            </div>
            <div className="footer-links">
              <div className="footer-column">
                <h4>Product</h4>
                <a href="#features">Features</a>
                <a href="#pricing">Pricing</a>
                <a href="#testimonials">Testimonials</a>
              </div>
              <div className="footer-column">
                <h4>Company</h4>
                <a href="#">About Us</a>
                <a href="#">Blog</a>
                <a href="#">Careers</a>
              </div>
              <div className="footer-column">
                <h4>Support</h4>
                <a href="#">Help Center</a>
                <a href="#">Privacy Policy</a>
                <a href="#">Terms of Service</a>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p>© 2024 HealthGuard AI. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;