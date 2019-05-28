import React from 'react';

export default class DropDownContent extends React.Component{
    render(){
        // console.log(this.props.allrequests)
        console.log(this.props.res)
        return <React.Fragment>
                {/* {this.props.res[0]?<span>
                    {this.props.res[0].notifications[0].requester.name} 
                    {this.props.content}
                    {this.props.res[0].notifications[0].requestfor.name}
                </span>:''} */}

                <span>
                    {this.props.requester.name} 
                    {this.props.content}
                    {this.props.requestfor.name}
                </span>
            </React.Fragment>
    }    
}