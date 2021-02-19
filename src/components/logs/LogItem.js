import React from "react";
import { connect } from "react-redux";
import { setCurrent } from "../../actions/logActions";
import Moment from "react-moment";

const LogItem = ({ log, setCurrent }) => {
  return (
    <li className="collection-item grey lighten-2" style={{ margin: "1px" }}>
      <div>
        <a
          href="#edit-log-modal"
          className={`modal-trigger ${log.attention ? "red-text text-darken-3" : "blue-grey-text"}`}
          onClick={() => setCurrent(log)}>
          {log.message}
        </a>
        <br />
        <span className="grey-text text-darken-1">
          <span className="black-text">ID #{log.id + " "}</span>last updated by{" "}
          <span className="black-text">{log.tech}</span>
          {" on "}
          <Moment format="MMMM Do YYYY, h:mm:ss a">{log.date}</Moment>
        </span>
        <a
          href="#delete-log-modal"
          className="modal-trigger secondary-content"
          onClick={() => setCurrent(log)}>
          <i className="material-icons blue-grey-text">delete</i>{" "}
        </a>
      </div>
    </li>
  );
};

export default connect(null, { setCurrent })(LogItem);
