import React, { Component } from "react";

import { observer } from 'mobx-react';
import Appstore from '../stores/Appstore';
import FontAwesomeIcon from "@fortawesome/react-fontawesome";
import solid_star from "@fortawesome/fontawesome-free-solid/faStar";
import pencil from "@fortawesome/fontawesome-free-solid/faPencilAlt";

import check from "@fortawesome/fontawesome-free-solid/faCheck";

import empty_star from "@fortawesome/fontawesome-free-regular/faStar";

import calendar from "@fortawesome/fontawesome-free-regular/faCalendarAlt";
import file from "@fortawesome/fontawesome-free-regular/faFile";
import commentIcon from "@fortawesome/fontawesome-free-regular/faCommentDots";

const Item = observer(class Item extends Component {
   handleToggleFinish = (id)=>{
      Appstore.setFinishOfData(id);
   }
   handleToggleFav = (id)=>{
      Appstore.toogleFavorite(id);
   }
  render() {
     let itemClassName = this.props.favorite ? "Item favorite": "Item";
    return (
      <div className={itemClassName}>
        <div className="first_line">
          <span className="checkbox"
            onClick={ ()=>{   this.handleToggleFinish(this.props.id)}}
          >
            {this.props.finished ? (
              <FontAwesomeIcon
                icon={check}
                size="2x"
                style={{ fontSize: "19px" }}
              />
            ) : null}
          </span>
          <span className={this.props.finished? "title finished" : "title"}>{this.props.title}</span>
          <span className="star"
            onClick={ ()=>{   this.handleToggleFav(this.props.id)}}
          >
            {this.props.favorite ? (
              <FontAwesomeIcon
                icon={solid_star}
                size="2x"
                className="full_star"
                style={{ fontSize: "24px" }}
              />
            ) : (
              <FontAwesomeIcon
                icon={empty_star}
                size="2x"
                className="empty_star"
                style={{ fontSize: "24px" }}
              />
            )}
          </span>
          <span className="pencil">
            <FontAwesomeIcon
              icon={pencil}
              size="2x"
              style={{ fontSize: "24px" }}
            />
          </span>
        </div>
        <div className="second_line">
        {
           this.props.deadline_date.length!==0? 
           <span className="date">
             <FontAwesomeIcon
               icon={calendar}
               size="2x"
               style={{ fontSize: "16px", marginRight:'8px' }}
             />{this.props.deadline_date}
           </span> : null
        }
        {
           this.props.file.length!==0? 
           <span className="file">
           <FontAwesomeIcon
             icon={file}
             size="2x"
             style={{ fontSize: "16px" }}
           />
         </span>: null
        }
        {
           this.props.comment.length!==0? 
           <span className="comment">
           <FontAwesomeIcon
             icon={commentIcon}
             size="2x"
             style={{ fontSize: "16px" }}
           />
         </span>: null
        }


        </div>
      </div>
    );
  }
});

export default Item;
