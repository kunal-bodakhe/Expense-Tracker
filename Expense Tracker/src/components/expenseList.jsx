import React from "react";
import { useState } from "react";
// import EditExpenseDetails from "./EditExpenseDetails";

function ExpenseList({searchText, handleEditPopup, handleDeletePopup , setEditedExpense , setDeleteindex ,setEditIndex, Food,Groceries,Travel,Health}) {

  let original=JSON.parse(localStorage.getItem("expenses"));
  // let [expenses, setexpenses] = useState([]);
  let expenses=JSON.parse(localStorage.getItem("expenses")) || [];
 
  
    if(Food==true){
      expenses=original.filter((expense)=>expense.category==="Food");
    }
    else if(Health==true){
      expenses=original.filter((expense)=>expense.category==="Health");
    }
    else if(Groceries==true){
      expenses=original.filter((expense)=>expense.category==="Groceries");
    }
    else if(Travel==true){
      expenses=original.filter((expense)=>expense.category==="Travel");
    }
    else{
      expenses=JSON.parse(localStorage.getItem("expenses"));
    const totalAmount = expenses.reduce(
        (acc, expense) => acc + parseFloat(expense.expenseAmount),
        0
      );
      localStorage.setItem("totalAmount", totalAmount.toString());
    // return expenses;
    }

    if (searchText && searchText.trim() !== "") {
      expenses = expenses.filter((expense) =>
        expense.description.toLowerCase().includes(searchText.toLowerCase())
      );
    }
  return (
    <>
      <div className="container">
        <div className="expenseChart">
          <div className="expenseContent">
            <div>
              <h4>SrNo.</h4>
            </div>
            <div className="expenseTitle">
              <h4>Expense</h4>
            </div>
            <div className="amountTitle">
              <h4>Amount</h4>
            </div>
          </div>
          <div className="editExpense">
            <div>
              <h4>Edit/Delete</h4>
            </div>
          </div>
        </div>
        <hr className="seperationLine"></hr>

        
          <div>
            {expenses.map((expense, index) => (
              <div className="expenseList" key={index}>
                <div className="expenseDetails">
                  <div className="srNo">
                    <h4>{index + 1}.</h4>
                  </div>
                  <div className="expense">
                    <h4>{expense.description}</h4>
                  </div>
                  <div className="expenseAmount">
                    <h4>${expense.expenseAmount}</h4>
                  </div>
                </div>

                <div>
                  <div className="editOptions">
                    <button
                      className="editButtons"
                      onClick={() => {
                        handleEditPopup(true, expense,index);
                        setEditedExpense(expense);
                        setEditIndex(index);
                        // console.log(EditedExpense)
                        
                      }}
                    >
                      Edit
                    </button>
                    <button
                      className="editButtons"
                      onClick={() => {
                        handleDeletePopup(true, index);
                        setDeleteindex(index);
                        // console.log(index)
                      }}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
    </>
  );
}

export default ExpenseList;
