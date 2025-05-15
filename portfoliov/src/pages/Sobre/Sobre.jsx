import { Link } from 'react-router-dom';

function Sobre() {
  return (
    <>
      <header className="cabecalho">
        <nav>
          <Link to="/">Início</Link>
          <a href="#projetos">Projetos</a>
          <a href="#contato">Contato</a>
        </nav>
      </header>

      <div className="content">
        <div className="pages">
          <h2 className="title">Sobre Mim</h2>
          <p className="descricao">
            Olá! Sou Frank Kiess, estudante de Ciência da Computação com grande entusiasmo por tecnologia e inovação.
            Busco constantemente crescer profissionalmente, explorar novas linguagens e participar de projetos desafiadores.
            Já atuei com frontend, backend, banco de dados e atualmente estou aprofundando meus conhecimentos em C++.
          </p>

          <h2 className="title">Objetivos</h2>
          <p className="descricao">
            Meu objetivo é aplicar meus conhecimentos em projetos reais, contribuir com soluções eficientes e aprender com profissionais experientes.
            Também tenho interesse em oportunidades de intercâmbio para expandir minha visão de mundo e minha atuação na área.
          </p>
        </div>
      </div>
    </>
  );
}

export default Sobre;