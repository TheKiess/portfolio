import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './sobre.css';
import eu from '../../../public/img/eu2.jpeg';
import faculdade from '../../../public/img/faculdade.jpg';
import usuario from '../../../public/img/usuario.png';

function useTypewriterEffect(trigger, textoCompleto) {
  const [textoAtual, setTextoAtual] = useState('');

  useEffect(() => {
    if (trigger && textoAtual.length < textoCompleto.length) {
      const timeout = setTimeout(() => {
        setTextoAtual(textoCompleto.slice(0, textoAtual.length + 1));
      }, 15);
      return () => clearTimeout(timeout);
    }
  }, [trigger, textoAtual, textoCompleto]);

  return [textoAtual, setTextoAtual];
}

function BlocoComImagem({
  imagem,
  alt,
  textoCompleto,
  textoAtual,
  ativado,
  ativar,
  resetarTexto,
  placeholder,
  classImagem,
  classTexto,
}) {
  return (
    <div className="perfil-container">
      <img
        src={imagem}
        alt={alt}
        className={classImagem}
        width={350}
        onClick={() => {
          ativar();
          resetarTexto('');
        }}
      />
      <div className={classTexto}>
        {ativado ? (
          <p style={{ whiteSpace: 'pre-line' }}>{textoAtual}</p>
        ) : (
          <p className="placeholder-text">{placeholder}</p>
        )}
      </div>
    </div>
  );
}

export default function Sobre() {
  const textoPerfil = `
Olá! Me chamo Frank Kiess, tenho 24 anos e sou estudante de Ciência da Computação na Universidade de Passo Fundo (UPF), 
no Rio Grande do Sul. Sou apaixonado por tecnologia, inovação e pelo poder da programação em transformar ideias em soluções reais.

Desde o início da minha graduação, busco evoluir constantemente como desenvolvedor, explorando diferentes áreas da computação. 
Já trabalhei com frontend, backend, bancos de dados relacionais como o PostgreSQL e ferramentas de visualização como o pgAdmin. 
Atualmente, estou me aprofundando em C++ e desenvolvendo este portfólio, onde venho aplicando meus conhecimentos em design de interface e integração com banco de dados.

No momento, estou atuando como estagiário de desenvolvimento na Atua by Nstech, uma empresa de tecnologia que tem me proporcionado um ambiente de aprendizado constante e desafiador. 
Lá, trabalho com PHP, JavaScript, Docker, PostgreSQL, GIT e Ubuntu, ampliando minha experiência em desenvolvimento backend e infraestrutura.
`;

  const textoFaculdade = `
Tenho muito orgulho de estudar na UPF, uma universidade que me proporciona base teórica sólida e contato com tecnologias atuais.
A infraestrutura, os professores e os projetos que participo me preparam para os desafios reais do mercado. 

Além das disciplinas práticas, participo de atividades extracurriculares, projetos de extensão e grupos de estudo com colegas engajados. 
Essa vivência torna minha jornada acadêmica ainda mais enriquecedora e inspiradora.
`;

  const [ativarPerfil, setAtivarPerfil] = useState(false);
  const [textoDigitadoPerfil, setTextoDigitadoPerfil] = useTypewriterEffect(ativarPerfil, textoPerfil);

  const [ativarFaculdade, setAtivarFaculdade] = useState(false);
  const [textoDigitadoFaculdade, setTextoDigitadoFaculdade] = useTypewriterEffect(ativarFaculdade, textoFaculdade);

  return (
    <>
      <header className="cabecalho">
        <nav>
          <Link to="/">Início</Link>
          <Link to="/projetos">Projetos</Link>
          <Link to="/contato">Contato</Link>
          <Link to="/perfil">
            <img src={usuario} alt="Tela de Login" height={35}/>
          </Link>
        </nav>
      </header>

      <div className="content">
        <div className="pages">
          <h2 className="title">Sobre Mim</h2>

          <BlocoComImagem
            imagem={eu}
            alt="foto da minha pessoa"
            textoCompleto={textoPerfil}
            textoAtual={textoDigitadoPerfil}
            ativado={ativarPerfil}
            ativar={() => setAtivarPerfil(true)}
            resetarTexto={setTextoDigitadoPerfil}
            placeholder="Clique na minha foto para saber mais sobre mim."
            classImagem="perfilFoto"
            classTexto="descricaoSobre"
          />

          <h2 className="title">Universidade</h2>

          <BlocoComImagem
            imagem={faculdade}
            alt="Universidade de Passo Fundo (UPF)"
            textoCompleto={textoFaculdade}
            textoAtual={textoDigitadoFaculdade}
            ativado={ativarFaculdade}
            ativar={() => setAtivarFaculdade(true)}
            resetarTexto={setTextoDigitadoFaculdade}
            placeholder="Clique na imagem da universidade para conhecer mais da minha experiência acadêmica."
            classImagem="universidade-foto"
            classTexto="descricao"
          />

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
