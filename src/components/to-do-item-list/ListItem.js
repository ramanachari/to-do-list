import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as toDoAction from '../../actions/toDoAction';
import EditToDoModal from './item/EditToDoModal';

class ListItem extends Component {

    constructor(props) {
        super(props);
        this.state = {
            editToDoItemId: 0,
            showEditModal: false
        }
        this.updateEditItemId = this.updateEditItemId.bind(this);
        this.closeEditModel=this.closeEditModel.bind(this);
    }

    updateEditItemId(toDoId) {
        console.log('Edit click ' + toDoId);
        this.setState({
            editToDoItemId: toDoId,
            showEditModal: true
        });
    }

    closeEditModel(){
        this.setState({
            showEditModal: false
        });
    };

    render() {
        console.log(this.props);
        const toDoItemId = this.state.editToDoItemId;
        const toDoItem = this.props.toDos.find(item => item.id === toDoItemId);
        return (
            <div className="container" >
                <div className="row">
                    {this.props.toDos.filter(item => !item.isDeleted).map((value, index) => {
                        return (<>
                            <div className="card bg-warning text-white item-list-card row">

                                <div className="card-body" id={index}>
                                    <input type="checkBox" className="to-do-checkBox" checked={value.isToDo} onClick={() => this.props.completeToDo(value.id)}></input>
                                    <span className={value.isToDo ? "line-through" : ""}>{value.title}</span>
                                    <span>
                                        <i className="fa fa-trash list-icon" aria-hidden="true" onClick={() => this.props.deleteToDo(value.id)} ></i>
                                    </span>
                                    <span><i className="fa fa-pencil-square-o list-icon" onClick={() => this.updateEditItemId(value.id)} aria-hidden="true" ></i></span>
                                </div>


                                <div>
                                    <EditToDoModal
                                        show={this.state.showEditModal}
                                        toDo={toDoItem}
                                        close={this.closeEditModel} />
                                </div>

                            </div>
                        </>)
                    })}

                </div>
            </div>
        );


    }
}

const mapStateToProps = state => {
    debugger;
    return {
        toDos: state.searchFilter != '' ? state.toDos.filter(
            function (todo) {
                return todo.title.includes(state.searchFilter)
            }
        ) : state.toDos
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        deleteToDo: toDoId => dispatch(toDoAction.deleteToDo(toDoId)),
        completeToDo: toDoId => dispatch(toDoAction.completeToDo(toDoId))
    }
}


//if you are performing operations then we have use this 
// const mapDispatchToProps = (dispatch) => {
//     return {
//         createToDo: toDoId => dispatch(toDoAction.deleteToDo(toDoId))
//     }
// }

export default connect(mapStateToProps, mapDispatchToProps)(ListItem);