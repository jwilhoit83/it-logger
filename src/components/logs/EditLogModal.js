import { useState, useEffect } from "react";
import { connect } from "react-redux";
import { updateLog, clearCurrent } from "../../actions/logActions";
import TechSelectOptions from '../techs/TechSelectOptions'
import M from "materialize-css/dist/js/materialize.min.js";

const EditLogModal = ({ current, updateLog, clearCurrent }) => {
  const [message, setMessage] = useState("");
  const [attention, setAttention] = useState(false);
  const [tech, setTech] = useState("");

  useEffect(() => {
    if (current) {
      setMessage(current.message);
      setAttention(current.attention);
      setTech(current.tech);
    }
  }, [current]);

  const onSubmit = () => {
    if (message === "" || tech === "") {
      M.toast({ html: "Please enter a message and tech" });
    } else {
      updateLog({ id: current.id, message, attention, tech, date: new Date() });
      M.toast({ html: `Log was updated by ${tech}` });

      clearCurrent();
    }
  };

  return (
    <div id="edit-log-modal" className="modal">
      <div className="modal-content">
        <h4>Enter System Log</h4>

        <div className="row">
          <div className="input-field">
            <input
              type="text"
              name="message"
              style={{
                borderBottom: "1px solid #607d8b",
                boxShadow: "0 1px 0 0 #607d8b",
              }}
              placeholder='Log Message'
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <label htmlFor="message" style={{ color: "#607d8b" }} className="active">
              Log Message
            </label>
          </div>
        </div>

        <div className="row">
          <div className="input-field">
            <select
              name="tech"
              value={tech}
              className="browser-default"
              onChange={(e) => setTech(e.target.value)}>
              <option value=" " disabled>
                Select Technician
              </option>
              <TechSelectOptions />
            </select>
          </div>
        </div>

        <div className="row">
          <div className="input-field">
            <p>
              <label>
                <input
                  type="checkbox"
                  className="filled-in checkbox-blue-grey"
                  checked={attention}
                  value={attention}
                  onChange={(e) => setAttention(!attention)}
                />
                <span>Needs Attention</span>
              </label>
            </p>
          </div>
        </div>
      </div>
      <div className="modal-footer">
        <a
          href="#!"
          onClick={onSubmit}
          className="modal-close blue-grey waves-effect waves-light btn">
          Enter
        </a>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  current: state.log.current,
});

export default connect(mapStateToProps, { updateLog, clearCurrent })(EditLogModal);
