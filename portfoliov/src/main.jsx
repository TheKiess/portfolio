import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Home from './pages/Home';
import Sobre from './pages/Sobre/Sobre';
import Contato from './pages/Contato/Contato';
import Projetos from './pages/Projetos/Projetos';
import Login from './pages/Login/Login';
import './index.css';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/sobre",
    element: <Sobre />,
  },
  {
    path: "/contato",
    element: <Contato />,
  },
  {
    path: "/Projetos",
    element: <Projetos />,
  },
  {
    path: "/Login",
    element: <Login />
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
