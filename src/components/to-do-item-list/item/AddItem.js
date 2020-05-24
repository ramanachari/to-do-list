import React from 'react';
import { Modal, Button, Row, Col, Form } from 'react-bootstrap';



export class AddItem extends React.Component {
    constructor(props) {
        super(props);
    }

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

                    <form id="to-do-form" onSubmit={this.props.addItem}>
                        <input type="text" placeholder="Enter task" value={this.props.currentItem} onChange={this.props.handleInput} />
                        <button type="submit">Add</button>
                    </form>



                </Modal.Body>
                <Modal.Footer>
                    <Button variant="danger" onClick={this.props.onHide}>Close</Button>
                </Modal.Footer>
            </Modal>
            
            )
    }
}
export default AddItem;


