-- Run this in phpMyAdmin or MySQL CLI
CREATE DATABASE IF NOT EXISTS healthcare_ai;
USE healthcare_ai;

CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100),
  email VARCHAR(100) UNIQUE,
  password_hash VARCHAR(255),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE health_metrics (
  id INT AUTO_INCREMENT PRIMARY KEY,
  user_id INT,
  date DATE,
  heart_rate INT,
  blood_pressure VARCHAR(10),
  weight DECIMAL(5,2),
  steps INT,
  FOREIGN KEY (user_id) REFERENCES users(id)
);

CREATE TABLE medications (
  id INT AUTO_INCREMENT PRIMARY KEY,
  user_id INT,
  name VARCHAR(100),
  dosage VARCHAR(50),
  schedule VARCHAR(100),
  taken_today BOOLEAN DEFAULT FALSE,
  FOREIGN KEY (user_id) REFERENCES users(id)
);

-- Sample data
INSERT INTO users (name, email, password_hash) VALUES 
('Sarah Johnson', 'sarah@example.com', '$2b$10$mockhash');

INSERT INTO health_metrics (user_id, date, heart_rate, blood_pressure, weight, steps) VALUES 
(1, CURDATE(), 72, '120/80', 65.5, 8500);

INSERT INTO medications (user_id, name, dosage, schedule) VALUES 
(1, 'Aspirin', '100mg', 'Daily 8AM');

