import {data} from '../data'
import { Search } from '../search/Search'
import {Filter} from '../filter/Filter'
import {States } from '../states/States'
import {useEffect, useState} from 'react'

export const Regions = ({DarkMode}) => {
    const [country, setCountry] = useState(data);
    const [searchCountry, setSearchCountry] = useState("");
    const [select, setSelect] = useState("");
    
    console.log(select);
    useEffect(() => {
        
    
        if (select === "All"){
            setCountry(
            data.filter((country) =>
            country.name.toLowerCase().includes(searchCountry.toLowerCase())
            )
        );
        }   else {setCountry(
            data.filter((country) =>
            country.name.toLowerCase().includes(searchCountry.toLowerCase())
            ).filter((country) => country.region.includes(select))
        );
    }
    }, [searchCountry,select])
    return(
        <div className= {DarkMode ? "regions-container dark-regions-container": "regions-container"}>
            <div className={DarkMode ?"search-filter-container dark-search-filter-container":"search-filter-container"}>
             <Search setSearchCountry={setSearchCountry} />
             <Filter setSelect={setSelect} select={select}/>
             </div>
             <div className={DarkMode ? "states-wraper states-wraper-dark": "states-wraper"} >
                {country.map((country) => {
                    return <States key={country.name} country={country} DarkMode={DarkMode}/>
                })}
            
            
            
            </div>
            
            
        </div>
    )

}