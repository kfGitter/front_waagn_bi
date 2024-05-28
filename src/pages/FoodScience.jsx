import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "./styleP.css"
import Footer from '../components/Footer'

function FoodScience() {

    return (
        <div className='fds-cont'>
            <h1 style={{textAlign:"center"}}> FOOD SCIENCE</h1>
            <p className='justified-text' style={{margin:"auto 5%", textAlign:"center"}}>La cuisine n'est pas seulement un art, c'est une science.
                Il y a aussi tant de decouvertes a faire sur les aliments
                que nous considérons parfois comme banals mais qui sont en
                fait incroyables. Nous vous aiderons à en savoir plus sur
                certains aliments et à comprendre les processus physiques
                et chimiques qui donnent à certaines nourritures l'aspect,
                l'odeur et le goût qu'elles ont. Vos papilles, votre intellect
                et votre santé nous remercieront !
            </p>

            <div className='cards-container'>
                <Card className='fds-card' style={{ width: '18rem', height: '620px', margin: '50px 10px 50px 10px' }}>
                    <Card.Img className='card-img' variant="top" src="/Baobab_Fruit.webp" />
                    <Card.Body>
                        <Card.Title>Le Bouye ou pain de singe, un concentré de bienfaits!</Card.Title>
                        <Card.Text>
                            <p className='justified-text'>L'habit ne fait pas le moine, le bouye pourra en temoigner! Avec son allure étrange,
                                ce dernier ferait reculer certains: une cosse marron à maturité, une peau douce,
                                qui révèle à l’intérieur une pulpe blanche sèche et fibreuse et ses graines noires.
                                Le pain de singe – appelé bouye au Sénégal – est le fruit du baobab, un veritable
                                « super-aliment » au goût acidulé, qui cumule les vertus...</p>
                        </Card.Text>
                        <Button className='card-btn' variant="primary">En savoir plus</Button>
                    </Card.Body>
                </Card>



                <Card className='fds-card' style={{ width: '18rem', height: '620px', margin: '50px 10px 50px 10px' }}>
                    <Card.Img className='card-img' variant="top" src="/Baobab_Fruit.webp" />
                    <Card.Body>
                        <Card.Title>Le Bouye ou pain de singe, un concentré de bienfaits!</Card.Title>
                        <Card.Text>
                            <p className='justified-text'>L'habit ne fait pas le moine, le bouye pourra en temoigner! Avec son allure étrange,
                                ce dernier ferait reculer certains: une cosse marron à maturité, une peau douce,
                                qui révèle à l’intérieur une pulpe blanche sèche et fibreuse et ses graines noires.
                                Le pain de singe – appelé bouye au Sénégal – est le fruit du baobab, un veritable
                                « super-aliment » au goût acidulé, qui cumule les vertus...</p>
                        </Card.Text>
                        <Button className='card-btn' variant="primary">En savoir plus</Button>
                    </Card.Body>
                </Card>


                <Card className='fds-card' style={{ width: '18rem', height: '620px', margin: '50px 10px 50px 10px' }}>
                    <Card.Img className='card-img' variant="top" src="/Baobab_Fruit.webp" />
                    <Card.Body>
                        <Card.Title>Le Bouye ou pain de singe, un concentré de bienfaits!</Card.Title>
                        <Card.Text>
                            <p className='justified-text'>L'habit ne fait pas le moine, le bouye pourra en temoigner! Avec son allure étrange,
                                ce dernier ferait reculer certains: une cosse marron à maturité, une peau douce,
                                qui révèle à l’intérieur une pulpe blanche sèche et fibreuse et ses graines noires.
                                Le pain de singe – appelé bouye au Sénégal – est le fruit du baobab, un veritable
                                « super-aliment » au goût acidulé, qui cumule les vertus...</p>
                        </Card.Text>
                        <Button className='card-btn' variant="primary">En savoir plus</Button>
                    </Card.Body>
                </Card>



                <Card className='fds-card' style={{ width: '18rem', height: '620px', margin: '50px 10px 50px 10px' }}>
                    <Card.Img className='card-img' variant="top" src="/Baobab_Fruit.webp" />
                    <Card.Body>
                        <Card.Title>Le Bouye ou pain de singe, un concentré de bienfaits!</Card.Title>
                        <Card.Text>
                            <p className='justified-text'>L'habit ne fait pas le moine, le bouye pourra en temoigner! Avec son allure étrange,
                                ce dernier ferait reculer certains: une cosse marron à maturité, une peau douce,
                                qui révèle à l’intérieur une pulpe blanche sèche et fibreuse et ses graines noires.
                                Le pain de singe – appelé bouye au Sénégal – est le fruit du baobab, un veritable
                                « super-aliment » au goût acidulé, qui cumule les vertus...</p>
                        </Card.Text>
                        <Button className='card-btn' variant="primary">En savoir plus</Button>
                    </Card.Body>
                </Card>


            </div>
            <Footer />
        </div>
    )
}

export default FoodScience