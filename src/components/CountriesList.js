import React, { Component } from 'react';
import countries from '../countries.json';
import { Link, Route } from 'react-router-dom';

class CountriesList extends Component {
  state = {
    countries: countries,
  };

  render() {
    return (
      <div>
        <div>
          {this.state.countries.map((country, i) => {
            console.log(country);
            return (
              <div key={i}>
                <Link to={`country/${country.cca3}`}>
                  {country.name.common}
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default CountriesList;
