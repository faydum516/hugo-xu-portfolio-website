import React from 'react';
import './Portfolio.css';
import PortfolioProjects from './PortfolioProjects.js';
import withBackgroundColor from '../../hoc/withBackgroundColor';

class Portfolio extends React.Component {

    render() {
        return (
            <div className="portfolio-projects">
                {PortfolioProjects.map((project, index) => {
                    return (
                        <figure className="project" key={index}>
                            <a className="project-link"  href={project.link} target="_blank" rel="noreferrer">
                                <img className="image" src={project.img} alt={project.name} />
                                <figcaption className="name">{project.name}</figcaption>
                            </a>
                        </figure>
                    );
                })}
            </div>
        );
    }
}

export default withBackgroundColor(Portfolio);