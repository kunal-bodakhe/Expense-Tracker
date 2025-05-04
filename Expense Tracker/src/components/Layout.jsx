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

    const [AddExpense, setAddExpense] = useState(false);
    const [AddBudget, setAddBudget] = useState(false);
    const [EditExpense, setEditExpense] = useState(false);
    const [DeleteExpense, setDeleteExpense] = useState(false);
    const [BudgetAmount, setBudgetAmount] = useState(JSON.parse(localStorage.getItem("budget")));
    const [totalExpense, setTotalExpense] = useState(JSON.parse(localStorage.getItem("totalAmount")));
    const Availablelimit= BudgetAmount-totalExpense;
    const [EditedExpense, setEditedExpense] = useState("");
    const [Deleteindex, setDeleteindex] = useState("");
    const [EditIndex, setEditIndex] = useState();
    const [Food, setFood] = useState(false);
    const [Groceries, setGroceries] = useState(false);
    const [Travel, setTravel] = useState(false);
    const [Health, setHealth] = useState(false);

    
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
                    <Filter/><Category setFood={setFood} setGroceries={setGroceries} setTravel={setTravel} setHealth={setHealth}/><AddInfoButtons handleExpensePopup={setAddExpense} handleBudgetPopup={setAddBudget}/>
                </div>
                <ExpenseList handleEditPopup={setEditExpense} handleDeletePopup={setDeleteExpense} setEditedExpense={setEditedExpense} setDeleteindex={setDeleteindex} setEditIndex={setEditIndex} Food={Food} Groceries={Groceries} Travel={Travel} Health={Health}/>
            </div>
            {AddExpense && <AddExpensePopup handleExpensePopup={setAddExpense} setTotalExpense={setTotalExpense}/>}
            {AddBudget && <AddBudgetPopup handleBudgetPopup={setAddBudget} BudgetAmount={BudgetAmount} setBudgetAmount={setBudgetAmount}/>}
            {EditExpense && <EditExpenseDetails handleEditPopup={setEditExpense}  EditedExpense={EditedExpense} EditIndex={EditIndex} setTotalExpense={setTotalExpense}/>}
            {DeleteExpense && <DeleteExpenseDetails handleDeletePopup={setDeleteExpense} Deleteindex={Deleteindex} setTotalExpense={setTotalExpense}/>}
        </>
    )
}
export default Layout;