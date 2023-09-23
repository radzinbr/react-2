import React, { useState } from 'react';
import './SideBar.css';

const photos = [
  {
    character: "Batman",
    img: "./img/Baticon.png"
  },
  {
    character: "Coringa",
    img: "./img/jokericon.png"
  },
  {
    character: "Arlequina",
    img: "./img/arlerquinaicon.png"
  },
  {
    character: "Robin",
    img: "./img/robinicon.png"
  }
];

const SideBar = () => {
  const [selectedCharacter, setSelectedCharacter] = useState(null);

  const handleMouseEnter = (photo) => {
    setSelectedCharacter(photo);
  };

  const handleMouseLeave = () => {
    setSelectedCharacter(null);
  };

  return (
    <>
      <div className="sidebar">
        <h1>characters</h1>
        <div className="characters">
          <ul>
            {photos.map((photo, index) => (
              <div
                key={index}
                onMouseEnter={() => handleMouseEnter(photo)}
                onMouseLeave={handleMouseLeave}
              >
                <li>
                  <img src={photo.img} alt={photo.character} />
                  <p>{photo.character}</p>
                </li>
              </div>
            ))}
          </ul>
        </div>
      </div>

      {/* Exibir detalhes do personagem selecionado */}
      {selectedCharacter && (
        <div className="Contents">
          <h2>{selectedCharacter.character}</h2>
          <img src={selectedCharacter.img} alt={selectedCharacter.character} />
          {/* Adicione aqui mais informações do personagem, se necessário */}
        </div>
      )}
    </>
  );
};

export default SideBar;
