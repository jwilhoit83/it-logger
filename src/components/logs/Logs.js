import { useEffect } from "react";
import { connect } from "react-redux";
import LogItem from "./LogItem";
import Preloader from "../layout/Preloader";
import { getLogs } from "../../actions/logActions";

const Logs = ({ log: { logs, loading }, getLogs }) => {
  useEffect(() => {
    getLogs();
  }, []);

  if (loading) {
    return <Preloader />;
  }

  return (
    <ul className="collection with-header grey darken-1">
      <li className="collection-header grey darken-3">
        <h3 className="blue-grey-text center">System Logs</h3>
      </li>
      {!loading && logs.length === 0 ? (
        <p className="center">No Logs To Show</p>
      ) : (
        logs.map((log) => <LogItem key={log.id} log={log} />)
      )}
    </ul>
  );
};

const mapStateToProps = (state) => ({
  log: state.log,
});

export default connect(mapStateToProps, { getLogs })(Logs);
