import React, { Component } from 'react';
//import axios from 'axios';
import { Button, Modal } from 'react-bootstrap'
import { logoutUser } from '../actions/authActions'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

class TestTwo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showModal: false
        };

    }
    componentDidMount() {
        logoutUser();
    }

    getInitialState() {
        return { showModal: false };
    }

    close = () => {
        this.setState({ showModal: false });
    }

    open = () => {
        this.setState({ showModal: true });
    }

    render() {
        return (
            <div>
                <Button onClick={this.open}>
                    Launch modal
                </Button>
                <Modal show={this.state.showModal} onHide={this.close}>
                    <Modal.Header onClick={this.close}>
                        <Modal.Title>Modal heading</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.close}>
                            Close
                </Button>
                        <Button variant="primary" onClick={this.close}>
                            Save Changes
                </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }
}
export default TestTwo;


