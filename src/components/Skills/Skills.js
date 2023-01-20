import React from 'react';
import './Skills.css';
import SoftwareSkills from '../SoftwareSkills/SoftwareSkills.js';
import Languages from '../Languages/Languages.js';

class Skills extends React.Component {
    render() {
        return (
            <div className="skillset">
                <div className="software-skills">
                    <h4>Software Skills</h4>
                    <hr style={{borderColor: "#000000"}} />
                    <SoftwareSkills />
                </div>
                <div className="languages">
                    <h4>Languages</h4>
                    <hr style={{borderColor: "#000000"}} />
                    <Languages />
                </div>
            </div>
        );
    }
}

export default Skills;