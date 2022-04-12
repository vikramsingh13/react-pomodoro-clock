import React, { Component } from 'react';
import './EditTimer.css';

class EditTimer extends Component{
	
	//editStatus is used to either show or hide
	//the EditTimer component
	editStatus = this.props.edit ? "edit" : "no-edit";

	//makes sure everytime there is an update to the app component
	//the editStatus is the correct status based on whether edit was pressed
	componentDidUpdate(){
		this.editStatus = this.props.edit ? "edit" : "no-edit";
	}

	//helper functions

	//if Enter key is pressed on the form, pressedStart in App component
	//via onTimerSubmit prop is called
	onKeyPressed = e => { if(e.key === "Enter") this.props.onTimerSubmit()};

	render(){
		return(
			<div className={`edit-timer ${this.editStatus}`}>
				<form 
				className="edit-timer-form" 
				onKeyPress={this.onKeyPressed}
				>
					<label name="minutes">Minutes:</label>
					<input type="text" 
					value={this.props.minutes} 
					onChange={e => this.props.editMinutes(e.target.value)}/>

					<label name="seconds">Seconds:</label>
					<input type="text" 
					value={this.props.seconds} 
					onChange={e => this.props.editSeconds(e.target.value)}/>
				</form>
			</div>
		);
	}
}

export default EditTimer;