import { useState } from "react";
import { connect } from "react-redux";
import { addLog } from "../../actions/logActions";
import TechSelectOptions from '../techs/TechSelectOptions'
import M from "materialize-css/dist/js/materialize.min.js";

const AddLogModal = ({ addLog }) => {
  const [message, setMessage] = useState("");
  const [attention, setAttention] = useState(false);
  const [tech, setTech] = useState("");

  const onSubmit = () => {
    if (message === "" || tech === "") {
      M.toast({ html: "Please enter a message and tech" });
    } else {
      const newLog = {
        message,
        attention,
        tech,
        data: new Date(),
      };

      addLog(newLog);

      M.toast({ html: `Log added by ${tech}` });

      //clear fields
      setMessage("");
      setTech("");
      setAttention(false);
    }
  };

  return (
    <div id="add-log-modal" className="modal">
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
              <option value="" disabled>
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

export default connect(null, { addLog })(AddLogModal);
