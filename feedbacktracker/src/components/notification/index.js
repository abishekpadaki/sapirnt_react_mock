import React from "react";
import "./styles/notification.css";
import DropDownContent from "../common/dropDownContent";

export class Notifications extends React.Component {
    constructor(props){
        super(props);
    }
    
    render() {
        // console.log(this.props.allrequests)
        
    //     if(this.props.res.length == undefined){
    //         // productsToBeCreated =   <Progress />
    //         console.log("Loading");
    //    }else {

    //     // var dropDownDisplay = this.props.res[0].notifications.map((val, i) => {
    //     //     return <DropDownContent requester={val.requester} content={this.props.values.middle} requestfor={val.requestfor} {...this.props}/>
    //     // });
    //     console.log(this.props.res)
    //     var dropDownDisplay = this.props.values.details.map((val, i) => {
    //              return <DropDownContent requester={val.requester} content={this.props.values.middle} requestfor={val.requestfor} {...this.props}/>
    //             });
    // }

    var dropDownDisplay = this.props.values.details.map((val, i) => {
        return <DropDownContent requester={val.requester} content={this.props.values.middle} requestfor={val.requestfor} {...this.props}/>
    });

            // let dropDownDisplay = this.props.res.notifications.map((val, i) => {
            //     return <DropDownContent requester={val.requester} content={this.props.values.middle} requestfor={val.requestfor} {...this.props}/>
            // });

        let bdg = this.props.values.details.length;
        console.log(this.props.res)
        
        return <React.Fragment >
            <div className="dropdown">
                <button className="btn btn-primary dropdown">
                    {/* <i className={this.props.values.icon} > </i> */}
                    <i className="fas fa-bell"></i>
                    <span className="badge badge-warning">{bdg}</span>
                    {/* <span className="badge" > {bdg} </span> */}
                </button>
                <div className="dropdown-content" >
                    <h3> {this.props.values.heading} </h3>
                    {dropDownDisplay}
                </div>
            </div>
        </React.Fragment>
    }
}