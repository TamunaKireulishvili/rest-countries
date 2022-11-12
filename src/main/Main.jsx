import React from 'react'
import {Header} from '../header/Header'
import {Regions} from '../regions/Regions'
import {useState} from 'react'
export const Main = () => {
    
    const [DarkMode, setDarkMode] = useState(false);
    return(
        <div className="Main-container">
            <Header setDarkMode={setDarkMode} DarkMode={DarkMode}/>
            <Regions setDarkMode={setDarkMode} DarkMode={DarkMode} />
            
        
        </div>
    )
}