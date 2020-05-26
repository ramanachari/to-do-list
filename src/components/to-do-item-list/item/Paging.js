//import React, { Component } from 'react';
//import PaginationList from 'react-pagination-list';
//import { connect } from 'react-redux';
//import ListItem from '../ListItem';
//import * as toDoAction from '../../../actions/toDoAction';
//import EditToDoModal from '../item/EditToDoModal';

//class Paging extends Component {
//    constructor(props) {
//        super(props);
//        this.state = {
//            editToDoItemId: 0,
//            showEditModal: false
//        }
//        this.updateEditItemId = this.updateEditItemId.bind(this);
//        this.closeEditModel = this.closeEditModel.bind(this);
//    }

//    updateEditItemId(toDoId) {
//        console.log('Edit click ' + toDoId);
//        this.setState({
//            editToDoItemId: toDoId,
//            showEditModal: true
//        });
//    }

//    closeEditModel() {
//        this.setState({
//            showEditModal: false
//        });
//    };
//    render() {
//        const toDoItemId = this.state.editToDoItemId;
//        const toDoItem = this.props.toDos.find(item => item.id === toDoItemId);
//        return (

//           )
//                }
//                }
                
//            />
            
//                )
//    }
//    debugger;
//}

//const mapStateToProps = state => {
//return {
//    toDos: state.searchFilter != '' ? state.toDos.filter(
//        function (todo) {
//            return todo.title.includes(state.searchFilter)
//        }
//    ) : state.toDos
//}
//};
//const mapDispatchToProps = (dispatch) => {
//    return {
//        deleteToDo: toDoId => dispatch(toDoAction.deleteToDo(toDoId)),
//        completeToDo: toDoId => dispatch(toDoAction.completeToDo(toDoId))
//    }
//}


//export default connect(mapStateToProps, mapDispatchToProps)(Paging);
