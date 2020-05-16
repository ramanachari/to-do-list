import React from 'react';
import './App.css';
import Create from './components/to-do-item-list/item/Create';
import ListItem from './components/to-do-item-list/ListItem';
import { Component } from 'react';

class App extends Component {

  render() {
    return (

      <div className="App">
        <Create />
        <ListItem />
      </div>
    );
  }
}

export default App;
