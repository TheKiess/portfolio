import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './projeto.css';

const imagens = [
  { src: '/img/1.png', legenda: 'Tela de Login' },
  { src: '/img/2.png', legenda: 'Tela Inicial' },
  { src: '/img/3.png', legenda: 'Controle de Valores - Parte 1' },
  { src: '/img/4.png', legenda: 'Controle de Valores - Parte 2' },
  { src: '/img/5.png', legenda: 'Cadastro de Pessoas' },
  { src: '/img/6.png', legenda: 'Gestão de Serviços e Produtos' },
  { src: '/img/7.png', legenda: 'DER - Modelo de Dados' }
];

export default function Projetos() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState('right');

  useEffect(() => {
    const intervalo = setInterval(() => {
      setDirection('right');
      setIndex((prev) => (prev + 1) % imagens.length);
    }, 3000);

    return () => clearInterval(intervalo);
  }, []);

  const trocarImagem = (i) => {
    setDirection(i > index ? 'right' : 'left');
    setIndex(i);
  };

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

            {/* Slideshow com animação e indicadores */}
            <div className={`slideshow imagem-${direction}`}>
              <img
                key={index}
                src={imagens[index].src}
                alt={imagens[index].legenda}
              />
              <p>{imagens[index].legenda}</p>
              <div className="indicadores">
                {imagens.map((_, i) => (
                  <span
                    key={i}
                    onClick={() => trocarImagem(i)}
                    className={`bolinha ${i === index ? 'ativo' : ''}`}
                  />
                ))}
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
