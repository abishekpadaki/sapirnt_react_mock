import React from "react";
import { Form,Button } from "react-bootstrap";

import { InputSelect } from "../common/InputSelect";
import { Label } from "../common/Label";
import { TextArea } from "../common/TextArea";

export class FeedBackPage extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            labelValues:[
                {
                    title:"Oracle ID",
                    id : "oracleId",
                    value:props.values.OracleId
                },
                {
                    title:"Name",
                    id : "name",
                    value:props.values.Name
                }
            ],
            coreValues:[
                {
                    id:"clientFocusDelivery",
                    name:"Client Focused Delivery",                    
                },
                {
                    id:"creativity",
                    name:"Creativity",                    
                },
                {
                    id:"openess",
                    name:"Openess",                    
                },
                {
                    id:"leaderShip",
                    name:"LeaderShip",                    
                },
                {
                    id:"peopleGrowth",
                    name:"People Growth",                    
                },
                {
                    id:"relationShip",
                    name:"RelationShip"                    
                }
            ],
            textFeedBack:[
                {
                    name:"Mention technical skills seperated by commas:",
                    id:"techSkills"
                },
                {
                    name:"Mention soft skills seperated by commas:",
                    id:"softSkills"
                },
                {
                    name:"Growth Areas:",
                    id:"growthAreas"
                },
                {
                    name:"Suggestions/Feedback:",
                    id:"suggestions"
                }
            ]
        }
    }

    render() {
        let labelDisplay = this.state.labelValues.map(
            (val,i) => {
                return <Label values={val} key={i}/>
            }
        )
        let coreValuesDisplay = this.state.coreValues.map(
            (val,i) => {
                return <InputSelect values={val} key={i}/>
            }
        );
        let textFeedBackDisplay = this.state.textFeedBack.map(
            (val,i) =>{
                return <TextArea values={val} key={i}/>
            }
        );
        return <Form style={{ width: "100%" }}>
            {labelDisplay}
            <Form.Label>Rating for core values (Max:5, Min:1)</Form.Label>
            {coreValuesDisplay}
            {textFeedBackDisplay}
            <InputSelect values={{id:"overAllRating",name:"Over All Rating"}}/>
            <Button variant="success" onClick={this.handleClose}>
                Submit
            </Button>
        </Form>
    }
}