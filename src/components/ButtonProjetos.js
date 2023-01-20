import './buttonProjetos.css';

export default function ButtonProjetos(props) {
    const openInNewTab = url => {
      // 👇️ setting target to _blank with window.open
      window.open(url, '_blank', 'noopener,noreferrer');
    };
  
    return (
      <div>
        <button className='button-projetos' onClick={() => openInNewTab(props.link)}>
            <img src="https://img.icons8.com/emoji/344/link-emoji.png" width={20} alt={props.alt}/>
            {props.label}
        </button>
      </div>
    );
  }