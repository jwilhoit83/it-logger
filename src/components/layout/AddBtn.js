import React from "react";

const AddBtn = () => {
  return (
    <div className="fixed-action-btn">
      <a href="#add-log-modal" title='Add New Log' className="btn-floating btn-large grey darken-3 modal-trigger">
        <i className="large material-icons blue-grey-text">add</i>
      </a>
      <ul>
        <li>
          <a href="#tech-list-modal" title='List of Technicians' className="btn-floating blue-grey modal-trigger">
            <i className="material-icons">person</i>
          </a>
        </li>
        <li>
          <a href="#add-tech-modal" title="Add New Technician" className="btn-floating amber lighten-1 modal-trigger">
            <i className="material-icons">person_add</i>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default AddBtn;
