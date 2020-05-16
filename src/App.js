import React from 'react';
import './App.css';
import Create from './components/to-do-item-list/item/Create';
import ListItem from './components/to-do-item-list/ListItem';
import { connect } from 'react-redux';
import { Component } from 'react';
import * as toDoAction from './actions/toDoAction';
import ToDoItem from './models/ToDoItem';

class App extends Component {

  constructor(props) {
    super(props);
    console.log(this.props.toDos);
  //   this.state=[
  //     new ToDoItem(1, 'firstItem','des', '9:00', '9:30', true, false),
  //     new ToDoItem(2, 'secondItem','desc' ,'9:00', '9:30', false, false)
  // ];
  }

  render() {
    console.log(this.props.toDos);
    return (

    

      <div className="App">
        <Create />
        <ListItem />
      </div>
    );
  }
}

const mapStateToProps=(state,ownProps)=>{
  return{
      toDos:state
  }
};

const mapDispatchToProps=(dispatch)=>{
  return{
      createToDo: toDoId=>dispatch(toDoAction.deleteToDo(toDoId))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);

//export default App;
