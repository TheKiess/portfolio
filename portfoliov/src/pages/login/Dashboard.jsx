import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './dashboard.css';

export default function Dashboard() {
  const [stats, setStats] = useState({
    totalUsers: 0,
    activeServices: 0,
    pendingOrders: 0,
  });

  useEffect(() => {
    setStats({
      totalUsers: 42,
      activeServices: 10,
      pendingOrders: 5,
    });
  }, []);

  return (
    <div className="dashboard">
      <header className="dashboard-header">
        <h1>Dashboard</h1>
        <nav>
          <Link to="/">Home</Link>
        </nav>
      </header>

      <section className="stats-section">
        <StatCard label="Usuários" value={stats.totalUsers} color="#3b82f6" />
        <StatCard label="Serviços Ativos" value={stats.activeServices} color="#22c55e" />
        <StatCard label="Pedidos Pendentes" value={stats.pendingOrders} color="#facc15" />
      </section>

      <section className="content-section">
        <h2>Últimas Atualizações</h2>
        <div className="content-box">Em breve...</div>
      </section>
    </div>
  );
}

function StatCard({ label, value, color }) {
  return (
    <div className="stat-card" style={{ backgroundColor: color }}>
      <div className="stat-label">{label}</div>
      <div className="stat-value">{value}</div>
    </div>
  );
}