export const formatDate = (date) => {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  });
};

export const calculateTrend = (current, previous) => {
  if (!previous) return 0;
  return ((current - previous) / previous * 100).toFixed(1);
};

export const getHealthScoreColor = (score) => {
  if (score >= 80) return '#2E7D32';
  if (score >= 60) return '#F4A261';
  return '#ED6A5E';
};