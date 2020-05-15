import * as actionTypes from '../constants/actionTypes';

export const createToDo= (toDo)=>{
    return{
        type: actionTypes.ADD_TODO,
        toDo:toDo
    }
}

export const deleteToDo= (toDoId)=>{
    return{
        type: actionTypes.DELETE_TODO,
        toDoId:toDoId
    }
}

export const editToDo= (toDo)=>{
    return{
        type: actionTypes.EDIT_TODO,
        toDo:toDo
    }
}

export const completeToDo= (toDoId)=>{
    return{
        type: actionTypes.COMPLETE_TODO,
        toDoId:toDoId
    }
}
