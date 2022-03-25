import React, { Component } from 'react';

class MsgPage extends Component{
	constructor(props){
		super(props);
		this.state={
			page:"Messages_page",
			nbMessages: 0, 
		};
	}
	
	render(){
		return(
		<div className = "MsgPage">
			<h1>My Messages </h1>
		</div>);
		}
}

export default MsgPage;
