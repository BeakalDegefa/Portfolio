import "./App.css";
import { Link } from "react-scroll";
import logo from "../src/images/logo.png"
import about from "../src/images/photo_2023-03-14_13-28-48.jpg"

function App() {
  return (
    <div>
      <div className="be">
        <p className="be">Logo</p>
      </div>
      <ul className="nav">
        <li className="buttons">Home</li>
        <li className="buttons"><Link to="about">About</Link></li>
        <li className="buttons">Projects</li>
        <li className="buttons">Contact</li>
      </ul>
      <div className="image">
        <img className= "backgroundimg"src={logo}alt="logo"/>
      </div>
      <div className="text-container" >
        <p className="text">I am Beakal Degefa.</p>
        <p className="role">Web and Mobile Developer</p>
      </div>
      <div className="about-page">
        <div className="buttons">About</div>
        <div className="about-img">
        <img className= "aboutimg"src={about}alt="beakal-pic"/>
        </div>
        <p className="aboutme"> This is Beakal intro Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo praesentium atque iure dolores tempore ab temporibus a neque placeat, incidunt alias ipsam est! Tenetur doloribus odio, eaque ipsum possimus quisquam. </p>
        
      </div>
    </div>
  );
}

export default App;
