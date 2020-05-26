import React from 'react';
import './App.css';
import Create from './components/to-do-item-list/item/Create';
import ListItem from './components/to-do-item-list/ListItem';
import { Component } from 'react';
import Header from './components/header/Header';
import Login from './components/login/login'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Paging from './components/to-do-item-list/item/Paging';
import 'bootstrap-less/bootstrap/bootstrap.less';
class App extends Component {

  render() {
    return (

      <Router>
        {/* <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/login">About</Link>
            </li>
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
          </ul>

          <hr /> */}

          {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
          <Switch>
            <Route exact path="/">
              <div className="App">
                <Header />
                <div className="container app-container">
                  <Create />
                  <ListItem />
                </div>
              </div>
            </Route>
            <Route path="/login">

              <Login />
            </Route>
            <Route path="/dashboard">
              <div className="App">
                <Header />
                <div className="container app-container">
                  <Create />
                   <ListItem />
                
                        </div>
                        
              </div>
            </Route>
          </Switch>
       
      </Router>
        
    );
  }
}

export default App;
