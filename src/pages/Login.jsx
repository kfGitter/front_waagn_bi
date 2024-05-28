import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './styleP.css';
import { LinkContainer } from "react-router-bootstrap";


function Login() {
    return (
        <div className='lg-bd'>

            <div className="login-container">
                <h2 className="login-title">SE CONNECTER</h2>
                <p className="login-subtitle">Nous sommes heureux de vous revoir !</p>
                <Form className="login-form">
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email ou pseudo</Form.Label>
                        <Form.Control type="email" placeholder="Email ou pseudo" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Mot de passe</Form.Label>
                        <Form.Control type="password" placeholder="Mot de passe" />
                    </Form.Group>

                    {/* <div className="forgot-password">
                    <a href="/forgot-password">Mot de passe oublié ?</a>
                </div> */}

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
