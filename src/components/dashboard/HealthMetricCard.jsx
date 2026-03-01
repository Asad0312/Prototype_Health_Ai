import React from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';
import './HealthMetricCard.css';

const HealthMetricCard = ({ title, value, unit, icon, color, trend }) => {
  const isPositive = trend > 0;
  
  return (
    <div className="metric-card">
      <div className="metric-header">
        <div className="metric-icon" style={{ backgroundColor: `${color}20`, color: color }}>
          {icon}
        </div>
        <span className="metric-title">{title}</span>
      </div>
      
      <div className="metric-value">
        {value} <span className="metric-unit">{unit}</span>
      </div>
      
      {trend !== undefined && (
        <div className={`metric-trend ${isPositive ? 'trend-up' : 'trend-down'}`}>
          {isPositive ? <TrendingUp size={16} /> : <TrendingDown size={16} />}
          <span>{Math.abs(trend)}% vs last month</span>
        </div>
      )}
    </div>
  );
};

export default HealthMetricCard;