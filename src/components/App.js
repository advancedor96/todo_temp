import React, { Component } from 'react';
// import logo from './logo.svg';
import { observer } from 'mobx-react';
import '../App.css';
import Navbar from './Navbar';
import Appstore from '../stores/Appstore';
import AddItem from './AddItem.js';
import Items from './Items.js';
const App = observer(class App extends Component {
	state = {
		showAddItem: false,
	}
	handleClickAddItem = (value)=>{
		this.setState({showAddItem: value});
	}
  render() {
    return (
			<div className="container">	
				<Navbar />
				<AddItem show={this.state.showAddItem} 
					setClick={this.handleClickAddItem}
				/>
				<Items />
			</div>
	 
    );
  }
})

export default App;
