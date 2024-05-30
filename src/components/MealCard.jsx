import React from 'react';
import Card from 'react-bootstrap/Card';
import MealModal from './MealModal';
import { FaHeart } from 'react-icons/fa'; 

// TO SEE IF THE CODE CAN BE REDUCED
function MealCard({
    strMeal,
    strMealThumb,
    strTags,
    strArea,
    strCategory,
    strInstructions,
    strMeasure1,
    strMeasure2,
    strMeasure3,
    strMeasure4,
    strMeasure5,
    strMeasure6,
    strMeasure7,
    strIngredient1,
    strIngredient2,
    strIngredient3,
    strIngredient4,
    strIngredient5,
    strIngredient6,
    strIngredient7
}) {
    return (
        <div className='meal-card'>
            <Card style={{ width: '18rem' }} className='overflow'>
                <Card.Img variant="top" src={strMealThumb} className='card-img'/>
                <Card.Body className='card-body'>
                    <Card.Title className='card-title'>{strMeal}</Card.Title>
                    <div className='modal-container'>
                        <MealModal
                            strMeal={strMeal}
                            strMealThumb={strMealThumb}
                            strTags={strTags}
                            strArea={strArea}
                            strCategory={strCategory}
                            strInstructions={strInstructions}
                            strMeasure1={strMeasure1}
                            strMeasure2={strMeasure2}
                            strMeasure3={strMeasure3}
                            strMeasure4={strMeasure4}
                            strMeasure5={strMeasure5}
                            strMeasure6={strMeasure6}
                            strMeasure7={strMeasure7}
                            strIngredient1={strIngredient1}
                            strIngredient2={strIngredient2}
                            strIngredient3={strIngredient3}
                            strIngredient4={strIngredient4}
                            strIngredient5={strIngredient5}
                            strIngredient6={strIngredient6}
                            strIngredient7={strIngredient7}
                        />
                        <FaHeart className='heart'/> 
                    </div>
                </Card.Body>
            </Card>
        </div>
    );
}

export default MealCard;
