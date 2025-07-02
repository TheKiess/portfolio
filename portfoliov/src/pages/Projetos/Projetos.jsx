import { Link } from 'react-router-dom';
import './projeto.css';

export default function Projetos() {
  return (
    <>
      <header className="cabecalho">
        <nav>
          <Link to="/">Início</Link>
          <Link to="/sobre">Sobre</Link>
          <Link to="/contato">Contato</Link>
        </nav>
      </header>

      <div className="content">
        <div className="pages">
          <h1 className="title">Projetos</h1>

          <section id="sGestao" className="sGestao">
            <h2 className="sGestaoTitulo">💡 Sistema de Gestão para Ateliê de Costura</h2>
            <p className="sGestaoDescricao">
              Este é um projeto desenvolvido em Python com foco na organização de serviços em um ateliê de costura, gerenciado pela minha mãe...
            </p>
            <p className="sGestaoDescricao">
              A interface gráfica foi construída com a biblioteca <strong>Tkinter</strong>, e todas as informações são armazenadas com <strong>SQLite</strong>.
            </p>
            <p className="sGestaoDescricao">Entre os principais recursos estão:</p>

            <ul className="sGestaoLista">
              <li>✅ Cadastro e edição de pessoas;</li>
              <li>✅ Registro de serviços com controle de status;</li>
              <li>✅ Histórico de pagamentos parciais;</li>
              <li>✅ Controle de produtos, estoque e compras;</li>
              <li>✅ Interface com múltiplas abas e tabelas.</li>
            </ul>

            <p className="sGestaoDescricao">Tecnologias utilizadas:</p>
            <ul className="sGestaoTecnologias">
              <li>🧠 Python 3</li>
              <li>🛠️ Tkinter</li>
              <li>🗃️ SQLite</li>
              <li>🧰 PGAdmin</li>
            </ul>

            <p className="sGestaoDescricao">
              O objetivo é facilitar o dia a dia do ateliê com uma solução prática e adaptada ao negócio familiar.
            </p>
          </section>
        </div>
      </div>
    </>
  );
}
