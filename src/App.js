import { useEffect } from "react";
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js";
import "./App.css";
import SearchBar from "./components/layout/SearchBar";
import Logs from "./components/logs/Logs";
import AddBtn from './components/layout/AddBtn'
import AddLogModal from './components/logs/AddLogModal'

const App = () => {
  useEffect(() => {
    // initializes Materialize JS
    M.AutoInit();
  }, []);

  return (
    <>
      <SearchBar />
      <div className="container">
        <AddBtn />
        <AddLogModal />
        <Logs />
      </div>
    </>
  );
};

export default App;
