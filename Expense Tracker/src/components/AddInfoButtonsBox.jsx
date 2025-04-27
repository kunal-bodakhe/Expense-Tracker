import React from "react";


function AddInfoButtonsBox({icon,buttonName,...restProps}){
    return(
        <>
            <button className="addInfoButtonsBox" {...restProps}>
                <img src={icon} alt="add"></img>
                <h3>{buttonName}</h3>
            </button>
        </>
    )
}

export default AddInfoButtonsBox;