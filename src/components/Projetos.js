import ButtonProjetos from "./ButtonProjetos";
import tasklist from "../image/tasklist.png";
import pokedex from "../image/pokedex.png";
import formulario_dev from "../image/formulario_dev.png";
import get_message from "../image/get_message.png";
import sao_paulo from "../image/SPFC.png";
import './projetos.css';

export function Projetos() {
    return (
        <div>
            
            <section className="projetos-app" id="projetos">
                <div className="title-projetos-app">
                    <h2>Meus Projetos</h2>
                </div>
                <div className="text-projetos-app">
                    <img className="imagem-projeto-app" src={tasklist} alt="Logo-projeto"/>
                    <dl className="descrição-projeto-app">
                        <dt><h1>Tasklist</h1></dt>
                        <dd>Projeto de um Tasklist feito em ReactJS, NodeJS e MongoDB</dd>
                        <ButtonProjetos label="Link do Projeto" link="https://github.com/ggabriel-10/task_list_DB"/>
                    </dl>
                </div>

                <div className="text-projetos-app text-invert">
                    
                    <dl className="descrição-projeto-app">
                        <dt><h1>Pokedéx</h1></dt>
                        <dd>Projeto de uma Pokedéx feito em HTML, CSS e JavaScript</dd>
                        <ButtonProjetos label="Link do Projeto" link="https://ggabriel-10.github.io/pokedex/"/>
                    </dl>
                    <img className="imagem-projeto-app" src={pokedex } alt="Logo-projeto"/>
                </div>

                <div className="text-projetos-app">
                    <img className="imagem-projeto-app" src={formulario_dev } alt="Logo-projeto"/>
                    <dl className="descrição-projeto-app">
                        <dt><h1>Formulario Dev</h1></dt>
                        <dd>Projeto de um Formulario feito em HTML e CSS</dd>
                        <ButtonProjetos label="Link do Projeto" link="https://ggabriel-10.github.io/formulario_dev/"/>
                    </dl>
                </div>

                <div className="text-projetos-app text-invert">
                    
                    <dl className="descrição-projeto-app">
                        <dt><h1>Get Message</h1></dt>
                        <dd>Projeto de um gerador de mensagens feito em HTML,<br></br> CSS e JavaScript, consumindo API com AXIOS</dd>
                        <br></br>
                        <ButtonProjetos label="Link do Projeto" link="https://ggabriel-10.github.io/Get-Message/"/>
                    </dl>
                    <img className="imagem-projeto-app" src={get_message} alt="Logo-projeto"/>
                </div>

                <div className="text-projetos-app">
                    <img className="imagem-projeto-app" src={sao_paulo } alt="Logo-projeto"/>
                    <dl className="descrição-projeto-app">
                        <dt><h1>São Paulo FC</h1></dt>
                        <dd>Projeto de uma página feito em HTML e CSS, <br></br>utilizando JavaScript para validar os checkbox</dd>
                        <ButtonProjetos label="Link do Projeto" link="https://ggabriel-10.github.io/spfc/"/>
                    </dl>
                </div>
            </section>
        </div>
    )
}