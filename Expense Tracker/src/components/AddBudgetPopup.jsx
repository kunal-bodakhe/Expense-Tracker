import React from "react";
import { useState } from "react";
import closeButton from "../assets/closeButton.png";

function AddBudgetPopup({ handleBudgetPopup , BudgetAmount , setBudgetAmount }) {
 const amount = 0;
    // state , useEffect

function SaveBudget(){
    localStorage.setItem("budget",JSON.stringify(inputValue))
    const budget=JSON.parse(localStorage.getItem("budget"))
    setBudgetAmount(budget)
    handleBudgetPopup(false)
}
const [inputValue, setInputValue] = useState(BudgetAmount)

  return (
    <>

      <div className="overlay">
        <div className="popup">
          <h4>Add Budget</h4>
          <div>
            Amount:
            <input
              type="number"
              name="BudgetAmount"
              placeholder="In dollars"
              defaultValue={inputValue}
              onChange={(e) => setInputValue(e.target.value) }
            />
          </div>
          <button className="submitButton" type="submit" onClick={()=>SaveBudget()}  >Submit</button>
          <button className="closeButton"><img  src={closeButton} onClick={()=>{handleBudgetPopup(false)}}></img></button>
        </div>
      </div>
    </>
  );
}

export default AddBudgetPopup;
