
import Searchs from '../image/search-icons.png'
export const Search = ({setSearchCountry}) => {
const handleSearch = (e) =>{
    setSearchCountry(e.target.value)
};

 return(
    <div className= "search-container">
        <div className='search-icon-div'>
            <img className="search-icon" src={Searchs} alt="search-icon" />
            </div>
        <input className="search-input"  placeholder="search for a country..." onChange={handleSearch} />

    </div>
)
}