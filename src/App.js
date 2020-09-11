import React, { Component } from "react";
import "./index.css";
import Testimonials from "./components/Testimonials";
import Services from "./components/Services";
import {MDBContainer} from 'mdbreact';
import Mision from "./components/Mision";
import Technologies from "./components/Technologies";
import AboutUs from "./components/AboutUs";
import NavBar from "./components/NavBar";
import Team from "./components/Team";

class App extends Component
{
  render()
  {
    return(

        <MDBContainer>
            <NavBar/>
            <AboutUs/>
            <Mision/>
            <Services/>
            <Technologies/>
            <Testimonials/>
            <Team/>
        </MDBContainer>

    );
  }
}

export default App;
