import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './style.css';
import Eu from '../../../public/img/eu.jpeg';

const tecnologias = [
  'JavaScript;',
  'C++;',
  'Python;',
  'PHP;',
  'PostgreSQL;',
  'Node.JS;',
  'React;',
  'Docker;',
  'Git & GitHub;',
  'Frontend & Backend;'
];

function SlideTecnologias({ index }) {
  const half = Math.ceil(tecnologias.length / 2);
  const col1 = tecnologias.slice(0, half);
  const col2 = tecnologias.slice(half);

  return (
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
          {col1.map((msg, i) => (
            <li key={i} className={`fade-in ${i <= index ? 'show' : ''}`} style={{ '--i': i }}>{msg}</li>
          ))}
        </ul>
        <ul className="coluna">
          {col2.map((msg, i) => {
            const idx = i + half;
            return (
              <li key={idx} className={`fade-in ${idx <= index ? 'show' : ''}`} style={{ '--i': idx }}>{msg}</li>
            );
          })}
        </ul>
      </div>
    </motion.div>
  );
}

function SlideSobre() {
  return (
    <motion.div
      key="slide2"
      className="splash-box"
      initial={{ scale: 0.95, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0.95, opacity: 0 }}
      transition={{ duration: 1.2 }}
    >
      <div className="sobre-container">
        <div className="foto">
          <img src={Eu} alt="Foto de Frank Kiess, desenvolvedor" />
        </div>
        <div className="info">
          <h2>Frank Kiess</h2>
          <p><strong>Cidade:</strong> Passo Fundo</p>
          <p><strong>Idade:</strong> 24 anos</p>
          <p><strong>Universidade:</strong> UPF</p>
          <p><strong>Curso:</strong> Ciência da Computação (3º semestre)</p>
          <p><strong>Estudando:</strong> PHP, Docker e Git</p>
        </div>
      </div>
    </motion.div>
  );
}

function SplashScreen({ onFinish }) {
  const [index, setIndex] = useState(0);
  const [step, setStep] = useState(1);

  useEffect(() => {
    let timer;
    if (step === 1) {
      const interval = setInterval(() => {
        setIndex(prev => {
          if (prev === tecnologias.length - 1) {
            clearInterval(interval);
            timer = setTimeout(() => setStep(2), 2500);
          }
          return prev + 1;
        });
      }, 300);
      return () => {
        clearInterval(interval);
        clearTimeout(timer);
      };
    }

    if (step === 2) {
      timer = setTimeout(() => setStep(3), 5000);
    } else if (step === 3) {
      timer = setTimeout(() => onFinish(), 1000);
    }

    return () => clearTimeout(timer);
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
          <button className="skipButton" onClick={onFinish}>Pular animação</button>

          <AnimatePresence mode="wait">
            {step === 1 && <SlideTecnologias index={index} />}
            {step === 2 && <SlideSobre />}
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default SplashScreen;
