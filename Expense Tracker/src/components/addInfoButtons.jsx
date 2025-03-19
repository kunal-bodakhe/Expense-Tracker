import React from "react";
import AddInfoButtonsBox from "./AddInfoButtonsBox";
import addIcon from "../assets/addIcon.svg";

function AddInfoButtons(){


    return(
        <>
        <div className="addInfoButtons">
            <AddInfoButtonsBox icon={addIcon} buttonName={"Add Budget"}></AddInfoButtonsBox>
            <AddInfoButtonsBox icon={addIcon} buttonName={"Add Expense"}></AddInfoButtonsBox>
        </div>
        </>
    )
}

export default AddInfoButtons;