import React, { Component } from 'react';
import Navbar from './components/Navbar';

import { Route } from 'react-router-dom';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';

class App extends Component {
  render() {
    return (
      <div>
        <div>
          <Navbar />
          <CountriesList />
        </div>
        <div>
          <div>
            <Route path="/country/:cca3" component={CountryDetails} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
