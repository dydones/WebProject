import { Link } from "react-router-dom";
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
      	<div id="divImg"> 
					<Link to="/MainPage"> <img className="appLogo" src={logo}></img> </Link>
		</div>
      	<table className="band"> 
				<td><Link to="/MainPage"> <button className="bandButton"> MainPage</button> 				</Link> 	 </td>  
				<td><Link to="/Login">    <button className="bandButton"> Login</button>					</Link>   </td>   
				<td><Link to="/SignIn">   <button className="bandButton"> SignIn</button> 					</Link>   </td>     
				<td><Link to="/MsgPage">  <button className="bandButton"> Messages</button>	            	</Link> 	 </td>
				<td><Link to="/FriendsPage">  <button className="bandButton"> My Friends</button>	        </Link> 	 </td>
			</table>
      </div>
    );
  }
}

export default NavigationPanel;
