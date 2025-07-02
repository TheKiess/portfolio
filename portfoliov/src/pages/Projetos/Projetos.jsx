import { Link } from 'react-router-dom';
import './sobre.css';

return (
  <>
    <header className="cabecalho">
      <nav>
        <Link to="/">Início</Link>
        <a href="#projetos">Projetos</a>
        <Link to="/contato">Contato</Link>
      </nav>
    </header>

    <div className="content">
    </div>
  </>
);