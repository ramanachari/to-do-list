import React from 'react';
import { Modal, Button, Row, Col, Form } from 'react-bootstrap';



export class AddItem extends React.Component {
    render() {
        return (
            <Modal
                {...this.props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Add a task
        </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form >
                            <Form.Group controlId="formTitle">
                                <Form.Label>Enter Task Name</Form.Label>
                            <Form.Control type="text" value={this.props.currentItem} onChange={this.props.handleInput} />
                            </Form.Group>
                            <Form.Group controlId="formDescription">
                                <Form.Label>Description</Form.Label>
                                <Form.Control as="textarea" rows="3" value={this.props.description} onChange={this.props.descriptionHandler} placeholder="Enter description" />
                        </Form.Group>
                        <Form.Group controlId="formDate">
                            <Form.Label>Date</Form.Label>
                            <Form.Control type="date" value={this.props.date} onChange={this.props.dateHandler} placeholder="Enter description" />
                        </Form.Group>
                            <Form.Row>
                                <Form.Group as={Col} controlId="formGridFromTime">
                                    <Form.Label>From</Form.Label>
                                    <Form.Control type="time" value={this.props.from} onChange={this.props.fromTimeHandler} placeholder="From Time" />
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridToTime">
                                    <Form.Label>To</Form.Label>
                                    <Form.Control type="time" value={this.props.to} onChange={this.props.toTimeHandler} placeholder="To Time" />
                                </Form.Group>

                            </Form.Row>
                        </Form>
                    



                </Modal.Body>
                <Modal.Footer>
                    <form id="to-do-form" onSubmit={this.props.addItem} onClick={this.props.onHide}>
                        <button type="submit">Add</button>
                    </form>
                  
                </Modal.Footer>
            </Modal>
            
            )
    }
}
export default AddItem;


