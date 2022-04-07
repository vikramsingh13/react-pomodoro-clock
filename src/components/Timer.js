import React, { Component } from 'react';

class Timer extends Component{
	constructor(props){
		super(props);
		this.state = {
			minutes: parseInt(this.props.minutes), 
			seconds: parseInt(this.props.seconds),
			start: this.props.start,
		}
	}

	componentDidMount(){
		/*if(typeof this.state.seconds != 'number'){
			this.setState({seconds: 0});
		}*/

		if(this.state.start){
			this.countdown();
		}
	}

	//helper functions
	newMinutes(e){
		this.setState({minutes: parseInt(e.value)});
	}

	newSeconds(e){
		this.setState({seconds: parseInt(e.value)});
	}

	countdown(){
		setInterval(() => {

			if(this.state.seconds === 0){
				this.setState({minutes: this.state.minutes - 1, seconds: 59});
			} else {
				this.setState({seconds: (this.state.seconds - 1)});
			}
		}, 1000)
	}

	render(){
		return(
			<div className="timer">
				<input type="text" value={this.state.minutes} onChange={(e) => this.newMinutes(e)}/> : 
				<input type="text" value={this.state.seconds} onChange={(e) => this.newSeconds(e)}/>
			</div>
		)
	}


}

Timer.defaultProps = {
	minutes: 25,
	seconds: 0,
	start: false
};

export default Timer;