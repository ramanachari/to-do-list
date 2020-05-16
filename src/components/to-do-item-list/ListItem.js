import React, { Component } from 'react';
import { connect } from 'react-redux';


class ListItem extends Component {

    render() {
        console.log(this.props.toDos);
        return (
            <div className="container" >
                <div className="row">
                    {/* {this.props.rowData?.items[0]?.text} */}

                    {this.props.rowData?.items?.map((value, index) => {
                        return (<>
                            <div className="card bg-warning text-white item-list-card row">
                                <div className="card-body" key={index}>{value.text}
                                    <span> <i class="fa fa-trash trash-icon" aria-hidden="true"></i></span></div>
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

//if you are performing operations then we have use this 
// const mapDispatchToProps = (dispatch) => {
//     return {
//         createToDo: toDoId => dispatch(toDoAction.deleteToDo(toDoId))
//     }
// }

export default connect(mapStateToProps)(ListItem);