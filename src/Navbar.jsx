import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = ()=>{
return(
    <>
    <div className="container-fluid nav_bg">
      <div className="column" >
        <div className="col-10 mx-auto">


    <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="/"><img src="https://www.shutterstock.com/image-vector/rt-logo-260nw-690240010.jpg" className="icons" />RamaniTech</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ml-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link menu_active" aria-current="page" href="/">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/about" >About</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/contact" >Contact</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/service" >Services</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
</div>
      </div>
    </div>
    </>
);
}
export default Navbar;