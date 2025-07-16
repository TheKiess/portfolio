import { useRef } from 'react';
import emailjs from 'emailjs-com';
import { Link } from 'react-router-dom';
import { FaLinkedin, FaGithub, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import styles from './contato.module.css';
import usuario from '../../../public/img/usuario.png';

function Contato() {
  const form = useRef();

  const enviarEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
      .then(() => {
        alert('Mensagem enviada com sucesso!');
        form.current.reset();
      })
      .catch((err) => {
        console.error('Erro ao enviar:', err);
        alert('Ocorreu um erro ao enviar sua mensagem. Tente novamente mais tarde.');
      });
  };

  return (
    <>
      <header className="cabecalho">
        <nav>
          <Link to="/">Início</Link>
          <Link to="/sobre">Sobre</Link>
          <Link to="/projetos">Projetos</Link>
          <Link to="/perfil">
            <img src={usuario} alt="Tela de login" height={35}/>
          </Link>
        </nav>
      </header>

      <div className={styles.content}>
        <div className={styles.contactCard}>
          <h2 className={styles.title}>Entre em Contato:</h2>

          <div className={styles.item}>
            <FaEnvelope className={styles.icon} />
            <strong>Email:</strong> frank_kiess.junior@hotmail.com
          </div>

          <div className={styles.item}>
            <FaLinkedin className={styles.icon} />
            <strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/frank-kiess/" target="_blank" rel="noreferrer">frank-kiess</a>
          </div>

          <div className={styles.item}>
            <FaGithub className={styles.icon} />
            <strong>GitHub:</strong> <a href="https://github.com/TheKiess" target="_blank" rel="noreferrer">TheKiess</a>
          </div>

          <div className={styles.item}>
            <FaMapMarkerAlt className={styles.icon} />
            <strong>Endereço:</strong> RS/Brasil
          </div>

          <form ref={form} onSubmit={enviarEmail} className={styles.form}>
            <label>Nome:</label>
            <input type="text" name="fromName" required />
            <label>Email:</label>
            <input type="email" name="replyTo" required />
            <label>Mensagem:</label>
              <textarea name="message" rows="5" required></textarea>
            <button type="submit">Enviar Mensagem</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Contato;