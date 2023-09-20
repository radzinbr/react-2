import React from 'react'
import { NavLink } from 'react-router-dom'
import './header.css'

const Header = () => {
  return (
    <div className='topo'>
      <img src="/img/legobat.png" alt="" />
      <nav>
        <ul>
          <li><NavLink to={"/"}>Home</NavLink></li>
          <li><NavLink to={"/Contatos"}>Contatos</NavLink></li>
          <li><NavLink to={"/Perfils"}>Perfils</NavLink></li>
        </ul>
      </nav>
    </div>
  )
}

export default Header