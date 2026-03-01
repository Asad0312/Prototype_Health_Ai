import React, { createContext, useState, useContext, useEffect } from 'react';

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

  const login = (email, password) => {
    const users = [
      {
        id: 1,
        name: 'Sarah Johnson',
        email: 'sarah@example.com',
        age: 52,
        healthScore: 78,
        joinDate: '2024-01-01',
        healthMetrics: {
          bloodPressure: [
            { date: '2023-07', systolic: 128, diastolic: 82 },
            { date: '2023-08', systolic: 132, diastolic: 85 },
            { date: '2023-09', systolic: 135, diastolic: 87 },
            { date: '2023-10', systolic: 138, diastolic: 89 },
            { date: '2023-11', systolic: 142, diastolic: 91 },
            { date: '2023-12', systolic: 145, diastolic: 93 },
            { date: '2024-01', systolic: 148, diastolic: 94 }
          ],
          hba1c: [
            { date: '2023-07', value: 6.1 },
            { date: '2023-08', value: 6.2 },
            { date: '2023-09', value: 6.3 },
            { date: '2023-10', value: 6.4 },
            { date: '2023-11', value: 6.5 },
            { date: '2023-12', value: 6.6 },
            { date: '2024-01', value: 6.7 }
          ],
          weight: [
            { date: '2023-07', value: 165 },
            { date: '2023-08', value: 164 },
            { date: '2023-09', value: 164 },
            { date: '2023-10', value: 163 },
            { date: '2023-11', value: 162 },
            { date: '2023-12', value: 162 },
            { date: '2024-01', value: 161 }
          ],
          heartRate: [
            { date: '2024-01', value: 72 }
          ]
        },
        alerts: [
          {
            id: 1,
            type: 'warning',
            title: 'Medication Interaction Detected',
            message: 'Warning: Potassium supplements can interact with Lisinopril. Please consult your doctor.',
            date: '2024-01-15',
            read: false
          }
        ],
        medications: [
          {
            id: 1,
            name: 'Lisinopril',
            dosage: '10mg',
            frequency: 'Once daily',
            time: '08:00 AM',
            adherence: 95
          },
          {
            id: 2,
            name: 'Metformin',
            dosage: '500mg',
            frequency: 'Twice daily',
            time: '08:00 AM, 08:00 PM',
            adherence: 88
          }
        ]
      },
      {
        id: 2,
        name: 'John Doe',
        email: 'john@example.com',
        age: 45,
        healthScore: 85,
        joinDate: '2024-02-01',
        healthMetrics: {
          bloodPressure: [{ date: '2024-02', systolic: 118, diastolic: 76 }],
          hba1c: [{ date: '2024-02', value: 5.2 }],
          weight: [{ date: '2024-02', value: 170 }],
          heartRate: [{ date: '2024-02', value: 68 }]
        },
        alerts: [],
        medications: []
      }
    ];

    const foundUser = users.find(u => u.email === email);
    if (foundUser) {
      setUser(foundUser);
      localStorage.setItem('healthguard_user', JSON.stringify(foundUser));
      return foundUser;
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