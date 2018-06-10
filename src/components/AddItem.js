import React, { Component } from 'react';

import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import solid_star from '@fortawesome/fontawesome-free-solid/faStar'
import pencil from '@fortawesome/fontawesome-free-solid/faPencilAlt'
import check from '@fortawesome/fontawesome-free-solid/faCheck'

import empty_star from '@fortawesome/fontawesome-free-regular/faStar'
import calendar from '@fortawesome/fontawesome-free-regular/faCalendarAlt'
import file from '@fortawesome/fontawesome-free-regular/faFile'
import commentIcon from '@fortawesome/fontawesome-free-regular/faCommentDots'


class AddItem extends Component {
	state = {
		edit: false,
		favorite: false,
	}
	handleEdit = (newValue)=>{
		this.setState({ edit: newValue});
	}
	handleToggleFavorite = ()=>{
		this.setState( (prevState)=>{
			return {favorite: !prevState.favorite}
		});
	}
	render() {
		if(this.state.edit === false){
			return (
				<div className="AddItem_container">
					<input type='text' placeholder="+ Add Task" onClick={()=>{ this.handleEdit(true); }}/>
				</div>
			)
		}
		return (
			<div className="AddItem_container2">
				<div className="top">
					<div className="checkbox">
					
						{/* <FontAwesomeIcon icon={check} size="2x" style={{fontSize:'19px'}}/> */}
					</div>
					<input type='text' placeholder="Type something here..." />
        			<FontAwesomeIcon icon={solid_star} size="2x"  className={ this.state.favorite? "star full_star" : "star"} style={{fontSize:'24px'}}
					  onClick={this.handleToggleFavorite}
					  />
					<FontAwesomeIcon icon={pencil} size="2x" className="pencil" style={{fontSize:'24px'}} 
					onClick={()=>{ this.handleEdit(false); }}
					/>
				</div>
				<div className="middle">
					<div>
						<div className="title">
							<FontAwesomeIcon icon={calendar} size="2x"  className="calendar" style={{fontSize:'15px'}}/>
							<span>Deadline</span>
						</div>
						<div className="content">
							<input type='date' />
							<input type='time'/>
						</div>
					</div>

					<div>
						<div className="title">
							<FontAwesomeIcon icon={file} size="2x"  style={{fontSize:'15px'}}/>
							<span>File</span>
						</div>
						<div className="content">
							<div className="file">+</div>
						</div>

					</div>
					<div>
						<div className="title">
							<FontAwesomeIcon icon={commentIcon} size="2x"  style={{fontSize:'15px'}}/>
							<span>Comment</span>
						</div>
						<div className="content">
							<textarea className="textarea"
								placeholder="Type your memo here..."
							></textarea>
						</div>


						
					</div>
				</div>
				<div className="btn_line">
					<button 
						onClick={()=>{ this.handleEdit(false); }}
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