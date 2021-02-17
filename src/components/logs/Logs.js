import { useEffect, useState } from "react";
import LogItem from './LogItem'
import Preloader from '../layout/Preloader'

const Logs = () => {
  const [logs, setLogs] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getLogs();
  }, [])

  const getLogs = async () => {
    setLoading(true);

    const res = await fetch("/logs");
    const data = await res.json();

    setLogs(data);
    setLoading(false);
  };

  if(loading) {
      return (
          <Preloader />
      )
  }

  return (
      <ul className="collection with-header grey darken-3">
          <li className="collection-header grey darken-3">
              <h4 className="center teal-text text-lighten-3">System Logs</h4>
          </li>
          {!loading && logs.length === 0 ? ( <p className="center">No Logs To Show</p>) : (
              logs.map(log => <LogItem key={log.id} log={log} />)
          )}
      </ul>
  )
};

export default Logs;
