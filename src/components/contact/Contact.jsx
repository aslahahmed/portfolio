import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './contact.css'

const Contact = () => {

    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_cq3st9v', 'template_v3cx9rk', form.current, 'C17zHgtaGnHc-7N-I')
     e.target.reset()
  };

    return (
        <section className="contact section" id="contact">
            <h2 className="section__title">Get In Touch</h2>
            <span className="section__subtitle">Contact Me</span>

            <div className="contact__container container grid">
                <div className="contact__content">
                    <h3 className="contact__title">Talk to Me</h3>

                    <div className="contact__info">
                        <div className="contact__card">
                            <i className="bx bx-envelope contact__card-icon"></i>

                            <h3 className="contact__card-title">Email</h3>
                            <span className="contact__card-data">aslah5517@gmail.com</span>

                            <a href="mailto:aslah5517@gmail.com" className="contact__button">Write me {" "}
                                <i className="bx bx-right-arrow-alt contact__button-icon "></i>
                            </a>

                        </div>

                        <div className="contact__card">
                            <i className="bx bxl-whatsapp contact__card-icon"></i>

                            <h3 className="contact__card-title">Whatsapp</h3>
                            <span className="contact__card-data">9846940155</span>

                            <a href="https://wa.me/9846940155" className="contact__button">Write me {" "}
                                <i className="bx bx-right-arrow-alt contact__button-icon"></i>
                            </a>

                        </div>

                        <div className="contact__card">
                            <i className="bx bxl-telegram contact__card-icon"></i>

                            <h3 className="contact__card-title">Telegram</h3>
                            <span className="contact__card-data">aslahahmed</span>

                            <a href="https://t.me/aslahahmed" className="contact__button">Write me {" "}
                                <i className="bx bx-right-arrow-alt contact__button-icon"></i>
                            </a>

                        </div>
                    </div>
                </div>

                <div className="contact__content">
                    <h3 className="contact__title">Write me your projects</h3>

                    <form ref={form} onSubmit={sendEmail} className="contact__form">

                        <div className="contact__form-div">
                            <label className="contact__form-tag">Name</label>
                            <input
                                type="text"
                                name='name'
                                className='contact__form-input'
                                placeholder='Insert your name'
                            />
                        </div>

                        <div className="contact__form-div">
                            <label className="contact__form-tag">Mail Id</label>
                            <input
                                type="email"
                                name='email'
                                className='contact__form-input'
                                placeholder='Insert your email id'
                            />
                        </div>

                        <div className="contact__form-div contact__form-area">
                            <label className="contact__form-tag ">Project</label>
                            <textarea
                                name="project"
                                cols="30"
                                rows="10"
                                placeholder='write your project'
                                className='contact__form-input  '
                            >
                            </textarea>
                        </div>

                        <button className="button button--flex form__button">
                            Send Message 
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                style={{fill : "rgba(255,255,255,1)"}}>

                                <path d="m21.426 11.095-17-8A.999.999 0 0 0 3.03 4.242L4.969 12 3.03 19.758a.998.998 0 0 0 1.396 1.147l17-8a1 1 0 0 0 0-1.81zM5.481 18.197l.839-3.357L12 12 6.32 9.16l-.839-3.357L18.651 12l-13.17 6.197z">
                                </path>
                            </svg>

                        </button>

                    </form>
                </div>

            </div>
        </section>
    )
}

export default Contact
