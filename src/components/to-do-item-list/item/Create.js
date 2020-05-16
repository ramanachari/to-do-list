import React from 'react';
import * as actions from '../../../actions/toDoAction';
import { connect } from 'react-redux';
import ToDoItem from '../../../models/ToDoItem';


class Create extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            currentItem: ''
        }
    }

    handleInput = (e) => {
        this.setState({ currentItem: e.target.value })
    }
    addItem = (e) => {
        e.preventDefault();
        const newItem = this.state.currentItem;
        if (newItem.text !== '') {
            const todoItem = new ToDoItem(3, newItem, 'descrip', '9:00', '9:30', true, false)
            this.props.createToDo(todoItem);  
        }
    }
    render() {
        console.log(this.props.toDos);
        return (
            <header>
                <form id="to-do-form" onSubmit={this.addItem}>
                    <input type="text" placeholder="Enter task" value={this.state.currentItem.text} onChange={this.handleInput} />
                    <button type="submit">Add</button>
                </form>
                {/* <ListItem rowData={this.state}/> */}
            </header>
        )
    }
}

const mapStateToProps = state => {
    return {
        toDos: state.toDos
    };
};

//if you are performing operations then we have use this 
const mapDispatchToProps = (dispatch) => {
    return {
        createToDo: todo => dispatch(actions.createToDo(todo))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Create);
//export default Create;