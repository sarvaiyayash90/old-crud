import React, { useState, useEffect } from 'react'
import axios from 'axios';

import { Link, NavLink } from 'react-router-dom';

const StudentList = () => {

    const [student_data, setStudent] = useState([]);

    useEffect(() => {
        load_student_data();
    }, []);

    const load_student_data = () => {
        axios.get("https://mahadev-crud-yash.herokuapp.com/students/StudentList")
        .then((res) => {
            console.log("res=>",res.data)
            setStudent({
                name: res.data.name,
                email: res.data.email,
                rollno: res.data.rollno,
                profile_Img : res.data.selectedFile
            });
        })
        .catch((error) => {
            console.log(error);
        })
    }


    // const load_student_data = () => {
    //     const result = fetch(`https://mahadev-crud-yash.herokuapp.com/students/StudentList`)
    //     setStudent(result.data);
    // }
    
    const delete_student = async id => {
        await axios.delete(`https://mahadev-crud-yash.herokuapp.com/students/DeleteStudent/${id}`);
        load_student_data();
    };

    
    return (
        <div className="container" style={{ marginLeft: '0px' }}>
            <div className="py-4 shadow-lg p-0 mb-5 bg-white" style={{ width: '1480px', margin: '20px 0 0 0', borderRadius: '60px' }}>

                <div className="col-12 row">
                    <div style={{ margin: '0 0 0 50px' }}>
                        <h1 style={{ fontSize: '40px', fontFamily: 'cursive' }}>Students List Page</h1>
                    </div>
                </div>

                <table className="table border">
                    <thead className="thead-dark">
                        <tr>
                            <th scope="col"><i class="fal fa-list-ol fa-2x" style={{color:"white"}}></i></th>
                            <th scope="col" >Name</th>
                            <th scope="col" >Email</th>
                            <th scope="col" >ROll No</th>
                            <th scope="col" >image</th>
                            <th scope="col" >Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {student_data.map((stu, index) => (
                            <tr>
                                <th id="tab" scope="row">{index + 1}</th>
                                <td id="tab"><img style={{width:'60px',height:'60px',borderRadius:'60px'}} src={'Img/' + stu.selectedFile} /></td>
                                <td id="tab">{stu.name}</td>
                                <td id="tab">{stu.email}</td>
                                <td id="tab">{stu.rollno}</td>
                                <td style={{verticalAlign: 'middle',textAlign: 'center',display: 'revert' }}>
                                    <Link  style={{border:'none'}}  className="btn btn-outline-danger" onClick={() => { if (window.confirm('Are you sure you wish to delete this item?')) delete_student(stu._id) }} ><i class="fas fa-trash-alt"></i></Link>
                                    <Link  style={{border:'none'}}  className="btn btn-outline-primary" exact to={`/EditStudent/${stu._id}`} ><i class="far fa-edit"></i></Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default StudentList;



// import React, { Component } from 'react';
// import axios from 'axios';
// import { Table } from 'react-bootstrap';
// import StudentTableRow from './StudentTableRow';


// export default class StudentList  extends Component {

//     constructor(props) {
//         super(props)
//         this.state = {
//           students: []
//         };
//     }

//     componentDidMount(){
//         axios.get('https://mahadev-crud-yash.herokuapp.com/students/StudentList')
//         .then(res=>{
//             this.setState({
//                 students : res.data
//             });
//         })
//         .catch((error)=>{
//             console.log(error);
//         })
//     }

//     DataTable() {
//         return this.state.students.map((res, i) => {
//           return <StudentTableRow obj={res} key={i} />;
//         });
//     }

//     render() {
//         return (
//         <div>
//             <div>
//                 <h1 style={{margin:'20px 0 20px 0'}}>React Student List Component!</h1>
//             </div>

//             <div className="table-wrapper">
//                 <Table className="striped bordered hover table-hover">
//                     <thead>
//                         <tr>
//                             {/* <th>Index</th> */}
//                             <th>Name</th>
//                             <th>Email</th>
//                             <th>ROll No</th>
//                             <th>image</th>
//                             <th>Action</th>
//                         </tr>
//                     </thead>

//                     <tbody>
//                         {this.DataTable()}
//                     </tbody>
//                 </Table>
//             </div>
//         </div>
//         )
//     }
// }

