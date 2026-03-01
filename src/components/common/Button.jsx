import React from 'react';

const Button = ({ children, variant = 'primary', onClick, type = 'button', fullWidth }) => {
  const styles = {
    primary: {
      backgroundColor: '#2A7A8C',
      color: 'white'
    },
    secondary: {
      backgroundColor: 'transparent',
      border: '1px solid #2A7A8C',
      color: '#2A7A8C'
    },
    danger: {
      backgroundColor: '#ED6A5E',
      color: 'white'
    }
  };

  return (
    <button
      type={type}
      onClick={onClick}
      style={{
        padding: '10px 20px',
        border: 'none',
        borderRadius: '6px',
        fontSize: '14px',
        fontWeight: '500',
        cursor: 'pointer',
        width: fullWidth ? '100%' : 'auto',
        transition: 'opacity 0.2s',
        ...styles[variant]
      }}
    >
      {children}
    </button>
  );
};

export default Button;