import React from "react";
import AddInfoButtonsBox from "./AddInfoButtonsBox";
import addIcon from "../assets/addIcon.svg";

function AddInfoButtons({handleExpensePopup, handleBudgetPopup}){


    return(
        <>
        <div className="addInfoButtons">
            <AddInfoButtonsBox icon={addIcon} buttonName={"Add Budget"} onClick={()=>{handleBudgetPopup(true)}}></AddInfoButtonsBox>
            <AddInfoButtonsBox icon={addIcon} buttonName={"Add Expense"} onClick={()=>{handleExpensePopup(true)}}></AddInfoButtonsBox>
        </div>
        </>
    )
}

export default AddInfoButtons;