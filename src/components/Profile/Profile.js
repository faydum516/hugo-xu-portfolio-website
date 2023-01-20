import React from 'react';
import './Profile.css';
import withBackgroundColor from '../../hoc/withBackgroundColor';

class Profile extends React.Component {
    render() {
        return (
            <p className="Profile">I'm an aspiring full-stack web developer, skilled in 
            website creation, CSS styling, APIs, and databases. Also experienced in
            creating web applications and enhancing user interfaces' efficiency using the MERN stack. 
            Seeking to use my web development skills in a web developer position. Continuing learning new
            technologies.
            </p>
        );
    }
}

export default withBackgroundColor(Profile);