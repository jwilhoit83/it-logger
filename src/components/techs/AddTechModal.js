import { useState } from "react";
import { connect } from "react-redux";
import { addTech } from "../../actions/techActions";
import M from "materialize-css/dist/js/materialize.min.js";

const AddTechModal = ({addTech}) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const onSubmit = () => {
    if (firstName === "" || lastName === "") {
      M.toast({ html: "Please enter the first and last name" });
    } else {
      addTech({firstName, lastName})
      M.toast({html: `${firstName} ${lastName} was added as a technician`})
      //clear fields
      setFirstName("");
      setLastName("");
    }
  };

  return (
    <div id="add-tech-modal" className="modal">
      <div className="modal-content">
        <h4>New Technician</h4>

        <div className="row">
          <div className="input-field">
            <input
              type="text"
              style={{
                borderBottom: "1px solid #607d8b",
                boxShadow: "0 1px 0 0 #607d8b",
              }}
              name="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <label htmlFor="firstName" style={{ color: "#607d8b" }} className="active">
              First Name
            </label>
          </div>
        </div>

        <div className="row">
          <div className="input-field">
            <input
              type="text"
              style={{
                borderBottom: "1px solid #607d8b",
                boxShadow: "0 1px 0 0 #607d8b",
              }}
              name="lastName"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
            <label htmlFor="lastName" style={{ color: "#607d8b" }} className="active">
              Last Name
            </label>
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

export default connect(null, {addTech})(AddTechModal);
