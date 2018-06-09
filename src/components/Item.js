import React, { Component } from 'react';

class Item extends Component {
   render() {
      return (
         <div className="Item">
            <div className="first_line">
               <input type="checkbox" defaultChecked={this.props.finished? true: false} />
               <h3>{this.props.title}</h3>
               <span className="star"></span>
               <span className="pencil"></span>
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