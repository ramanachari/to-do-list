import React from 'react';
import './App.css';
import {Create}  from './components/to-do-item-list/item/Create';
import {ListItem} from './components/to-do-item-list/ListItem';

function App() {
  return (
    <div className="App">
     <Create/>
     <ListItem/>
    </div>
  );
}

export default App;
