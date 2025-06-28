import { Link } from 'react-router-dom';

function Contato() {
  return (
    <>
      <header className="cabecalho">
        <nav>
          <Link to="/">Início</Link>
          <Link to="/contato">Contato</Link>
          <a href="#projetos">Projetos</a>
        </nav>
      </header>

      <div className="content">
        <div className="pages">
          <h2 className="title">Entre em Contato: </h2>
          <div className="contato-info">
            <p><strong>Email:</strong></p>
            <p><strong>LinkedIn:</strong> <a href="" target="_blank" rel="noopener noreferrer"></a></p>
            <p><strong>GitHub:</strong> <a href="" target="_blank" rel="noopener noreferrer"></a></p>
            <p><strong>Endereço:</strong> RS/Brasil</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contato;