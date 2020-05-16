import { createStore } from 'redux';
import toDoReducer from '../reducer/toDoReducer';

export default () => createStore(toDoReducer);
