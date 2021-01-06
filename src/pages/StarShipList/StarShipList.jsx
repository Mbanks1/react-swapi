import React, { Component } from 'react';
import {getAllStarShips} from "../../services/sw-api";
import { Link } from 'react-router-dom';



class  StarShipList extends Component {
    state = { 
        results: [],
     }


    //  async componentDidMount() {
    //     const classData = await getAllStarShips();
    

    render() { 
        return ( 
            <>
<h3>Star Ship List</h3>
<div className="ship-container">

</div>
            </>
         );
    }
}
 




export default StarShipList