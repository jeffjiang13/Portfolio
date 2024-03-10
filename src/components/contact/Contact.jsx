import React, {useState} from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const [message, setMessage] = useState(false);

  const form = useRef();

  const sendEmail = (e) => {
    setMessage(true);
    e.preventDefault();


    emailjs.sendForm('service_xx1z4se', 'template_76ab09d', form.current, 'aiOWrRF1FXzLf8_e_')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className='container contact__container'>
        <div className='contact__options'>
          <article className='contact__option'>
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>jeff.jiang13@gmail.com</h5>
            <a href="mailto:jeff.jiang13@gmail.com">Send a message</a>
          </article>
          <article className='contact__option'>
            <RiMessengerLine className='contact__option-icon'/>
            <h4>Messenger</h4>
            <h5>jeff.jiang.9</h5>
            <a href="https://m.me/jeff.jiang.9" target="_blank" rel='noreferrer'>Send a message</a>
          </article>
          <article className='contact__option'>
            <BsWhatsapp className='contact__option-icon'/>
            <h4>WhatsApp</h4>
            <h5>+16462091179</h5>
            <a href="https://api.whatsapp.com/send?phone=16462046379" target="_blank" rel='noreferrer'>Send a message</a>
          </article>
        </div>
        {/* END OF CONTACT OPTIONS */}
        <form ref={form} onSubmit={sendEmail}>
          <input type='text' name='name' placeholder='Your Full Name' required />
          <input type='email' name='email' placeholder='Your Email' required />
          <textarea name='message' rows="7" placeholder='Your Message' required />
          <button type='submit' className='btn btn-primary'>Send Message</button>
          {message && <span>Thanks, I'll reply ASAP :)</span>}

        </form>
      </div>
    </section>
  )
}

export default Contact
