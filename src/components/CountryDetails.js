import React, { Component } from 'react';

class CountryDetails extends Component {
  render() {
    let test = this.props.match.params.cca3;
    let wah = this.props.match.params.cca3.region;
    console.log(`test${this.props.match.params}`);
    return (
      <div>
        <h2>country {test}</h2>
      </div>
    );
  }
}

export default CountryDetails;
