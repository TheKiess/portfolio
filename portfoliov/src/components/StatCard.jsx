import { Link } from 'react-router-dom';
import './StatCard.css';

export default function StatCard({ label, value, color, to }) {
  const content = (
    <div className="stat-card" style={{ backgroundColor: color }}>
      <div className="stat-label">{label}</div>
      <div className="stat-value">{value}</div>
    </div>
  );

  return to ? <Link to={to} style={{ textDecoration: 'none' }}>{content}</Link> : content;
}