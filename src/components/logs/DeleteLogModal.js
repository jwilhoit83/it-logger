import { useState, useEffect } from "react";
import { connect } from "react-redux";
import { deleteLog, clearCurrent } from "../../actions/logActions";
import M from "materialize-css/dist/js/materialize.min.js";

const DeleteLogModal = ({ deleteLog, clearCurrent, current }) => {
  const [id, setId] = useState(null);

  useEffect(() => {
    if (current) {
      setId(current.id);
    }
  }, [current]);

  const onDelete = () => {
    deleteLog(id);
    M.toast({ html: "Log has been deleted" });
    clearCurrent();
  };

  return (
    <div id="delete-log-modal" className="modal">
      <div className="modal-content">
        <h4 className="center blue-grey-text">Are you sure you want to delete this log?</h4>
      </div>
      <div className="modal-footer">
        <a
          href="#!"
          style={{ marginRight: 5 }}
          onClick={() => clearCurrent()}
          className="modal-close blue-grey waves-effect waves-light btn">
          Cancel
        </a>
        <a
          href="#!"
          onClick={onDelete}
          className="modal-close red darken-3 waves-effect waves-light btn">
          Delete
        </a>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  current: state.log.current,
});

export default connect(mapStateToProps, { deleteLog, clearCurrent })(DeleteLogModal);
