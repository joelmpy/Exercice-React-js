import './App.css';
import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './component/Home';
import Login from './component/Login';
import NavBar from './component/NavBar/NavBar';
import Valide from './component/Valide';
import { useState } from 'react';

// export const UserContext = createContext();
export const UserContext = React.createContext(false)


function App() {

  // const [name, setName] = useState('Joel est dans la place')
  const [isLogged, setLogged] = useState(false)

  const setAuth = (state) => {
    setLogged(state)
  }

  const sendToContext = {
    Log: isLogged,
    setAuth: setAuth
  }

  return (
    <div className='App'>
      <NavBar />
      <UserContext.Provider value={sendToContext}>
        <Routes>
          <Route path="/Home" element={<Home />}></Route>
          <Route path="/Login" element={<Login />}></Route>
          <Route path="/Valide" element={<Valide />}></Route>
        </Routes>
      </UserContext.Provider>
    </div>

  );
}

export default App;
