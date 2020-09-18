import React from 'react';
import './footer.css';

const Footer = () => {
    return (
      <div className="splash-footer">
        <div className="footer-text">
          <img className="footer-logo" alt="" />
          Burps was inspired by Twitter and created using the MERN stack. This
          project was created purely for educational purposes. Icons made by{" "}
          <a href="https://www.flaticon.com/authors/freepik" title="Freepik">
            Freepik
          </a>{" "}
          from{" "}
          <a href="https://www.flaticon.com/" title="Flaticon">
            {" "}
            www.flaticon.com.
          </a>
        </div>
        <h6 className="footer-heading">Follow me on</h6>
        <div className="footer-social">
          <div className="footer-social-icons">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/vanessa-chen-/"
            >
              <i className="fab fa-linkedin fa-lg"></i>
            </a>
          </div>
          <div className="footer-social-icons">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/Vanchen07"
            >
              <i className="fab fa-github fa-lg"></i>
            </a>
          </div>
          <div className="footer-social-icons">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://angel.co/vanessa-chen-7"
            >
              <i className="fab fa-angellist fa-lg"></i>
            </a>
          </div>
        </div>
      </div>
    );
}

export default Footer;