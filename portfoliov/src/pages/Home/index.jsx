import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import SplashScreen from './splashscreen';
import './style.css';
import usuario from '../../../public/img/usuario.png';

function Home() {
  const [showSplash,       setShowSplash]       = useState(true);
  const [activeExperience, setActiveExperience] = useState(null);
  const [activeToolset,    setActiveToolset]    = useState(null);

  const experienceList = 
  {
    atua:
    {
      date: 'Atualmente',
      details: 
      [
        'Atuação como estagiário de desenvolvimento na Atua by Nstech;',
        'Utilização de PHP para desenvolvimento backend;',
        'Trabalho com containers usando Docker;',
        'Manipulação de banco de dados PostgreSQL;',
        'Versionamento de código com GIT;',
        'Ambiente de desenvolvimento Linux (Ubuntu);',
        'Integração com tecnologias JavaScript.'
      ],
    },
    exercito:
    {
      date: '4 anos',
      details:
      [
        'Gerenciamento de tarefas e documentação online;',
        'Invenção de banners, placas e quadros murais;',
        'Desenvolvimento de materiais gráficos digitais;',
        'Criação e automação de processos administrativos;',
        'Motorista de viaturas.',
      ],
    },
    evo:
    {
      date: '9 meses',
      details:
      [
        'Montagem dos equipamentos, configurações e testes;',
        'Organização de mercadorias;',
        'Manuseio e inserção em dashboard;',
        'Programação com pacote Office;',
        'Atendimento ao cliente e suporte via AnyDesk (SaaS).',
      ],
    },
  };

  const toolList = 
  {
    frequente:
    {
      date: 'No dia a dia',
      icons:
      [
        'php', 
        'docker', 
        'ubuntu', 
        'html5', 
        'css3', 
        'react', 
        'javascript', 
        'python', 
        'postgresql'
      ],
    },
    academico:
    {
      date: 'Em projetos e aulas',
      icons:
      [
        'r', 
        'arduino', 
        'cplusplus'
      ],
    }
  };

  const handleExperienceClick = (exp) => {
    if (exp === activeExperience) return;
    setActiveExperience(null);
    setTimeout(() => setActiveExperience(exp), 10);
  };

  const handleToolClick = (tool) => {
    if (tool === activeToolset) return;
    setActiveToolset(null);
    setTimeout(() => setActiveToolset(tool), 10);
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
              <nav className="nav-cabecalho">
                <div className="links-esquerda">
                  <Link to="/sobre">Sobre</Link>
                  <Link to="/projetos">Projetos</Link>
                  <Link to="/contato">Contato</Link>
                </div>
                <div className="login-area">
                  <Link to="/login" className="login-link">
                    <span>Login</span>
                    <img src={usuario} alt="Login" />
                  </Link>
                </div>
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
                    <h4 className={activeExperience === 'atua'     ? 'active' : ''} onClick={() => handleExperienceClick('atua')}>Atua by Nstech</h4>
                    <h4 className={activeExperience === 'exercito' ? 'active' : ''} onClick={() => handleExperienceClick('exercito')}>Exército Brasileiro</h4>
                    <h4 className={activeExperience === 'evo'      ? 'active' : ''} onClick={() => handleExperienceClick('evo')}>EVO Automações</h4>
                  </div>

                  <div id="separator2">
                    {activeExperience ? <h3 className="txtDate">{experienceList[activeExperience].date}</h3> : 'Para mais informações clique à esquerda!'}
                  </div>

                  <div id="separator3">
                    <AnimatePresence mode="wait">
                      {activeExperience && (
                        <motion.div
                          key={activeExperience}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0}}
                          transition={{ duration: 0.3 }}
                          
                          className="experience-details"
                        >
                          <ul className="txtUl">
                            {experienceList[activeExperience].details.map((item, index) => (
                              <li key={index} className="txtExp">{item}</li>
                            ))}
                          </ul>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>

                <h2 className="title">Ferramentas e Linguagens</h2>
                <div id="tools">
                  <div id="tools-separator1">
                    <h4 className={activeToolset === 'frequente' ? 'active' : ''} onClick={() => handleToolClick('frequente')}>Mais utilizadas</h4>
                    <h4 className={activeToolset === 'academico' ? 'active' : ''} onClick={() => handleToolClick('academico')}>Acadêmicas</h4>
                  </div>

                  <div id="tools-separator2">
                    {activeToolset ? <h3 className="txtDate">{toolList[activeToolset].date}</h3> : 'Clique para ver as ferramentas'}
                  </div>

                  <div id="tools-separator3">
                    <AnimatePresence mode="wait">
                      {activeToolset && (
                        <motion.div
                          key={activeToolset}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="experience-details"
                        >
                          <div className="icon-grid">
                            {toolList[activeToolset].icons.map((icon, index) => (
                              <img
                                key={index}
                                src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${icon}/${icon}-original.svg`}
                                alt={icon}
                              />
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
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
