import {createStore} from 'redux';
import toDoReducer from '../reducer/toDoReducer';
import ToDoItem from '../models/ToDoItem';

const initialState = [
    //id,title,from,to,isToDo,isDeleted
    new ToDoItem(1, 'firstItem','des', '9:00', '9:30', true, false),
    new ToDoItem(2, 'secondItem','desc' ,'9:00', '9:30', false, false),
    new ToDoItem(3, 'ThirdItem','descrip' ,'9:00', '9:30', true, false)
];
const configureStore=()=>createStore(toDoReducer,initialState);

export default configureStore;
