import React from 'react'
import {NavbarComponent} from '../../components/navbar/index'
import SideProfile from '../../components/side_profile_details/index'
import {RequestSaForEmailComponent} from '../../components/requestSaForEmailCard/index'
import {RequestHrForRegistrationComponent} from '../../components/requestHrForRegistrationCard/index'
import {FeedbackDeatilsCardComponent} from '../../components/feedbackDetailsCard/index'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
// import Container from 'react-bootstrap/Container'

export class Dashboard extends React.Component{
    constructor(props){
        super(props);
this.state={
    role:"HR",
}
    }
    
    render(){
        let reqview;
        if(this.state.role=="HR"){
        reqview=<React.Fragment>
                
               
                        {/* <Row>
                            <Col md={4}>
                                <RequestHrForRegistrationComponent/>
                                </Col> 
                                <Col md={4}>
                                <RequestSaForEmailComponent/>
                                </Col> 
                        </Row> */}
                   
            </React.Fragment>;
        
    }

    else{
        reqview=<React.Fragment>
       
                 <Row>
                    <Col md={4}>
                        <RequestHrForRegistrationComponent/>
                        </Col> 
                        <Col md={4}>
                        <RequestSaForEmailComponent/>
                        </Col> 
                </Row>
                
            
        
    </React.Fragment>;
    }

    return( 
    <React.Fragment>
    <NavbarComponent role={this.state.role} {...this.props}/>
                
        <Row>
            <Col md={4}>
                <SideProfile {...this.props}/>
            </Col>
            <Col md={8}>
                <Row>
                    <FeedbackDeatilsCardComponent  {...this.props}/>
                </Row>
                {reqview}
                </Col>
                </Row>
                </React.Fragment>)
}
}