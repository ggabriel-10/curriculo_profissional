import './App.css';
import { Conteudo } from './components/Conteudo';
import { Header } from './components/Header';
import { Projetos } from './components/Projetos';
import {Study} from './components/Study';
import {Tecnologias} from './components/Tecnologias';
import { Contato } from './components/Contato';

function App() {

  return (
    <div className="App">
      <Header />
      <Conteudo />
      <Projetos />
      <Study />
      <Tecnologias />
      <Contato/>
    </div>
  );
}

export default App;
