-- HealthCare AI Database
CREATE DATABASE IF NOT EXISTS healthcare_ai;
USE healthcare_ai;

CREATE TABLE IF NOT EXISTS users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(100) UNIQUE NOT NULL,
  password_hash VARCHAR(255) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Demo user
INSERT IGNORE INTO users (name, email, password_hash) VALUES 
('Sarah Johnson', 'sarah@example.com', '$2b$10$K.ExampleHashForDemo');

