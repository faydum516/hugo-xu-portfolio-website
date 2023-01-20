import React from "react";
import './Education.css';
import EducationInfo from "./EducationInfo";
import withBackgroundColor from '../../hoc/withBackgroundColor';
import parse from 'html-react-parser';

class Education extends React.Component {
    render() {
        return (
            <div className="education-information">
                {EducationInfo.map((info, i) => {
                    return (
                        <div className="education-piece" key={i}>
                            <div className="institution-location">
                                <span>{parse(`<b>${info.institution}</b>`)}</span>
                                <span>{parse(info.location)}</span>
                            </div>
                            <div className="diploma-period">
                                <span>{info.diploma}</span>
                                <span>{info.period}</span>
                            </div>
                            <ul className="subInfo">
                                {info.subInfo.map((subInfoPiece, i) => {
                                    return <li key={i}>{parse(subInfoPiece)}</li>
                                })}
                            </ul>
                        </div>
                    );
                })}
            </div>
        );
    }
}

export default withBackgroundColor(Education);