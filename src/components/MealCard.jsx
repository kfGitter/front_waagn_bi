import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function MealCard({strMeal, strMealThumb}) {
    return (

        <div className='meal-card'>

            <Card style={{ width: '18rem' }} className='overflow'>
                <Card.Img variant="top" src={strMealThumb} className='card-img'/>
                <Card.Body className='card-body'>
                    <Card.Title className='card-title'>{strMeal}</Card.Title>
                    <Button className='card-btn'>Voir Plus</Button>
                </Card.Body>
            </Card>

        </div>
    )
}

export default MealCard