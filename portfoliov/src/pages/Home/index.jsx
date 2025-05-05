import { useState } from 'react';
import SplashScreen from './splashscreen';
import './style.css';

function Home() {
  const [showSplash, setShowSplash] = useState(true);

  if (showSplash) {
    return <SplashScreen onFinish={() => setShowSplash(false)} />;
  }

  return (
    <div className='container'>
      <header className='cabecalho'>
        <nav>
          <a href="#sobre">Sobre</a>
          <a href="#projetos">Projetos</a>
          <a href="#contato">Contato</a>
        </nav>
      </header>
      <div id="content">
        <button className='buttonLeft'>‹</button>
        <div className='pages'>
        <h1 className='nome'>Frank Kiess</h1>
        <p className='descricao'>
          Sou estudante de Ciência da Computação no 2º semestre, apaixonado por tecnologia e desenvolvimento.
          Já trabalhei com frontend, backend, manipulação de banco de dados com PGAdmin e algoritmos em Python.
          Atualmente estou me aprofundando em C++ e buscando oportunidades de intercâmbio para crescer profissionalmente.
        </p>
        </div>
        <button className='buttonRight'>›</button>
      </div>
    </div>
  );
}

export default Home;