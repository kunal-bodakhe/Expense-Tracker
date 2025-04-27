import React from "react";
// import Icon from "../assets/BudgetEditIcon.svg";

function BudgetBlock({expenseTitle, amount, Icon}) {
    
    return(
        <>

            <li className="budgetBox"> 
                <div>
                    <h3 className="title">{expenseTitle}</h3>
                    <h3 className="amount">${amount}/m</h3>
                </div>
                <div>
                    <img className="icon" src={Icon} alt="BudgetEditIcon"></img>
                </div>
            </li>
        </>
    )
}
export default BudgetBlock;