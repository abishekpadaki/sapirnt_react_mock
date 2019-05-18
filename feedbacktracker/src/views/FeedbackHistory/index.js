import React from 'react'
import {Tbl} from '../../components/table'
import {NavbarComponent} from '../../components/navbar/index'

export class FeedbackHistory extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <React.Fragment>
                <NavbarComponent/>
                <Tbl/>
            </React.Fragment>
        )
    }
}
