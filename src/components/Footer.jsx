import React from 'react';
import { FaGithub, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';
import "./style.css";

function Footer() {
    return (
        <footer className="full-footer">
            <div className="footer-top">
                <nav className="recap-nav">
                    <ul className="list-recap-nav">
                        <li className="recap-nav-li"><a href="#">Recettes</a></li>
                        <li className="recap-nav-li"><a href="#">Astuces</a></li>
                        <li className="recap-nav-li"><a href="#">Cuisine du Monde</a></li>
                        <li className="recap-nav-li"><a href="#">Le Saviez-vous?</a></li>
                    </ul>
                </nav>

                <div className="smd-icons">
                    <ul className="list-icons">
                        <li className="icon"><a href="#"><FaGithub /></a></li>
                        <li className="icon"><a href="#"><FaTwitter /></a></li>
                        <li className="icon"><a href="#"><FaLinkedin /></a></li>
                        <li className="icon"><a href="#"><FaInstagram /></a></li>
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
