import React from "react";

import './App.css';
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import TicketList from "./components/TicketList/TicketList";

function App() {

  return (
    <div className="App">
      <Header></Header>
      <Sidebar>
        
      </Sidebar>
      <TicketList></TicketList>
    </div>
  );
}

export default App;
