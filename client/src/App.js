import React from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from "./Screens/Header";
import Sidebar from "./Screens/Sidebar";
import GreenPoint from "./Components/GreenPoint";
import AddGreenPoint from "./Components/AddGreenPoint";


function App() {
  return (
    <div>
      <Router>
      <Header/>

      <div className="d-flex">
      <div className="sidebar"><Sidebar/></div>

      <Route exact path="/" component={GreenPoint} />
      <Route exact path="/add-point" component={AddGreenPoint} />
      
      </div>
      </Router>
    </div>
  );
}

export default App;