import React from "react";
import { NavLink } from "react-router-dom";

const About = () => {
  return (
    <section id="header" style={{ display: "flex", alignItems: "center" }}>
      <div className="container-fluid nav_bg">
        <div className="row">
          <div className="col-md-6 pt-5 pt-lg-0" style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <h1>
              Welcome to About Page <strong className="brand-name">Ramani Technical</strong>
            </h1>
            <h2 className="my-3">
              We are a team of talented developers making websites.
            </h2>
            <div className="mt-3">
              <NavLink to="/contact" className="btn btn-get-started">
                Contact Us
              </NavLink>
            </div>
          </div>
          <div className="col-md-6" style={{ display: "flex", justifyContent: "center" }}>
            <img
              src="https://www.shutterstock.com/image-photo/about-us-company-profile-page-260nw-384835510.jpg"
              className="img-fluid animated"
              alt="Business Image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
