import React from 'react';
import { AiOutlineGithub, AiFillLinkedin } from 'react-icons/ai';

// Contact component holding software engineer information
function ContactCard({ photo, linkedin, github, name }) {
  return (
    <li className="contact-card">
      <img src={photo} className="headshot" alt="Engineer Headshot" />
      <span className="contact-name" >{name}</span>
      <span className="contact-title">Software Engineer</span>
      <div>
        <a href={ github } className="contact-link-container">
          <AiOutlineGithub className="contact-link" />
        </a>
        <a href={ linkedin } className="contact-link-container">
          <AiFillLinkedin className="contact-link" />
        </a>
      </div>
    </li>
  );
};

export default ContactCard;