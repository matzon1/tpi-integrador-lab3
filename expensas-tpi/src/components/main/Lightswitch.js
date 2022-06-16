import React, { useContext } from 'react'
import { DarkModeContext } from '../context/DarkModeContext'

function Lightswitch() {
  const {darkMode, manageDarkMode} = useContext(DarkModeContext);
  const handleDarkMode = () =>{
    manageDarkMode();
  }  
  return (
    <div className='Lightswitch'><img src={darkMode ?
        `../images\icons8-dark-mode-96.png` : `../images\icons8-sol-96.png`} alt="Darkmode off" onClick={handleDarkMode} />
    </div>
  )
}

export default Lightswitch