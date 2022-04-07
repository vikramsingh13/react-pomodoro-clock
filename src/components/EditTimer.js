import React, { Component } from 'react';
import './EditTimer.css';

class EditTimer extends Component{

	constructor(props){
		super(props);
		this.state = {
			minutes: props.minutes,
			seconds: props.seconds,
			edit: props.edit,
			editStatus: "no-edit",
		};
	}

	componentDidMount(){
		this.setState({minutes: this.props.minutes, seconds: this.props.seconds, editStatus: this.state.edit ? "edit" : "no-edit"})
	}

	//helper functions
	newMinutes(e){
		this.setState({minutes: parseInt(e.target.value)});
		this.props.editMinutes(e);
	}

	newSeconds(e){
		this.setState({seconds: parseInt(e.target.value)});
		this.props.editSeconds(e);
	}

	render(){
		return(
			<div className={`edit-timer ${this.state.editStatus}`}>
				<input type="text" value={this.state.minutes} onChange={(e) => {this.newMinutes(e)}}/>
				<input type="text" value={this.state.seconds} onChange={(e) => {this.newSeconds(e)}}/>
			</div>
		);
	}
}

EditTimer.defaultProps = {
	minutes: 0,
	seconds: 0,
	edit: false,
	editStatus: "no-edit",
};

export default EditTimer;