import React from "react";
import { useState } from "react";
import BudgetBlock from "./BudgetBlock";
import BudgetEditIcon from "../assets/BudgetEditIcon.svg";
import totalExpenseIcon from "../assets/totalExpenseIcon.svg"

function Budget( {BudgetAmount , totalExpense , Availablelimit}) {
const [expenseTitle, setExpenseTitle] = useState();
const [Icon, setIcon] = useState()
  return (
    <>
      <ol className="budgetBlock">
        <BudgetBlock expenseTitle={"Your Budget"} amount={BudgetAmount} Icon={BudgetEditIcon}></BudgetBlock>
        <BudgetBlock expenseTitle={"Total Expense"} amount={totalExpense} Icon={totalExpenseIcon}></BudgetBlock>
        <BudgetBlock expenseTitle={"Available limit"} amount={Availablelimit} Icon={totalExpenseIcon} ></BudgetBlock>
      </ol>
    </>
  );
}
export default Budget;
