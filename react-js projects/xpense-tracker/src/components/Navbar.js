import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

// By passing props we can give custom properties to our component

export default function Navbar(props) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <Link className="navbar-brand mx-4" to="/">
        
        {/* this is how we define a prop */}
        {props.title}
      
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <Link className="nav-link" to="/">
              {props.link1}
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/add">
            {props.link2}
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/history">
            {props.link3}
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

// propTypes is used for typechecking and is very helpfull in debugging
Navbar.propTypes = {
  // isRequired is passed which makes it compulsory to pass value in title prop 
  title: PropTypes.string.isRequired,
  link1: PropTypes.string.isRequired,
  link2: PropTypes.string.isRequired,
  link3: PropTypes.string.isRequired
}

// default props are defined so that a default defined value is assigned to the props if some value has not been given 
Navbar.defaultProps = {
  title: 'Title Here',
  link1: 'Nav Link 1',
  link2: 'Nav Link 2',
  link3: 'Nav Link 3',
}