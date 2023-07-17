import React from "react";
import { Link } from "react-router-dom";


/*Notice that instead of <a> tags to navigate we're using the <Link> 
component that we import from the react router. We can use the to 
attribute to specify where we want the link to take the user to.  */

const Header = () => {
  return (
    <nav className="navbar navbar-expand navbar-dark bg-info">
      <Link to="/" className="navbar-brand">
        GiFTER
      </Link>
      <ul className="navbar-nav mr-auto">
        <li className="nav-item">
          <Link to="/" className="nav-link">
            Feed
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/posts/add" className="nav-link">
            New Post
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;