import React, { Component } from 'react';
import { useState } from 'react';

import NavigationPanel from './NavigationPanel.js';

class MsgPage extends Component{
	constructor(props){
		super(props);
		this.state={
			page:"Messages_page",
			nbMessages: 0, 
			disp: "false"
		};
	}
	
	changeDispValue(){
		this.setState({disp: true});
		window.alert("Le bouton des messages a ete clique ! ");
	}
	
	displayMsgPage(){
		if(this.props.disp === "true"){
			return (
			<div className = "MsgPage">
				<h>My Messages </h>
				<table>
					<tr>My Messages </tr>
					<h3>{this.state.page}</h3>
					<tr>Write a message {this.props.disp}{this.state.nbMessages}</tr>
				</table>
			</div>
			);
		}
		else{
			return (
				<div>
					NON ce n'est pas vrai lol' (disp != true)
				</div>
			);
		}
	}

	render(){
		return(
		<div>
			<NavigationPanel />
			{this.displayMsgPage(this.props.disp)};
		</div>
		);
		}
}

export default MsgPage;
