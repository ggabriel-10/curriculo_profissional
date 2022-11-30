
import '../App.css';
export function Header() {
    return (
            <div>
                <header className="App-header">
                    <nav className='navegation'>
                        <img src="https://img.icons8.com/external-others-inmotus-design/344/external-Code-round-icons-others-inmotus-design-4.png" className="App-logo" alt="logo" />
                        <ul>
                            <li><a className='item-navegation' href="#header">Inicio</a></li>
                            <li><a className='item-navegation' href="#conteudo">Sobre Mim</a></li>
                            <li><a className='item-navegation' href="#projetos">Projetos</a></li>
                            <li><a className='item-navegation' href="#tecnologias">Tecnologias</a></li>
                            <li><a className='item-navegation' href="#contato">Contato</a></li>
                        </ul>
                    </nav>
                </header>
                <section className='information-app'>
                <div className='title-app'>
                    <h1>Giovanni Medeiros</h1>
                    <h2>Front-end Developer</h2>
                </div>
                <img src="https://avatars.githubusercontent.com/u/88208926?v=4" className="my-photo" alt="logo" />
                </section>
            </div>
    )
}