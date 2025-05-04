import React from "react";
import CategoryBox from "./CategoryBox";
import food from "../assets/food.svg"
import Groceries from "../assets/groceries.svg"
import Travel from "../assets/travel.svg"
import Health from "../assets/health.svg"
import all from "../assets/allCategories.png"



function Category({setFood,setGroceries,setTravel,setHealth}) {

    const allCategory=(e)=>{
        setFood(false);
        setGroceries(false);;
        setTravel(false);
        setHealth(false);
        // console.log("working")
    }
    const OnlyFood=(e)=>{
        setFood(true);
        setGroceries(false);;
        setTravel(false);
        setHealth(false);
        // console.log("working")
    }
    const OnlyHealth=(e)=>{
        setFood(false);
        setGroceries(false);;
        setTravel(false);
        setHealth(true);
        // console.log("working")
    }
    const OnlyTravel=(e)=>{
        setFood(false);
        setGroceries(false);;
        setTravel(true);
        setHealth(false);
        // console.log("working")
    }
    const OnlyGroceries=(e)=>{
        setFood(false);
        setGroceries(true);;
        setTravel(false);
        setHealth(false);
        // console.log("working")
    }


    // const [CategoryName, setCategoryName] = useState();
    // const [CategoryIcon, setCategoryIcon] = useState();

    return(
        <>
            <CategoryBox CategoryName={"All"} CategoryIcon={all} onClick={()=>{allCategory()}}></CategoryBox>
            <CategoryBox CategoryName={"Food"} CategoryIcon={food} onClick={()=>{OnlyFood()}}></CategoryBox>
            <CategoryBox CategoryName={"Groceries"} CategoryIcon={Groceries} onClick={()=>{OnlyGroceries()}}></CategoryBox>
            <CategoryBox CategoryName={"Travel"} CategoryIcon={Travel} onClick={()=>{OnlyTravel()}}></CategoryBox>
            <CategoryBox CategoryName={"Health"} CategoryIcon={Health} onClick={()=>{OnlyHealth()}}></CategoryBox>
        </>
    )
}
export default Category;