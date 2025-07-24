import express from 'express';
import cors from 'cors';

const app = express();
const PORT = 5000;

app.use(cors());

app.get('/api/dashboard', (req, res) => {
  res.json({
    stats: {
      totalUsers: 42,
      activeServices: 10,
      pendingOrders: 5
    },
    updates: [
      { id: 1, title: 'Novo serviço cadastrado', date: '2025-07-19' },
      { id: 2, title: 'Pedido finalizado', date: '2025-07-18' }
    ]
  });
});

app.listen(PORT, () => {
  console.log(`✅ API rodando em http://localhost:${PORT}/api/dashboard`);
});