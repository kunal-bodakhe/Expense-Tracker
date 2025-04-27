import React from "react";
import { useState } from "react";
import HeaderName from "./HeaderName";
import UserName from "./UserName";
import Budget from "./Budget";
import Filter from "./Filter";
import Category from "./Category";
import AddInfoButtons from "./AddInfoButtons";
import ExpenseList from "./ExpenseList";
import ExpenseChart from "./ExpenseChart";
import AddExpensePopup from "./AddExpensePopup"
import AddBudgetPopup from "./AddBudgetPopup";
import EditExpenseDetails from "./EditExpenseDetails";
import DeleteExpenseDetails from "./DeleteExpenseDetails";


function Layout() {

    const [AddExpense, setAddExpense] = useState(false)
    const [AddBudget, setAddBudget] = useState(false)
    const [EditExpense, setEditExpense] = useState(false)
    const [DeleteExpense, setDeleteExpense] = useState(false)
    const [BudgetAmount, setBudgetAmount] = useState(JSON.parse(localStorage.getItem("budget")));
    const [totalExpense, setTotalExpense] = useState(JSON.parse(localStorage.getItem("totalAmount")))
    const Availablelimit= BudgetAmount-totalExpense;
    
    // console.log({ AddExpense })
    // console.log({ AddBudget })
    return(

        <>
            <HeaderName/>
            <div className="layout"> 
                <UserName />
                <Budget BudgetAmount={BudgetAmount} totalExpense={totalExpense} Availablelimit={Availablelimit}/>
                <div className="pieChart"><ExpenseChart/></div>
                <div className="filterSection">
                    <Filter/><Category/><AddInfoButtons handleExpensePopup={setAddExpense} handleBudgetPopup={setAddBudget}/>
                </div>
                <ExpenseList handleEditPopup={setEditExpense} handleDeletePopup={setDeleteExpense}/>
            </div>
            {AddExpense && <AddExpensePopup handleExpensePopup={setAddExpense} setTotalExpense={setTotalExpense}/>}
            {AddBudget && <AddBudgetPopup handleBudgetPopup={setAddBudget} BudgetAmount={BudgetAmount} setBudgetAmount={setBudgetAmount}/>}
            {EditExpense && <EditExpenseDetails handleEditPopup={setEditExpense}/>}
            {DeleteExpense && <DeleteExpenseDetails handleDeletePopup={setDeleteExpense}/>}
        </>
    )
}
export default Layout;