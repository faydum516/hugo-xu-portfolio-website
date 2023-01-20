import React from 'react';
import './PortfolioApp.css';
import Header from './components/Header/Header.js';
import Home from './components/Home/Home.js';
import Education from './components/Education/Education';
import Skills from './components/Skills/Skills.js';
import Profile from './components/Profile/Profile.js';
import Portfolio from './components/Portfolio/Portfolio.js';
import Footer from './components/Footer/Footer.js';

class PortfolioApp extends React.Component {
    constructor(props) {
        super(props);
        this.contentSections = [
          {
            component: <Profile />,
            title: "About Me",
            id: "about-me"
          },
          {
            component: <Education />,
            title: "Education",
            id: "education"
          },
          {
            component: <Skills />,
            title: "Skills",
            id: "skills"
          },
          {
            component: <Portfolio />,
            title: "Projects",
            id: "projects"
          }
        ]
    }
    
    render() {
        return (
            <>
              <Header />
              <main className="main-content">
                  <section className="home-section" id="home">
                      <div className="component-scroll">
                          <Home />
                      </div>
                  </section>
                {this.contentSections.map((contentSection, i) => {
                    return (
                      <section className="content-section" id={contentSection.id} key={i}>
                          <h2>{contentSection.title}</h2>
                          <hr style={{borderColor: "#000000"}} />
                          <div className="component-scroll">
                              {contentSection.component}
                          </div>
                      </section>
                    );
                })}
              </main>
              <Footer />
            </>
        );
    }
}

export default PortfolioApp;
