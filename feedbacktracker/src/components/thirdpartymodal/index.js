import React from 'react';
import { Button,Modal,Row } from 'react-bootstrap';
import Form from 'react-bootstrap/Form'

export class TPMdl extends React.Component {
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

handleClick(){
    alert("Feedback Request sent to "+ this.refs.txtid.value);
    this.setState({ show: false });

}

render() {
    let modalbody;
        modalbody= <Row className="justify-content-md-center">
        <Form onSubmit={()=>{this.handleClick()}}>
          
            <Form.Group controlId="formBasicCandidateId">
            {/* <Form.Label>Email address</Form.Label> */}
            <Form.Control
              type="text"
              placeholder="Third Party Oracle ID or Name" ref="txtid"
            />
          </Form.Group>
          <Button variant="primary" type="submit"
            >
            Submit
          </Button>
        </Form>
        </Row>;
    
   
    
    return (
    <>
        <Button variant="primary" onClick={this.handleShow}>
        Request Feedback From Someone Else
        </Button>

        <Modal show={this.state.show} onHide={this.handleClose}>
       
        <Modal.Body>{modalbody}</Modal.Body>
        
        </Modal>
    </>
    );
}
}
  