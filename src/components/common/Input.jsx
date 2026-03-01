import React from 'react';

const Input = ({ label, type = 'text', value, onChange, placeholder, required }) => {
  return (
    <div style={{ marginBottom: '16px' }}>
      {label && (
        <label style={{
          display: 'block',
          marginBottom: '8px',
          fontWeight: '500',
          fontSize: '14px'
        }}>
          {label}
        </label>
      )}
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        style={{
          width: '100%',
          padding: '10px',
          border: '1px solid #E9ECEF',
          borderRadius: '6px',
          fontSize: '14px',
          outline: 'none'
        }}
      />
    </div>
  );
};

export default Input;