import React, { Component } from 'react';
import 'bulma/css/bulma.css';
import './TeamRoster.css';
import HeroPortrait from './HeroPortrait';

const heroes = [{
  name: "tracer",
  displayname: "Tracer"
}];

export default class TeamRoster extends Component {
  render() {
    return (
      <div className="team">
        {heroes.map((hero, i) =>
          <div className="team-member" key={i}>
            <HeroPortrait name={hero.name} displayname={hero.displayname}></HeroPortrait>
          </div>
        )}
      </div>
    );
  }
}
