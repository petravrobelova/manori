import React from "react";

import phone from "../icons/contact/phone.png"
import email from "../icons/contact/email.png"
import facebook from "../icons/social-media/facebook.png"
import instagram from "../icons/social-media/instagram.png"
import pinterest from "../icons/social-media/pinterest.png"

function Footer() {
    return (
        <footer>
            <div>
            <div className="container footer-container">
                <div className="footer-section">
                    <div className="footer-title">
                        <h5>Kontakt</h5>
                    </div>
                    <div className="footer-text">
                        <p>Výroba a prodej </p>
                        <p>Eva Mauthnerová </p>
                        <a className="footer-text footer-text-link" href="mailto:evamauthnerova@gmail.com">
                            evamauthnerova@gmail.com
                        </a>
                    </div>
                </div>
                <div className="footer-section">
                    <div className="footer-title">
                            <h5>Důležité info</h5>
                    </div>
                    <div>
                        <a className="footer-text footer-text-link" href="#">Obchodní podmínky</a> <br />
                        <a className="footer-text footer-text-link" href="#">Pravidla ochrany soukromí</a>
                    </div>
                </div>
                <div className="footer-section">
                    <div className="footer-title">
                            <h5>Vaše dotazy vždy rádi zodpovíme</h5>
                    </div>
                    <div className="footer-customer-support-link-section">         
                        <div className="footer-customer-support-link">
                            <a href="tel:+420 733 117 367">
                                <img alt="phone" className="footer-customer-support-incon" src={phone} />
                            </a>
                            <div>
                                <a className="footer-text footer-text-link footer-customer-support-text-link" href="tel:+420 733 117 367">                                                              
                                    +420 733 117 367
                                </a>
                            </div>
                        </div>
                        <div className="footer-customer-support-link">   
                            <a  href="mailto:info@manoristudio.cz">
                                <img alt="email" className="footer-customer-support-incon" src={email} />
                            </a>
                            <div>
                                <a  className="footer-text footer-text-link footer-customer-support-text-link" href="mailto:info@manoristudio.cz">
                                            info@manoristudio.cz
                                </a>     
                            </div>       
                        </div>
                    </div>
                </div>   
                <div className="footer-section">
                    <div className="footer-title">
                        <h5>Sledujte naše sociální sítě a buďte v obraze</h5>
                    </div>
                    <div className="footer-social-media-icons">
                        <a href="https://www.facebook.com/manori.bags/">
                            <img alt="facebook" className="footer-social-media-icon" src={facebook} />
                        </a>
                        <a href="https://www.instagram.com/manori_studio/">
                            <img alt="instagram" className="footer-social-media-icon" src={instagram} />
                        </a>
                        <a href="https://cz.pinterest.com/studiomanori/pins/">
                            <img alt="pinterest" className="footer-social-media-icon" src={pinterest} /> 
                        </a>
                    </div>
                </div> 
            </div>        
            <hr />
            <div className="footer-copyright">
                <p>© 2020 - Manori</p>
            </div>
        </div>
    </footer>
    )
}

export default Footer;