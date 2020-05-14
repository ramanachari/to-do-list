import React from 'react';

class CreateListItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            currentItem: {
                text: '',
                key: ''
            }
        }
    }
    handleInput = (e) => {
        this.setState({ currentItem: {text: e.target.value, key: Date.now()} })
    }
    addItem = (e) => {
        e.preventDefault();
        const newItem = this.state.currentItem;
        if (newItem.text !== '') {
            const newItems = [...this.state.items, newItem];
            this.setState({
                items: newItems,
                currentItem: {
                    text: '',
                    key: ''
                }
            })
        }
        
    }
    render() {
        return (
            <header>
                <form id="to-do-form" onSubmit={this.addItem}>
                    <input type="text" placeholder="Enter task" value={this.state.currentItem.text} onChange={this.handleInput} />
                    <button type="submit">Add</button>
                </form>
            </header>
            
            
            
            )
    }






}



export default CreateListItem;