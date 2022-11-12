 import { faMoon , faSun } from "@fortawesome/free-solid-svg-icons";
 import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
 import React from 'react'
 export const Header = ({setDarkMode,DarkMode}) => {

   function getDarkMode (){
    setDarkMode(!DarkMode)
   }
    return(
        <div className={DarkMode ? "header bg-dark" : "header  "}>
            <div className={DarkMode ? 'header-text header-text-dark' : 'header-text'}>
            
                <h3 className='header-text-paragraph'>Where is the world?</h3>
            </div>
            <div className='header-left-aside' onClick={getDarkMode}>
         
                {DarkMode ? (<FontAwesomeIcon icon={faMoon} className="moon fa-regular fa-moon"/>): (<FontAwesomeIcon icon={faSun} className="sun"/> )}
                {DarkMode ? "Dark Mode" : "Light Mode"}

                <span className='mode'></span>
            </div>
        </div>
    )
}