import React from 'react';
import Header from '../layout/header';
import SideBar from '../layout/SideBar';
import './Home.css';
import Content from '../layout/Content';
import CharacterDetail from '../util/CharacterDetail';

const Home = ({ setSelectedCharacter, selectedCharacter }) => {
  return (
    <>
      <Header />
      <div className="main">
        <SideBar setSelectedCharacter={setSelectedCharacter} />
        <Content>
          <CharacterDetail selectedCharacter={selectedCharacter} />
        </Content>
      </div>
    </>
  );
}

export default Home;
