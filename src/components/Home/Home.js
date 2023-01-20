import React from "react";
import './Home.css';
import withBackgroundColor from '../../hoc/withBackgroundColor';
import ProfilePhoto from "./ProfilePhoto.jpg";
import CurriculumVitae from "./Curriculum Vitae.pdf";
import { BsDownload } from "react-icons/bs";

class Home extends React.Component {
    render() {
        return (
            <div className="Home">
                <img className="Profile-Photo" src={ProfilePhoto} alt="Portfolio" />
                <div className="Home-Intro-Download">
                    <p className="Home-Intro">
                        <span className="hello">Hello, my name is</span>
                        <span className="big-name">Hugo Xu</span>
                        <span className="occupation">And I'm a Web Developer</span>
                    </p>
                    <button type="button" className="download-button">
                        <a className="CV-Download" href={CurriculumVitae} download>
                            <BsDownload />
                            <span>Download CV</span>
                        </a>
                    </button>
                </div>
            </div>
        );
    }
}

export default withBackgroundColor(Home);