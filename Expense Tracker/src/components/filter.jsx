import React from "react";

function Filter({setSearchText}) {
    
    return(
        <>
            <input className="searchBar"
            type="text"
            placeholder="Search by description"
            onKeyUp={(e) => setSearchText(e.target.value)}
            ></input>
        </>
    )
    
}
export default Filter;
