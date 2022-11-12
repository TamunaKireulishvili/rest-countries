
export const Filter =  ({setSelect, select}) => {
    
    function handleSelect(e){
    setSelect(e.target.value)
    }

    console.log(select);

return(
     <div className="filter-div" >
    
        <select onChange={handleSelect} className="filter-select">
        
           <option  className="filter-option" >Filter by Region</option> 
            <option>All</option>
            <option>Africa</option>
            <option >America</option>
            <option >Asia</option>
            <option >Oceania</option>
            <option >Europe</option>

        </select>
        </div>
);
}