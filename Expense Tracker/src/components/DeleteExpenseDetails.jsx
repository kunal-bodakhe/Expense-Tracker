import React from "react";

function DeleteExpenseDetails({ handleDeletePopup, Deleteindex , setTotalExpense}) {
  // console.log(Deleteindex);

  const onDelete = (e) => {
    const expenses = JSON.parse(localStorage.getItem("expenses"));
    expenses.splice(Deleteindex, 1);
    localStorage.setItem("expenses", JSON.stringify(expenses));

    handleDeletePopup(false);
    const totalAmount = expenses.reduce(
      (acc, expense) => acc + parseFloat(expense.expenseAmount),
      0
    );
    setTotalExpense(totalAmount);
    // console.log(totalAmount)
    localStorage.setItem("totalAmount", totalAmount.toString());
  };
  return (
    <>
      <div className="overlay">
        <div className="popupConfirm">
          <h4>Do you really want to delete the expense?</h4>
          <div className="buttonGroup">
            <button
              className="confirmButton"
              onClick={() => {
                onDelete();
              }}
            >
              Yes
            </button>
            <button
              className="cancelButton"
              onClick={() => {
                handleDeletePopup(false);
              }}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
export default DeleteExpenseDetails;
