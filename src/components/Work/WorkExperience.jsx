import React from 'react';

const WorkExperience = () => {
  return (
    <section id="work" className="work_experience_area pt-115">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="section_title text-center pb-30">
              <h5 className="sub_title">Experience</h5>
              <h3 className="main_title">Work Experience</h3>
              <ul className="line">
                <li></li>
                <li></li>
                <li></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="work_experience">
          <div className="row">
            <div className="col-lg-12">
              <div className="single_experience d-lg-flex align-items-center flex-wrap wow fadeIn" data-wow-duration="1.3s" data-wow-delay="0.2s">
                <div className="experience_title order-last">
                  <h3 className="title">Front-End Developer</h3>
                  <p>Penta-b</p>
                  <span className="date">May 2023</span>
                </div>
                <div className="experience_number">
                  <span>01</span>
                </div>
                <div className="experience_content order-first">
                  <p>
                    <li>Plugin Development Engineered custom plugins to enhance GIS application functionality.</li>
                    <li>Responsive Design Designed layouts for optimal user experience across devices.</li>
                    <li>Collaboration</li>
                    <li>Worked closely with cross-functional teams for seamless integration.</li>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="single_experience d-lg-flex align-items-center flex-wrap wow fadeIn" data-wow-duration="1.3s" data-wow-delay="0.5s">
                <div className="experience_title text-lg-right">
                  <h3 className="title">Accountant</h3>
                  <h6>Note: During Military service</h6>
                  <p> Egypt’s Future Project for Sustainable Agriculture </p>
                  <span className="date"> May 2022- December 2022</span>
                </div>
                <div className="experience_number">
                  <span>02</span>
                </div>
                <div className="experience_content">
                  <p>
                    <li>Designed a website application to provide daily detailed reports to the Officers</li>
                    <li>Creating financial reports</li>
                    <li>Calculating Inventory</li>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="single_experience d-lg-flex align-items-center flex-wrap wow fadeIn" data-wow-duration="1.3s" data-wow-delay="0.8s">
                <div className="experience_title order-last">
                  <h3 className="title">Concrete Site Manager</h3>
                  <h6>Note: During Military service</h6>
                  <p>Egyptian Army</p>
                  <span className="date">December 2021- May 2022</span>
                </div>
                <div className="experience_number">
                  <span>03</span>
                </div>
                <div className="experience_content order-first">
                  <p>
                  <li>Checking and Preparing Financial Reports
                  </li>
                  <li>liaising with clients
                    </li>
                  <li>Buying materials for each phase of the project
                    </li>
                  <li>Monitoring build costs and project progress
                    </li>
                    
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="single_experience d-lg-flex align-items-center flex-wrap wow fadeIn" data-wow-duration="1.3s" data-wow-delay="0.8s">
                <div className="experience_title order-first">
                  <h3 className="title">Teaching Assistant</h3>
                  <p>Misr University for Science and Technology</p>
                  <span className="date">September 2021- December 2021</span>
                </div>
                <div className="experience_number">
                  <span>04</span>
                </div>
                <div className="experience_content order-last">
                  <p>
                  <li>Prepare classroom equipment and instructional materials for lessons.
                  </li>
                  <li>Perform recordkeeping duties associated with the classroom including attendance and grade calculation
                    </li>
                  <li>Instruct students in proper classroom procedures
                    </li>
                  <li>Adapt instructional materials as necessary to meet special education guidelines
                    </li>
                    
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WorkExperience;
