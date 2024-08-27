import { useState } from "react";
import { TrailerYoutube } from "./trailerYoutube";

function InfoMovie() {
  return (
    <aside className='video-container'>
      <h1 style={{ color: '#FFF' }}>Informacion de la pelicula</h1>
    </aside>
  )
}

export function NavigationDetails({ trailer }) {
  const [activeButton, setActiveButton] = useState('Ver trailer');

  const handleClick = (buttonName) => {
    setActiveButton(buttonName);
  };

  return (
    <nav className='navigation-details'>
      <div className="navigation-details-btn">
        <button
          className={`btn ${activeButton === 'Ver trailer' ? 'active' : ''}`}
          onClick={() => handleClick('Ver trailer')}>
          Ver trailer
        </button>

        <button className={`btn ${activeButton === 'Información' ? 'active' : ''}`}
          onClick={() => handleClick('Información')} >
          Información
        </button>
      </div>
      {
        activeButton === 'Ver trailer' ? <TrailerYoutube trailer={trailer} /> : <InfoMovie />
      }
    </nav>
  )
}