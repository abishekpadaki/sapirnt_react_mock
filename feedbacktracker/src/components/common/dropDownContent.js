import React from 'react';
import {Link} from 'react-router-dom'
import Container from 'react-bootstrap/Container'

export default class DropDownContent extends React.Component{
    render(){
        // console.log(this.props.allrequests)
        console.log(this.props.res)
        return <React.Fragment>
            <Container>
                {/* {this.props.res[0]?<span>
                    {this.props.res[0].notifications[0].requester.name} 
                    {this.props.content}
                    {this.props.res[0].notifications[0].requestfor.name}
                </span>:''} */}
<Link to="/feedback_form">
                <span>
                   
                    {this.props.requester.name} 
                    {this.props.content}
                    {this.props.requestfor.name}
                </span>
                </Link>
                </Container>
            </React.Fragment>
    }    
}