import React, { Component } from 'react';
import 'bulma/css/bulma.css';
import HeadNav from './HeadNav.js';
import AppFooter from './AppFooter.js';
import TeamRoster from './TeamRoster.js';

export default class App extends Component {
  render() {
    return (
      <div>
        <HeadNav></HeadNav>
        <section className="section">
          <div className="container">
            <div className="heading has-text-centered">
              <h1 className="title">Enemy Team</h1>
            </div>
            <TeamRoster></TeamRoster>
          </div>
        </section>
        <section className="section">
          <div className="container">
            <div className="heading has-text-centered">
              <h1 className="title">Ally Team</h1>
            </div>
            <TeamRoster></TeamRoster>
          </div>
        </section>
        <AppFooter></AppFooter>
      </div>
    );
  }
}
