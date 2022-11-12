 import { useParams , Link} from "react-router-dom"
 import {data} from '../data';
 import { useEffect, useState } from "react";
 import { faArrowLeft} from "@fortawesome/free-solid-svg-icons";
import {useNavigate} from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


 export const CountryPage=({DarkMode }) =>{
    const {alpha3Code} = useParams();
    const description = data.filter((country) => country.alpha3Code===alpha3Code)
    const navigate = useNavigate()
   
     const [isLoading,setIsLoading] = useState(false);
    
  useEffect(() => {
    setIsLoading(true);
    setTimeout(()=>{
        setIsLoading(false);
    }, [1000]);
  }, []);
  if(isLoading){
    return(
   <div className="loading">Loading...</div>

    )
  }
  
   
 return(
    
   <div 
   className={DarkMode ? "country-page-container dark-country-page-container" : "country-page-container "}
   >
        {''}
        <Link  to={"/"} className={DarkMode ?"back-link dark-back-link":"back-link"}>
    <button className={DarkMode ?"btn-back dark-btn-back dark-arrow": "btn-back "}>
        {/* <img className="arrow" src={Arrow} alt="arrow" /> */}
        <FontAwesomeIcon icon={faArrowLeft} className="arrow"/>
        <span className="btn-text">Back</span>
    </button>
    </Link>
     
     <img className="individual-flag" src={description[0].flag} alt={description.name}/> 

    
    <div className={DarkMode ?"country-description dark-country-description":"country-description" }>  


        <h3 className={DarkMode ? "cd-name dark-cd-name" : "cd-name" }>{description[0].name}</h3>
        <span className={DarkMode ? "cd dark-cd" : "cd" }> Native Name:<span className={DarkMode ?"descript-color dark-descript-color":"descript-color"}>{description[0].nativeName}</span></span>
        <span className={DarkMode ? "cd dark-cd" : "cd" }> Population: <span className={DarkMode ?"descript-color dark-descript-color":"descript-color"}>{description[0].population}</span></span>
        <span className={DarkMode ? "cd dark-cd" : "cd" }>Region:<span className={DarkMode ?"descript-color dark-descript-color":"descript-color"}>{description[0].region}</span></span>
        <div className={DarkMode ? "cd dark-cd" : "cd" }>Sub Region:<span className={DarkMode ?"descript-color dark-descript-color":"descript-color"}>{description[0].subregion}</span></div> 
        <div className={DarkMode ? "cd dark-cd" : "cd" }>Capital:<span className={DarkMode ?"descript-color dark-descript-color":"descript-color"}>{description[0].capital}</span></div>
        <div className={DarkMode ? "cd dark-cd" : "cd" }>Tol Level Domain:<span className={DarkMode ?"descript-color dark-descript-color":"descript-color"}>{description[0].topLevelDomain}</span></div>
        <div className={DarkMode ? "cd dark-cd" : "cd" }>Currencies:<span className={DarkMode ?"descript-color dark-descript-color":"descript-color"}>{description[0]?.currencies && description[0]?.name}</span></div>
        <div className={DarkMode ? "cd dark-cd" : "cd" }>Languages:<span className={DarkMode ?"descript-color dark-descript-color":"descript-color"}>{description[0].languages[0].name}</span></div>
       
            <span className={DarkMode?"border-country dark-border-country":"border-country"}>
              Border Countries:
              {description[0]?.borders && description[0]?.borders.map((border) => {

                return (
                  <button onClick={() => navigate(`/${border}`)} 
                  className={DarkMode? "descript-color dark-descrip-color dark-border":"descrip-color border"}>{border} </button>
                  
                );
              
              }
              )};
          </span> 
              </div> 
              </div>
  //  </div> 
   
  //   </div> 
    
  //  </div>
    
 )
 }