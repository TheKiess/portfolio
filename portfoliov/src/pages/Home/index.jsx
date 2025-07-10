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
    atua: {
      date: 'Atualmente',
      details: [
        'Atuação como estagiário de desenvolvimento na Atua by Nstech;',
        'Utilização de PHP para desenvolvimento backend;',
        'Trabalho com containers usando Docker;',
        'Manipulação de banco de dados PostgreSQL;',
        'Versionamento de código com GIT;',
        'Ambiente de desenvolvimento Linux (Ubuntu);',
        'Integração com tecnologias JavaScript.'
      ],
    },
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
      date: '9 meses',
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
                <Link to="/projetos">Projetos</Link>
                <Link to="/contato">Contato</Link>
              </nav>
            </header>

            <div className="content">

              <div className="pages">
                <h2 className="title">Frank Kiess</h2>
                <p className="descricao">
                  Sou estudante de Ciência da Computação no 3º semestre, apaixonado por tecnologia e desenvolvimento.
                  Atualmente, trabalho como estagiário de desenvolvimento na Atua by Nstech, utilizando tecnologias como PHP, Docker, JavaScript, PostgreSQL, GIT e Ubuntu.
                  Já atuei com frontend, backend, banco de dados (PGAdmin) e algoritmos em Python. Também estou me aprofundando em C++ e buscando oportunidades de intercâmbio para meu crescimento profissional.
                </p>

                <h2 className="title">Experiências</h2>
                <div id="experiences">
                  <div id="separator1">
                    <h4
                      id="experience0"
                      className={activeExperience === 'atua' ? 'active' : ''}
                      onClick={() => handleExperienceClick('atua')}
                    >
                      Atua by Nstech
                    </h4>
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
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Home;