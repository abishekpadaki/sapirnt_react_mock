import React from 'react';
import { Button,Modal } from 'react-bootstrap';

export class Mdl extends React.Component {
constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.state = {
    show: false,
    };
}

handleClose() {
    this.setState({ show: false });
}

handleShow() {
    this.setState({ show: true });
}

render() {
    let modalbody = this.props.values.body.map((val,i) => {
        return <p> {val}  </p>
    });
    let modalFooter;
    if (this.props.values.footer){
        modalFooter = <React.Fragment>
            <Button variant="success" onClick={this.handleClose}>
                Accept
            </Button>
            <Button variant="danger" onClick={this.handleClose}>
                Reject   
            </Button>
        </React.Fragment>
    }else{
        modalFooter = <React.Fragment> 
            <Button variant="primary" onClick={this.handleClose}>
                Close
            </Button>
        </React.Fragment>
    }
    return (
    <>
        <Button variant="primary" onClick={this.handleShow}>
            {this.props.values.name}
        </Button>

        <Modal show={this.state.show} onHide={this.handleClose}>
        <Modal.Header closeButton>
            <Modal.Title>{this.props.values.heading}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{modalbody}</Modal.Body>
        <Modal.Footer>{modalFooter}</Modal.Footer>
        </Modal>
    </>
    );
}
}
  