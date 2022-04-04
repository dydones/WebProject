import React, { Component } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import Login from './Login.js';
import MsgPage from './MsgPage.js';
import Signin from './SignIn.js';
import MainPage from './MainPage.js';
import FriendsPage from './FriendsPage.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/*Initializes the paths*/}
        	<BrowserRouter>
			<Routes>
				<Route path="/" element={<MainPage />} />
				<Route path="*" element={<MainPage />} />
				<Route path="/MsgPage" element={<MsgPage />} />
				<Route path="/Login" element={<Login />} />
				<Route path="/Signin" element={<Signin />} />
				<Route path="/MainPage" element={<MainPage />} />
				<Route path="/FriendsPage" element={<FriendsPage />} />
			</Routes>
			</BrowserRouter>
      </div>
    );
  }
}

export default App;
