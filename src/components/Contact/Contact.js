import React from 'react';
import './Contact.css';
import ContactInfo from './ContactInfo.js'

class Contact extends React.Component {

    render() {
        return (
            <div className="contact-section">
                {ContactInfo.map((piece, i) => { // The "piece" parameter as in piece of contact info
                    return (
                        <div className="contact-piece" key={i}>
                            <span className="piece-icon">{piece.icon}</span>
                            <span className="piece-info">{piece.info}</span>
                        </div>
                    );
                })}
            </div>
        );
    }
}

export default Contact;