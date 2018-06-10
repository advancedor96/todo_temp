import React, { Component } from 'react';
import Data from '../stores/Data';
import _ from 'lodash';
import Item from './Item';
class Items extends Component {
	render() {
		console.log(Data);
		
		return (
			<div className="Item_list">
			{
				_.map(Data, (o)=>{
					return <Item key={o.id}
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
}

export default Items;