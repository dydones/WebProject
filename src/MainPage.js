import React, { Component } from 'react';
import NavigationPanel from './NavigationPanel';

class MainPage extends Component{
	constructor(){
		super();
		this.state={
			page : 'signin_page',
			isconnected : false,
		};
		
		this.getconnected = this.getconnected.bind(this);
		this.setlogout = this.setlogout.bind(this);
	}	
	
	getconnected()  {
		this.setState({
			page : 'message_page',
			isconnected : true,
			})
	}
	
	setlogout(){
		this.setState({
			page : 'signin_page',
			isconnected : false
			})
	}
	
	render(){
		return(
		<div> 
			//<NavigationPanel login={this.getconnected} logout={this.setlogout} isconnected={this.state.isconnected} />
			//	this.state.page === "signin_page" ? <signin /> : <login/>  <logout/>				//	<button onClick ></button>
			<h1> Ceci est la MainPage </h1>
		</div>
		);
	}
}

export default MainPage;

