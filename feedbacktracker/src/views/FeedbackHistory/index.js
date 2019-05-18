import React from 'react'
import {Tbl} from '../../components/table'
import {NavbarComponent} from '../../components/navbar/index'

export class FeedbackHistory extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            header:["Id", "FeedBack", "Rating"],
            values:[
                {
                    Id:"123456",
                    FeedBack:"Amazing work keep going.",
                    OverAllRating:"4"
                }
            ]
        }
    }

    render(){
        return(
            <React.Fragment>
                <NavbarComponent/>
                <Tbl header={this.state.header} values={this.state.values} />
            </React.Fragment>
        )
    }
}
