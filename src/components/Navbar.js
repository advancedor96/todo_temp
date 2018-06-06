import React from 'react';
import { observer } from 'mobx-react';
import Appstore from '../stores/Appstore';


const Navbar = observer(class MyTabs extends React.Component {

	render() {
		return (
			<div className="Navbar">
				<span className="active">My Task</span>
				<span>In Progress</span>
				<span>Completed</span>
			</div>
		);
	}
});



export default (Navbar);