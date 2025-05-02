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
        <h1>Frank - Desenvolvedor</h1>
        <nav>
          <a href="#sobre">Sobre</a>
          <a href="#projetos">Projetos</a>
          <a href="#contato">Contato</a>
        </nav>
      </header>

      <div id="content">
        <button className='buttonLeft'>‹</button>
        <div className='pages'>{}</div>
        <button className='buttonRight'>›</button>
      </div>
    </div>
  );
}

export default Home;