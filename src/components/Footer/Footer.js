import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div className="footer">
      <span className="name">
        Inshorts clone made by -{" "}
        <a
          href="https://www.linkedin.com/in/dwemoh-kesseh-emmanuel-b16350a7/"
          target="__blank"
        >
          Kesseh Emmanuel
        </a>
      </span>
      <hr style={{ width: "90%" }} />
      <div className="iconContainer">
        <a href="https://www.instagram.com/kessyimma/" target="__blank">
          <i className="fab fa-instagram-square fa-2x"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/dwemoh-kesseh-emmanuel-b16350a7/"
          target="__blank"
        >
          <i className="fab fa-linkedin fa-2x"></i>
        </a>
        <a href="https://github.com/DwemohKessehEmmanuel/" target="__blank">
          <i className="fas fa-link fa-2x"></i>
        </a>
      </div>
    </div>
  );
}

export default Footer
