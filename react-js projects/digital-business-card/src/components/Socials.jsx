import React from "react";
import twitter from "../assets/twitter.png";
import github from "../assets/github.png";
import insta from "../assets/instagram.png";
import linkedin from "../assets/linkedin.png";
import styles from '../App.css'

export default function Socials() {
  return (
    <div className='socials'>
      <a className='socialIcons' href="https://twitter.com/kushagrasarathe">
        <img src={twitter} alt="logo" />
      </a>
      <a className='socialIcons' href="https://github.com/kushagrasarathe">
        <img src={github} alt="logo" />
      </a>
      <a className='socialIcons' href="https://instagram.com/kushagrasarathe">
        <img src={insta} alt="logo" />
      </a>
      <a className='socialIcons' href="https://linkedin.com/in/kushagrasarathe">
        <img src={linkedin} alt="logo" />
      </a>
    </div>
  );
}
