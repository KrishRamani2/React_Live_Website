import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"
import Contact from "./Contact";
import Navbar from "./Navbar";
import Service from "./Service";

const App =()=>{

    return (
        <>
        <Navbar />
        <Routes>
           <Route path="/" Component={Home} />
           <Route path="/about" Component={About} />
           <Route path="/contact" Component={Contact} />
           <Route path="/service" Component={Service} />
        </Routes>
        </>
    );
}

export default App;