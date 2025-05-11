import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SplashScreen from './splashscreen';
import './style.css';

function Home() {
  const [showSplash, setShowSplash] = useState(true);
  const [activeExperience, setActiveExperience] = useState(null);
  const [animating, setAnimating] = useState(false);

  const experiences = {
    exercito: (
      <ul className='txtUl'>
        <li className='txtExp'>Gerenciamento de tarefas e documentação online;</li>
        <li className='txtExp'>Invenção de banners, placas e quadros murais;</li>
        <li className='txtExp'>Desenvolvimento de materiais gráficos digitais;</li>
        <li className='txtExp'>Criação e automação de processos administrativos;</li>
        <li className='txtExp'>Motorista de viaturas.</li>
      </ul>
    ),
    evo: (
      <ul className='txtUl'>
        <li className='txtExp'>Montagem dos equipamentos, configurações e testes;</li>
        <li className='txtExp'>Organização de mercadorias;</li>
        <li className='txtExp'>Manuseio e inserção em dashboard;</li>
        <li className='txtExp'>Programação com pacote Office;</li>
        <li className='txtExp'>Atendimento ao cliente e suporte via AnyDesk (SaaS).</li>
      </ul>
    )
  };

  const experiencesDate = {
    exercitoDate: <h3 className='txtDate'>4 anos</h3>,
    evoDate: <h3 className="txtDate">7 meses</h3>
  };

  const handleExperienceClick = (exp) => {
    if (exp === activeExperience) return;
    setAnimating(false);
    setTimeout(() => {
      setActiveExperience(exp);
      setAnimating(true);
    }, 10);
  };

  return (
    <>
      <AnimatePresence>
        {showSplash && (
          <SplashScreen
            onFinish={() => setShowSplash(false)}
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {!showSplash && (
          <motion.div
            key="main-content"
            initial={{ clipPath: 'inset(100% 0% 0% 0%)' }}
            animate={{ clipPath: 'inset(0% 0% 0% 0%)' }}
            exit={{ clipPath: 'inset(0% 0% 100% 0%)' }}
            transition={{ duration: 1.2, ease: 'easeInOut' }}
            className="container"
          >
            <header className='cabecalho'>
              <nav>
                <a href="#sobre">Sobre</a>
                <a href="#projetos">Projetos</a>
                <a href="#contato">Contato</a>
              </nav>
            </header>
            <div className="content">
              <button className='buttonLeft'>‹</button>
              <div className='pages'>
                <h2 className='title'>Frank Kiess</h2>
                <p className='descricao'>
                  Sou estudante de Ciência da Computação no 2º semestre, apaixonado por tecnologia e desenvolvimento.
                  Já trabalhei com frontend, backend, manipulação de banco de dados com PGAdmin e algoritmos em Python.
                  Atualmente estou me aprofundando em C++ e buscando oportunidades de intercâmbio para crescer profissionalmente.
                </p>
                <h2 className='title'>Experiências</h2>
                <div id='experiences'>
                  <div id="separator1">
                    <h4
                      id='experience1'
                      className={activeExperience === 'exercito' ? 'active' : ''}
                      onClick={() => handleExperienceClick('exercito')}
                    >
                      Exército Brasileiro
                    </h4>
                    <h4
                      id='experience2'
                      className={activeExperience === 'evo' ? 'active' : ''}
                      onClick={() => handleExperienceClick('evo')}
                    >
                      EVO Automações
                    </h4>
                  </div>
                  <div id="separator2">
                    {activeExperience
                      ? experiencesDate[`${activeExperience}Date`]
                      : 'Para mais informações clique à esquerda!'}
                  </div>
                  <div id="separator3">
                    {activeExperience && (
                      <div className={`experience-details ${animating ? 'apaga' : ''}`}>
                        {experiences[activeExperience]}
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <button className='buttonRight'>›</button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Home;