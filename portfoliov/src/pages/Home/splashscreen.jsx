import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './style.css';

const mensagens = [
  'JavaScript;',
  'C++;',
  'Python;',
  'PostgreSQL;',
  'Node.JS;',
  'React;',
  'Frontend & Backend;',
  'Git & GitHub.'
];

function SplashScreen({ onFinish }) {
  const [index, setIndex] = useState(0);
  const [step, setStep] = useState(1);

  useEffect(() => {
    if (step === 1) {
      const interval = setInterval(() => {
        setIndex(prev => {
          if (prev === mensagens.length - 1) {
            clearInterval(interval);
            setTimeout(() => setStep(2), 2500);
          }
          return prev + 1;
        });
      }, 300);
      return () => clearInterval(interval);
    } else if (step === 2) {
      const timer = setTimeout(() => setStep(3), 4300);
      return () => clearTimeout(timer);
    } else if (step === 3) {
      const timer = setTimeout(() => onFinish(), 1000);
      return () => clearTimeout(timer);
    }
  }, [step, onFinish]);

  return (
    <AnimatePresence>
      {(step === 1 || step === 2 || step === 3) && (
        <motion.div
          key="splash-wrapper"
          className="splash-screen"
          initial={{ y: 0 }}
          animate={{ y: step === 3 ? '-100vh' : 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: 'easeInOut' }}
        >
          <button className="skipButton" onClick={onFinish}>Pular animação!</button>
          <AnimatePresence mode="wait">
            {step === 1 && (
              <motion.div
                key="slide1"
                className="splash-box"
                initial={{ x: 0, opacity: 1 }}
                exit={{ x: -800, opacity: 0 }}
                transition={{ duration: 1.2 }}
              >
                <h1 className="splash-title">Bem-vindo ao meu portfólio!</h1>
                <h2 className="splash-subtitle">Tecnologias com as quais costumo trabalhar:</h2>
                <div className="linguagens-container">
                  <ul className="coluna">
                    {mensagens.slice(0, 4).map((msg, i) => (
                      <li key={i} className={`fade-in ${i <= index ? 'show' : ''}`} style={{ '--i': i }}>{msg}</li>
                    ))}
                  </ul>
                  <ul className="coluna">
                    {mensagens.slice(4).map((msg, i) => (
                      <li key={i + 4} className={`fade-in ${i + 4 <= index ? 'show' : ''}`} style={{ '--i': i + 4 }}>{msg}</li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div
                key="slide2"
                className="splash-box"
                initial={{ x: 800, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -800, opacity: 0 }}
                transition={{ duration: 1.2 }}
              >
                <div className="sobre-container">
                  <div className="foto">
                    <img src="src/assets/eu.jpeg" alt="Foto sobre minha pessoa" />
                  </div>
                  <div className="info">
                    <h2>Frank Kiess</h2>
                    <p><strong>Cidade:</strong> Passo Fundo</p>
                    <p><strong>Idade:</strong> 24 anos</p>
                    <p><strong>Universidade:</strong> UPF</p>
                    <p><strong>Curso:</strong> 2º semestre de Ciência da Computação</p>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default SplashScreen;