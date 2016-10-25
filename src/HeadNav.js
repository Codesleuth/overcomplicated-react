import React from 'react';
import 'bulma/css/bulma.css';
import './HeadNav.css';

export default function HeadNav(props) {
  return (
    <nav className="nav">
      <div className="nav-left">
        <a className="nav-item is-brand" href="http://overcomplicated.gg">
          <h1 className="title is-4">Overcomplicated</h1>
        </a>
      </div>

      <div className="nav-center">
        <a className="nav-item" href="https://github.com/Overcomplicated/website">
          <span className="icon">
            <i className="fa fa-github"></i>
          </span>
        </a>
      </div>

      <span className="nav-toggle">
        <span></span>
        <span></span>
        <span></span>
      </span>

      <div className="nav-right nav-menu">
        <a className="nav-item" href="//overcomplicated.gg">Home</a>
      </div>
    </nav>
  );
}
