import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import StatCard from '../../components/StatCard';
import { getDashboardData } from '../../services/dashboardService';
import { Users, Wrench, ClipboardList } from 'lucide-react';
import './dashboard.css';

export default function Dashboard() {
  const [stats, setStats] = useState(null);
  const [updates, setUpdates] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getDashboardData();
        setStats(data.stats);
        setUpdates(data.updates);
      } catch (err) {
        setError(err.message || 'Erro ao buscar dados.');
      }
    }

    fetchData();
  }, []);

  return (
    <div className="dashboard">
      <header className="dashboard-header">
        <h1>Dashboard</h1>
        <nav><Link to="/">Home</Link></nav>
      </header>

      {error && (
        <div className="error-box">
          {error}
        </div>
      )}

      <section className="stats-section">
        {stats ? (
          <>
            <StatCard
              label="Usuários"
              value={stats.totalUsers}
              color="#3b82f6"
              to="/usuarios"
              icon={Users}
            />
            <StatCard
              label="Serviços Ativos"
              value={stats.activeServices}
              color="#22c55e"
              to="/servicos"
              icon={Wrench}
            />
            <StatCard
              label="Pedidos Pendentes"
              value={stats.pendingOrders}
              color="#facc15"
              to="/pedidos"
              icon={ClipboardList}
            />
          </>
        ) : (
          <p>Carregando estatísticas...</p>
        )}
      </section>

      <section className="content-section">
        <h2>Últimas Atualizações</h2>
        {updates.length === 0 ? (
          <div className="content-box">Nenhuma atualização recente.</div>
        ) : (
          <ul className="update-list">
            {updates
              .sort((a, b) => new Date(b.date) - new Date(a.date))
              .map((update) => (
                <li key={update.id} className="update-item">
                  <strong>{update.title}</strong>
                  <span>{new Date(update.date).toLocaleDateString('pt-BR')}</span>
                </li>
              ))}
          </ul>
        )}
      </section>
    </div>
  );
}
