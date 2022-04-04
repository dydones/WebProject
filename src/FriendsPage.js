import React, { Component } from 'react';

import NavigationPanel from './NavigationPanel.js';

import './FriendsPage.css';

class FriendsPage extends Component{
	constructor(props){
		super(props);
		this.state={
			page:"Friends_page",
		};
	}
	
	render(){
		return(
			<div>
				<NavigationPanel />
					<h1>Here's the friends' page, buddy :) too bad you ain't got any...</h1>
			</div>
		);
	}
}

export default FriendsPage;
