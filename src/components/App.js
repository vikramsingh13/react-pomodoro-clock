import React, {Component} from 'react';
import EditTimer from './EditTimer';
import './App.css';

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      minutes: "25",
      seconds: "00",
      start: false,
      edit: false,
      interval: setInterval(this.countdown, 1000)
    };
  }

  //helper functions

  //used to make sure the seconds and minutes are
  //always displayed as 2 digits each
  //returns string
  displayDigits = time => {
    return (parseInt(time) < 10 ? ("0" + time) : ("" + time));
  }

  //editMinutes is sent to EditTimer component as props
  editMinutes = (newMinutes) => {
    this.setState({minutes: this.displayDigits(newMinutes)});
  }

  //editSeconds is sent to EditTimer component as props
  editSeconds = (newSeconds) => {
    this.setState({seconds: this.displayDigits(newSeconds)});
  }

  //clears the interval timer and sets the this.interval to null
  stopIntervalCounter = async() => {
    await clearInterval(this.state.interval);
    this.setState({interval: null});
  }

  //buttons for the timer

  //pressedStart is send as a prop to EditTimer
  //pressStart is used for onSubmit by EditTimer
  pressedStart = async() => {
    if(!this.state.start){
      await this.stopIntervalCounter();
      this.setState({
        start: true, 
        edit: false,
        interval: setInterval(this.countdown, 1000),
      });
    }
  }

  pressedPause = async() => {
    this.setState({start: false});
    await this.stopIntervalCounter();
  }

  pressedEdit = async() => {
    this.setState({start: false, edit: true});
    await this.stopIntervalCounter();
  }

  pressedReset = async() => {
    this.setState({minutes: "25", seconds: "00", start: false, edit: false});
    await this.stopIntervalCounter();
  }

  countdown = async() => {
    if(this.state.start){
      //when seconds reach 0, seconds is set to 59 and minutes is reduced by 1
      if(parseInt(this.state.seconds) === 0){
        await this.editMinutes(parseInt(this.state.minutes) - 1);
        await this.editSeconds(59);
      } else {
        await this.editSeconds(parseInt(this.state.seconds) - 1);
      }
    }
  }


  render(){
    return(
      <div className="app">
        <div className="app-wrapper">
          <div id="app-title">
            <h1><span id="react-tag">React</span> Pomodoro Clock</h1>
          </div>

          <div className="timer">
            <p>{this.state.minutes} : {this.state.seconds}</p>
          </div>

          <EditTimer
          minutes={this.state.minutes}
          seconds={this.state.seconds}
          edit={this.state.edit}
          onTimerSubmit={this.pressedStart} 
          editMinutes={this.editMinutes}
          editSeconds={this.editSeconds}

          />

          <div className="settings">
            <button id="start-button" onClick={this.pressedStart}>Start</button>
            <button id="pause-button" onClick={this.pressedPause}>Pause</button>
            <button id="reset-button" onClick={this.pressedReset}>Reset</button>
            <button id="edit-button" onClick={this.pressedEdit}>Edit</button>
          </div>
        </div>

      </div>
    );
  }
}

export default App;