import React from "react";
import { useState } from "react";
import closeButton from "../assets/closeButton.png";

function EditExpenseDetails({ handleEditPopup , EditedExpense, EditIndex , setTotalExpense}) {

  const [description, setDescription] = useState("");
    const [expenseAmount, setExpenseAmount] = useState("");
    const [category, setCategory] = useState("");
  
    const handleSubmit = (e) => {
      e.preventDefault();
      const expense = {
        description,
        expenseAmount,
        category,
      };
      const expenses = JSON.parse(localStorage.getItem("expenses")) || [];
      // expenses.push(expense);

      expenses[EditIndex] = expense;  
      localStorage.setItem("expenses", JSON.stringify(expenses));
      handleEditPopup(false);
  
      const totalAmount = expenses.reduce(
        (acc, expense) => acc + parseFloat(expense.expenseAmount),
        0
      );
      setTotalExpense(totalAmount);
      // console.log(totalAmount)
      localStorage.setItem("totalAmount", totalAmount.toString());
      // setTotalExpense(totalAmount);
    };
  // console.log(EditedExpense)
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
              defaultValue={EditedExpense.description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div>
            Expense Amount:
            <input
              type="number"
              name="ExpenseAmount"
              placeholder="In dollars"
              defaultValue={EditedExpense.expenseAmount}
              onChange={(e) => setExpenseAmount(e.target.value)}
            />
          </div>
          <div>
            Category:
            <select
            defaultValue={EditedExpense.category}
            onClick={(e) => setCategory(e.target.value)}
            >
              <option>Food</option>
              <option>Groceries</option>
              <option>Travel</option>
              <option>Health</option>
            </select>
          </div>
          <button className="submitButton" onClick={handleSubmit}>Submit</button>
          <button className="closeButton"><img  src={closeButton} onClick={()=>{handleEditPopup(false)}}></img></button>
        </div>
      </div>
    </>
  );
}

export default EditExpenseDetails;