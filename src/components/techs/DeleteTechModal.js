import { useState, useEffect } from "react";
import { connect } from "react-redux";
import { deleteTech, clearCurrentTech } from "../../actions/techActions";
import M from "materialize-css/dist/js/materialize.min.js";

const DeleteTechModal = ({ deleteTech, clearCurrentTech, currentTech }) => {
  const [id, setId] = useState(null);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  useEffect(() => {
    if (currentTech) {
      setId(currentTech.id);
      setFirstName(currentTech.firstName);
      setLastName(currentTech.lastName);
    }
  }, []);

  const onDelete = (e) => {
    deleteTech(currentTech.id);
    M.toast({ html: `Technician ${currentTech.firstName} ${currentTech.lastName} was deleted` });
    clearCurrentTech();
  };

  return (
    <div id="delete-tech-modal" className="modal bottom-sheet">
      <div className="modal-content">
        <h4 className="center blue-grey-text">{`Are you sure you want to delete this technician?`}</h4>
      </div>
      <div className="modal-footer">
        <a
          href="#!"
          style={{ marginRight: 5 }}
          onClick={() => clearCurrentTech()}
          className="center modal-close blue-grey waves-effect waves-light btn">
          Cancel
        </a>
        <a
          href="#!"
          onClick={onDelete}
          className="center modal-close red darken-3 waves-effect waves-light btn">
          Delete
        </a>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  currentTech: state.tech.currentTech,
});

export default connect(mapStateToProps, { deleteTech, clearCurrentTech })(DeleteTechModal);
