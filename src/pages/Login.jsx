import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './styleP.css';
import { LinkContainer } from "react-router-bootstrap";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Login() {

    // CONSTANTES
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    // LOGIQUE
    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/login', { email, password });
            setMessage('Connexion réussie!');
            setTimeout(() => {
                navigate('/');
            }, 2000);
        } catch (err) {
            setMessage(" Une erreur est survenue. Veuillez réessayer.");
        }
    };

    // EXECUTION
    return (
        <div className='lg-bd'>
            <div className="login-container">
                <h2 className="login-title">SE CONNECTER</h2>
                <p className="login-subtitle">Nous sommes heureux de vous revoir !</p>
                {message && <p>{message}</p>}
                <Form className="login-form" onSubmit={handleLogin}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email ou pseudo</Form.Label>
                        <Form.Control
                            type="email"
                            placeholder="Email ou pseudo"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Mot de passe</Form.Label>
                        <Form.Control
                            type="password"
                            placeholder="Mot de passe"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </Form.Group>

                    <Button variant="primary" type="submit" className="login-button">
                        Se connecter
                    </Button>

                    <div className="login-or">ou</div>
                    <LinkContainer to='/signup'>
                        <Button variant="outline-primary" className="create-account-button">
                            Créer un compte
                        </Button>
                    </LinkContainer>
                </Form>
            </div>
        </div>
    );
}

export default Login;
