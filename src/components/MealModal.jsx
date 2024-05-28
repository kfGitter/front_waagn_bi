import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';

function MealModal({
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
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant="primary" onClick={handleShow} className='card-btn'>
                Voir Plus
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{strMeal}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <img src={strMealThumb} alt={strMeal} style={{ width: '100%' }} />
                    <div>
                        <h4>Origine:</h4>
                        <p>{strArea}</p>

                        <h4>Categorie:</h4>
                        <p>{strCategory}</p>

                        <h4>Tags:</h4>
                        <p>{strTags}</p>

                        <h4>Portions:</h4>
                        <p>Pour 5 personnes</p>

                        <h4>Ingredients:</h4>
                        <ul>
                            {strIngredient1 && <li>{strIngredient1} {strMeasure1}</li>}
                            {strIngredient2 && <li>{strIngredient2} {strMeasure2}</li>}
                            {strIngredient3 && <li>{strIngredient3} {strMeasure3}</li>}
                            {strIngredient4 && <li>{strIngredient4} {strMeasure4}</li>}
                            {strIngredient5 && <li>{strIngredient5} {strMeasure5}</li>}
                            {strIngredient6 && <li>{strIngredient6} {strMeasure6}</li>}
                            {strIngredient7 && <li>{strIngredient7} {strMeasure7}</li>}
                        </ul>

                        <h4>Instructions:</h4>
                        <p>{strInstructions}</p>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Fermer
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default MealModal;
