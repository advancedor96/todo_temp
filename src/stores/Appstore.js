import {  observable,  action } from "mobx";
import _ from 'lodash';
const Data = [
	{
		id: 0,
		deadline_date:'0001-05-14',
		deadline_time:'09:00',
		title:'第一筆',
		file: '',
		comment: '第一筆內容',
		finished: false,
		favorite: true,
	},
	{
		id: 1,
		deadline_date:'',
		deadline_time:'',
		title:'第2筆',
		file: 'dd',
		comment: '',
		finished: false,
		favorite: false,
	},
	{
		id: 2,
		deadline_date:'0023-05-14',
		deadline_time:'09:00',
		title:'第3筆',
		file: '',
		comment: '第3筆內容',
		finished: true,
		favorite: true,
	},
];


var Appstore = observable({
	tab : 0,
	Data: Data,
});
Appstore.setFinishOfData = action( function (data_id){
	let target = _.find(Appstore.Data, o=>o.id === data_id);
	if(target === undefined){
		return false;
	}else{
		target.finished = !target.finished;
		return true;
	}
	
})

Appstore.toogleFavorite = action( function (data_id){
	let target = _.find(Appstore.Data, o=>o.id === data_id);
	if(target === undefined){
		return false;
	}else{
		target.favorite = !target.favorite;
		return true;
	}
	
})
Appstore.addItem = action( (title, date, time, file, comment, finished, favorite)=>{
	let newObj = {
		id: new Date(),
		deadline_date:date,
		deadline_time:time,
		title:title,
		file: file,
		comment: comment,
		finished: finished,
		favorite: favorite
	}
	Appstore.Data.push(newObj);
	return true;
})

Appstore.updateItem = action( (Data_id, title, date, time, file, comment, finished, favorite)=>{

	let target = _.find(Appstore.Data, o=>o.id === Data_id);
	if(target === undefined){
		return false;
	}else{
		target.title = title;
		target.deadline_date = date;
		target.deadline_time = time;
		target.file = file;
		target.comment = comment;
		target.finished = finished;
		target.favorite = favorite;
		return true;
	}
})


Appstore.setTab = action(function reset(value) {
	Appstore.tab = value;
});



export default Appstore;