import React, { Component } from 'react';

import NavigationPanel from './NavigationPanel.js';

import './Message.css';

class Message extends Component{
	constructor(props){
		super(props);
		this.state={
			page:"Message",
		};
	}
	
	render(){
		return(
		<div className="messageBox">
			<input id="message_canvas" type="text" placeholder="Yeah, write your poetry down here, buddy...">
			</input>
			<button id="sendButton" >Send</button>
		</div>
		);
		}
}

export default Message;
