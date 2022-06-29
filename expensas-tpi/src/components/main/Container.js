import React from 'react'
import Nav from './Nav';
import Main from './Main';
import './Container.css';
import { useContext } from 'react'
import { DarkModeContext } from '../context/DarkModeContext'
import Login from './Login';


const Container = () => {
  const {darkMode} = useContext(DarkModeContext);
    return (
    <div className={darkMode ? 'Container Container-dark' : 'Container Container-light'}>
    <Nav/>
    <Main/>
    <Login/>
    </div>
  )
}

export default Container    