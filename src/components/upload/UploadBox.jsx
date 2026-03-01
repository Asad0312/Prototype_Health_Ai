import React from 'react';
import { Upload } from 'lucide-react';

const UploadBox = () => {
  return (
    <div style={{
      border: '2px dashed #E9ECEF',
      borderRadius: '12px',
      padding: '40px',
      textAlign: 'center',
      cursor: 'pointer',
      backgroundColor: '#F8F9FA'
    }}>
      <Upload size={40} color="#2A7A8C" />
      <h3 style={{ margin: '16px 0 8px' }}>Upload Medical Documents</h3>
      <p style={{ color: '#6C757D' }}>Drag & drop or click to upload</p>
      <p style={{ fontSize: '12px', color: '#6C757D', marginTop: '8px' }}>
        Supports: PDF, JPG, PNG, DICOM
      </p>
    </div>
  );
};

export default UploadBox;