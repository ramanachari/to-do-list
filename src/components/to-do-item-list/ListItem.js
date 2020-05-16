import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as toDoAction from '../../actions/toDoAction';

class ListItem extends Component {

    render() {
        console.log(this.props);
        return (
            <div className="container" >
                <div className="row">
                    {this.props.toDos.map((value, index) => {
                        return (<>
                            <div className="card bg-warning text-white item-list-card row">
                             <div className="card-body" id={index}>{value.title}
                                <span>
                                     <i className="fa fa-trash list-icon" aria-hidden="true" onClick={() => this.props.deleteToDo(index)} ></i>
                                </span>
                                <span><i className="fa fa-pencil-square-o list-icon" aria-hidden="true" ></i></span>
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
    return {
        toDos: state.toDos
    };
};

const mapDispatchToProps = (dispatch) => {
        return {
            deleteToDo: toDoId => dispatch(toDoAction.deleteToDo(toDoId))
        }
    }

//if you are performing operations then we have use this 
// const mapDispatchToProps = (dispatch) => {
//     return {
//         createToDo: toDoId => dispatch(toDoAction.deleteToDo(toDoId))
//     }
// }

export default connect(mapStateToProps,mapDispatchToProps)(ListItem);