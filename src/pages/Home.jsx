import React, { useContext,useEffect } from 'react'
import Jumbotron from '../components/Jumbotron'
import MealsContainer from '../components/MealsContainer'
import axios from "axios";
import { MyContext } from '../context';
// import { useEffect, useState } from "react";

function Home() {
    const {meals, setMeals} = useContext(MyContext);
    useEffect(() => {
        axios
            .get("https://www.themealdb.com/api/json/v1/1/search.php?f=a")
            .then(({ data }) => setMeals(data.meals))
            .catch((error) => console.log(error));
    }, []);

    return (
        <>
            <Jumbotron />
            <MealsContainer meals={meals} />
        </>
    )
}

export default Home;