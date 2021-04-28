import { BrowserRouter as Router } from "react-router-dom";

import Presentacion from './components/Presentacion/Presentacion'
import Titulo from './components/Titulo/Titulo'

import './App.css';

function App() {
  return (
    <div className="app">
      <Router>        
        <Titulo />
        <Presentacion />
      </Router>
    </div>
  );
}

export default App;
