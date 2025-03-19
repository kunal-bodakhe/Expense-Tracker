import React from "react";


function AddInfoButtonsBox({icon,buttonName}){
    return(
        <>
            <div className="addInfoButtonsBox">
                <img src={icon} alt="add"></img>
                <h3>{buttonName}</h3>
            </div>
        </>
    )
}

export default AddInfoButtonsBox;