import React from 'react';

const Testimonial = () => {
  return (
    <>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="section_title text-center pb-30">
              <h5 className="sub_title">Testmonials</h5>
              <h3 className="main_title">What Clients Says</h3>
              <ul className="line">
                <li></li>
                <li></li>
                <li></li>
              </ul>
            </div> 
          </div>
        </div> 
        <div className="row testimonial_active slick-initialized slick-slider slick-dotted">
          {/* Testimonial slides go here */}
        </div> 
      </div> 
    </>
  );
}

export default Testimonial;
