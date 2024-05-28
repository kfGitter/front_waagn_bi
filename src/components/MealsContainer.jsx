import React from 'react';
import './style.css';
import MealCard from './MealCard';

function MealsContainer({ meals }) {
    return (
        <>
        <h1 className='meals-h1'>Just a taste...</h1>
        <div className='meals-container'>
            {meals.map((meal) => (
                <MealCard key={meal.idMeal} {...meal} />
            ))}
        </div>
        </>
    );
}

export default MealsContainer;
