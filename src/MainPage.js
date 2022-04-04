import React, { Component } from 'react';
import { Routes, Route } from "react-router-dom";

import NavigationPanel from './NavigationPanel.js';
import Login from './Login.js';
import MsgPage from './MsgPage.js';
import Signin from './SignIn.js';
import './MainPage.css';
import logo from "./logo.png";

class MainPage extends Component{
	constructor(){
		super();
		this.state={
			page : 'signin_page',
			isconnected : false
		};
		
		this.getconnected = this.getconnected.bind(this);
		this.setlogout = this.setlogout.bind(this);
	}
		
	/*const api = axios.create({baseURL="http//localhost/8080/birdy",
								timeout=1000,
								headers={'Custom Header':"header",
								'Access-control-Allow-Origin':'*',
								'Content-type':'application/json:charset=UTF=8'}
								});*/
								
	/*send(data){api.post("/login",params={login:data.login,Password=data.password})
					.then((response)=>{setStatus(""), login(response.data["session.key"])}
					.catch((err)=>{setStatus('error'), setErrorText(response.data["description"])})
					}*/
	
	getconnected()  {
		this.setState({
			page : 'message_page',
			isconnected : true
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
		<div id="MainMenu">
			<NavigationPanel />
			<div id="SignIn_form">
				{this.state.page == "signin_page" ? <Login /> : <Login />}  					
				<button id="loginButton" onClick={this.getconnected} >login</button>
			</div>
			<h1> This is the MainPage </h1>
		</div>
		);
	}
}

export default MainPage;

