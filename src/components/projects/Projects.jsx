import React from 'react'
import './projects.css'
import IMDb from '../../assets/imdbclone.png'
import Peakstays from '../../assets/peakstays.png'
import Restaurant from '../../assets/Restaurant.png'
import Demo from '../../assets/demo.png'
import Github from '../../assets/github-logo-60.png'

const Projects = () => {
  return (
    <section className="projects section" id="projects">
        <h2 className="section__title">Projects</h2>
        <span className="section__subtitle">What i 've built</span>

        <div className="projects__container container grid">

          <div className="projects__items">
            <img src={IMDb} alt='' className='projects__img' />
            <h3 className='projects__name'>IMBb Clone</h3>
            <p>React js</p>

            <div className='projects__icon'>

              <a href="https://github.com/aslahahmed/IMDb-Clone-app.git" target="_blank" rel="noreferrer" >
              <img className='img__icon button-flex' src={Github} alt='' />
              </a>

              <a href="https://imdbclone-reactapp.netlify.app/" target="_blank" rel="noreferrer" >
              <img className='img__icon button-flex' src={Demo} alt='' />
        
              </a>
              </div>
            </div>

            <div className="projects__items">
            <img src={Peakstays} alt='' className='projects__img' />
            <h3 className='projects__name'>Peakstays</h3>
            <p>React js</p>

            <div className='projects__icon'>

              <a href="https://github.com/aslahahmed/travel-project.git" target="_blank" rel="noreferrer" >
              <img className='img__icon button-flex' src={Github} alt='' />
              </a>

              <a href="https://peakstays-react.netlify.app/" target="_blank" rel="noreferrer" >
              <img className='img__icon button-flex' src={Demo} alt='' />
              
              </a>
              </div>
            </div>

            <div className="projects__items">
            <img src={Restaurant} alt='' className='projects__img' />
            <h3 className='projects__name'>Restaurants App</h3>
            <p>React js</p>

            <div className='projects__icon'>

              <a href="https://github.com/aslahahmed/Restaurants-app.git" target="_blank" rel="noreferrer" >
              <img className='img__icon button-flex' src={Github} alt='' />
              </a>

              <a href="https://restaurants-reactapp.netlify.app/" target="_blank" rel="noreferrer" >
              <img className='img__icon button-flex' src={Demo} alt='' />
              
              </a>
              </div>
            </div>
          </div>
        
    </section>
  )
}

export default Projects
