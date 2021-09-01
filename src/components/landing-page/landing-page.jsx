import "./landing-page.css";
import { Link } from "react-router-dom";
export default function LandingPageComp() {
  return (
    <div className="landing-page">
      <div class="header">
        <a class="active logo" href="#home">
          Victus
        </a>
        <div class="header-right">
          <a class="active" href="#home">
            Home
          </a>
          <a class="active" href="#home">
            Our Mission
          </a>
          <a class="active" href="#home">
            About Us
          </a>
          <a class="active" href="#home">
            Gallery
          </a>
          <a class="active" href="#home">
            Contact Us
          </a>
          <a class="active" href="#home">
            <i class="fa fa-search"></i>
          </a>
        </div>
      </div>

      <div id="opening-div">
        <p
          style={{
            position: "absolute",
            top: " 8%",
            left: "38%",
            width: "100%",
            fontSize: "15px",
          }}
        >
          Science is a beautiful gift to humanity.
        </p>
        <h1 class="title">Victus</h1>
      </div>
      <div className="login-button">
        <Link to="/login">
          <button class="btn striped-shadow white">
            <span>Login</span>
          </button>
        </Link>
      </div>
      <p
        style={{
          position: "absolute",
          bottom: " 8%",
          left: "30%",
          width: "40%",
          fontSize: "15px",
          textAlign: "center",
        }}
      >
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem totam
        praesentium accusantium quas explicabo ratione vitae ab rerum
        repudiandae hic a, ipsa iusto nam architecto voluptate iure error
        reiciendis laborum.
      </p>
    </div>
  );
}
