import './App.css';
import React from 'react';
import {BrowserRouter as Router,Route} from "react-router-dom";
import Navbar from "./components/navbar.component";
import NoteList from "./components/notes.component";
import Login from "./components/login.component"
// import Register from "./components/register.component"
// import Activate from "./components/activate.component"
import AddMatch from "./components/AddMatch.component"

function App() {
  return (
    <Router>
<Navbar/>
    <Route path="/" exact component={NoteList}/>
    <Route path="/login" exact component={Login}/>
    <Route path="/addmatch" exact component={AddMatch}/>
    {/* <Route path="/register" exact component={Register}/>
    <Route path="/activate/:token" exact component={Activate}/> */}
</Router>
  );
}
// app.use(express.static(path.join(__dirname, "backend/build"))); // Anything that doesn't match the above, send back index.html
// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname + "/backend/build/index.html"));
// });

export default App;
