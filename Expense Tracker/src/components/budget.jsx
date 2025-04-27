import React from "react";
import { useState } from "react";
import BudgetBlock from "./BudgetBlock";
import BudgetEditIcon from "../assets/BudgetEditIcon.svg";
import totalExpenseIcon from "../assets/totalExpenseIcon.svg"

function Budget( {BudgetAmount}) {
const [expenseTitle, setExpenseTitle] = useState();
const [Icon, setIcon] = useState()
  return (
    <>
      <ol className="budgetBlock">
        <BudgetBlock expenseTitle={"Your Budget"} amount={BudgetAmount} Icon={BudgetEditIcon}></BudgetBlock>
        <BudgetBlock expenseTitle={"Total Expense"} amount={"2000000"} Icon={totalExpenseIcon}></BudgetBlock>
        <BudgetBlock expenseTitle={"Available limit"} amount={"18000000" } Icon={totalExpenseIcon} ></BudgetBlock>
      </ol>
    </>
  );
}
export default Budget;
