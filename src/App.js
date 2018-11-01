import React, { Component } from 'react';
import './App.css';
import Container from './containers/MainContainer';
import Button from './Components/Button';

class App extends Component {
  state = {
    startingState: '*Click the Button to find out what you should do*',
    list : [
      'Go to a Spooky Bar',
      'Watch a Spooky movie',
      'Go out & Trick or Treat',
      'Carve a Pumpkin',
      'Make Spooky Snacks',
      'Go For a Spooky Hike',
      'Hand Out Candy',
      'Cook a spooky Dinner'
    ]
  }
  
  onButtonClick = () => {
    const randomItem =  this.state.list[Math.floor(Math.random() * this.state.list.length)];
    this.setState({startingState: randomItem})
  }
  render() {
    return (
      <div className="App">
        <Button data={this.state} click={this.onButtonClick}/>
        <Container data={this.state.startingState}/>
        
      </div>
    );
  }
}

export default App;
