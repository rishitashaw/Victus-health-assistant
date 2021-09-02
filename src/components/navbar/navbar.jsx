import React, { Component } from "react";
import Identicon from "identicon.js";

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-dark bg-danger p-0 text-monospace">
        <p className="text-white">Victus</p>
        <ul className="navbar-nav px-3">
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
        </ul>
      </nav>
    );
  }
}

export default Navbar;
