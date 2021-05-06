import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <Link to={'/home'}> Lab Wiki Countries</Link>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
