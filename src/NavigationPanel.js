import { NavLink } from "react-router-dom";
import { useNavigation } from "react-router-dom";
import React, { Component } from 'react';
import Login from './Login.js';
import MsgPage from './MsgPage.js';
import Signin from './SignIn.js';
import MainPage from './MainPage.js';
import './NavigationPanel.css';
import logo from "./logo.png";

class NavigationPanel extends Component{
	constructor(props){
		super(props);
		this.state={
			page:"Navigation_panel",
			isconnected: false
		};
	}
	
	
			
	render(){
    return (
      <div className="NavigationPanel">
      	<table className="band"> 
				<td><NavLink to="/MainPage"> <button className="bandButton"> MainPage</button> 				</NavLink> 	 </td>  
				<td><NavLink to="/Login">    <button className="bandButton"> Login</button>					</NavLink>   </td>   
				<td><NavLink to="/SignIn">   <button className="bandButton"> SignIn</button> 				</NavLink>   </td>     
				<td><NavLink to="/MsgPage">  <button className="bandButton" id="MsgButt" onClick={this.props.navigation.navigate("/MsgPage")}> Messages</button>	</NavLink> 	 </td>
			</table>
      </div>
    );
  }
}

export default NavigationPanel;
