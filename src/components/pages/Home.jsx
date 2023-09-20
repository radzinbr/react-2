import React from 'react';
import Header from '../layout/header';
import SideBar from '../layout/SideBar';
import Princ from '../layout/princ';
import './Home.css'


const Home = () => {
    return (
        <>
            <Header />
            <div className="main">
                <SideBar />
                <Princ />
            </div>
        </>
    );
}

export default Home;
