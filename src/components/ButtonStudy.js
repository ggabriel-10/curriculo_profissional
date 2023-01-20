import './buttonstudy.css';

export default function ButtonStudy(props) {
    const openInNewTab = url => {
      // 👇️ setting target to _blank with window.open
      window.open(url, '_blank', 'noopener,noreferrer');
    };
  
    return (
      <div>
        <button className='button-study' onClick={() => openInNewTab(props.link)}>
          {props.label}
        </button>
      </div>
    );
  }