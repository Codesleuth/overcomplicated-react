import React, { Component } from 'react';
import './HeroPortrait.css';

export default class HeroPortrait extends Component {
  isHero(name) {
    return this.props.name === name;
  }

  render() {
    return (
      <div className={`hero-portrait ${this.props.name}`}>
        <span>{this.props.displayName}</span>
      </div>
    );
  }
}
