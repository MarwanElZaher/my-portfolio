import React from 'react';

const Contact = () => {
  return (
    <>
      <div className="container">
        <div className="call_to_action_wrapper wow fadeIn" data-wow-duration="1.3s" data-wow-delay="0.5s">
          <div className="row">
            <div className="col-lg-12">
              <div className="call_to_action_box d-md-flex justify-content-between align-items-center">
                <div className="call_to_action_content">
                  <h3 className="action_title">Have Any Project in Mind?</h3>
                  <ul className="line">
                    <li></li>
                    <li></li>
                    <li></li>
                  </ul>
                  <p>I'm here to bring your vision to life.<br/> Reach out today to discuss how we can work together. <br/>Let's create something extraordinary.</p>
                </div>
                <div className="call_to_action_btn">
                  <a href="mailto:marawanmzaher@hotmail.com?Subject=Hi%20There" className="main-btn">HIRE ME</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
