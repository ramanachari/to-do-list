import {
    ADD_TODO,
    COMPLETE_TODO,
    EDIT_TODO,
    DELETE_TODO
} from '../constants/actionTypes';

import ToDoItem from '../models/ToDoItem'

const initialState = [
    //id,title,from,to,isToDo,isDeleted
    new ToDoItem(1, 'firstItem','des', '9:00', '9:30', true, false),
    new ToDoItem(2, 'secondItem','desc' ,'9:00', '9:30', false, false),
    new ToDoItem(3, 'ThirdItem','descrip' ,'9:00', '9:30', true, false)
];

function toDoReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_TODO:
            action.toDo.id = state.length+1;
            return [
                ...state,
                action.toDo
            ];
        case EDIT_TODO:
            return state.map(item =>
                item.id === action.toDo.id ?
                    { ...item, title: action.toDo.title, from: action.toDo.from, to: action.toDo.to } :
                    item
                );
        case DELETE_TODO:
            return state.map(item =>
                item.id === action.toDoId ? 
                { ...item,isDeleted:false }:
                item
                );
        case COMPLETE_TODO:
            return state.map(item =>
                item.id === action.toDoId ? 
                { ...item,isToDo:false }:
                item
                );   
        default:
            return; 
    }
}

export default toDoReducer;

