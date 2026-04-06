import React, { createContext, useState, useContext, useEffect } from 'react';
import { authService } from '../services/authService.js';

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const savedUser = localStorage.getItem('healthguard_user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
    setLoading(false);
  }, []);

  const login = async (email, password) => {
    const { user } = await authService.login(email, password);
    if (user) {
      setUser(user);
      localStorage.setItem('healthguard_user', JSON.stringify(user));
      return user;
    }
    return null;
  };

  const register = (userData) => {
    const newUser = {
      id: Date.now(),
      ...userData,
      healthScore: 100,
      joinDate: new Date().toISOString().split('T')[0],
      healthMetrics: {
        bloodPressure: [{ date: new Date().toISOString().split('T')[0], systolic: 120, diastolic: 80 }],
        hba1c: [{ date: new Date().toISOString().split('T')[0], value: 5.5 }],
        weight: [{ date: new Date().toISOString().split('T')[0], value: 150 }],
        heartRate: [{ date: new Date().toISOString().split('T')[0], value: 72 }]
      },
      alerts: [],
      medications: []
    };
    
    setUser(newUser);
    localStorage.setItem('healthguard_user', JSON.stringify(newUser));
    return newUser;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('healthguard_user');
  };

  const addHealthMetric = (type, value) => {
    if (!user) return;
    
    const newMetric = {
      date: new Date().toISOString().split('T')[0],
      ...value
    };
    
    const updatedMetrics = {
      ...user.healthMetrics,
      [type]: [...(user.healthMetrics[type] || []), newMetric]
    };
    
    const updatedUser = {
      ...user,
      healthMetrics: updatedMetrics
    };
    
    setUser(updatedUser);
    localStorage.setItem('healthguard_user', JSON.stringify(updatedUser));
  };

  const value = {
    user,
    loading,
    login,
    register,
    logout,
    addHealthMetric
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};