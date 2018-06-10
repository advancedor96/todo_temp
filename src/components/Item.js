import React, { Component } from "react";

import FontAwesomeIcon from "@fortawesome/react-fontawesome";
import solid_star from "@fortawesome/fontawesome-free-solid/faStar";
import pencil from "@fortawesome/fontawesome-free-solid/faPencilAlt";

import check from "@fortawesome/fontawesome-free-solid/faCheck";

import empty_star from "@fortawesome/fontawesome-free-regular/faStar";

import calendar from "@fortawesome/fontawesome-free-regular/faCalendarAlt";
import file from "@fortawesome/fontawesome-free-regular/faFile";
import commentIcon from "@fortawesome/fontawesome-free-regular/faCommentDots";

class Item extends Component {
  render() {
    return (
      <div className="Item">
        <div className="first_line">
          <span className="checkbox">
            {this.props.finished ? (
              <FontAwesomeIcon
                icon={check}
                size="2x"
                style={{ fontSize: "19px" }}
              />
            ) : null}
          </span>
          <span className="title">{this.props.title}</span>
          <span className="star">
            {this.props.favorite ? (
              <FontAwesomeIcon
                icon={solid_star}
                size="2x"
                style={{ fontSize: "24px" }}
              />
            ) : (
              <FontAwesomeIcon
                icon={empty_star}
                size="2x"
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
          <span className="file">
            <FontAwesomeIcon
              icon={file}
              size="2x"
              style={{ fontSize: "16px" }}
            />
          </span>
          <span className="comment">
            <FontAwesomeIcon
              icon={commentIcon}
              size="2x"
              style={{ fontSize: "16px" }}
            />
          </span>
        </div>
      </div>
    );
  }
}

export default Item;
