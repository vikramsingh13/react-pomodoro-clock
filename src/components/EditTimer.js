import React, { Component } from 'react';
import './EditTimer.css';

class EditTimer extends Component{

	editStatus = this.props.edit ? "edit" : "no-edit";

	componentDidUpdate(){
		this.editStatus = this.props.edit ? "edit" : "no-edit";
	}

	//helper functions
	newMinutes(e){
		this.props.editMinutes(e);
	}

	newSeconds(e){
		this.props.editSeconds(e);
	}

	render(){
		return(
			<div className={`edit-timer ${this.editStatus}`}>
				<input type="text" value={this.props.minutes} onChange={(e) => {this.newMinutes(e.target.value)}}/>
				<input type="text" value={this.props.seconds} onChange={(e) => {this.newSeconds(e.target.value)}}/>
			</div>
		);
	}
}

export default EditTimer;