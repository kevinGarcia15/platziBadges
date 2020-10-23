import React, { Component } from "react";
import "./styles/Home.css";
import conf from "../images/platziconf-logo.svg";
import astronauts from "../images/astronauts.svg";
import { Link } from "react-router-dom";

export class Home extends Component {
  render() {
    return (
      <div className="Home row">
        <div className="Home__col m-5 col-12 col-sm-12 col-lg-3">
          <img className='img-fluid' src={conf} alt="PlatziConf-logo" />
          <br />
          <h1>PRINT YOUR BADGES</h1>
          <p>
            The esiest way to manage your <br />
            conference
          </p>
          <Link to="/badges" className="btn btn-primary">
            Start now
          </Link>
        </div>
        <div className="Home__col m-5 col-12 col-sm-12 col-lg-7">
          <img className='img-fluid' src={astronauts} alt="astonauts" />
        </div>
      </div>
    );
  }
}

export default Home;
