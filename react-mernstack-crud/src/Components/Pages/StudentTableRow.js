import React, { Component } from 'react';
import { NavLink,Link  } from "react-router-dom";
import axios from 'axios';
import { Button } from 'react-bootstrap';
// let todoCounter = 1;

//import { img } from '../../../../backend/public/2.jpg';
//import logo from './new22.jpg';
export default class StudentTableRow extends Component {

    constructor(props){
        super(props);
        this.delete_Student = this.delete_Student.bind(this);
    }



    delete_Student(){
        axios.delete('https://mahadev-crud-yash.herokuapp.com/students/DeleteStudent/' + this.props.obj._id).then((res) => {
            console.log('Student successfully deleted!');
            //window.location.replace('/StudentList');
            this.props.history.push("/StudentList");
        }).catch((error)=>{
            console.log(error);
        })
    }

    render() {
        return (
            <tr>
                {/* <td>{todoCounter++}</td> */}
                <td>{this.props.obj.name}</td>
                <td>{this.props.obj.email}</td>
                <td>{this.props.obj.rollno}</td>
                {/* <img src={logo} width="500" alt="img"/> */}
                {/* <td><img src={`Img/${this.props.obj.selectedFile}`} width="50" height="50" /></td> */}
                <td style={{display:"flex"}}>
                    <NavLink className="nav-link" exact to={"/EditStudent/" + this.props.obj._id}>EDIT</NavLink>
                    {/* <NavLink className="nav-link" exact to={"/EditStudent/" + this.props.obj._id}>DELETE</NavLink> */}
                    <Button onClick={() => { if (window.confirm('Are you sure you wish to delete this item?')) this.delete_Student()}} size="sm" variant="danger">DELETE</Button>
                </td>
            </tr>
        )
    }
}

