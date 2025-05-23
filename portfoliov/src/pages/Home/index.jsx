import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import SplashScreen from './splashscreen';
import './style.css';

function Home() {
  const [showSplash, setShowSplash] = useState(true);
  const [activeExperience, setActiveExperience] = useState(null);
  const [animating, setAnimating] = useState(false);

  const experienceList = {
    exercito: {
      date: '4 anos',
      details: [
        'Gerenciamento de tarefas e documentação online;',
        'Invenção de banners, placas e quadros murais;',
        'Desenvolvimento de materiais gráficos digitais;',
        'Criação e automação de processos administrativos;',
        'Motorista de viaturas.',
      ],
    },
    evo: {
      date: '7 meses',
      details: [
        'Montagem dos equipamentos, configurações e testes;',
        'Organização de mercadorias;',
        'Manuseio e inserção em dashboard;',
        'Programação com pacote Office;',
        'Atendimento ao cliente e suporte via AnyDesk (SaaS).',
      ],
    },
  };

  const handleExperienceClick = (exp) => {
    if (exp === activeExperience) return;
    setAnimating(false);
    setTimeout(() => {
      setActiveExperience(exp);
      setAnimating(true);
    }, 10);
  };

  const scrollLeft = () => {
    document.querySelector('.pages')?.scrollBy({ left: -300, behavior: 'smooth' });
  };

  const scrollRight = () => {
    document.querySelector('.pages')?.scrollBy({ left: 300, behavior: 'smooth' });
  };

  return (
    <>
      <AnimatePresence>
        {showSplash && (
          <SplashScreen onFinish={() => setShowSplash(false)} />
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
            <header className="cabecalho">
              <nav>
                <Link to="/sobre">Sobre</Link>
                <a href="#projetos">Projetos</a>
                <a href="#contato">Contato</a>
              </nav>
            </header>

            <div className="content">
              <button className="buttonLeft" onClick={scrollLeft}>‹</button>

              <div className="pages">
                <h2 className="title">Frank Kiess</h2>
                <p className="descricao">
                  Sou estudante de Ciência da Computação no 2º semestre, apaixonado por tecnologia e desenvolvimento.
                  Já trabalhei com frontend, backend, manipulação de banco de dados com PGAdmin e algoritmos em Python.
                  Atualmente estou me aprofundando em C++ e buscando oportunidades de intercâmbio para crescer profissionalmente.
                </p>

                <h2 className="title">Experiências</h2>
                <div id="experiences">
                  <div id="separator1">
                    <h4
                      id="experience1"
                      className={activeExperience === 'exercito' ? 'active' : ''}
                      onClick={() => handleExperienceClick('exercito')}
                    >
                      Exército Brasileiro
                    </h4>
                    <h4
                      id="experience2"
                      className={activeExperience === 'evo' ? 'active' : ''}
                      onClick={() => handleExperienceClick('evo')}
                    >
                      EVO Automações
                    </h4>
                  </div>

                  <div id="separator2">
                    {activeExperience
                      ? <h3 className="txtDate">{experienceList[activeExperience].date}</h3>
                      : 'Para mais informações clique à esquerda!'}
                  </div>

                  <div id="separator3">
                    {activeExperience && (
                      <div className={`experience-details ${animating ? 'apaga' : ''}`}>
                        <ul className="txtUl">
                          {experienceList[activeExperience].details.map((item, index) => (
                            <li key={index} className="txtExp">{item}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <button className="buttonRight" onClick={scrollRight}>›</button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Home;
