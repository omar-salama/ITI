import { Component } from "react";
import { NavLink as Link } from "react-router-dom";

export default class Navbar extends Component {
  render() {
    return (
        <div className="Navbar">
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link activeClassName="active" exact to="/" className="nav-link">Register</Link>
                </li>
                <li className="nav-item">
                  <Link activeClassName="active" to="/about-us" className="nav-link">About Us</Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
    );
  }
}
