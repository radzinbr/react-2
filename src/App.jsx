import Home from './components/pages/home'
import Contatos from './components/pages/Contatos'
import Perfis from './components/pages/Perfis'
import { Routes,Route } from 'react-router-dom'

import "./App.css"

const App = () => {
  return (
      <Routes>
          <Route path='/' element ={<Home />} />
          <Route path='/Contatos' element={<Contatos />}/>
          <Route path='/Perfils' element={<Perfis/>}/>
      </Routes>
  )
}

export default App
