import React from 'react';
import image from "../../assets/images/shape-3.png" 
const PricingSection = () => {
  return (
    <>
      <div className="pricing_shape">
        <img src={image} alt="shape" />
      </div>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="section_title text-center pb-30">
              <h5 className="sub_title">Pricing</h5>
              <h3 className="main_title">Pricing Plans</h3>
              <ul className="line">
                <li></li>
                <li></li>
                <li></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-4 col-md-7 col-sm-8">
            <div className="single_price mt-30 wow fadeInUpBig" data-wow-duration="1.3s" data-wow-delay="0.2s">
              <div className="price_header">
                <h4 className="price_title">Basic</h4>
                <span className="price">$75</span>
                <p>Only PSD Service</p>
              </div>
              <div className="price_body">
                <ul>
                  <li><i className="lni lni-checkmark"></i> Graphic Design</li>
                  <li><i className="lni lni-checkmark"></i> Web Design</li>
                  <li><i className="lni lni-close"></i> UI/UX</li>
                  <li><i className="lni lni-close"></i> HTML/CSS</li>
                  <li><i className="lni lni-close"></i> SEO Marketing</li>
                  <li><i className="lni lni-close"></i> Business Analysis</li>
                </ul>
              </div>
              <div className="price_btn">
                <a href="#" className="main-btn main-btn-2">Choose Plan</a>
              </div>
            </div>
          </div>
          {/* Add other pricing options here */}
        </div>
      </div>
    </>
  );
}

export default PricingSection;
