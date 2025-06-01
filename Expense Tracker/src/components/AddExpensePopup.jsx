import React from "react";
import { useState } from "react";

import closeButton from "../assets/closeButton.png";

function AddExpensePopup({ handleExpensePopup, setTotalExpense }) {
  const [description, setDescription] = useState("");
  const [expenseAmount, setExpenseAmount] = useState("");
  const [category, setCategory] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!description.trim() || !expenseAmount || !category) {
      alert("All fields are required.");
      return;
    }
    const expense = {
      description,
      expenseAmount,
      category,
    };
    let expenses = JSON.parse(localStorage.getItem("expenses")) || [];
    expenses.push(expense);
    localStorage.setItem("expenses", JSON.stringify(expenses));
    handleExpensePopup(false);

    const totalAmount = expenses.reduce(
      (acc, expense) => acc + parseFloat(expense.expenseAmount),
      0
    );
    setTotalExpense(totalAmount);
    // console.log(totalAmount)
    localStorage.setItem("totalAmount", totalAmount.toString());
    // setTotalExpense(totalAmount);
  };

  return (
    <>
      <div className="overlay">
        <div className="popup">
          <h4>New Expense</h4>
          <div>
            Description:
            <input
              type="text"
              name="description"
              placeholder="Expense description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
          </div>
          <div>
            Expense Amount:
            <input
              type="number"
              name="ExpenseAmount"
              placeholder="In dollars"
              value={expenseAmount}
              onChange={(e) => setExpenseAmount(e.target.value)}
              required
            />
          </div>
          <div>
            Category:
            <select
              defaultValue={category}
              onClick={(e) => setCategory(e.target.value)}
            >
              <option value="Food">Food</option>
              <option value="Groceries">Groceries</option>
              <option value="Travel">Travel</option>
              <option value="Health">Health</option>
            </select>
          </div>
          <button className="submitButton" onClick={handleSubmit}>
            Submit
          </button>
          <button className="closeButton">
            <img
              src={closeButton}
              onClick={() => {
                handleExpensePopup(false);
              }}
            ></img>
          </button>
        </div>
      </div>
    </>
  );
}

export default AddExpensePopup;
