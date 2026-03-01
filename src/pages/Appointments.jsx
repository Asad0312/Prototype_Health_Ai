import React, { useState } from 'react';
import { Calendar, Clock, Video, MapPin, Plus, ChevronRight, Bell, Download } from 'lucide-react';
import './Appointments.css';

const Appointments = () => {
  const [showBooking, setShowBooking] = useState(false);
  const [appointments, setAppointments] = useState([
    {
      id: 1,
      doctor: 'Dr. Sarah Smith',
      specialty: 'Cardiologist',
      date: '2024-03-15',
      time: '10:30 AM',
      type: 'Video Consultation',
      status: 'upcoming',
      location: 'Online',
      notes: 'Follow-up on blood pressure medication'
    },
    {
      id: 2,
      doctor: 'Dr. Michael Chen',
      specialty: 'Endocrinologist',
      date: '2024-02-28',
      time: '2:00 PM',
      type: 'In-Person',
      status: 'upcoming',
      location: 'Medical Center, Room 305',
      notes: 'Diabetes management review'
    },
    {
      id: 3,
      doctor: 'Dr. Emily Brown',
      specialty: 'General Physician',
      date: '2024-02-10',
      time: '11:00 AM',
      type: 'In-Person',
      status: 'completed',
      location: 'City Hospital'
    }
  ]);

  const [newAppointment, setNewAppointment] = useState({
    doctor: '',
    specialty: '',
    date: '',
    time: '',
    type: 'Video Consultation',
    notes: ''
  });

  const handleBookAppointment = (e) => {
    e.preventDefault();
    const appointment = {
      id: Date.now(),
      ...newAppointment,
      status: 'upcoming',
      location: newAppointment.type === 'Video Consultation' ? 'Online' : 'Medical Center'
    };
    setAppointments([appointment, ...appointments]);
    setShowBooking(false);
    setNewAppointment({
      doctor: '',
      specialty: '',
      date: '',
      time: '',
      type: 'Video Consultation',
      notes: ''
    });
  };

  const upcomingApps = appointments.filter(app => app.status === 'upcoming');
  const pastApps = appointments.filter(app => app.status === 'completed');

  return (
    <div className="appointments-container">
      <div className="appointments-header">
        <div>
          <h1>Appointments</h1>
          <p>Manage your healthcare visits</p>
        </div>
        <button 
          className="btn-primary"
          onClick={() => setShowBooking(!showBooking)}
        >
          <Plus size={18} />
          {showBooking ? 'Cancel' : 'Book New Appointment'}
        </button>
      </div>

      {/* Booking Form */}
      {showBooking && (
        <div className="booking-form-card">
          <h2>Book New Appointment</h2>
          <form onSubmit={handleBookAppointment}>
            <div className="form-row">
              <div className="form-group">
                <label>Doctor Name *</label>
                <input
                  type="text"
                  required
                  value={newAppointment.doctor}
                  onChange={(e) => setNewAppointment({...newAppointment, doctor: e.target.value})}
                  placeholder="Dr. Name"
                />
              </div>
              <div className="form-group">
                <label>Specialty *</label>
                <select
                  required
                  value={newAppointment.specialty}
                  onChange={(e) => setNewAppointment({...newAppointment, specialty: e.target.value})}
                >
                  <option value="">Select</option>
                  <option value="Cardiologist">Cardiologist</option>
                  <option value="Endocrinologist">Endocrinologist</option>
                  <option value="General Physician">General Physician</option>
                  <option value="Dermatologist">Dermatologist</option>
                </select>
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Date *</label>
                <input
                  type="date"
                  required
                  value={newAppointment.date}
                  onChange={(e) => setNewAppointment({...newAppointment, date: e.target.value})}
                  min={new Date().toISOString().split('T')[0]}
                />
              </div>
              <div className="form-group">
                <label>Time *</label>
                <input
                  type="time"
                  required
                  value={newAppointment.time}
                  onChange={(e) => setNewAppointment({...newAppointment, time: e.target.value})}
                />
              </div>
            </div>

            <div className="form-group">
              <label>Appointment Type</label>
              <select
                value={newAppointment.type}
                onChange={(e) => setNewAppointment({...newAppointment, type: e.target.value})}
              >
                <option value="Video Consultation">Video Consultation</option>
                <option value="In-Person">In-Person Visit</option>
                <option value="Phone Call">Phone Call</option>
              </select>
            </div>

            <div className="form-group">
              <label>Notes (Optional)</label>
              <textarea
                value={newAppointment.notes}
                onChange={(e) => setNewAppointment({...newAppointment, notes: e.target.value})}
                placeholder="Any specific concerns..."
                rows="3"
              />
            </div>

            <div className="form-actions">
              <button type="submit" className="btn-primary">
                Confirm Booking
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Stats Cards */}
      <div className="appointment-stats">
        <div className="stat-card">
          <Calendar size={24} color="#2A7A8C" />
          <div>
            <h3>{upcomingApps.length}</h3>
            <p>Upcoming</p>
          </div>
        </div>
        <div className="stat-card">
          <Clock size={24} color="#F4A261" />
          <div>
            <h3>{pastApps.length}</h3>
            <p>Completed</p>
          </div>
        </div>
        <div className="stat-card">
          <Video size={24} color="#4A90E2" />
          <div>
            <h3>{appointments.filter(a => a.type === 'Video Consultation').length}</h3>
            <p>Video Visits</p>
          </div>
        </div>
      </div>

      {/* Upcoming Appointments */}
      <div className="appointments-section">
        <h2>Upcoming Appointments</h2>
        {upcomingApps.length === 0 ? (
          <p className="no-data">No upcoming appointments</p>
        ) : (
          <div className="appointments-list">
            {upcomingApps.map(app => (
              <div key={app.id} className="appointment-card upcoming">
                <div className="appointment-time">
                  <div className="date-badge">
                    <span className="month">{new Date(app.date).toLocaleString('default', { month: 'short' })}</span>
                    <span className="day">{new Date(app.date).getDate()}</span>
                  </div>
                  <div className="time">{app.time}</div>
                </div>
                <div className="appointment-details">
                  <h3>{app.doctor}</h3>
                  <p className="specialty">{app.specialty}</p>
                  <div className="appointment-meta">
                    <span className="type">
                      {app.type === 'Video Consultation' ? <Video size={14} /> : <MapPin size={14} />}
                      {app.type}
                    </span>
                    <span className="location">{app.location}</span>
                  </div>
                  {app.notes && <p className="notes">📝 {app.notes}</p>}
                </div>
                <div className="appointment-actions">
                  <button className="btn-outline">
                    <Bell size={16} /> Remind
                  </button>
                  <button className="btn-primary">
                    Join <ChevronRight size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Past Appointments */}
      <div className="appointments-section">
        <h2>Past Appointments</h2>
        {pastApps.length === 0 ? (
          <p className="no-data">No past appointments</p>
        ) : (
          <div className="appointments-list">
            {pastApps.map(app => (
              <div key={app.id} className="appointment-card past">
                <div className="appointment-time">
                  <div className="date-badge">
                    <span className="month">{new Date(app.date).toLocaleString('default', { month: 'short' })}</span>
                    <span className="day">{new Date(app.date).getDate()}</span>
                  </div>
                </div>
                <div className="appointment-details">
                  <h3>{app.doctor}</h3>
                  <p className="specialty">{app.specialty}</p>
                  <div className="appointment-meta">
                    <span>{app.type}</span>
                    <span className="completed-badge">✓ Completed</span>
                  </div>
                </div>
                <div className="appointment-actions">
                  <button className="btn-outline">
                    <Download size={16} /> Summary
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Appointments;