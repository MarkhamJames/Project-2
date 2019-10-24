import React, { Component } from 'react';
import Button from './components/Button';
import Createinput from './components/Input';
import './App.css';
import axios from 'axios';
import { getInfo } from './services/api-helper';
import { Route } from 'react-router-dom';
import Films from './components/Films';
import People from './components/People';
import Locations from './components/Locations';
import Species from './components/Species';
import Vehicles from './components/Vehicles';
import Header from './components/Header';


class App extends Component {
  constructor() {
    super()
    this.state = {
      endpoint: "",
      info: []

    }
  }

  handleChange = (event) => {
    const endpoint = event.target.value
    this.setState({
      endpoint: endpoint
    })
  }

  handleClick = async () => {
    const response = await getInfo(this.state.endpoint)
    this.setState({
      info: response
    })
  }
  render() {
    return (
      <div className="App" >
        
        
        <Route exact path="/" render={() => (
          <div className="Home" >
            <Header />
            <Button handleClick={this.handleClick} endpoint=
              {this.state.endpoint} />
            <Createinput handleChange={this.handleChange} />
          </div>
        )} />


        <Route path="/films" render={() => <Films films={this.state.info} />} />

        <Route path="/people" render={() => <People people={this.state.info} />} />

        <Route path="/locations" render={() => <Locations locations={this.state.info} />} />

        <Route path="/species" render={() => <Species species={this.state.info} />} />

        <Route path="/vehicles" render={() => <Vehicles vehicles={this.state.info} />} />





      </div>
    );
  }
}

export default App;