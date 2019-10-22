import React, { Component } from 'react';
import Button from './components/Button';
import Createinput from './components/Input';
import './App.css';
import HeroBackdrop from './components/HeroSection';
/*import { getMovies } from './services/api-helper';*/

class App extends Component {
  /*constructor() {
    super()
    this.state = {
      films: [],

    }
  }
  
  async componentDidMount() {
    const categories = await getMovies()
    this.setState({
      films: films
    })
  }
  
  handleChange = (e) => {
    this.setState({
      
    });
  }

  handleClick = async () => {
    const description = await getMovies(this.state.)
    
  */
  
    render() {
      return (
        <div className="App" >
          <HeroBackdrop />
          <Button />
          <Createinput />
        </div>
      );
    }
  }

  export default App;