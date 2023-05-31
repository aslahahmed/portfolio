import React from 'react'
import './about.css'
import AboutImg from '../../assets/about1.jpeg'
import Resume from '../../assets/Aslah.pdf'


const About = () => {
  return (
    <section className="about section" id="about">
    <h2 className="section__title">About Me</h2>
    <span className="section__subtitle">My Introduction</span>

    <div className="about__container container grid">
      <img src={AboutImg} alt="" className="about__img" />
      <div className="about__data">
        
        <div className="text_animation">
        </div>
        <p className="about__description">
        Front-end Developer, with a passion for building user-friendly and responsive websites.
        I have 6 month of experience in bulding and designing web applications based in Kochi,India.
        I am currently focusing on frontend development. I love working with React JS, Material UI,
        and Tailwind CSS.
        </p>

        <a download="" href={Resume} className="button button--flex">
          Download CV
          <i class='bx bx-file button__icon'></i>
        </a>
      </div>
    </div>
    </section>
  )
}

export default About
