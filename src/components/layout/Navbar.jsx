import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Bell, User, LogOut } from 'lucide-react';

const Navbar = ({ user }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('healthguard_user');
    navigate('/login');
  };

  const styles = {
    navbar: {
      background: 'white',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
      position: 'sticky',
      top: 0,
      zIndex: 100,
      height: '60px'
    },
    container: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      height: '100%',
      padding: '0 24px',
      maxWidth: '1400px',
      margin: '0 auto'
    },
    brand: {
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
      textDecoration: 'none',
      color: '#2A7A8C',
      fontWeight: 600,
      fontSize: '1.25rem'
    },
    right: {
      display: 'flex',
      alignItems: 'center',
      gap: '20px'
    },
    iconButton: {
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      padding: '8px',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#6C757D'
    },
    user: {
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      padding: '4px 8px',
      borderRadius: '20px'
    },
    avatar: {
      width: '32px',
      height: '32px',
      borderRadius: '50%',
      backgroundColor: '#E8F3F5',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#2A7A8C'
    }
  };

  return (
    <nav style={styles.navbar}>
      <div style={styles.container}>
        <Link to="/dashboard" style={styles.brand}>
          <span>HealthGuard AI</span>
        </Link>

        <div style={styles.right}>
          <button style={styles.iconButton}>
            <Bell size={20} />
          </button>
          
          <div style={styles.user}>
            <div style={styles.avatar}>
              <User size={20} />
            </div>
            <span style={{ fontSize: '14px', fontWeight: 500 }}>
              {user?.name || 'User'}
            </span>
          </div>

          <button style={styles.iconButton} onClick={handleLogout}>
            <LogOut size={20} />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;