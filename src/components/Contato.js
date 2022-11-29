import './contato.css';

export function Contato(){
    return(
        <div className="contato">
            <h1>Contato</h1>
            <p>Entre em contato comigo!</p>
            <div className="contato__container">
                <div className='contato__container_one'>
                    <div className="contato__container__item">
                            <a href="mailto:ggabriel.medeiros@hotmail.com" target="_blank" rel="noreferrer">
                                <img src="https://cdn-icons-png.flaticon.com/512/6711/6711567.png" className="item-contato" alt="E-mail" />
                            </a>
                    </div>
                    <div className="contato__container__item">
                            <a href="https://github.com/ggabriel-10" target="_blank" rel="noreferrer">
                                <img src="https://cdn-icons-png.flaticon.com/512/733/733553.png" className="item-contato" alt="Github" />
                            </a>
                    </div>
                </div>

                <div className='contato__container_two'>
                    <div className="contato__container__item">
                            <a href="https://www.linkedin.com/in/giovanni-medeiros-382806192/" target="_blank" rel="noreferrer">
                                <img src="https://cdn-icons-png.flaticon.com/512/4401/4401402.png" className="item-contato" alt="LindedIn" />
                            </a>
                    </div>
                    
                    <div className="contato__container__item">
                            <a href="https://api.whatsapp.com/send?phone=5513981448492" target="_blank" rel="noreferrer">
                                <img src="https://cdn-icons-png.flaticon.com/512/3670/3670051.png" className="item-contato" alt="WhatsApp" />
                            </a>
                    </div>
                </div>
            </div>
        </div>
    )
}