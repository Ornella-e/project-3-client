import React from 'react'

/* import TeamDesc from '../components/Team/TeamDesc'
import TeamCard from '../components/Team/TeamCard'
 */
export default function About() {
  return (
    <div>
      <h1>Meet the Team</h1>
        <div className="team-flex">

          <div className="ornella">
            <img src="https://res.cloudinary.com/dol3e7dkr/image/upload/v1660378708/ornella_ibydod.png" alt="Ornella's picture" />
            <div className="teammate-desc">
              <h3>Ornella Escalada Corsi</h3>
              <p>Full-stack development</p>
              <a href="mailto:dantasbeyer@hotmail.com">dantasbeyer@hotmail.com</a>
            </div>
            <div className="team-media">
              <a title="Github" href="https://github.com/Ornella-e"><img src="../components/Team/git-icon.png" alt="Github icon" /></a>
              <a title="Linkedin" href="https://www.linkedin.com/feed/"><img src="../components/Team/linkedin-icon.png" alt="Linkedin icon" /></a>
            </div>
          </div>

          <div className="joao">
            <img src="https://res.cloudinary.com/dol3e7dkr/image/upload/v1660378847/71MYCK1IVuL._AC_SL1500__uwh1hn.jpg" alt="Joao's picture" />
            <div className="teammate-desc">
              <h3>Joao Beyer</h3>
              <p>Full-stack development</p>
              <a href="mailto:orneescaladacorsi@gmail.com">orneescaladacorsi@gmail.com</a>
            </div>
            <div className="team-media">
              <a title="Github" href="https://github.com/DantasBeyer"><img src="../components/Team/git-icon.png" alt="Github icon" /></a>
              <a title="Linkedin" href="https://www.linkedin.com/feed/"><img src="../components/Team/linkedin-icon.png" alt="Linkedin icon" /></a>
            </div>
          </div>

          <div className="laia">
            <img src="https://res.cloudinary.com/dol3e7dkr/image/upload/v1660379927/laia_gywdsg.png" alt="Laia's picure" />
            <div className="teammate-desc">
              <h3>Laia Markixa</h3>
              <p>Full-stack development</p>
              <a href="mailto:laiamr77@gmail.com">laiamr77@gmail.com</a>
            </div>
            <div className="team-media">
              <a title="Github" href="https://github.com/markixa"><img src="../components/Team/git-icon.png" alt="Github icon" /></a>
              <a title="Linkedin" href="https://www.linkedin.com/feed/"><img src="../components/Team/linkedin-icon.png" alt="Linkedin icon" /></a>
            </div>
          </div>

        </div>

    </div>
  )
}