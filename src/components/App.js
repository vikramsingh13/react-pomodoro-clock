import React, {Component} from 'react';
import EditTimer from './EditTimer';

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      minutes: "01",
      seconds: "15",
      start: false,
      edit: false,
      interval: setInterval(this.countdown, 1000)
    };
  }

  //helper functions
  editMinutes = (newMinutes) => {
    newMinutes = newMinutes < 10 ? ("0" + newMinutes) : newMinutes;
    this.setState({minutes: newMinutes});
  }

  editSeconds = (newSeconds) => {
    newSeconds = newSeconds < 10 ? ("0" + newSeconds) : newSeconds;
    this.setState({seconds: newSeconds});
  }

  //buttons for the timer
  pressedStart = async() => {
    if(!this.state.start){
      await clearInterval(this.state.interval);
      this.setState({
        start: true, 
        edit: false,
        interval: await setInterval(this.countdown, 1000),
      });
    }
  }

  pressedPause = async() => {
    this.setState({start: false});
    await clearInterval(this.state.interval);
    this.setState({interval: null});
  }

  pressedEdit = async() => {
    this.setState({start: false, edit: true});
    await clearInterval(this.state.interval);
    this.setState({interval: null});
  }

  pressedReset = async() => {
    this.setState({minutes: "25", seconds: "00", start: false, edit: false});
    await clearInterval(this.state.interval);
    this.setState({interval: null})
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
        <h1>React Pomodoro Clock</h1>

        <div className="timer">
          <h2>{this.state.minutes} </h2> 
          <h2>:</h2> 
          <h2>{this.state.seconds} </h2>
        </div>

        <EditTimer
        edit={this.state.edit} 
        editMinutes={this.editMinutes}
        editSeconds={this.editSeconds}

        />

        <div className="settings">
          <p onClick={this.pressedStart}>Start</p>
          <p onClick={this.pressedPause}>Pause</p>
          <p onClick={this.pressedReset}>Reset</p>
          <p onClick={this.pressedEdit}>Edit</p>
        </div>

      </div>
    );
  }
}

export default App;