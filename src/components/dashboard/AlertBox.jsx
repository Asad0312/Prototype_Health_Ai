import React from 'react';
import { AlertTriangle, Info, Bell } from 'lucide-react';
import './AlertBox.css';

const AlertBox = ({ alert }) => {
  const getIcon = () => {
    switch(alert.type) {
      case 'warning':
        return <AlertTriangle size={20} />;
      case 'info':
        return <Info size={20} />;
      default:
        return <Bell size={20} />;
    }
  };

  return (
    <div className={`alert-box alert-${alert.type}`}>
      <div className="alert-icon">
        {getIcon()}
      </div>
      <div className="alert-content">
        <h4>{alert.title}</h4>
        <p>{alert.message}</p>
        <span className="alert-date">{alert.date}</span>
      </div>
      {!alert.read && <span className="alert-badge">New</span>}
    </div>
  );
};

export default AlertBox;