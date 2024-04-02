import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

function Project() {
  return (
    <section id="project" className="project_area pt-125">
      <div className="container">
        <div className="row">
          <div className="col-sm-9">
            <div className="section_title pb-30">
              <h5 className="sub_title">Portfolio</h5>
              <h3 className="main_title">Latest Projects</h3>
              <ul className="line">
                <li></li>
                <li></li>
                <li></li>
              </ul>
            </div>
          </div>
          <div className="col-sm-3">
            <div className="project_btn text-sm-right">
              <a className="main-btn main-btn-2" href="#">All Works</a>
            </div>
          </div>
        </div>
        <div className="row project_active slick-initialized slick-slider">
          <span className="prev slick-arrow" style={{ display: "block" }}>
            <FaArrowLeft/>
          </span>
          <div className="slick-list draggable">
            <div className="slick-track" style={{ opacity: 1, width: 4180, transform: "translate3d(-1140px, 0px, 0px)" }}>
              {/* Project items */}
            </div>
          </div>
          <span className="next slick-arrow" style={{ display: "block" }}>
            <FaArrowRight/>
          </span>
        </div>
      </div>
    </section>
  );
}

export default Project;
