import App from "./app.js";
import Carousel from "./carousel.js";
import Dropdown from "./dropdown.js";
//import "./dropdown.css";
//import "./carousel.css";

App.register("dropdown", Dropdown);
App.register("carousel", Carousel);
App.init();
