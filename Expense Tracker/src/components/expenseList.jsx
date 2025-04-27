import React from "react";

function ExpenseList({handleEditPopup , handleDeletePopup}){

    return(
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
            <div  className="expenseList">
                <div className="expenseDetails">
                    <div className="srNo">
                        <h4>1.</h4>
                    </div>
                    <div className="expense">
                        <h4>Expense of shopping</h4>
                    </div>
                    <div className="expenseAmount">
                        <h4>$200</h4>
                    </div>
                </div>
                <div>
                    <div className="editOptions">
                        <button className="editButtons" onClick={()=>{handleEditPopup(true)}}>Edit</button>
                        <button className="editButtons" onClick={()=>{handleDeletePopup(true)}}>Delete</button>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default ExpenseList;
