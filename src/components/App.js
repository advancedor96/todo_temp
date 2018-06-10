import React, { Component } from 'react';
// import logo from './logo.svg';
import { observer } from 'mobx-react';
import '../css/App.scss';
// import '../css/_App2.scss';
// import '../App.css';
import Navbar from './Navbar';
import Appstore from '../stores/Appstore';
import AddItem from './AddItem.js';
import Items from './Items.js';
import ProgressItems from './ProgressItems';
import CompletedItems from './CompletedItems';
const App = observer(class App extends Component {

  render() {
		let result = null;
		if(Appstore.tab === 0){
			result = <Items />;
		}else if(Appstore.tab === 1){
			result = <ProgressItems />;
		}else if(Appstore.tab === 2){
			result = <CompletedItems />;
		}
    return (
			<div className="container">	
				<Navbar />
				<AddItem />
				{result}
			</div>
	 
    );
  }
})

export default App;
