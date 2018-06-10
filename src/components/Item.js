import React, { Component } from "react";

import { observer } from "mobx-react";
import Appstore from "../stores/Appstore";
import FontAwesomeIcon from "@fortawesome/react-fontawesome";
import solid_star from "@fortawesome/fontawesome-free-solid/faStar";
import pencil from "@fortawesome/fontawesome-free-solid/faPencilAlt";

import check from "@fortawesome/fontawesome-free-solid/faCheck";

import empty_star from "@fortawesome/fontawesome-free-regular/faStar";

import calendar from "@fortawesome/fontawesome-free-regular/faCalendarAlt";
import file from "@fortawesome/fontawesome-free-regular/faFile";
import commentIcon from "@fortawesome/fontawesome-free-regular/faCommentDots";

const Item = observer(
  class Item extends Component {
    state = {
      edit: false
    };
    handleToggleFinish = id => {
      Appstore.setFinishOfData(id);
    };
    handleToggleFav = id => {
      Appstore.toogleFavorite(id);
    };
    handleToggleEdit = () => {
      this.setState(prevState => {
        return { edit: !prevState.edit };
      });
    };
    render() {
      if (this.state.edit === false) {
        let itemClassName = this.props.favorite ? "Item favorite" : "Item";
        return (
          <div className={itemClassName}>
            <div className="first_line">
              <span
                className="checkbox"
                onClick={() => {
                  this.handleToggleFinish(this.props.id);
                }}
              >
                {this.props.finished ? (
                  <FontAwesomeIcon
                    icon={check}
                    size="2x"
                    style={{ fontSize: "19px" }}
                  />
                ) : null}
              </span>
              <span
                className={this.props.finished ? "title finished" : "title"}
              >
                {this.props.title}
              </span>
              <span
                className="star"
                onClick={() => {
                  this.handleToggleFav(this.props.id);
                }}
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
              <span
                className="pencil"
                onClick={() => {
                  this.handleToggleEdit(this.props.id);
                }}
              >
                <FontAwesomeIcon
                  icon={pencil}
                  size="2x"
                  style={{ fontSize: "24px" }}
                />
              </span>
            </div>
            <div className="second_line">
              {this.props.deadline_date.length !== 0 ? (
                <span className="date">
                  <FontAwesomeIcon
                    icon={calendar}
                    size="2x"
                    style={{ fontSize: "16px", marginRight: "8px" }}
                  />
                  {this.props.deadline_date}
                </span>
              ) : null}
              {this.props.file.length !== 0 ? (
                <span className="file">
                  <FontAwesomeIcon
                    icon={file}
                    size="2x"
                    style={{ fontSize: "16px" }}
                  />
                </span>
              ) : null}
              {this.props.comment.length !== 0 ? (
                <span className="comment">
                  <FontAwesomeIcon
                    icon={commentIcon}
                    size="2x"
                    style={{ fontSize: "16px" }}
                  />
                </span>
              ) : null}
            </div>
          </div>
        );
      } else {
        /* 打開編輯模式*/
        return (
          <div className="AddItem_container2">
            <div className={this.props.favorite?  "top favorite":"top"}>
              <div className="checkbox">
                {this.props.finished ? (
                  <FontAwesomeIcon
                    icon={check}
                    size="2x"
                    style={{ fontSize: "19px" }}
                  />
                ) : null}
              </div>
              <input type="text" defaultValue={this.props.title} />
              <span
                className="star"
                onClick={() => {
                  this.handleToggleFav(this.props.id);
                }}
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
              <span
                className="pencil"
                onClick={() => {
                  this.handleToggleEdit(this.props.id);
                }}
              >
                <FontAwesomeIcon
                  icon={pencil}
                  size="2x"
                  style={{ fontSize: "24px" }}
                />
              </span>
            </div>
            <div className="middle">
              <div>
                <div className="title">
                  <FontAwesomeIcon
                    icon={calendar}
                    size="2x"
                    className="calendar"
                    style={{ fontSize: "15px" }}
                  />
                  <span>Deadline</span>
                </div>
                <div className="content">
                  <input type="date" defaultValue={this.props.deadline_date} />
                  <input type="time" defaultValue={this.props.deadline_time} />
                </div>
              </div>

              <div>
                <div className="title">
                  <FontAwesomeIcon
                    icon={file}
                    size="2x"
                    style={{ fontSize: "15px" }}
                  />
                  <span>File</span>
                </div>
                <div className="content">
                  <div className="file">+ {this.props.file}</div>
                </div>
              </div>
              <div>
                <div className="title">
                  <FontAwesomeIcon
                    icon={commentIcon}
                    size="2x"
                    style={{ fontSize: "15px" }}
                  />
                  <span>Comment</span>
                </div>
                <div className="content">
                  <textarea
                    className="textarea"
                    placeholder="Type your memo here..."
                    defaultValue={this.props.comment}
                  >
                    
                  </textarea>
                </div>
              </div>
            </div>
            <div className="btn_line">
              <button onClick={this.handleToggleEdit} className="btnCancel">
                X Cancel
              </button>
              <button className="btnAdd">+ Add Task</button>
            </div>
          </div>
        );
      }
    }
  }
);

export default Item;
