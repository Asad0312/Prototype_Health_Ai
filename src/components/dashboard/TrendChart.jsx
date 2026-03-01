import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from 'recharts';
import './TrendChart.css';

const TrendChart = ({ data, dataKey, color }) => {
  return (
    <div className="trend-chart">
      <ResponsiveContainer width="100%" height={200}>
        <LineChart data={data} margin={{ top: 5, right: 20, left: 0, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#E9ECEF" />
          <XAxis 
            dataKey="date" 
            stroke="#6C757D"
            tick={{ fontSize: 12 }}
          />
          <YAxis 
            stroke="#6C757D"
            tick={{ fontSize: 12 }}
          />
          <Tooltip 
            contentStyle={{
              background: 'white',
              border: 'none',
              borderRadius: '8px',
              boxShadow: '0 2px 8px rgba(0,0,0,0.15)'
            }}
          />
          <Line 
            type="monotone" 
            dataKey={dataKey} 
            stroke={color} 
            strokeWidth={2}
            dot={{ fill: color, strokeWidth: 2 }}
            activeDot={{ r: 6 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default TrendChart;