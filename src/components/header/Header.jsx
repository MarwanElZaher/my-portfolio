import Hero from '../../assets/images/hero.png'
import LogoM from '../../assets/images/LogoM.svg'
import { FaLinkedin, FaInstagram , FaFacebookSquare } from "react-icons/fa";
import { useState } from 'react';
function Header() {
    const [isActive, setIsActive] = useState(false);
    return (
        <>
            <div className="header_navbar">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <nav className="navbar navbar-expand-lg">
                                <a className="navbar-brand" href="index.html">
                                    <img src={LogoM} alt="Logo" />
                                </a>
                                <button onClick={()=>{setIsActive(!isActive)}} className={`navbar-toggler collapsed ${isActive ? "active" : ""}`} type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="toggler-icon"></span>
                                    <span className="toggler-icon"></span>
                                    <span className="toggler-icon"></span>
                                </button>
                                <div className={`navbar-collapse sub-menu-bar collapse ${isActive ? "show" : ""}`} id="navbarSupportedContent" >
                                    <ul id="nav" className="navbar-nav ml-auto">
                                        <li className="nav-item active">
                                            <a className="page-scroll" href="#home">Home <span></span></a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="page-scroll" href="#about">About<span></span></a>
                                        </li>
                                        {/* <li className="nav-item">
                                            <a className="page-scroll" href="#services">Services<span></span></a>
                                        </li> */}
                                        {/* <li className="nav-item">
                                            <a className="page-scroll" href="#project">Portfolio<span></span></a>
                                        </li> */}
                                        {/* <li className="nav-item">
                                            <a className="page-scroll" href="#pricing">Pricing<span></span></a>
                                        </li> */}
                                        <li className="nav-item">
                                            <a className="page-scroll" href="#work">Experience<span></span></a>
                                        </li>
                                    </ul>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
            <div id="home" className="header_hero">
                <ul className="header_social d-none d-lg-block">
                    <li><a href="https://www.facebook.com/marawan.w.mahmoud"><FaFacebookSquare/></a></li>
                    <li><a href="https://www.instagram.com/marwan_elzaher/"><FaInstagram /></a></li>
                    <li><a href="https://www.linkedin.com/in/marwan-elzaher-36a919155/"><FaLinkedin /></a></li>
                </ul>
                <div className="container">
                    <div className="row align-items-center justify-content-center justify-content-lg-between">
                        <div className="col-lg-6">
                            <div className="header_hero_content mt-45">
                                <h5 className="header_sub_title wow fadeInUp" data-wow-duration="1.3s" data-wow-delay="0.2s" style={{visibility: "visible", animationDuration: "1.3s", animationDelay: "0.2s", animationName: "fadeInUp"}}>Hello I'm</h5>
                                <h2 className="header_title wow fadeInUp" data-wow-duration="1.3s" data-wow-delay="0.5s" style={{visibility: "visible", animationDuration: "1.3s", animationDelay: "0.5s", animationName: "fadeInUp"}}>Marwan ElZaher</h2>
                                <span className="wow fadeInUp" data-wow-duration="1.3s" data-wow-delay="0.8s" style={{visibility: "visible", animationDuration: "1.3s", animationDelay: "0.8s", animationName: "fadeInUp"}}>Professional Web Developer</span>
                                <p className="wow fadeInUp" data-wow-duration="1.3s" data-wow-delay="1.1s" style={{visibility: "visible", animationDuration: "1.3s", animationDelay: "1.1s", animationName: "fadeInUp"}}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam.</p>
                                <a href="#contact" className="main-btn wow fadeInUp" data-wow-duration="1.3s" data-wow-delay="1.4s" style={{visibility: "visible", animationDuration: "1.3s", animationDelay: "1.4s", animationName: "fadeInUp"}}>Hire Me</a>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-7">
                            <div className="header_hero_image mt-50 wow fadeInRightBig" data-wow-duration="1.3s" data-wow-delay="1.8s" style={{visibility: "visible", animationDuration: "1.3s", animationDelay: "1.8s", animationName: "fadeInRightBig"}}>
                                <img src={Hero} alt="hero" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="header_hero_shape d-none d-lg-block"></div>
            </div>
            </>
    );
}

export default Header;
