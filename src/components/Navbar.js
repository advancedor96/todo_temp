import React from 'react';
import { observer } from 'mobx-react';
import Appstore from '../stores/Appstore';


const Navbar = observer(class MyTabs extends React.Component {

	render() {
		return (
			<div className="Navbar">
				<span className={Appstore.tab===0? "active": ""} onClick={ ()=>{Appstore.setTab(0);} }>My Task</span>
				<span className={Appstore.tab===1? "active": ""} onClick={ ()=>{Appstore.setTab(1);} }>In Progress</span>
				<span className={Appstore.tab===2? "active": ""} onClick={ ()=>{Appstore.setTab(2);} }>Completed</span>
			</div>
		);
	}
});



export default (Navbar);