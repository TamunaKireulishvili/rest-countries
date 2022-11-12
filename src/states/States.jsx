import { useNavigate } from "react-router-dom"

export const States = ({country,DarkMode}) => {
  const navigate = useNavigate();
  

    return(
         <div onClick={() => navigate(`/${country.alpha3Code}`)} className={DarkMode?"states-div dark-states-div":"states-div"} > 
        
            <img className="states-flag" src={country.flags.svg} alt={country.name}/>
                <h2 className={DarkMode ?"state-name dark-state-name":"state-name"}>{country.name}</h2>
            <span className={DarkMode ? "state-population dark-state-population":"state-population"}><span className={DarkMode?"text-color  dark-text-color":"text-color"}>Population:</span> {country.population}</span>

            <span className={DarkMode?"state-region dark-state-region":"state-region"}><span className={DarkMode?"text-color  dark-text-color":"text-color"}>Region:</span>{country.region}</span>

            <span className={DarkMode?"state-capital dark-state-capital":"state-capital"}><span className={DarkMode?"text-color  dark-text-color":"text-color"}>Capital:</span>{country.capital}</span>
        </div>   
        
    )
}