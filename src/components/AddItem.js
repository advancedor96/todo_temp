import React, { Component } from 'react';

import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faStar from '@fortawesome/fontawesome-free-solid/faStar'
import faStar_regular from '@fortawesome/fontawesome-free-regular/faStar'

// import FontAwesomeIcon from '@fortawesome/react-fontawesome'
// import faCoffee from '@fortawesome/fontawesome-free-solid/faCoffee'


class AddItem extends Component {
	render() {
		if(this.props.show === false){
			return (
				<div className="AddItem_container">
					<input type='text' placeholder="+ Add Task" onClick={()=>{ this.props.setClick(true); }}/>
				</div>
			)
		}
		return (
			<div className="AddItem_container2">
				<div className="top">
					<input type='checkbox' />
					<input type='text' placeholder="Type something here..." />
					<div className="star">
        			<FontAwesomeIcon icon={faStar_regular} /></div>
					<div><i className="far fa-pen"></i></div>
				</div>
				<div className="middle">
					<div>
						<h4>Deadline</h4>
						<input type='date' />
						<input type='time'/>
					</div>
					<div>
						<h4>File</h4>
						<div className="file">+</div>
					</div>
					<div>
						<h4>Comment</h4>
						<textarea></textarea>
					</div>
				</div>
				<div className="btn_line">
					<button 
						onClick={()=>{ this.props.setClick(false); }}
						className="btnCancel"
					>X Cancel
					</button>
					<button
						className="btnAdd"
					>+ Add Task</button>
				</div>
			</div>
		)
	}
}

export default AddItem;