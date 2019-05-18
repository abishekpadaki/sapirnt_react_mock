import React from "react";
import {Table} from "react-bootstrap";

export class Tbl extends React.Component{
    constructor(props){
        super(props);
       
        }
    

    render(){
        // let headerDisplay = this.props.header.map(
        //     (val,i) => {
        //         return <th>{val}</th>
        //     }
        // )
        // let row = this.props.values.map(
        //     (val,i) => {
        //         return <tr> 
        //             <td>{val.Id}</td>
        //             <td>{val.FeedBack}</td>
        //             <td>{val.OverAllRating}</td>
        //         </tr>
        //     }
        // )
    return <Table responsive bordered hover variant="dark">
        <thead>
            {/* {headerDisplay} */}
        </thead>
        <tbody>
            {/* {row} */}
        </tbody>
      </Table>
    }
} 