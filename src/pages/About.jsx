import React from "react";
import linkedin from "../components/Team/linkedin-icon.png"
import github from "../components/Team/git-icon.png"
/* import TeamDesc from '../components/Team/TeamDesc'
import TeamCard from '../components/Team/TeamCard'
 */
export default function About() {
  return (
    <div className="about-page">
      <h1>Meet the Team</h1>
      
      <div className="team-flex">
        <div className="ornella teammate-card">
          <img
            className="teammate-img"
            src="https://res.cloudinary.com/dol3e7dkr/image/upload/v1660378708/ornella_ibydod.png"
            alt="Ornella's picture"
          />
          <div className="teammate-desc">
            <h3>Ornella Escalada Corsi</h3>
            <p>Full-stack development</p>
           
            <div className="team-media">
              <a
                title="Github"
                href="https://github.com/Ornella-e"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img className="icon-img-git" src={github} alt="Github icon" />
              </a>
              <a
                title="Linkedin"
                href="https://www.linkedin.com/feed/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img className="icon-img"
                  src={linkedin}
                  alt="Linkedin icon"
                />
              </a>
            </div>
          </div>
        </div>

        <div className="joao teammate-card">
          <div className="teammate-desc">
            <h3>Joao Beyer</h3>
            <p>Full-stack development</p>
           
            <div className="team-media">
              <a
                title="Github"
                href="https://github.com/DantasBeyer"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img className="icon-img-git" src={github} alt="Github icon" />
              </a>
              <a
                title="Linkedin"
                href="https://www.linkedin.com/feed/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img className="icon-img"
                  src={linkedin}
                  alt="Linkedin icon"
                />
              </a>
            </div>
          </div>
          <img
            className="teammate-img"
            src="https://res.cloudinary.com/dol3e7dkr/image/upload/v1660378847/71MYCK1IVuL._AC_SL1500__uwh1hn.jpg"
            alt="Joao's picture"
          />
        </div>

        <div className="laia teammate-card">
          <img
            className="teammate-img"
            src="https://res.cloudinary.com/dol3e7dkr/image/upload/v1660379927/laia_gywdsg.png"
            alt="Laia's picure"
          />
          <div className="teammate-desc">
            <h3>Laia Markixa</h3>
            <p>Full-stack development</p>
           
            <div className="team-media">
              <a
                title="Github"
                href="https://github.com/markixa"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img className="icon-img-git" src={github} alt="Github icon" />
              </a>
              <a 
                title="Linkedin"
                href="https://www.linkedin.com/feed/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img className="icon-img"
                  src={linkedin}
                  alt="Linkedin icon"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
