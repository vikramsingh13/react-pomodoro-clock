import React, {Component} from 'react';
import Timer from './Timer';
import EditTimer from './EditTimer';

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      minutes: 25,
      seconds: 0,
      start: false,
      edit: false,
    };
  }

  //helper functions
  editMinutes = (e) => {
    console.log(e.target.value);
    this.setState({minutes: e.target.value});
    console.log(this.state.minutes);
  }

  editSeconds = (e) => {
    this.setState({seconds: e.target.value});
  }

  //changes value for this.start
  pressedStart = () => {
    this.setState({start: true, edit: false});
  }

  pressedPause = () => {
    this.setState({start: false});
  }

  pressedEdit = () => {
    this.setState({start: false, edit: true})
  }

  pressedReset = () => {
    this.setState({minutes: 25, seconds: 0, start: false, edit: false});
  }

  render(){
    return(
      <div className="app">
        <h1>React Pomodoro Clock</h1>

        <Timer minutes={this.state.minutes}
        seconds={this.state.seconds} 
        start={this.state.start}/>

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