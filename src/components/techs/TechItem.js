import React from "react";
import { setCurrentTech } from "../../actions/techActions";
import { connect } from "react-redux";
// import M from "materialize-css/dist/js/materialize.min.js";

const TechItem = ({ tech, setCurrentTech }) => {
  const { firstName, lastName } = tech;
  return (
    <li className="collection-item">
      <div>
        <span className="blue-grey-text" style={{fontWeight: 600}}>{firstName + " " + lastName}</span>
        <a
          href="#delete-tech-modal"
          className="modal-trigger secondary-content "
          onClick={() => setCurrentTech(tech)}>
          <i className="material-icons blue-grey-text">delete</i>
        </a>
      </div>
    </li>
  );
};

export default connect(null, { setCurrentTech })(TechItem);
