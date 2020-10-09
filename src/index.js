import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import "./global.css";

/* import BadgeNew from "./pages/BadgeNew";
import Badges from "./pages/Badges.js"; */
import App from './components/App';

const container = document.getElementById("app");


/*ReactDOM.render(
  <Badge
    firstName="Lilly"
    lastName="Cofman"
    jobTitle="Fullstack Developer"
    twitter="TdeJesus19"
    avatarURL="https://www.gravatar.com/avatar?id=identicon"
  />,
  container
);*/

//ReactDOM.render(<BadgeNew/>, container)
ReactDOM.render(<App/>, container)
