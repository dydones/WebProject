import React, { Component } from 'react';

import './Profile.css';

class Profile extends Component{
	constructor(props){
		super(props);
		this.state={
			page:"Friends_page",
			is_connected: false,
			pseudo: "Unknown",
			profile_picture: "default.png"
		};
	}
	
	render(){
		return(
			<div>
				<table>
					<tr></tr>
					<tr></tr>
					<tr></tr>
					<tr></tr>
				</table>
			</div>
		);
	}
}

export default Profile;
