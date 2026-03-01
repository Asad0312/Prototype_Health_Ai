// Mock data for HealthGuard AI prototype

export const userProfile = {
  id: 1,
  name: "Sarah Johnson",
  email: "sarah.j@example.com",
  age: 52,
  healthScore: 78,
  conditions: ["Pre-diabetic", "Hypertension"],
  medications: ["Lisinopril 10mg", "Metformin 500mg"],
  lastUpdated: "2024-01-15"
};

export const healthMetrics = {
  bloodPressure: [
    { date: "2023-07", systolic: 128, diastolic: 82 },
    { date: "2023-08", systolic: 132, diastolic: 85 },
    { date: "2023-09", systolic: 135, diastolic: 87 },
    { date: "2023-10", systolic: 138, diastolic: 89 },
    { date: "2023-11", systolic: 142, diastolic: 91 },
    { date: "2023-12", systolic: 145, diastolic: 93 },
    { date: "2024-01", systolic: 148, diastolic: 94 }
  ],
  
  hba1c: [
    { date: "2023-07", value: 6.1 },
    { date: "2023-08", value: 6.2 },
    { date: "2023-09", value: 6.3 },
    { date: "2023-10", value: 6.4 },
    { date: "2023-11", value: 6.5 },
    { date: "2023-12", value: 6.6 },
    { date: "2024-01", value: 6.7 }
  ],
  
  cholesterol: {
    ldl: [
      { date: "2023-07", value: 110 },
      { date: "2023-10", value: 125 },
      { date: "2024-01", value: 143 }
    ],
    hdl: [
      { date: "2023-07", value: 45 },
      { date: "2023-10", value: 44 },
      { date: "2024-01", value: 42 }
    ],
    triglycerides: [
      { date: "2023-07", value: 150 },
      { date: "2023-10", value: 165 },
      { date: "2024-01", value: 180 }
    ]
  },
  
  weight: [
    { date: "2023-07", value: 165 },
    { date: "2023-08", value: 164 },
    { date: "2023-09", value: 164 },
    { date: "2023-10", value: 163 },
    { date: "2023-11", value: 162 },
    { date: "2023-12", value: 162 },
    { date: "2024-01", value: 161 }
  ]
};

export const alerts = [
  {
    id: 1,
    type: "warning",
    title: "Medication Interaction Detected",
    message: "Warning: Potassium supplements can interact with Lisinopril (your BP medication). Please consult your doctor.",
    date: "2024-01-15",
    read: false
  },
  {
    id: 2,
    type: "trend",
    title: "Rising HbA1c Levels",
    message: "Your HbA1c has increased by 10% in the last 6 months. This is a key risk factor for diabetes progression.",
    date: "2024-01-14",
    read: false
  },
  {
    id: 3,
    type: "info",
    title: "Medication Reminder",
    message: "Time to take your Lisinopril (10mg)",
    date: "2024-01-16",
    read: true
  }
];

export const recentUploads = [
  {
    id: 1,
    name: "Blood Test Report - Jan 2024.pdf",
    date: "2024-01-15",
    type: "Lab Report",
    status: "processed"
  },
  {
    id: 2,
    name: "Chest X-Ray - Jan 2024.dcm",
    date: "2024-01-14",
    type: "Imaging",
    status: "processing"
  },
  {
    id: 3,
    name: "Prescription - Lisinopril.pdf",
    date: "2024-01-10",
    type: "Prescription",
    status: "processed"
  }
];

export const medications = [
  {
    id: 1,
    name: "Lisinopril",
    dosage: "10mg",
    frequency: "Once daily",
    time: "08:00 AM",
    adherence: 95,
    refillDate: "2024-02-01"
  },
  {
    id: 2,
    name: "Metformin",
    dosage: "500mg",
    frequency: "Twice daily",
    time: "08:00 AM, 08:00 PM",
    adherence: 88,
    refillDate: "2024-01-25"
  }
];

export const wearableData = {
  heartRate: {
    average: 72,
    resting: 68,
    lastSync: "2024-01-16T08:30:00"
  },
  steps: {
    today: 6842,
    goal: 10000,
    weekly: [6542, 7234, 8912, 5432, 7654, 8243, 6842]
  },
  sleep: {
    hours: 7.2,
    quality: "Good"
  }
};

export const healthInsights = [
  {
    id: 1,
    insight: "Your LDL cholesterol has increased by 30% in 6 months. Consider discussing dietary changes with your doctor.",
    category: "cholesterol",
    severity: "high"
  },
  {
    id: 2,
    insight: "Blood pressure trending upward. Monitor sodium intake and stress levels.",
    category: "blood pressure",
    severity: "medium"
  },
  {
    id: 3,
    insight: "Great job! Your medication adherence is at 92% this week.",
    category: "medication",
    severity: "positive"
  }
];