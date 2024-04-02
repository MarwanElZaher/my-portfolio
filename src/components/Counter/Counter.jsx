import React from "react";

const Counter = () => {
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-sm-6">
                        <div className="single_counter mt-50 d-flex align-items-center wow fadeIn" data-wow-duration="1.3s" data-wow-delay="0.2s">
                            <div className="counter_icon">
                                <i className="lni lni-checkmark-circle"></i>
                            </div>
                            <div className="counter_content media-body">
                                <span className="count"><span className="counter">123</span>+</span>
                                <p>Projects Done</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                        <div className="single_counter mt-50 d-flex align-items-center wow fadeIn" data-wow-duration="1.3s" data-wow-delay="0.4s">
                            <div className="counter_icon">
                                <i className="lni lni-emoji-happy"></i>
                            </div>
                            <div className="counter_content media-body">
                                <span className="count"><span className="counter">70</span></span>
                                <p>Satisfied Clients</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                        <div className="single_counter mt-50 d-flex align-items-center wow fadeIn" data-wow-duration="1.3s" data-wow-delay="0.6s">
                            <div className="counter_icon">
                                <i className="lni lni-bolt"></i>
                            </div>
                            <div className="counter_content media-body">
                                <span className="count"><span className="counter">15</span></span>
                                <p>Active Projects</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                        <div className="single_counter mt-50 d-flex align-items-center wow fadeIn" data-wow-duration="1.3s" data-wow-delay="0.8s">
                            <div className="counter_icon">
                                <i className="lni lni-pyramids"></i>
                            </div>
                            <div className="counter_content media-body">
                                <span className="count"><span className="counter">5</span></span>
                                <p>Years Experience</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Counter;