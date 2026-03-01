import React from 'react';
import { File, X } from 'lucide-react';

const FilePreview = ({ fileName, onRemove }) => {
  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '12px',
      backgroundColor: '#F8F9FA',
      borderRadius: '8px',
      marginTop: '8px'
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <File size={20} color="#2A7A8C" />
        <span>{fileName}</span>
      </div>
      <button 
        onClick={onRemove}
        style={{
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          color: '#ED6A5E'
        }}
      >
        <X size={18} />
      </button>
    </div>
  );
};

export default FilePreview;