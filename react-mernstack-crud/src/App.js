// import logo from './logo.svg';

import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
//import { Navbar,Container,Row,Col,Nav } from 'react-bootstrap'; // Bootstrap
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'; // route
import CreateStudent from './Components/Pages/create-student.component';
import EditStudent from './Components/Pages/edit-student.component';
import StudentList from './Components/Pages/student-list.component';
import NavBar from './Components/Layouts/NavBar';
import Home from './Components/Pages/Home-student.component';
import NotFound from './Components/Pages/NotFound';

function App() {
  return (
    <div className="App">
        <div className="content">
          <Router>
            <div className="App">
              <NavBar/>
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/CreateStudent" component={CreateStudent} />
                <Route exact path="/StudentList" component={StudentList} />
                <Route exact path="/EditStudent/:id" component={EditStudent}/>
                <Route component={NotFound}/>
              </Switch>
            </div>
          </Router>
          </div>
    </div>
  
  );
}

export default App;
