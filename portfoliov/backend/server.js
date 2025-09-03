import express from 'express';
import cors from 'cors';

const app = express();
const PORT = 5000;

app.use(cors());

app.get('/api/dashboard', (req, res) => {
  res.json({
    stats: {
      totalUsers: 35,
      activeServices: 12,
      pendingOrders: 5
    },
    updates: [
      { id: 1, title: 'Novo usuário cadastrado', date: '2025-07-29T12:00:00Z' },
      { id: 2, title: 'Serviço concluído',       date: '2025-07-28T15:30:00Z' }
    ]
  });
});

app.listen(PORT, () => {
  console.log(`✅ API rodando em http://localhost:${PORT}/api/dashboard`);
});