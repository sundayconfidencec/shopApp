import React from 'react';
import {Container, Image} from "react-bootstrap";
import { InstaIcon, FacebIcon, TwitIcon } from  "./Icons";

function Contact() {
  return (
   
  <div id='aboutop'>
         <div id='imgdiv'><Image src="/asset/ab.webp" alt="about us" id='Image'/></div>
         <div id='aboutext'>
          </div>
    <Container className='about'>
    <div className="contact">
        <h2 id='h2'>Contact Us</h2>
       <div id='mylink'>
       <p >Email: </p><a  href="mailto:eldeewears@gmail.co">eldeewears@gmail.com</a>
        <p>Phone:</p> <a href="tel:+2349065876790">+2349065876790</a>
       </div>
        <p>Location:</p><location> Lagos, Nigeria</location>
        <h2 id='h2'>Follow Us</h2>
        <div className="social-medias">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><FacebIcon/></a>
          <a href="https://www.twitter.com/" target="_blank" rel="noopener noreferrer"><TwitIcon/></a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"><InstaIcon/></a>
        </div>
      </div>
       
    </Container>
    </div>
  )
}

export default Contact;