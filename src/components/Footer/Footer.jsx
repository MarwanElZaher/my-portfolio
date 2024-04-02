import React from 'react';
import LogoM from '../../assets/images/LogoM.svg'
import { FaLinkedin, FaInstagram , FaFacebookSquare } from "react-icons/fa";
const Footer = () => {
  return (
    
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="footer_content text-center">
              <a href="#"><img src={LogoM} alt="LogoM" /></a>
              <ul className="footer_social">
                <li><a href="https://www.facebook.com/marawan.w.mahmoud"><FaFacebookSquare/></a></li>
                <li><a href="https://www.instagram.com/marwan_elzaher/"><FaInstagram /></a></li>
                <li><a href="https://www.linkedin.com/in/marwan-elzaher-36a919155/"><FaLinkedin /></a></li>
              </ul>
              <span className="email">marawanmzaher@hotmail.com</span>
              {/* <ul className="footer_menu">
                <li><a href="#">Home</a></li>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Service</a></li>
                <li><a href="#">Portfolio</a></li>
                <li><a href="#">Pricing</a></li>
                <li><a href="#">Contact Us</a></li>
              </ul> */}
            </div>
          </div>
        </div>
      </div>
  );
}

export default Footer;
