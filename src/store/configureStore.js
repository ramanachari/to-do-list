import {createStore} from 'redux';
import toDoReducer from '../reducer/toDoReducer';

const configureStore=()=>createStore(toDoReducer);

export default configureStore;
