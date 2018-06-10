import React, { Component } from 'react';

import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import solid_star from '@fortawesome/fontawesome-free-solid/faStar'
import pencil from '@fortawesome/fontawesome-free-solid/faPencilAlt'
import check from '@fortawesome/fontawesome-free-solid/faCheck'

import empty_star from '@fortawesome/fontawesome-free-regular/faStar'
import calendar from '@fortawesome/fontawesome-free-regular/faCalendarAlt'
import file from '@fortawesome/fontawesome-free-regular/faFile'
import commentIcon from '@fortawesome/fontawesome-free-regular/faCommentDots'
import Appstore from '../stores/Appstore';
import anime from 'animejs'


class AddItem extends Component {
	state = {
		edit: false,
		favorite: false,
		title: '',
		finished: false,
		date: '',
		time: '',
		file: '',
		comment: '',

		opacity:0,

	}
	handleClickEdit = ()=>{
		this.handleEdit(true);
		this.setState({opacity : 1})
	}
	handleEdit = (newValue)=>{
		this.setState({ edit: newValue});
	}
	handleChangeTitle = (e)=>{
		this.setState({title : e.target.value})
	}
	handleToggleFinish = ()=>{
		this.setState( (prevState)=>{
			return {finished: !prevState.finished}
		});
	}
	handleToggleFavorite = ()=>{
		this.setState( (prevState)=>{
			return {favorite: !prevState.favorite}
		});
	}
	handleChangeDate = (e)=>{
		this.setState({date : e.target.value})
	}
	handleChangeTime = (e)=>{
		this.setState({time : e.target.value})
	}
	handleChangeComment = (e)=>{
		this.setState({comment : e.target.value})
	}

	handleAddTask = ()=>{
		let result = Appstore.addItem(
			this.state.title,
			this.state.date, 
			this.state.time, 
			this.state.file, 
			this.state.comment, 
			this.state.finished, 
			this.state.favorite
		);
		if(result === true){
			this.setState({
				edit: false,
				favorite: false,
				title: '',
				finished: false,
				date: '',
				time: '',
				file: '',
				comment: '',
			})
		}
	}

	

	render() {
		if(this.state.edit === false){
			return (
				<div className="AddItem_container">
					<input type='text' placeholder="+ Add Task" onClick={this.handleClickEdit}/>
				</div>
			)
		}
		return (
			<div className="AddItem_container2">
				<div className="top">
					<div className="checkbox"
                onClick={this.handleToggleFinish}>
						{this.state.finished ? (
							<FontAwesomeIcon
							icon={check}
							size="2x"
							style={{ fontSize: "19px" }}
							/>
						) : null}
					</div>
					<input type='text' placeholder="Type something here..." defaultValue={this.state.title} onChange={this.handleChangeTitle}/>
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
							<input type='date' onChange={this.handleChangeDate} />
							<input type='time' onChange={this.handleChangeTime} 
							/>
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
								defaultValue={this.state.comment}
								onChange={this.handleChangeComment}
							></textarea>
						</div>


						
					</div>
				</div>
				<div className="btn_line" style={{ opacity: this.state.opacity}}>
					<button 
						onClick={()=>{ this.handleEdit(false); }}
						className="btnCancel"
					>X Cancel
					</button>
					<button
						className="btnAdd"
						onClick={this.handleAddTask}
					>+ Add Task</button>
				</div>
			</div>
		)
	}
}

export default AddItem;