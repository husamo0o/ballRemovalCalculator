import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  calculateNumOfWays(ballsNumber) {
    switch (ballsNumber) {
      case 0:
        console.error(
          'Number of Balls in the Bag are 0 cannot remove anything.'
        );
        return 0;

      case 1:
        console.log(1);
        return 1;

      case 2:
        console.log(2);
        return 2;

      default:
        return (
          this.calculateNumOfWays(ballsNumber - 1) +
          this.calculateNumOfWays(ballsNumber - 2)
        );
    }
  }

  render() {
    //change the number in the below Line: By Default its 5 balls in a bag..
    const balls = 5;
    const bagNumber = this.calculateNumOfWays(balls);
    // console.log(bagNumber);
    return (
      <div className='App'>
        <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <p>
            there are {bagNumber} ways to get {balls} balls out of a bag.
          </p>
        </header>
      </div>
    );
  }
}

export default App;
