import React from 'react';

export default class DropDownContent extends React.Component{
    render(){
        return <React.Fragment>
                <span>
                    {this.props.requester.name} 
                    {this.props.content}
                    {this.props.requestfor.name}
                </span>
            </React.Fragment>
    }    
}