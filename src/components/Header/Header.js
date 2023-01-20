import React from 'react';
import './Header.css';
import { FiMenu } from "react-icons/fi";
import AnchorLink from "react-anchor-link-smooth-scroll";

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            visibility: false
        };
        this.toggleDrop = this.toggleDrop.bind(this);
    }

    toggleDrop() {
        this.setState(state => {
            return {visibility: state.visibility ? false : true};
        });
    }
    
    render() {    
        return (
            <header className='Header'>
                <div className="Header-Logo-And-Menu-Click">
                    <div className='Header-Logo'>
                        <h2 className='Header-Name'>Hugo Xu</h2>
                        <h5 className='Header-Website-Type'>Portfolio Website</h5>
                    </div>
                    <FiMenu className="Menu-Click" onClick={this.toggleDrop} />
                </div>
                <nav className={this.state.visibility ? "Navbar Dropdown" : "Navbar Backup"}>
                    <ul className="Menu">
                        <li><AnchorLink className="Nav-Link" href="#home">Home</AnchorLink></li>
                        <li><AnchorLink className="Nav-Link" href="#about-me">About Me</AnchorLink></li>
                        <li><AnchorLink className="Nav-Link" href="#education">Education</AnchorLink></li>
                        <li><AnchorLink className="Nav-Link" href="#skills">Skills</AnchorLink></li>
                        <li><AnchorLink className="Nav-Link" href="#projects">Projects</AnchorLink></li>
                        <li><AnchorLink className="Nav-Link" href="#footer">Contact Me</AnchorLink></li>
                    </ul>
                </nav>
            </header>
        );
    }
}

export default Header;