import {useEffect} from 'react'
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js'
import "./App.css";

const App = () => {
  useEffect(() => {
    // initializes Materialize JS
    M.AutoInit();
  })

  return <div className="App">IT Logger</div>;
};

export default App;
