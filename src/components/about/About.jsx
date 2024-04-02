import Hero from '../../assets/images/hero1.png'
function About(){
  return (
    <>
      <div className="container">
        <div className="row align-items-center justify-content-center">
          <div className="col-lg-6 col-md-9">
              <div className="about_image mt-50 wow fadeInRightBig" data-wow-duration="1.3s" data-wow-delay="0.5s" style ={{visibility: "visible", animationDuration: "1.3s", animationDelay: "0.5s", animationName: "fadeInRightBig"}}>
              <img src={Hero} alt="Hero" />
              <div className="about_shape"></div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="about_content mt-45 wow fadeInLeftBig" data-wow-duration="1.3s" data-wow-delay="0.5s">
              <div className="section_title">
                <h5 className="sub_title">About</h5>
                <h3 className="main_title">Why You Hire Me?</h3>
                <ul className="line">
                  <li></li>
                  <li></li>
                  <li></li>
                </ul>
              </div>
              <p>
Companies value my adaptability and commitment to growth. Despite my background in business administration, excelling in accounting, I transitioned to software engineering. With experience as a teaching assistant, I've demonstrated my ability to grasp complex concepts. Joining Penta-b as a front-end developer, I continue to learn, aspiring to become a full-stack developer. My eagerness to embrace challenges and expand my skill set makes me a valuable addition to any team.

Moreover, my proactive learning extends beyond coding. I've actively pursued and mastered skills in UI and UX design, bolstered by hands-on experience in video and photo editing. This multifaceted expertise enables me to deliver user-centric solutions and innovative designs.</p>
              <div className="about_skills pt-15">
                <div className="skill_item mt-20">
                  <div className="skill_header">
                    <h6 className="skill_title">React/Redux</h6>
                    <div className="skill_percentage">
                      <p><span className="counter">85</span>%</p>
                    </div>
                  </div>
                  <div className="skill_bar">
                    <div className="bar_inner">
                      <div className="bar progress_line" data-width="85" style={{ width: '85%' }}></div>
                    </div>
                  </div>
                </div>
                <div className="skill_item mt-20">
                  <div className="skill_header">
                    <h6 className="skill_title">Web Design</h6>
                    <div className="skill_percentage">
                      <p><span className="counter">75</span>%</p>
                    </div>
                  </div>
                  <div className="skill_bar">
                    <div className="bar_inner">
                      <div className="bar progress_line" data-width="75" style={{ width: '75%' }}></div>
                    </div>
                  </div>
                </div>
                <div className="skill_item mt-20">
                  <div className="skill_header">
                    <h6 className="skill_title">HTML/CSS/JavaScript</h6>
                    <div className="skill_percentage">
                      <p><span className="counter">90</span>%</p>
                    </div>
                  </div>
                  <div className="skill_bar">
                    <div className="bar_inner">
                      <div className="bar progress_line" data-width="90" style={{ width: '90%' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
