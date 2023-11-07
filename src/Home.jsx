import React from "react";
import { NavLink } from "react-router-dom";
const Home =()=>{
    return (
        <section id="header" style={{ display: "flex", alignItems: "center" }}>
        <div className="container-fluid nav_bg">
          <div className="row">
            <div className="col-md-6 pt-5 pt-lg-0" style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
              <h1>
                Grow Your Business with <strong className="brand-name">Ramani Technical</strong>
              </h1>
              <h2 className="my-3">
                We are a team of talented developers making websites.
              </h2>
              <div className="mt-3">
                <NavLink to="/service" className="btn btn-get-started">
                  Get Started
                </NavLink>
              </div>
            </div>
            <div className="col-md-6" style={{ display: "flex", justifyContent: "center" }}>
              <img
                src="https://w0.peakpx.com/wallpaper/564/515/HD-wallpaper-business-plan-ultra-computers-others-internet-business-laptop-desk-table-coffee-hands-work-project-plan-office-macbook-planning-information-topview-workplace-analysis-startup-woodentable.jpg"
                className="img-fluid animated"
                alt="Business Image"
              />
            </div>
          </div>
        </div>
      </section>
    );
}
export default Home;