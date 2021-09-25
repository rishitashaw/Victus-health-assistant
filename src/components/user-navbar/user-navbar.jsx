import "../landing-page/landing-page.css";
import { Link } from "react-router-dom";
import React, { Component } from "react";
import Identicon from "identicon.js";

class UserNavbar extends Component {
  render() {
    return (
      <header id="header">
        <div id="navbar" className="container h-flex">
          <div className="logo">
            <h1>Victus</h1>
          </div>
          <nav id="nav-bar">
            <ul id="navigation">
              <Link to="/health-info">
                <li>
                  <a className="nav-link" href="#">
                    Health Information
                  </a>
                </li>
              </Link>
              <Link to="/policy-info">
                <li>
                  <a className="nav-link" href="#">
                    Policy Information
                  </a>
                </li>
              </Link>

              <Link to="/home">
                <li className="button">
                  {this.props.account ? (
                    <img
                      className="ml-2"
                      width="30"
                      height="30"
                      src={`data:image/png;base64,${new Identicon(
                        this.props.account
                      ).toString()}`}
                    />
                  ) : (
                    <span></span>
                  )}
                </li>
              </Link>
            </ul>
          </nav>
        </div>
      </header>
    );
  }
}

export default UserNavbar;
