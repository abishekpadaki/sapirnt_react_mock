import React from 'react';
import { Button,Modal } from 'react-bootstrap';

export class GAMdl extends React.Component {
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
    let modalbody;
        modalbody= <p> {this.props.value}  </p>;
    
    let modalFooter;
        modalFooter = <React.Fragment> 
            <Button variant="dark" onClick={this.handleClose}>
                Close
            </Button>
        </React.Fragment>;
    
    return (
    <>
        <Button variant="dark" onClick={this.handleShow}>
        Growth Areas
        </Button>

        <Modal show={this.state.show} onHide={this.handleClose}>
       
        <Modal.Body>{modalbody}</Modal.Body>
        <Modal.Footer>{modalFooter}</Modal.Footer>
        </Modal>
    </>
    );
}
}
  