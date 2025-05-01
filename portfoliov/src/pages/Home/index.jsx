import './style.css'

function Home() {

  return (
    <div className='container'>
      <header className='cabecalho'>
        <h1>Frank - Desenvolvedor</h1>
        <nav>
          <a href="#sobre">Sobre</a>
          <a href="#projetos">Projetos</a>
          <a href="#contato">Contato</a>
        </nav>
      </header>

      <div id="content">
        <button className='buttonLeft'>‹</button>
        <div className='pages' > {} </div>
        <button className='buttonRight'>›</button>
      </div>
    </div>
  )
}

export default Home
