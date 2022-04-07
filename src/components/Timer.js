import React, { Component } from 'react';

class Timer extends Component{
	

	componentDidMount(){
		if(this.props.start){
			this.countdown();
		}
	}


	//helper functions

	countdown(){
		setInterval(() => {
			//when seconds reach 0, seconds is set to 59 and minutes is reduced by 1
			if(this.props.seconds === 0){
				this.setState({minutes: this.props.minutes - 1, seconds: 59});
			} else {
				this.setState({seconds: (this.props.seconds - 1)});
			}
		}, 1000)
	}


	//render for Timer
	render(){
		return(
			<div className="timer">
				<input type="text" value={this.props.minutes} /> : 
				<input type="text" value={this.props.seconds} />
			</div>
		)
	}


}


//timer default props
Timer.defaultProps = {
	minutes: 25,
	seconds: 0,
	start: false
};

export default Timer;