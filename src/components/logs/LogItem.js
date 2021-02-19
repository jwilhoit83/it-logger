import React from "react";
import { connect } from "react-redux";
import { deleteLog } from "../../actions/logActions";
import M from "materialize-css/dist/js/materialize.min.js";
import Moment from "react-moment";

const LogItem = ({ log, deleteLog }) => {

  const onDelete = () => {
    deleteLog(log.id)
    M.toast({html: 'Log has been deleted'})
  }

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
        <a href="#!" className="secondary-content" onClick={onDelete}>
          {" "}
          <i className="material-icons blue-grey-text">delete</i>{" "}
        </a>
      </div>
    </li>
  );
};

export default connect(null, { deleteLog })(LogItem);
