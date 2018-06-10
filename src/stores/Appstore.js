import { decorate, observable, computed, action } from "mobx";

import _ from 'lodash';
const Data = [
	{
		id: 0,
		deadline_date:'5/14',
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
		deadline_date:'5/14',
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
	target.finished = !target.finished;
	
})

Appstore.toogleFavorite = action( function (data_id){
	let target = _.find(Appstore.Data, o=>o.id === data_id);
	target.favorite = !target.favorite;
	
})


Appstore.setTab = action(function reset(value) {
	Appstore.tab = value;
});



export default Appstore;