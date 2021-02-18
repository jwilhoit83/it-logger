import React from "react";
import Moment from "react-moment";

const LogItem = ({ log }) => {
  return (
    <li className="collection-item grey lighten-2" style={{ margin: "1px" }}>
      <div>
        <a
          href="#edit-log-modal"
          className={`modal-trigger ${
            log.attention ? "red-text text-darken-3" : "blue-grey-text"
          }`}>
          {log.message}
        </a>
        <br />
        <span className="grey-text text-darken-1">
          <span className="black-text">ID #{log.id + " "}</span>last updated by{" "}
          <span className="black-text">{log.tech}</span>
          {" on "}
          <Moment format="MMMM Do YYYY, h:mm:ss a">{log.date}</Moment>
        </span>
        <a href="#!" className="secondary-content">
          {" "}
          <i className="material-icons blue-grey-text">delete</i>{" "}
        </a>
      </div>
    </li>
  );
};

export default LogItem;
