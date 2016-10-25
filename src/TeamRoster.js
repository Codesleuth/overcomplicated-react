import React, { Component } from 'react';
import 'bulma/css/bulma.css';
import './TeamRoster.css';
import HeroPortrait from './HeroPortrait';

const heroes = [{
  name: "tracer",
  displayName: "Tracer"
},{
  name: "lucio",
  displayName: "Lúcio"
},{
  name: "mccree",
  displayName: "McCree"
},{
  name: "reaper",
  displayName: "Reaper"
},{
  name: "reinhardt",
  displayName: "Reinhardt"
},{
  name: "soldier76",
  displayName: "Soldier: 76"
},];

export default class TeamRoster extends Component {
  constructor() {
    super();
    this.state = {
      heroes: ['tracer', 'lucio', 'mccree', 'reaper', 'reinhardt', 'soldier76'],
    };
  }

  render() {
    const team = this.state.heroes.map((name, i) => heroes.filter(h => h.name === name)[0]);
    console.log(team);
    return (
      <div className="team">
        {team.map((hero, i) =>
          <div className="team-member" key={i}>
            <HeroPortrait name={hero.name} displayName={hero.displayName}></HeroPortrait>
          </div>
        )}
      </div>
    );
  }
}
