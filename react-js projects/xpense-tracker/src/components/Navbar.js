import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import PropTypes from 'prop-types';

// By passing props we can give custom properties to our component

export default function Navbar(props) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <a className="navbar-brand" href="#">
        
        {/* this is how we define a prop */}
        {props.title}
      
      </a>
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
            <a className="nav-link" href="#">
              {props.link1}
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
            {props.link2}
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
            {props.link3}
            </a>
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
  link1: PropTypes.string,
  link2: PropTypes.string,
  link3: PropTypes.string
}

// default props are defined so that a default defined value is assigned to the props if some value has not been given 
Navbar.defaultProps = {
  title: 'Title Here',
  link1: 'Nav Link 1',
  link2: 'Nav Link 2',
  link3: 'Nav Link 3',
}