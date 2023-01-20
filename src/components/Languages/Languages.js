import React from 'react';
import './Languages.css';
import withBackgroundColor from '../../hoc/withBackgroundColor';
import LanguageList from './LanguageList';

class Languages extends React.Component {

    render() {
        return (
            <div className="language-list">
                {LanguageList.map((lang, i) => {
                    return (
                        <div className="language-item" key={i}>
                            <div className="language-proficiency">
                                <span className="language">{lang.language}</span>
                                <span className="proficiency">{
                                    lang.fluency === 100 ? "Professional" :
                                    lang.fluency >= 80 ? "Proficient" :
                                    lang.fluency >= 60 ? "Advanced" :
                                    lang.fluency >= 40 ? "Intermediate" :
                                    "Beginner"
                                }</span>
                            </div>
                            <div className="fluency-bar">
                                <div className="fluency" 
                                    style={{width: lang.fluency === 100 ? '100%' :
                                        lang.fluency >= 80 ? '80%' :
                                        lang.fluency >= 60 ? '60%' :
                                        lang.fluency >= 40 ? '40%' :
                                        '20%'
                                    }}>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        );
    }
}

export default withBackgroundColor(Languages);