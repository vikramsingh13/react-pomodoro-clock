import React, {Component} from 'react';
import Timer from './Timer';

class App extends Component{
  state = {
    start: false,
    timeComponent: "",
  };

  componentDidMount(){

  }

  render(){
    return(
      <div className="app">
        <h1>React Pomodoro Clock</h1>

        <Timer minutes={this.state.minutes}
        seconds={this.state.seconds} 
        start={this.state.start}/>

      </div>
    );
  }
}

export default App;