import {
    ADD_TODO,
    COMPLETE_TODO,
    EDIT_TODO,
    DELETE_TODO,
    UPDATE_FILETR_DATA
} from '../constants/actionTypes';

import ToDoItem from '../models/ToDoItem'

const initialState = {
    //id,title,from,to,isToDo,isDeleted
    toDos: [
        new ToDoItem(1, 'firstItem', 'des', '9:00', '9:30', true, false),
        new ToDoItem(2, 'secondItem', 'desc', '9:00', '9:30', false, false),
        new ToDoItem(3, 'ThirdItem', 'descrip', '9:00', '9:30', true, false)
    ],
    searchFilter:''
};

export default function toDoReducer(state = initialState, action) {
    debugger;
    switch (action.type) {
        case ADD_TODO:
            action.toDo.id = state.toDos.length + 1;
            return {
                toDos: [...state.toDos,
                action.toDo
                ],
                searchFilter:state.searchFilter
            };
        case EDIT_TODO:
            return {
                toDos: state.toDos.map(item =>
                    item.id === action.toDo.id ?
                        { ...item, title: action.toDo.title, from: action.toDo.from, to: action.toDo.to } :
                        item
                ),
                searchFilter:state.searchFilter
            };
        case DELETE_TODO:
            return {
                toDos: state.toDos.map(item =>
                    item.id === action.toDoId ?
                        { ...item, isDeleted: true } :
                        item
                ),
                searchFilter:state.searchFilter
            }
        case COMPLETE_TODO:
            return {
                toDos: state.toDos.map(item =>
                    item.id === action.toDoId ?
                        { ...item, isToDo: false } :
                        item
                ),
                searchFilter:state.searchFilter
            }
        case UPDATE_FILETR_DATA:
            return{
                toDos:state.toDos,
                searchFilter:action.filterData
            }    
        default:
            return state;
    }
}


