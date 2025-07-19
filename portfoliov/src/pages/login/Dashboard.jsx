import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './dashboard.css';

function StatCard({ label, value, color, to }) {
  const card = (
    <div className="stat-card" style={{ backgroundColor: color }}>
      <div className="stat-label">{label}</div>
      <div className="stat-value">{value}</div>
    </div>
  );

  return to ? <Link to={to} style={{ textDecoration: 'none' }}>{card}</Link> : card;
}

export default function Dashboard() {
  const [stats, setStats] = useState({
    totalUsers: 0,
    activeServices: 0,
    pendingOrders: 0,
  });

  const [updates, setUpdates] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setStats({
        totalUsers: 42,
        activeServices: 10,
        pendingOrders: 5,
      });

      setUpdates([
        { id: 1, title: 'Novo serviço cadastrado', date: '2025-07-19' },
        { id: 2, title: 'Pedido finalizado', date: '2025-07-18' },
      ]);
    }, 500);
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
        <StatCard label="Usuários" value={stats.totalUsers} color="#3b82f6" to="/usuarios" />
        <StatCard label="Serviços Ativos" value={stats.activeServices} color="#22c55e" to="/servicos" />
        <StatCard label="Pedidos Pendentes" value={stats.pendingOrders} color="#facc15" to="/pedidos" />
      </section>

      <section className="content-section">
        <h2>Últimas Atualizações</h2>
        {updates.length === 0 ? (
          <div className="content-box">Carregando atualizações...</div>
        ) : (
          <ul className="update-list">
            {updates.map((update) => (
              <li key={update.id}>
                <strong>{update.title}</strong>
                <span>{update.date}</span>
              </li>
            ))}
          </ul>
        )}
      </section>
    </div>
  );
}
