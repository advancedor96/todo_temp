import React, { Component } from 'react';
// import Data from '../stores/Data';
import _ from 'lodash';
import Item from './Item';
import { observer } from 'mobx-react';
import Appstore from '../stores/Appstore';
const Items = observer(class Items extends Component {
	render() {
		const Data = Appstore.Data;

		// console.log(Data);
		let resultList = _.orderBy(Data, ['favorite', 'id', 'finished'], ['desc']);
		
		return (
			<div className="Item_list">
			{
				_.map(resultList, (o)=>{
					return <Item key={o.id}
								id={o.id}
								deadline_date={o.deadline_date}
								deadline_time={o.deadline_time}
								title={o.title}
								file={o.file}
								comment={o.comment}
								finished={o.finished}
								favorite={o.favorite}
							/>
				})
			}
			</div>
		);
	}
})

export default Items;