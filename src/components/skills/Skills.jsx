import React from 'react'
import './skills.css'
import Html5 from '../../assets/html5.png'
import Css3 from '../../assets/css3-logo-60.png'
import Javascript from '../../assets/javascript-logo-60.png'
import ReactLogo from '../../assets/react-logo-60.png'
import Nodejs from '../../assets/nodejs-logo-60.png'
import TailwindCss from '../../assets/tailwind-css-logo-60.png'
import MongoDb from '../../assets/mongodb-logo-60.png'
import GitHub from '../../assets/github-logo-60.png'


const Skills = () => {
  return (
    <section className="skills section" id="skills">
      <h2 className="section__title">Skills</h2>
      <span className="section__subtitle">My Technical Level</span>

      <div className="skills__container container grid">
        <div className="skill__element">
          <img src={Html5} ></img>
          <h3>HTML</h3>
        </div>
        <div className="skill__element">
        <img src={Css3} ></img>
          <h3>CSS</h3>
        </div>
        <div className="skill__element">
        <img src={Javascript} ></img>
          <h3>Javascript</h3>
        </div>
        <div className="skill__element">
        <img src={ReactLogo} ></img>
          <h3>React js</h3>
        </div>
        <div className="skill__element">
        <img src={Nodejs} ></img>
          <h3>Node js</h3>
        </div>
        <div className="skill__element">
        <img src={MongoDb} ></img>
          <h3>Mongo Db</h3>
        </div>
        <div className="skill__element">
        <img src={GitHub} ></img>
          <h3>Github</h3>
        </div>
        <div className="skill__element">
        <img src={TailwindCss} ></img>
          <h3>Tailwind css</h3>
        </div>
      </div>


     


    </section>
  )
}

export default Skills
