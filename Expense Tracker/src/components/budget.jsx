import React from "react";
import { useState } from "react";
import BudgetBlock from "./BudgetBlock";
import BudgetEditIcon from "../assets/BudgetEditIcon.svg";
import totalExpenseIcon from "../assets/totalExpenseIcon.svg"

function Budget() {
const [expenseTitle, setExpenseTitle] = useState();
const [amount, setamount] = useState();
const [Icon, setIcon] = useState()
  return (
    <>
      <ol className="budgetBlock">
        <BudgetBlock expenseTitle={"Your Expense"} amount={"$20000000/m"} Icon={BudgetEditIcon}></BudgetBlock>
        <BudgetBlock expenseTitle={"Total Expense"} amount={"$2000000/m"} Icon={totalExpenseIcon}></BudgetBlock>
        <BudgetBlock expenseTitle={"Available limit"} amount={"$18000000/m" } Icon={totalExpenseIcon} ></BudgetBlock>
      </ol>
    </>
  );
}
export default Budget;
