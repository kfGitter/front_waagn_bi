import React, { useState, useContext } from 'react';
import { Button, Form, InputGroup } from "react-bootstrap";
import { FaMagnifyingGlass } from 'react-icons/fa6';
import axios from 'axios';  // Import axios
import { MyContext } from '../context';
import "./style.css";

function Jumbotron() {
    const [searchInput, setSearchInput] = useState("");
    const { setMeals, count } = useContext(MyContext);  // Assuming count is also provided by context
    console.log(count);

    function handleSearch() {
        axios
            .get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchInput}`)
            .then((res) => {
                console.log(res);
                setMeals(res.data.meals);  // Update meals state with the fetched data
            })
            .catch((error) => {
                console.error("Error fetching meals:", error);
            });
    }

    return (
        <div className="jumbotron">
            <h1>Bienvenue</h1>
            <h2>Vous pouvez trouver ici vos plats Favoris!</h2>
            <div className="button-input">
                <InputGroup className="mb-3 button-input">
                    <Form.Control
                        placeholder="Chercher une recette"
                        aria-label="Meal Search Input"
                        aria-describedby="meal-search-button"
                        value={searchInput}
                        onChange={(e) => setSearchInput(e.target.value)}
                    />
                    <Button variant="danger" id="meal-search-button" onClick={handleSearch}>
                        <FaMagnifyingGlass />
                    </Button>
                </InputGroup>
            </div>
        </div>
    );
}

export default Jumbotron;
