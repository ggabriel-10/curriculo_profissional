import './App.css';
import { Conteudo } from './components/Conteudo';
import { Header } from './components/Header';
import { Projetos } from './components/Projetos';
import {Tecnologias} from './components/Tecnologias';
import { Contato } from './components/Contato';
import { useState } from 'react';

function App() {

  return (
    <div className="App">
      <Header />
      <Conteudo />
      <Projetos />
      <Tecnologias />
      <Contato/>
    </div>
  );
}

export default App;
