import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "./styleP.css"
import Footer from '../components/Footer'

function Astuces() {

    return (
        <div className='fds-cont'>
            <h1 style={{ textAlign: "center" }}> Astuces</h1>
            <p className='justified-text' style={{ margin: "auto 10%", textAlign: "center" }}>
                Bienvenue dans notre rubrique "Astuces Cuisine" ! Ici, nous partageons des conseils et des techniques pratiques
                pour améliorer votre expérience culinaire. Que vous soyez un chef aguerri ou un amateur passionné, nos astuces
                vous aideront à optimiser votre temps en cuisine, à perfectionner vos plats et à découvrir de nouvelles façons
                créatives de cuisiner. Préparez-vous à transformer vos repas quotidiens en de véritables festins grâce à nos
                secrets de cuisine incontournables !
            </p>

            <div className='cards-container'>
                <Card className='fds-card' style={{ width: '18rem', height: '620px', margin: '50px 10px 50px 10px' }}>
                    <Card.Img className='card-img' variant="top" src="/citron-presse.jpeg" />
                    <Card.Body>
                        <Card.Title>Avoir un jus de citron pressé abondant et avec le plus de saveur possible</Card.Title>
                        <Card.Text>
                            <p className='justified-text'>Ingrédient indispensable dans une cuisine, on adore utiliser le citron,
                                et plus précisément son jus, dans les recettes. Il permet de faire ressortir les saveurs des plats
                                (salés ou sucrés), mais aussi des sauces. Mais connaissez-vous tous les secrets pour en extraire
                                le plus de saveur possible ?</p>
                        </Card.Text>
                        <Button className='card-btn' variant="primary">En savoir plus</Button>
                    </Card.Body>
                </Card>



                <Card className='fds-card' style={{ width: '18rem', height: '620px', margin: '50px 10px 50px 10px' }}>
                    <Card.Img className='card-img' variant="top" src="/citron-presse.jpeg" />
                    <Card.Body>
                        <Card.Title>Avoir un jus de citron pressé abondant et avec le plus de saveur possible</Card.Title>
                        <Card.Text>
                            <p className='justified-text'>Ingrédient indispensable dans une cuisine, on adore utiliser le citron,
                                et plus précisément son jus, dans les recettes. Il permet de faire ressortir les saveurs des plats
                                (salés ou sucrés), mais aussi des sauces. Mais connaissez-vous tous les secrets pour en extraire
                                le plus de saveur possible ?</p>
                        </Card.Text>
                        <Button className='card-btn' variant="primary">En savoir plus</Button>
                    </Card.Body>
                </Card>


                <Card className='fds-card' style={{ width: '18rem', height: '620px', margin: '50px 10px 50px 10px' }}>
                    <Card.Img className='card-img' variant="top" src="/citron-presse.jpeg" />
                    <Card.Body>
                        <Card.Title>Avoir un jus de citron pressé abondant et avec le plus de saveur possible</Card.Title>
                        <Card.Text>
                            <p className='justified-text'>Ingrédient indispensable dans une cuisine, on adore utiliser le citron,
                                et plus précisément son jus, dans les recettes. Il permet de faire ressortir les saveurs des plats
                                (salés ou sucrés), mais aussi des sauces. Mais connaissez-vous tous les secrets pour en extraire
                                le plus de saveur possible ?</p>
                        </Card.Text>
                        <Button className='card-btn' variant="primary">En savoir plus</Button>
                    </Card.Body>
                </Card>



                <Card className='fds-card' style={{ width: '18rem', height: '620px', margin: '50px 10px 50px 10px' }}>
                    <Card.Img className='card-img' variant="top" src="/citron-presse.jpeg" />
                    <Card.Body>
                        <Card.Title>Avoir un jus de citron pressé abondant et avec le plus de saveur possible</Card.Title>
                        <Card.Text>
                            <p className='justified-text'>Ingrédient indispensable dans une cuisine, on adore utiliser le citron,
                                et plus précisément son jus, dans les recettes. Il permet de faire ressortir les saveurs des plats
                                (salés ou sucrés), mais aussi des sauces. Mais connaissez-vous tous les secrets pour en extraire
                                le plus de saveur possible ?</p>
                        </Card.Text>
                        <Button className='card-btn' variant="primary">En savoir plus</Button>
                    </Card.Body>
                </Card>


            </div>
            <Footer />
        </div>
    )
}

export default Astuces