import React, { Component } from 'react';
import _ from 'lodash';
import Item from './Item';
import { observer } from 'mobx-react';
import Appstore from '../stores/Appstore';

const CompletedItems = observer(class CompletedItems extends Component {
   render() {
		const Data = Appstore.Data;
		let resultList = _.filter(Data, ['finished', true]);
      resultList = _.orderBy(resultList, ['favorite', 'id'], ['desc']);
      
		let num_left = resultList.length;
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
			   <p class="hint">{num_left} tasks complete</p>
			</div>
      );
   }
})

export default CompletedItems;