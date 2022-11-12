import { CountryPage } from "../page/CountryPage";
import { Header} from '../header/Header'
import {useState} from 'react'


export const IndividualPage = ()=> {

    const [DarkMode, setDarkMode] = useState(false);

    return (
        <div className={DarkMode?"individual-page dark-individual-page":"individual-page"}>
        <Header setDarkMode={setDarkMode} DarkMode={DarkMode}/>
        <CountryPage setDarkMode={setDarkMode} DarkMode={DarkMode}/>
        </div>
    )
}