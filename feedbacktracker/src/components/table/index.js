import React from "react";
import {Table} from "react-bootstrap";

export class Tbl extends React.Component{
    constructor(props){
        super(props);
       
        }
    

    render(){
        let headerDisplay = this.props.header.map(
            (val,i) => {
                return <th>{val}</th>
            }
        )
        // console.log(this.props.values);
        let row = this.props.values.map(
            (val,i) => {
                
                return <tr> 
                    <td>{val.OracleId}</td>
                    <td>{val.Suggestions}</td>
                    <td>{val.OverallRating}</td>
                </tr>
            }
        )
    return <Table responsive bordered hover variant="dark">
        <thead>
            {headerDisplay}
        </thead>
        <tbody>
            {row}
        </tbody>
      </Table>
    }
} 