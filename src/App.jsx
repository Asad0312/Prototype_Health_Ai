import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';

// Layout Components
import Navbar from './components/layout/Navbar';
import Sidebar from './components/layout/Sidebar';
import Footer from './components/layout/Footer';

// Pages
import Dashboard from './pages/Dashboard';
import LandingPage from './pages/LandingPage';
import UploadDocuments from './pages/UploadDocuments';
import ShareRecords from './pages/ShareRecords';
import MedicationTracker from './pages/MedicationTracker';
// import WearableIntegration from './pages/WearableIntegration';
import Profile from './pages/Profile';
import Login from './pages/Login';
import Register from './pages/Register';
import Appointments from './pages/Appointments';
import PaymentMethods from './pages/PaymentMethods';

// Protected Route Component
const ProtectedRoute = ({ children }) => {
  const user = localStorage.getItem('healthguard_user');
  if (!user) {
    return <Navigate to="/login" />;
  }
  return children;
};

// Layout Component
const Layout = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const user = JSON.parse(localStorage.getItem('healthguard_user') || '{}');

  useEffect(() => {
    const handleSidebarToggle = () => {
      setSidebarOpen(prev => !prev);
    };
    window.addEventListener('sidebarToggle', handleSidebarToggle);
    return () => window.removeEventListener('sidebarToggle', handleSidebarToggle);
  }, []);

  return (
    <>
      <Navbar user={user} />
      <div className={`main-content ${sidebarOpen ? 'sidebar-open' : 'sidebar-closed'}`}>
        <Sidebar />
        <main className="content fade-in-up">
          {children}
        </main>
      </div>
      <Footer />
    </>
  );
};

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          
          {/* Protected Routes */}
          <Route path="/dashboard" element={
            <ProtectedRoute>
              <Layout>
                <Dashboard />
              </Layout>
            </ProtectedRoute>
          } />
          
          <Route path="/upload" element={
            <ProtectedRoute>
              <Layout>
                <UploadDocuments />
              </Layout>
            </ProtectedRoute>
          } />
          
          <Route path="/share" element={
            <ProtectedRoute>
              <Layout>
                <ShareRecords />
              </Layout>
            </ProtectedRoute>
          } />
          
          <Route path="/medications" element={
            <ProtectedRoute>
              <Layout>
                <MedicationTracker />
              </Layout>
            </ProtectedRoute>
          } />
          
// Removed WearableIntegration route
          
          <Route path="/appointments" element={
            <ProtectedRoute>
              <Layout>
                <Appointments />
              </Layout>
            </ProtectedRoute>
          } />
          
          <Route path="/payments" element={
            <ProtectedRoute>
              <Layout>
                <PaymentMethods />
              </Layout>
            </ProtectedRoute>
          } />
          
          <Route path="/profile" element={
            <ProtectedRoute>
              <Layout>
                <Profile />
              </Layout>
            </ProtectedRoute>
          } />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
