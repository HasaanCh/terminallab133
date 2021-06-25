import './App.css';
import React from 'react';
import {BrowserRouter as Router,Route} from "react-router-dom";
import Navbar from "./components/navbar.component";
import NoteList from "./components/notes.component";
import Login from "./components/login.component"
import AddMatch from "./components/AddMatch.component"

function App() {
  return (
    <Router>
<Navbar/>
    <Route path="/" exact component={NoteList}/>
    <Route path="/login" exact component={Login}/>
    <Route path="/addmatch" exact component={AddMatch}/>
</Router>
  );
}

export default App;
