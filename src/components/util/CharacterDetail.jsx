import React from 'react';

const CharacterDetail = ({ selectedCharacter }) => {
  return (
    <div className="character-details">
      {selectedCharacter ? (
        <>
          <h2>{selectedCharacter.character}</h2>
          <img src={selectedCharacter.img} alt={selectedCharacter.character} />
        </>
      ) : (
        <p>Selecione um personagem para ver os detalhes.</p>
      )}
    </div>
  );
};

export default CharacterDetail;
