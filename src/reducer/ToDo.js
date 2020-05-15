import {
    ADD_TODO,
    COMPLETE_TODO,
    EDIT_TODO,
    DELETE_TODO
} from '../constants/actionTypes';

import { ToDoItem } from '../models/ToDoItem'

const initialState = [
    //id,title,from,to,isToDo,isDeleted
    new ToDoItem(1, 'firstItem','des', '9:00', '9:30', true, false),
    new ToDoItem(2, 'secondItem','desc' ,'9:00', '9:30', false, false),
    new ToDoItem(3, 'ThirdItem','descrip' ,'9:00', '9:30', true, false)
];

function toDos(state = initialState, action) {
    switch (action.type) {
        case ADD_TODO:
            action.item.id = state.length+1;
            return [
                ...state,
                action.item
            ];
        case EDIT_TODO:
            return state.map(item =>
                item.id == action.item.id ?
                    { ...item, title: item.title, from: item.from, to: item.to } :
                    item
                );
        case DELETE_TODO:
            return state.map(item =>
                item.id == action.item.id ? 
                { ...item,isDeleted:false }:
                item
                );
        case COMPLETE_TODO:
            return state.map(item =>
                item.id == action.item.id ? 
                { ...item,isToDo:false }:
                item
                );    
    }
}

export default toDos;

