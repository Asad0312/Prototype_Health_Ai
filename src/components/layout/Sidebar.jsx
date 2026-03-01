import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Upload, 
  Share2, 
  Pill, 
  Watch, 
  User,
  AlertTriangle,
  ChevronLeft,
  ChevronRight,
  Calendar,        // ✅ YEH ADD KARO
  CreditCard       // ✅ YEH BHI ADD KARO (Payments ke liye)
} from 'lucide-react';
import './Sidebar.css';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const menuItems = [
    { path: '/dashboard', icon: LayoutDashboard, label: 'Dashboard' },
    { path: '/upload', icon: Upload, label: 'Upload Documents' },
    { path: '/share', icon: Share2, label: 'Share Records' },
    { path: '/medications', icon: Pill, label: 'Medications' },
    { path: '/wearables', icon: Watch, label: 'Wearables' },
    { path: '/appointments', icon: Calendar, label: 'Appointments' },      // ✅ New
    { path: '/payments', icon: CreditCard, label: 'Payments' },            // ✅ New
    { path: '/profile', icon: User, label: 'Profile' },
  ];

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
    window.dispatchEvent(new Event('sidebarToggle'));
  };

  return (
    <>
      <button 
        className={`sidebar-toggle ${!isOpen ? 'closed' : ''}`}
        onClick={toggleSidebar}
      >
        {isOpen ? <ChevronLeft size={18} /> : <ChevronRight size={18} />}
      </button>

      <aside className={`sidebar ${!isOpen ? 'closed' : ''}`}>
        <div className="sidebar-content">
          <nav className="sidebar-nav">
            {menuItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) => 
                  `sidebar-link ${isActive ? 'active' : ''}`
                }
              >
                <item.icon size={20} />
                <span>{item.label}</span>
              </NavLink>
            ))}
          </nav>

          <div className="sidebar-footer">
            <div className="health-tip">
              <AlertTriangle size={16} />
              <span>Stay hydrated! 💧</span>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;