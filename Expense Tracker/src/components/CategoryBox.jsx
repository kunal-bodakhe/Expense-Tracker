import React from "react";

function CategoryBox({CategoryIcon, CategoryName}) {
    

    return(
        <>
            <div className="CategoryBox">
                <img src={CategoryIcon} alt="food"></img>
                <h3>{CategoryName}</h3>
            </div>
        </>
    )
}


export default CategoryBox;