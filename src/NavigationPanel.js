import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navlink } from "react-router-dom";
import React, { Component } from 'react';
import Login from './Login.js';
import MsgPage from './MsgPage.js';
import Signin from './SignIn.js';
import MainPage from './MainPage.js';
import './MainPage.css';
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
        <BrowserRouter>
			<Routes>
				<Route path="/Messages" element={<MsgPage />} />
				<Route path="/Login" element={<Login />} />
				<Route path="/MainPage" element={<MainPage />} />
			</Routes>
		</BrowserRouter>
      </div>
    );
  }
}

export default NavigationPanel;
