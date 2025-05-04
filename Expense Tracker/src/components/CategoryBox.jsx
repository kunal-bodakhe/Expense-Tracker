import React from "react";

function CategoryBox({CategoryIcon, CategoryName,...restProps}) {
    

    return(
        <>
            <button className="CategoryBox" {...restProps}>
                <img src={CategoryIcon} alt="food"></img>
                <h3>{CategoryName}</h3>
            </button>
        </>
    )
}


export default CategoryBox;