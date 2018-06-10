import React, { Component } from 'react';

import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import solid_star from '@fortawesome/fontawesome-free-solid/faStar'
import pencil from '@fortawesome/fontawesome-free-solid/faPencilAlt'


import check from '@fortawesome/fontawesome-free-solid/faCheck'

import empty_star from '@fortawesome/fontawesome-free-regular/faStar'

class Item extends Component {
   render() {
      return (
         <div className="Item">
            <div className="first_line">
               <span className="checkbox">
               {
                  this.props.finished ?
                  <FontAwesomeIcon icon={check} size="2x" style={{fontSize:'19px'}}/>
                  : null
               }
                  
               </span>
               <span className="title">{this.props.title}</span>
               <span className="star">
               {
                  this.props.favorite?
                  <FontAwesomeIcon icon={solid_star} size="2x"   style={{fontSize:'24px'}}/> :
                  <FontAwesomeIcon icon={empty_star} size="2x"  style={{fontSize:'24px'}}/>
               }
               </span>
               <span className="pencil">
                  <FontAwesomeIcon icon={pencil} size="2x"  style={{fontSize:'24px'}}/>
               </span>
            </div>
            <div className="second_line">
               <span className="date"></span>
               <span className="file"></span>
               <span className="comment"></span>
            </div>
         </div>
      );
   }
}

export default Item;