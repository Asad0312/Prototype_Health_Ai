import React, { useState } from 'react';
import UploadBox from '../components/upload/UploadBox';
import FilePreview from '../components/upload/FilePreview';
import { recentUploads } from '../data/dummyHealthData';
import { FileText, CheckCircle, AlertCircle, Clock } from 'lucide-react';

const UploadDocuments = () => {
  const [files, setFiles] = useState([]);
  const [uploads, setUploads] = useState(recentUploads);

  const handleUpload = (file) => {
    const newFile = {
      id: Date.now(),
      name: file.name,
      date: new Date().toISOString().split('T')[0],
      type: file.type.includes('pdf') ? 'Lab Report' : 'Imaging',
      status: 'processing'
    };
    setUploads([newFile, ...uploads]);
    
    // Simulate processing
    setTimeout(() => {
      setUploads(prev => prev.map(f => 
        f.id === newFile.id ? {...f, status: 'processed'} : f
      ));
    }, 3000);
  };

  const getStatusIcon = (status) => {
    switch(status) {
      case 'processed': return <CheckCircle size={16} color="#2E7D32" />;
      case 'processing': return <Clock size={16} color="#F4A261" />;
      default: return <AlertCircle size={16} color="#ED6A5E" />;
    }
  };

  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
      <h1 style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>Upload Documents</h1>
      
      {/* Upload Section */}
      <div style={{ marginBottom: '32px' }}>
        <UploadBox onUpload={handleUpload} />
      </div>

      {/* Recent Uploads */}
      <div>
        <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Recent Uploads</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {uploads.map((upload) => (
            <div key={upload.id} style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '16px',
              backgroundColor: 'white',
              borderRadius: '12px',
              boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <FileText size={24} color="#2A7A8C" />
                <div>
                  <h4 style={{ margin: 0 }}>{upload.name}</h4>
                  <p style={{ margin: '4px 0 0', fontSize: '13px', color: '#6C757D' }}>
                    {upload.type} • {upload.date}
                  </p>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                {getStatusIcon(upload.status)}
                <span style={{ 
                  fontSize: '13px',
                  color: upload.status === 'processed' ? '#2E7D32' : 
                         upload.status === 'processing' ? '#F4A261' : '#ED6A5E'
                }}>
                  {upload.status.charAt(0).toUpperCase() + upload.status.slice(1)}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* AI Processing Status */}
      <div style={{
        marginTop: '32px',
        padding: '20px',
        backgroundColor: '#E8F3F5',
        borderRadius: '12px'
      }}>
        <h3 style={{ marginBottom: '12px' }}>AI Processing Status</h3>
        <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap' }}>
          <div>
            <span style={{ color: '#2A7A8C', fontWeight: 'bold' }}>OCR: </span>
            <span style={{ color: '#2E7D32' }}>✓ Active</span>
          </div>
          <div>
            <span style={{ color: '#2A7A8C', fontWeight: 'bold' }}>NLP: </span>
            <span style={{ color: '#2E7D32' }}>✓ Processing</span>
          </div>
          <div>
            <span style={{ color: '#2A7A8C', fontWeight: 'bold' }}>Extracted Data: </span>
            <span>142 records</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UploadDocuments;