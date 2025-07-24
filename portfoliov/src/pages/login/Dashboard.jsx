import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import StatCard from '../../components/StatCard';
import { getDashboardData } from '../../services/dashboardService';
import './dashboard.css';

export default function Dashboard() {
  const [stats, setStats] = useState(null);
  const [updates, setUpdates] = useState([]);
  const [loading, setLoading] = useState(true);
  const [erro, setErro] = useState(null);

  useEffect(() => {
    getDashboardData()
      .then(data => {
        setStats(data.stats);
        setUpdates(data.updates);
      })
      .catch(err => setErro(err.message))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="dashboard">
      <header className="dashboard-header">
        <h1>Dashboard</h1>
        <nav><Link to="/">Home</Link></nav>
      </header>

      <section className="stats-section">
        {loading ? (
          <div className="content-box">Carregando estatísticas...</div>
        ) : erro ? (
          <div className="content-box erro">{erro}</div>
        ) : (
          <>
            <StatCard label="Usuários" value={stats.totalUsers} color="#3b82f6" to="/usuarios" />
            <StatCard label="Serviços Ativos" value={stats.activeServices} color="#22c55e" to="/servicos" />
            <StatCard label="Pedidos Pendentes" value={stats.pendingOrders} color="#facc15" to="/pedidos" />
          </>
        )}
      </section>

      <section className="content-section">
        <h2>Últimas Atualizações</h2>
        {loading ? (
          <div className="content-box">Carregando atualizações...</div>
        ) : updates.length === 0 ? (
          <div className="content-box">Nenhuma atualização recente.</div>
        ) : (
          <ul className="update-list">
            {updates.map((u) => (
              <li key={u.id}>
                <strong>{u.title}</strong>
                <span>{new Date(u.date).toLocaleDateString('pt-BR')}</span>
              </li>
            ))}
          </ul>
        )}
      </section>
    </div>
  );
}