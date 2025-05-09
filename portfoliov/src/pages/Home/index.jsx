import { useState } from 'react';
import SplashScreen from './splashscreen';
import './style.css';

function Home() {
  const [showSplash, setShowSplash] = useState(true);
  const [activeExperience, setActiveExperience] = useState(null);

  const experiences = {
    exercito: (
      <ul>
        <li className='txt_exp'>Gerenciamento de tarefas e documentação online</li>
        <li className='txt_exp'>Invenção de banners, placas e quadros murais</li>
        <li className='txt_exp'>Desenvolvimento de materiais gráficos digitais</li>
        <li className='txt_exp'>Criação e automação de processos administrativos</li>
        <li className='txt_exp'>Motorista de viaturas</li>
      </ul>
    ),
    evo: (
      <ul>
        <li className='txt_exp'>Montagem dos equipamentos, configurações e testes</li>
        <li className='txt_exp'>Organização de mercadorias</li>
        <li className='txt_exp'>Manuseio e inserção em dashboard</li>
        <li className='txt_exp'>Programação com pacote Office</li>
        <li className='txt_exp'>Atendimento ao cliente e suporte via AnyDesk (SaaS)</li>
      </ul>
    )
  };

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
          <h2 className='title'>Frank Kiess</h2>
          <p className='descricao'>
            Sou estudante de Ciência da Computação no 2º semestre, apaixonado por tecnologia e desenvolvimento.
            Já trabalhei com frontend, backend, manipulação de banco de dados com PGAdmin e algoritmos em Python.
            Atualmente estou me aprofundando em C++ e buscando oportunidades de intercâmbio para crescer profissionalmente.
          </p><br/>
          <h2 className='title'>Experiências</h2>
          <div id='experiences'>
            <div id="separator1">
              <h4 id='experience1' onClick={() => setActiveExperience('exercito')}>Exército Brasileiro</h4>
              <h4 id='experience2' onClick={() => setActiveExperience('evo')}>EVO Automações</h4>
            </div>
            <div id="separator2">
            </div>
            <div id="separator3">
            {activeExperience && (
                <div className='experience-details'>
                  {experiences[activeExperience]}
                </div>
              )}
            </div>
          </div>
        </div>
        <button className='buttonRight'>›</button>
      </div>
    </div>
  );
}

export default Home;