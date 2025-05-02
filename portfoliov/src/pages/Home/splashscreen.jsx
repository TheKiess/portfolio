import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './style.css';

const mensagens = [
  'JavaScript',
  'Python',
  'React',
  'C++',
  'PostgreSQL',
  'Frontend & Backend',
  'Aprendizado Contínuo 🚀',
  'Git & GitHub'
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
            setTimeout(() => setStep(2), 2000);
          }
          return prev + 1;
        });
      }, 300);
      return () => clearInterval(interval);
    } else if (step === 2) {
      const timer = setTimeout(() => onFinish(), 4000);
      return () => clearTimeout(timer);
    }
  }, [step, onFinish]);

  return (
    <div className="splash-screen">
      <AnimatePresence mode="wait">
        {step === 1 && (
          <motion.div
            key="slide1"
            className="splash-box"
            initial={{ x: 0, opacity: 1 }}
            exit={{ x: -800, opacity: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="splash-title">Bem-vindo ao meu portfólio</h1>
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
            className="splash-box sobre-box"
            initial={{ x: 800, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -800, opacity: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="sobre-container">
              <div className="foto">
                <img src="./eu.jpeg" alt="Minha foto" />
              </div>
              <div className="info">
                <h2>Frank</h2>
                <p><strong>Cidade:</strong> Passo Fundo</p>
                <p><strong>Idade:</strong> 24 anos</p>
                <p><strong>Universidade:</strong> UPF</p>
                <p><strong>Curso:</strong> 2º semestre de Ciência da Computação</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default SplashScreen;