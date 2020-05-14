import React from 'react';
import logo from './logo.svg';
import './App.css';
import CreateListItem from './CreateListItem';
import ListItem from './list-item';

function App() {
  return (
    <div className="App">
     <CreateListItem/>
     <ListItem/>
    </div>
  );
}

export default App;
