import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="navbar">
        <img src={logo} className="logo" alt="logo" />
        <nav className="nav-links">
          <a href="#home">Início</a>
          <a href="#sobre">Sobre</a>
          <a href="#projetos">Projetos</a>
          <a href="#contato">Contato</a>
        </nav>
      </header>

      <main className="main-content">
        <h1>Bem-vindo ao meu portfólio!</h1>
        <p>Role a página para explorar.</p>
      </main>
    </div>
  );
}

export default App;