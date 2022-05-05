import React from 'react'
import './Footer.scss'

import { FaFacebook,FaInstagramSquare,FaTwitter} from 'react-icons/fa';

const Footer = () => {
    return (
        <div className="footer">
            <div className='footer--container'>
                <div className="footer--column">
                    <p className='footer--title'>CONTACT</p>
                    <p className="footer--contact-mail">elecity@elecity.com</p>
                    <p className="footer--contact-phone">02.35.35.35.76</p>
                    <div className="footer--logos"><FaFacebook /><FaInstagramSquare /><FaTwitter /></div>
                </div>
                <div className="footer--column">
                    <p className ="footer--title footer--title-compte">MON COMPTE</p>
                    <p className="footer--compte-connect">Se connecter</p>
                    <p className="footer--compte-suscribe">S'inscrire</p>
                </div>
            </div>
        </div>
    )
}
export default Footer;

