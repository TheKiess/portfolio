import { Link } from 'react-router-dom';
import './sobre.css';

function Sobre() {
  return (
    <>
      <header className="cabecalho">
        <nav>
          <Link to="/">Início</Link>
          <a href="#projetos">Projetos</a>
          <Link to="/contato">Contato</Link>
        </nav>
      </header>

      <div className="content">
        <div className="pages">
          <h2 className="title">Sobre Mim</h2>
          <div className="perfil-container">
            <img 
              src="/imagens/foto-perfil-placeholder.jpg" 
              alt="foto da minha pessoa" 
              className="perfil-foto"
            />
            <div className="descricao">
              <p>
                Olá! Me chamo <strong>Frank Kiess</strong>, tenho 24 anos e sou estudante de <strong>Ciência da Computação</strong> na 
                <strong> Universidade de Passo Fundo (UPF)</strong>, no Rio Grande do Sul. Sou apaixonado por tecnologia, inovação e 
                pelo poder da programação em transformar ideias em soluções reais.
              </p>
              <p>
                Desde o início da minha graduação, busco evoluir constantemente como desenvolvedor, explorando diferentes áreas da computação.
                Já trabalhei com <strong>frontend</strong>, <strong>backend</strong>, <strong>bancos de dados relacionais</strong> como o <strong>PostgreSQL</strong> e ferramentas de visualização como o <strong>pgAdmin</strong>. 
                Atualmente, estou me aprofundando em <strong>C++</strong> e desenvolvendo este portfólio, onde venho aplicando meus conhecimentos em design de interface e integração com banco de dados.
              </p>
              <p>
                No momento, estou atuando como <strong>estagiário de desenvolvimento</strong> na <strong>Atua by Nstech</strong>, uma empresa de tecnologia que tem me proporcionado um ambiente de aprendizado constante e desafiador. 
                Lá, trabalho com <strong>PHP</strong>, <strong>JavaScript</strong>, <strong>Docker</strong>, <strong>PostgreSQL</strong>, <strong>GIT</strong> e <strong>Ubuntu</strong>, ampliando minha experiência em desenvolvimento backend e infraestrutura.
              </p>
            </div>
          </div>

          <div className="universidade-container">
            <img 
              src="/imagens/foto-universidade-placeholder.jpg" 
              alt="Universidade de Passo Fundo (UPF)" 
              className="universidade-foto"
            />
            <p className="descricao">
              Tenho muito orgulho de estudar na UPF, uma universidade que me proporciona base teórica sólida e contato com tecnologias atuais. 
              Em breve, adicionarei aqui uma imagem real da universidade para compartilhar um pouco do ambiente onde estou me formando.
            </p>
          </div>

          <h2 className="title">Objetivos</h2>
          <p className="descricao">
            Meu maior objetivo é atuar em projetos desafiadores que me permitam crescer tecnicamente e colaborar com profissionais de diferentes áreas. 
            Acredito no aprendizado contínuo e na troca de experiências como pilares para a evolução.
          </p>
          <p className="descricao">
            Tenho grande interesse em oportunidades de <strong>intercâmbio</strong>, pois vejo nelas uma chance de expandir minha visão de mundo, aprender novas culturas e aplicar minhas habilidades em contextos globais.
          </p>
          <p className="descricao">
            Este portfólio é um reflexo do meu desenvolvimento como programador, e está em constante construção. Em breve, trarei novas atualizações, fotos reais e mais projetos práticos que venho desenvolvendo ao longo da graduação e do estágio.
          </p>
        </div>
      </div>
    </>
  );
}

export default Sobre;