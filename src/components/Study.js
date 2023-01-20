import './study.css';
import ButtonStudy from './ButtonStudy';

export function Study(){
    return(
        <div className='area-study' id='study'>
            <h1 className='title-study'>Cursos</h1>

            <div className='study-course'>
                <a href="https://www.fiap.com.br/"><img className='icon-study' src='https://image.winudf.com/v2/image1/YnIuY29tLmZpYXAuZmlhcHBfaWNvbl8xNTg1NjU3Njc0XzAzMA/icon.png?w=184&fakeurl=1'/></a>
                <h2>CLOUD FUNDAMENTALS, ADMINISTRATION AND SOLUTION ARCHITECT</h2>
                <ButtonStudy link='https://on.fiap.com.br/local/nanocourses/gerar_certificado.php?chave=3b91d088914f50bb17d28a8ae605079f&action=view' alt='Certificado' label='Certificado'/>
            </div>

            <div className='study-course'>
                <a href="https://www.rocketseat.com.br/"><img className='icon-study' src='data:image/png;base64,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'/></a>
                <div>
                    <h2>ROCKETSEAT - DISCOVER</h2>
                    <p>Código de verificação: <strong>48b090f4-a3d3-4777-8523-ecd65e689cf5</strong></p>
                </div>
                <ButtonStudy link='https://app.rocketseat.com.br/discover/certificates' alt='Certificado' label='Certificado'/>
            </div>

            <div className='study-course'>
                <a href="https://www.udemy.com/"><img className='icon-study' src='https://pbs.twimg.com/profile_images/1415325711896825858/2cczQq-X_400x400.png'/></a>
                <h2>IT SECURITY SPECIALIST</h2>
                <ButtonStudy link='https://www.udemy.com/certificate/UC-085ca238-1c77-4442-831e-5c1550bfc1ac/' alt='Certificado' label='Certificado'/>
            </div>
        </div>
        
    )
}