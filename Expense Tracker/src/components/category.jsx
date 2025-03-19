import React from "react";
import CategoryBox from "./CategoryBox";
import food from "../assets/food.svg"
import Groceries from "../assets/groceries.svg"
import Travel from "../assets/travel.svg"
import Health from "../assets/health.svg"



function Category() {

    // const [CategoryName, setCategoryName] = useState();
    // const [CategoryIcon, setCategoryIcon] = useState();

    return(
        <>
            <CategoryBox CategoryName={"Food"} CategoryIcon={food}></CategoryBox>
            <CategoryBox CategoryName={"Groceries"} CategoryIcon={Groceries}></CategoryBox>
            <CategoryBox CategoryName={"Travel"} CategoryIcon={Travel}></CategoryBox>
            <CategoryBox CategoryName={"Health"} CategoryIcon={Health}></CategoryBox>
        </>
    )
}
export default Category;