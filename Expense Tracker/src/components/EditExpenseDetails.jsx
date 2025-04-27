import React from "react";
import closeButton from "../assets/closeButton.png";

function EditExpenseDetails({ handleEditPopup }) {
  return (
    <>

      <div className="overlay">
        <div className="popup">
          <h4>Edit Expense</h4>
          <div>
            Description:
            <input
              type="text"
              name="description"
              placeholder="Expense description"
            />
          </div>
          <div>
            Expense Amount:
            <input
              type="number"
              name="ExpenseAmount"
              placeholder="In dollars"
            />
          </div>
          <div>
            Category:
            <select>
              <option>Food</option>
              <option>Groceries</option>
              <option>Travel</option>
              <option>Health</option>
            </select>
          </div>
          <button className="submitButton">Submit</button>
          <button className="closeButton"><img  src={closeButton} onClick={()=>{handleEditPopup(false)}}></img></button>
        </div>
      </div>
    </>
  );
}

export default EditExpenseDetails;