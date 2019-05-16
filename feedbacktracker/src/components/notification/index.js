import React from "react";
import "./styles/notification.css";
import DropDownContent from "../common/dropDownContent";

export class Notifications extends React.Component {
    render() {
        let dropDownDisplay = this.props.values.details.map((val, i) => {
            return <DropDownContent requester={val.requester} content={this.props.values.middle} requestfor={val.requestfor}/>
        });
        let bdg = this.props.values.details.length;
        return <React.Fragment >
            <div className="dropdown">
                <button className="btn btn-primary notification dropdown">
                    <i className={this.props.values.icon} > </i>
                    <span className="badge" > {bdg} </span>
                </button>
                <div className="dropdown-content" >
                    <h3> {this.props.values.heading} </h3>
                    {dropDownDisplay}
                </div>
            </div>
        </React.Fragment>
    }
}