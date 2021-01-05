import React from "react";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import TicketList from "./components/TicketList/TicketList";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

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
