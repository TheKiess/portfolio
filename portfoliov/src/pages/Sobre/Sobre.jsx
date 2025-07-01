import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './sobre.css';
import eu from '../../../public/img/eu2.jpeg';
import faculdade from '../../../public/img/faculdade.jpg';

export default function Sobre() {
  const [showPerfilText, setShowPerfilText] = useState(false);
  const [displayedPerfilText, setDisplayedPerfilText] = useState('');

  const [showFaculdadeText, setShowFaculdadeText] = useState(false);
  const [displayedFaculdadeText, setDisplayedFaculdadeText] = useState('');

  const perfilTexto = `
Olá! Me chamo Frank Kiess, tenho 24 anos e sou estudante de Ciência da Computação na Universidade de Passo Fundo (UPF), 
no Rio Grande do Sul. Sou apaixonado por tecnologia, inovação e pelo poder da programação em transformar ideias em soluções reais.

Desde o início da minha graduação, busco evoluir constantemente como desenvolvedor, explorando diferentes áreas da computação. 
Já trabalhei com frontend, backend, bancos de dados relacionais como o PostgreSQL e ferramentas de visualização como o pgAdmin. 
Atualmente, estou me aprofundando em C++ e desenvolvendo este portfólio, onde venho aplicando meus conhecimentos em design de interface e integração com banco de dados.

No momento, estou atuando como estagiário de desenvolvimento na Atua by Nstech, uma empresa de tecnologia que tem me proporcionado um ambiente de aprendizado constante e desafiador. 
Lá, trabalho com PHP, JavaScript, Docker, PostgreSQL, GIT e Ubuntu, ampliando minha experiência em desenvolvimento backend e infraestrutura.
`;

  const faculdadeTexto = `
Tenho muito orgulho de estudar na UPF, uma universidade que me proporciona base teórica sólida e contato com tecnologias atuais.
A infraestrutura, os professores e os projetos que participo me preparam para os desafios reais do mercado. 

Além das disciplinas práticas, participo de atividades extracurriculares, projetos de extensão e grupos de estudo com colegas engajados. 
Essa vivência torna minha jornada acadêmica ainda mais enriquecedora e inspiradora.
  `;

  // Efeito para perfil
  useEffect(() => {
    if (showPerfilText && displayedPerfilText.length < perfilTexto.length) {
      const timeout = setTimeout(() => {
        setDisplayedPerfilText(perfilTexto.slice(0, displayedPerfilText.length + 1));
      }, 15);
      return () => clearTimeout(timeout);
    }
  }, [showPerfilText, displayedPerfilText]);

  // Efeito para universidade
  useEffect(() => {
    if (showFaculdadeText && displayedFaculdadeText.length < faculdadeTexto.length) {
      const timeout = setTimeout(() => {
        setDisplayedFaculdadeText(faculdadeTexto.slice(0, displayedFaculdadeText.length + 1));
      }, 15);
      return () => clearTimeout(timeout);
    }
  }, [showFaculdadeText, displayedFaculdadeText]);

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
              src={eu}
              alt="foto da minha pessoa"
              className="perfilFoto"
              width={350}
              onClick={() => {
                setShowPerfilText(true);
                setDisplayedPerfilText('');
              }}
            />
            <div className="descricaoSobre">
              {showPerfilText ? (
                <p style={{ whiteSpace: 'pre-line' }}>{displayedPerfilText}</p>
              ) : (
                <p style={{ fontStyle: 'italic', opacity: 0.6 }}>
                  Clique na minha foto para saber mais sobre mim.
                </p>
              )}
            </div>
          </div>

          <h2 className="title">Universidade</h2>
          <div className="universidade-container">
            <img
              src={faculdade}
              alt="Universidade de Passo Fundo (UPF)"
              className="universidade-foto"
              width={350}
              onClick={() => {
                setShowFaculdadeText(true);
                setDisplayedFaculdadeText('');
              }}
            />
            <p className="descricao">
              {showFaculdadeText ? (
                <span style={{ whiteSpace: 'pre-line' }}>{displayedFaculdadeText}</span>
              ) : (
                <span style={{ fontStyle: 'italic', opacity: 0.6 }}>
                  Clique na imagem da universidade para conhecer mais da minha experiência acadêmica.
                </span>
              )}
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
