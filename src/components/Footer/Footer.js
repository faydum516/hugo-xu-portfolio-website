import React from 'react';
import './Footer.css';
import Contact from '../Contact/Contact.js';
import { SiFacebook, SiLinkedin, SiGithub, SiInstagram } from "react-icons/si";
import AnchorLink from "react-anchor-link-smooth-scroll";

class Footer extends React.Component {
    render() {
        return (
            <footer className="Footer" id="footer">
                <section className="contact-me">
                    <h3>Contact Me</h3>
                    <hr />
                    <Contact />
                </section>
                <section className="overview-and-follow-me">                
                    <div className="overview-section">
                        <h3>Overview</h3>
                        <hr />
                        <p className="overview">
                            <AnchorLink className="overview-link" href="#home">Home</AnchorLink> | <AnchorLink className="overview-link" href="#about-me">About Me</AnchorLink> | <AnchorLink className="overview-link" href="#education">Education</AnchorLink> | <AnchorLink className="overview-link" href="#skills">Skills</AnchorLink> | <AnchorLink className="overview-link" href="#projects">Projects</AnchorLink> | <AnchorLink className="overview-link" href="#footer">Contact Me</AnchorLink>
                        </p>
                    </div>
                    <div className="follow-me-section">
                        <h3>Follow Me</h3>
                        <hr />
                        <div className="social-icons">
                            <a className="social-icon" href="https://www.facebook.com/profile.php?id=100005231897318" target="_blank" rel="noreferrer"><SiFacebook /></a>
                            <a className="social-icon" href="https://www.linkedin.com/in/hugo-xu-a95309153/" target="_blank" rel="noreferrer"><SiLinkedin /></a>
                            <a className="social-icon" href="https://github.com/faydum516" target="_blank" rel="noreferrer"><SiGithub /></a>
                            <a className="social-icon" href="https://www.instagram.com/hugoxu96/"  target="_blank" rel="noreferrer"><SiInstagram /></a>
                        </div>
                    </div>
                </section>
            </footer>
        );
    }
}

export default Footer;