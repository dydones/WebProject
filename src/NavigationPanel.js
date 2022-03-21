class NavigationPanel extends Component{
	constructor(props){
		super(props);
		this.state={
			page:"Navigation_panel",
			isconnected:False
		};
	}
		
	render(){
    return (
      <div className="NavigationPanel">
        <header className="NavigationPanel-header">
          <p>
            Edit <code>src/NavigationPanel.js</code> and save to reload.
          </p>
          <a
            className="NavigationPanel-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}
