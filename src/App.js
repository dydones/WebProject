import React, { Component } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import Login from './Login.js';
import MsgPage from './MsgPage.js';
import Signin from './SignIn.js';
import MainPage from './MainPage.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/*Initializes the paths*/}
        	<BrowserRouter>
			<Routes>
				<Route path="/" element={<MainPage />} />
				<Route path="*" element={<MainPage />} />
				<Route path="/Messages" element={<MsgPage />} />
				<Route path="/Login" element={<Login />} />
				<Route path="/MainPage" element={<MainPage />} />
			</Routes>
			</BrowserRouter>
      </div>
    );
  }
}

export default App;
