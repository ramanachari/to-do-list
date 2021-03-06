import {
    ADD_TODO,
    COMPLETE_TODO,
    EDIT_TODO,
    DELETE_TODO,
    UPDATE_FILETR_DATA
} from '../constants/actionTypes';

import ToDoItem from '../models/ToDoItem'

const initialState = {
    //id,title,desc,date,from,to,isToDo,isDeleted
    toDos: [
        new ToDoItem(1, 'firstItem', 'des', '2020-05-25', '09:00', '09:30', true, false),
        new ToDoItem(2, 'secondItem', 'desc', '2020-05-25', '16:03', '09:30', false, false),
        new ToDoItem(3, 'ThirdItem', 'descrip', '2020-05-25', '09:00', '09:30', true, false)
    ],
    searchFilter: ''
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
                searchFilter: state.searchFilter
            };
        case EDIT_TODO:
            return {
                toDos: state.toDos.map(item =>
                    item.id === action.toDo.id ?
                        { ...item, title: action.toDo.title, date: action.toDo.date, description: action.toDo.description, from: action.toDo.from, to: action.toDo.to } :
                        item
                ),
                searchFilter: state.searchFilter
            };
        case DELETE_TODO:
            return {
                toDos: state.toDos.map(item =>
                    item.id === action.toDoId ?
                        { ...item, isDeleted: true } :
                        item
                ),
                searchFilter: state.searchFilter
            }
        case COMPLETE_TODO:
            return {
                toDos: state.toDos.map(item =>
                    item.id === action.toDoId ?
                        { ...item, isToDo: !item.isToDo } :
                        item
                ),
                searchFilter: state.searchFilter
            }
        case UPDATE_FILETR_DATA:
            return {
                toDos: state.toDos,
                searchFilter: action.filterData
            }
        default:
            return state;
    }
}


