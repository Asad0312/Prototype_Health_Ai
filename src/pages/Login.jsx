import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { authService } from '../services/authService.js';
import { Activity } from 'lucide-react';

const Login = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // First try backend login
    try {
      const response = await authService.login(email, password);
      if (response.user) {
        localStorage.setItem('healthguard_user', JSON.stringify(response.user));
        navigate('/dashboard');
        return;
      }
    } catch (err) {
      console.log('Backend login failed, using mock');
    }
    
    // Fallback to mock login
    const user = login(email, password);
    if (user) {
      localStorage.setItem('healthguard_user', JSON.stringify(user));
      navigate('/dashboard');
    } else {
      setError('Invalid credentials. Demo: sarah@example.com / any password');
    }
  };

  // Demo login
  const demoLogin = (demoEmail) => {
    setEmail(demoEmail);
    setPassword('123');
    setTimeout(() => {
      const user = login(demoEmail, '123');
      if (user) navigate('/dashboard');
    }, 100);
  };

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'linear-gradient(135deg, #E8F3F5 0%, #F5F7FA 100%)',
      padding: '20px'
    }}>
      <div style={{
        background: 'white',
        borderRadius: '16px',
        padding: '40px',
        width: '100%',
        maxWidth: '400px',
        boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
      }}>
        <div style={{ textAlign: 'center', marginBottom: '32px' }}>
          <Activity size={48} color="#2A7A8C" />
          <h1 style={{ marginTop: '16px' }}>HealthGuard AI</h1>
          <p style={{ color: '#6C757D' }}>Sign in to continue</p>
        </div>

        {error && (
          <div style={{
            padding: '12px',
            backgroundColor: '#FFF3F0',
            color: '#ED6A5E',
            borderRadius: '8px',
            marginBottom: '20px',
            fontSize: '14px',
            textAlign: 'center'
          }}>
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '16px' }}>
            <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500' }}>
              Email
            </label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{
                width: '100%',
                padding: '12px',
                border: '1px solid #E9ECEF',
                borderRadius: '8px',
                fontSize: '14px'
              }}
              placeholder="sarah@example.com"
            />
          </div>

          <div style={{ marginBottom: '24px' }}>
            <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500' }}>
              Password
            </label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{
                width: '100%',
                padding: '12px',
                border: '1px solid #E9ECEF',
                borderRadius: '8px',
                fontSize: '14px'
              }}
              placeholder="••••••••"
            />
          </div>

          <button
            type="submit"
            style={{
              width: '100%',
              padding: '14px',
              backgroundColor: '#2A7A8C',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              fontSize: '16px',
              fontWeight: 'bold',
              cursor: 'pointer',
              marginBottom: '20px'
            }}
          >
            Sign In
          </button>
        </form>

        <div style={{ marginBottom: '20px' }}>
          <p style={{ textAlign: 'center', color: '#6C757D', marginBottom: '12px' }}>
            Demo Users:
          </p>
          <div style={{ display: 'flex', gap: '10px', justifyContent: 'center' }}>
            <button
              onClick={() => demoLogin('sarah@example.com')}
              style={{
                padding: '8px 16px',
                backgroundColor: '#E8F3F5',
                border: '1px solid #2A7A8C',
                borderRadius: '20px',
                color: '#2A7A8C',
                cursor: 'pointer',
                fontSize: '13px'
              }}
            >
              Sarah Johnson
            </button>
            <button
              onClick={() => demoLogin('john@example.com')}
              style={{
                padding: '8px 16px',
                backgroundColor: '#E8F3F5',
                border: '1px solid #2A7A8C',
                borderRadius: '20px',
                color: '#2A7A8C',
                cursor: 'pointer',
                fontSize: '13px'
              }}
            >
              John Doe
            </button>
          </div>
        </div>

        <p style={{ textAlign: 'center', color: '#6C757D' }}>
          New user? <a href="/register" style={{ color: '#2A7A8C' }}>Create account</a>
        </p>
      </div>
    </div>
  );
};

export default Login;