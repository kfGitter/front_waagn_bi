import React from 'react';
import { FaGithub, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';
import "./style.css";
import { LinkContainer } from 'react-router-bootstrap';

function Footer() {
    return (
        <footer className="full-footer">
            <div className="footer-top">
                <nav className="recap-nav">
                    <ul className="list-recap-nav">
                        <LinkContainer to="/"><li className="recap-nav-li"><a href="#">Recettes</a></li></LinkContainer>
                        <LinkContainer to="/astuces"><li className="recap-nav-li"><a href="#">Astuces</a></li></LinkContainer>
                        {/* <LinkContainer to="/"><li className="recap-nav-li"><a href="#">Cuisine du Monde</a></li></LinkContainer> */}
                        <LinkContainer to="/food-science"><li className="recap-nav-li"><a href="#">Le Saviez-vous?</a></li></LinkContainer>
                    </ul>
                </nav>

                <div className="smd-icons">
                    <ul className="list-icons">
                    <li className="icon"><a href="https://github.com/kfGitter"><FaGithub /></a></li>
                        {/* <li className="icon"><FaTwitter /></li> */}
                        <li className="icon"><a href="https://www.linkedin.com/in/khady-fall-coding-my-dreams/"><FaLinkedin /></a></li>
                        {/* <li className="icon"><FaInstagram /></li> */}
                    </ul>
                </div>
            </div>

            <div className="footer-bottom">
                <div className="copyrights">&copy; HappyKF 2024</div>
            </div>
        </footer>
    );
}

export default Footer;
