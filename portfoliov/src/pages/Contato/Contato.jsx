import { Link } from 'react-router-dom';
import { FaLinkedin, FaGithub, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import styles from './contato.module.css';

function Contato() {
  return (
    <>
      <header className="cabecalho">
        <nav>
          <Link to="/">Início</Link>
          <Link to="/sobre">Sobre</Link>
          <a href="#projetos">Projetos</a>
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
        </div>
      </div>
    </>
  );
}
export default Contato;