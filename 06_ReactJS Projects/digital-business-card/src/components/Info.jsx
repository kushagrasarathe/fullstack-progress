import React from "react";
import portrait from "../assets/portrait.jpg";
import mail from "../assets/mail.png";

export default function Info() {
  return (
    <div className="info">
      <img className="imagePortrait" src={portrait} alt="logo" />

      <h2>Kushagra Sarathe</h2>
      <p>Frontend Developer</p>
      <small> <a href="https://kushagrasarathe.me"> 
        
        kushagrasarathe.me
        </a> 
        </small>
      <br />
      
        <a href="mailto:someone@example.com">
        <button type="email">
          <img src={mail} alt="logo" />
          Mail
      </button>
        </a>
    </div>
  );
}
