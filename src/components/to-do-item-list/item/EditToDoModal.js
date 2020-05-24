import React, { Component } from 'react';
import Modal from 'react-bootstrap/Modal';
import {Form,Col} from 'react-bootstrap';
import ToDoItem from '../../../models/ToDoItem';
import Button from 'react-bootstrap/Button';
import { connect } from 'react-redux';
import * as toDoAction from '../../../actions/toDoAction';

class EditToDoModal extends Component {
    constructor(props) {
        super(props);

        this.state = {
            title: '',
            description: '',
            from: '',
            to: '',
            item:new ToDoItem()
        }

        this.titleHandler=this.titleHandler.bind(this);
        this.UpdateToDoDetails=this.UpdateToDoDetails.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            title:nextProps.toDo.title,
            description:nextProps.toDo.description,
            toTime:nextProps.toDo.to,
            fromTime:nextProps.toDo.from,
            item:nextProps.toDo
        });
        console.log('editModal');
        console.log(nextProps.toDo);
    }

    titleHandler=(e)=> {
        this.setState({ title: e.target.value });
    }

    descriptionHandler=(e)=> {
        this.setState({ description: e.target.value });
    }

    fromTimeHandler=(e)=>{
        this.setState({ fromTime: e.target.value });
    }

    toTimeHandler=(e)=>{
        this.setState({ toTime: e.target.value });
    }

    UpdateToDoDetails(){
        let updatedItem=this.state.item;
        updatedItem.title=this.state.title;
        updatedItem.description=this.state.description;
        updatedItem.from=this.state.fromTime;
        updatedItem.to=this.state.toTime;

        console.log(updatedItem);

        this.props.updateToDo(updatedItem);
        this.props.close();


    }

    render() {
        return (
            <Modal
            {...this.props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered >
                    
                <Modal.Header >
                    <Modal.Title id="contained-modal-title-vcenter">
                        Update To Do details Id:{this.state.item.id}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group controlId="formTitle">
                            <Form.Label>Title</Form.Label>
                            <Form.Control type="text" value={this.state.title} onChange={this.titleHandler} placeholder="Enter title" />
                        </Form.Group>
                        <Form.Group controlId="formDescription">
                            <Form.Label>Description</Form.Label>
                            <Form.Control as="textarea" rows="3" value={this.state.description} onChange={this.descriptionHandler} placeholder="Enter description" />
                        </Form.Group>
                        <Form.Row>
                            <Form.Group as={Col} controlId="formGridFromTime">
                                <Form.Label>From</Form.Label>
                                <Form.Control type="time" value={this.state.fromTime} onChange={this.fromTimeHandler} placeholder="From Time" />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridToTime">
                                <Form.Label>To</Form.Label>
                                <Form.Control type="time" value={this.state.toTime} onChange={this.toTimeHandler} placeholder="To Time" />
                            </Form.Group>
                            
                        </Form.Row>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={this.props.close}>Close</Button>
                    <Button variant="primary" onClick={this.UpdateToDoDetails}>Save changes</Button>
                </Modal.Footer>
            </Modal>
        );
    }
}


const mapDispatchToProps=(dispatch)=>{
    return{
        updateToDo:(toDo)=>dispatch(toDoAction.editToDo(toDo))
    }
    
}

export default connect(null,mapDispatchToProps)(EditToDoModal);