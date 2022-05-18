import React from 'react';
import { AiOutlineGithub } from 'react-icons/ai';
import { SiDeno } from 'react-icons/si';

function Footer(props) {
  
  return (
    <footer className="footer">
      <a href="https://github.com/oslabs-beta/dangoDB" className="footer-link-container">
        <AiOutlineGithub className="footer-link" />
      </a>
      <a href="https://deno.land/x/dangodb" className="footer-link-container">
        <SiDeno className="footer-link footer-link-deno" />
      </a>
    </footer>
  );
}

export default Footer;