import { useEffect, useState } from 'react';
import './style.css';
import '/index.css';
import '../../index.css';

function Sobre() {
  return (
    <>
      <header className='cabecalho'>
        <nav>
          <a href="#sobre">Sobre</a>
          <a href="#projetos">Projetos</a>
          <a href="#contato">Contato</a>
        </nav>
      </header>

      <div className="content">   
        <div className='pages'>
          <h2 className='title'></h2>
          <p className='descricao'>
          </p>
          <h2 className='title'></h2>
        </div>
      </div>
    </>
  );
}

export default Sobre;