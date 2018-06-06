import React, { Component } from 'react';

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
			<div className="AddItem_container show">
				<div className="top">
					<input type='checkbox' />
					<input type='text' placeholder="Type something here..." />
					<div><i className="far fa-star"></i></div>
					<div><i className="far fa-pen"></i></div>
				</div>
				<div className="middle">
					<div>
						<h4>Deadline</h4>
						<input type='date' id="AddItem_datetime"/>
						<input type='time' id="AddItem_datetime"/>
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
						className="btn btnCancel"
					>X Cancel
					</button>
					<button
						className="btn btnAdd"
					>+ Add Task</button>
				</div>
			</div>
		)
	}
}

export default AddItem;