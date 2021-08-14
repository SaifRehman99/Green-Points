import React from "react";
import Header from "./Screens/Header";
import Sidebar from "./Screens/Sidebar";
import GreenPoint from "./Components/GreenPoint";
import AddGreenPoint from "./Components/AddGreenPoint";


function App() {
  return (
    <div>
      <Header/>

      <div className="d-flex">
      <div className="sidebar"><Sidebar/></div>
      {/* <div className="container"><GreenPoint/></div> */}
      <div className="container"><AddGreenPoint/></div>

      </div>
    </div>
  );
}

export default App;