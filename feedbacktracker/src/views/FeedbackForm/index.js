import React from 'react'
import {NavbarComponent} from '../../components/navbar/index'
import Form from 'react-bootstrap/Form'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'

export class FeedbackForm extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(<React.Fragment>
            <NavbarComponent/>
            <Container>
        
        <Form.Group><h1>Feedback Form</h1></Form.Group>
        <Form action="" method="post">
            <Form.Group>
                <Form.Label for="oracleId">Oracle ID:</Form.Label>
                <Form.Control type="text" class="form-control" id="oracleId" placeholder="Oracle id of feedback recepient"
                    readonly/>
            </Form.Group>
            <Form.Group>
                <Form.Label for="name">Name:</Form.Label>
                <Form.Control type="text" class="form-control" id="name" placeholder="Name of feedback recepient" readonly/>
            </Form.Group>
            <Form.Group>
                <Form.Label for="coreValues">Rating for core values (Max - 5, Min - 1):</Form.Label>
                <Form.Group class="input-group mb-3">
                    <Form.Group class="input-group-prepend">
                        <Form.Label class="input-group-text" for="clientFocusedDelivery">Client Focused Delivery</Form.Label>
                    </Form.Group>
                    <select class="custom-select" id="clientFocusedDelivery">
                         <option value="" selected>--Choose Rating--</option>
                        <option value="5" selected>5</option>
                        <option value="4">4</option>
                        <option value="3">3</option>
                        <option value="2">2</option>
                        <option value="1">1</option>
                    </select>
                </Form.Group>
                <Form.Group class="input-group mb-3">
                    <Form.Group class="input-group-prepend">
                        <Form.Label class="input-group-text" for="creativity">Creativity</Form.Label>
                    </Form.Group>
                    <select class="custom-select" id="creativity">
                         <option value="" selected>--Choose Rating--</option> 
                        <option value="5" selected>5</option>
                        <option value="4">4</option>
                        <option value="3">3</option>
                        <option value="2">2</option>
                        <option value="1">1</option>
                    </select>
                </Form.Group>
                <Form.Group class="input-group mb-3">
                    <Form.Group class="input-group-prepend">
                        <Form.Label class="input-group-text" for="leadership">Leadership</Form.Label>
                    </Form.Group>
                    <select class="custom-select" id="leadership">
                        <option value="" selected>--Choose Rating--</option> 
                        <option value="5" selected>5</option>
                        <option value="4">4</option>
                        <option value="3">3</option>
                        <option value="2">2</option>
                        <option value="1">1</option>
                    </select>
                </Form.Group>
                <Form.Group class="input-group mb-3">
                    <Form.Group class="input-group-prepend">
                        <Form.Label class="input-group-text" for="openess">Openess</Form.Label>
                    </Form.Group>
                    <select class="custom-select" id="openess">
                        <option value="" selected>--Choose Rating--</option>
                        <option value="5" selected>5</option>
                        <option value="4">4</option>
                        <option value="3">3</option>
                        <option value="2">2</option>
                        <option value="1">1</option>
                    </select>
                </Form.Group>
                <Form.Group class="input-group mb-3">
                    <Form.Group class="input-group-prepend">
                        <Form.Label class="input-group-text" for="peopleGrowth">People Growth</Form.Label>
                    </Form.Group>
                    <select class="custom-select" id="peopleGrowth">
                        <option value="" selected>--Choose Rating--</option>
                        <option value="5" selected>5</option>
                        <option value="4">4</option>
                        <option value="3">3</option>
                        <option value="2">2</option>
                        <option value="1">1</option>
                    </select>
                </Form.Group>
                <Form.Group class="input-group mb-3">
                    <Form.Group class="input-group-prepend">
                        <Form.Label class="input-group-text" for="relationships">Relationships</Form.Label>
                    </Form.Group>
                    <select class="custom-select" id="relationships">
                        <option value="" selected>--Choose Rating--</option>
                        <option value="5" selected>5</option>
                        <option value="4">4</option>
                        <option value="3">3</option>
                        <option value="2">2</option>
                        <option value="1">1</option>
                    </select>
                </Form.Group>
            </Form.Group>
            <Form.Group>
                <Form.Label for="technicalSkills">Mention technical skills seperated by commas:</Form.Label>
                <textarea class="form-control" id="technicalSkills" rows="2"></textarea>
            </Form.Group>

            <Form.Group>
                <Form.Label for="softSkills">Mention soft skills seperated by commas:</Form.Label>
                <textarea class="form-control" id="softSkills" rows="2"></textarea>
            </Form.Group>

            <Form.Group>
                <Form.Label for="growthAreas">Growth Areas:</Form.Label>
                <textarea class="form-control" id="growthAreas" rows="2"></textarea>
            </Form.Group>

            <Form.Group>
                <Form.Label for="feedback">Suggestions/Feedback:</Form.Label>
                <textarea class="form-control" id="feedback" rows="3"></textarea>
            </Form.Group>
            <Form.Group>
                <Form.Label for="overallRating">Overall Rating (Max - 5, Min - 1):</Form.Label>
                <select id="overallRating" class="form-control">
                    <option value="" selected>--Choose Rating--</option>
                    <option value="5" selected>5</option>
                    <option value="4">4</option>
                    <option value="3">3</option>
                    <option value="2">2</option>
                    <option value="1">1</option>
                </select>
            </Form.Group>
            <Button type="submit" class="btn btn-primary">Submit</Button>
        </Form>
    </Container>
        </React.Fragment>)
    }
}