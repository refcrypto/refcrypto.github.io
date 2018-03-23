import React from 'react';
import {Link} from 'react-router-dom';

class Nav extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log(this.props);
    return (
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div class="container">
        <a class="navbar-brand" href="#">Refcrypto</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarResponsive">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item active">
            <Link to={{
                pathname: '/'
              }} class="nav-link" >List
              <span class="sr-only">(current)</span>
            </Link>
            </li>
            <li class="nav-item">
            <Link to={{
              pathname: 'contact'
              }} class="nav-link" >Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    );
  }
}

export default Nav;
