import React from "react";
import HeaderName from "./HeaderName";
import UserName from "./UserName";
import Budget from "./Budget";
import Filter from "./Filter";
import Category from "./Category";
import AddInfoButtons from "./AddInfoButtons";
import ExpenseChart from "./ExpenseChart";



function Layout() {

    return(

        <>
            <HeaderName/>
            <div className="layout"> 
                <UserName />
                <Budget/>
                <div className="filterSection">
                    <Filter/><Category/><AddInfoButtons/>
                </div>
                <ExpenseChart/>
            </div>
        </>
    )
}
export default Layout;