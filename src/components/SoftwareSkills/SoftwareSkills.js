import React from 'react';
import './SoftwareSkills.css';
import withBackgroundColor from '../../hoc/withBackgroundColor';
import SoftwareSkillData from './SoftwareSkillData.js';
import { Navigation, Pagination, Scrollbar } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

class SoftwareSkills extends React.Component {

    constructor(props) {
        super(props);
        this.SoftwareSkillSet = SoftwareSkillData;
    }

    render() {
        return ( 
            <Swiper className="software-skill-swiper"
                modules={[Navigation, Pagination, Scrollbar]}
                spaceBetween={60}
                slidesPerView={1}
                navigation={{clickable: true}}
                pagination={{clickable: true}}
                scrollbar={{draggable: true}}
                >
                {this.SoftwareSkillSet.map((type, index) => {
                    return (
                        <SwiperSlide key={index}>
                            <div className="software-skill-type">
                                <h3 className="software-skill-title">{type.title}</h3>                    
                                <div className="software-skills">
                                    {type.skills.map((skill, i) => {
                                        return (
                                            <div className="software-skill" key={i}>
                                                <span className="software-skill-icon">{skill.icon}</span>
                                                <p className="software-skill-name">{skill.name}</p>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        </SwiperSlide>
                    );
                })}
            </Swiper>
        );
    }
}

export default withBackgroundColor(SoftwareSkills);