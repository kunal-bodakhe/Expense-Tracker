import React from "react";
import HeaderName from "./HeaderName";
import UserName from "./UserName";
import Budget from "./Budget";
import Filter from "./Filter";
import Category from "./Category";
import AddInfoButtons from "./AddInfoButtons";
import ExpenseList from "./ExpenseList";
import ExpenseChart from "./ExpenseChart";



function Layout() {

    return(

        <>
            <HeaderName/>
            <div className="layout"> 
                <UserName />
                <Budget/>
                <div className="pieChart"><ExpenseChart/></div>
                
                <div className="filterSection">
                    <Filter/><Category/><AddInfoButtons/>
                </div>
                <ExpenseList/>
            </div>
        </>
    )
}
export default Layout;