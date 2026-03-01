// pages/AdminUsers.jsx (Optional - for testing)
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { userService } from '../data/userService';
import { Users, UserPlus, Trash2, Edit } from 'lucide-react';

const AdminUsers = () => {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = () => {
    setUsers(userService.getAllUsers());
  };

  const switchUser = (userId) => {
    userService.switchUser(userId);
    navigate('/dashboard');
  };

  const deleteUser = (userId) => {
    if (window.confirm('Delete this user?')) {
      userService.deleteUser(userId);
      loadUsers();
    }
  };

  return (
    <div style={{ padding: '24px' }}>
      <h1>User Management</h1>
      
      <div style={{ marginBottom: '24px' }}>
        <button
          onClick={() => navigate('/register')}
          style={{
            padding: '12px 24px',
            backgroundColor: '#2A7A8C',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '8px'
          }}
        >
          <UserPlus size={20} /> Add New User
        </button>
      </div>

      <div style={{ display: 'grid', gap: '16px' }}>
        {users.map(user => (
          <div key={user.id} style={{
            padding: '20px',
            background: 'white',
            borderRadius: '12px',
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}>
            <div>
              <h3>{user.name}</h3>
              <p>{user.email} • Age: {user.age} • Blood: {user.bloodGroup}</p>
              <p style={{ fontSize: '13px', color: '#6C757D' }}>
                Joined: {new Date(user.joinDate).toLocaleDateString()}
              </p>
            </div>
            <div style={{ display: 'flex', gap: '8px' }}>
              <button
                onClick={() => switchUser(user.id)}
                style={{
                  padding: '8px 16px',
                  backgroundColor: '#2A7A8C',
                  color: 'white',
                  border: 'none',
                  borderRadius: '6px',
                  cursor: 'pointer'
                }}
              >
                Switch
              </button>
              <button
                onClick={() => deleteUser(user.id)}
                style={{
                  padding: '8px 16px',
                  backgroundColor: '#FFF3F0',
                  color: '#ED6A5E',
                  border: '1px solid #ED6A5E',
                  borderRadius: '6px',
                  cursor: 'pointer'
                }}
              >
                <Trash2 size={16} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminUsers;