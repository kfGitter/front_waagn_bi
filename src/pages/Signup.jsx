import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './styleP.css';
import { LinkContainer } from "react-router-bootstrap";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Signup() {

    // CONSTANTES
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    // LOGIQUE
    const handleSignup = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/signup', { email, password });
            setMessage('Inscription réussie!');
            setTimeout(() => {
                navigate('/login');
            }, 2000);
        } catch (err) {
            setMessage(" Une erreur est survenue. Veuillez réessayer.");
        }
    };

    // EXECUTION
    return (
        <div className='sgp-bd'>
            <div className="login-container">
                <h2 className="login-title">CRÉER UN COMPTE</h2>
                <p className="login-subtitle">Rejoignez-nous pour une délicieuse aventure!</p>
                {message && <p>{message}</p>}
                <Form className="login-form" onSubmit={handleSignup}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email ou pseudo</Form.Label>
                        <Form.Control
                            type="email"
                            placeholder="Email ou pseudo"
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Mot de passe</Form.Label>
                        <Form.Control
                            type="password"
                            placeholder="Mot de passe"
                            onChange={(e) => setPassword(e.target.value)}
                            value={password}
                        />
                    </Form.Group>

                    <Button variant="primary" type="submit" className="login-button">
                        S'inscrire
                    </Button>

                    <div className="login-or">ou</div>

                    <LinkContainer to="/login">
                        <Button variant="outline-primary" className="create-account-button">
                            Se connecter
                        </Button>
                    </LinkContainer>
                </Form>
            </div>
        </div>
    );
}

export default Signup;
