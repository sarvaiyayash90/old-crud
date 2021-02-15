import React, { Component } from 'react';

import {Button,Form} from 'react-bootstrap';

import axios from 'axios';

export default class CreateStudent extends Component {

    constructor(props)
    {
        super(props);
        this.onChange_Student_Name = this.onChange_Student_Name.bind(this);
        this.onChange_Student_Email = this.onChange_Student_Email.bind(this);
        this.onChange_Student_Roll_no = this.onChange_Student_Roll_no.bind(this);
        this.onChange_Student_file = this.onChange_Student_file.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            name : '',
            email : '',
            rollno : '',
            selectedFile : null
          }
    }

    onChange_Student_Name(e){
        this.setState({ name : e.target.value })
    }

    onChange_Student_Email(e){
        this.setState({ email : e.target.value })
    }

    onChange_Student_Roll_no(e){
        this.setState({ rollno : e.target.value })
    }

    onChange_Student_file(e){
        this.setState({ selectedFile : e.target.files[0] })
        //console.log(e.target.files[0] , loaded: 0)
    }
   

    onSubmit(e){
        e.preventDefault()
        // console.log(`Student successfully created!`);
        // console.log(`Name: ${this.state.name}`);
        // console.log(`Email: ${this.state.email}`);
        // console.log(`Roll no: ${this.state.rollno}`);
        // console.log(`selectedFile:${this.state.selectedFile}`);

        // const StudentObject = {
        //     name : this.state.name,
        //     email : this.state.email,
        //     rollno : this.state.rollno,
        //     selectedFile : this.state.selectedFile
        // };
        
        
        //console.log('http://localhost:4000/students/CreateStudent',StudentObject);
       
        //const formData = new FormData();
        // formData.append( 
        //     "filename", 
        //     this.state.selectedFile, 
        //     this.state.selectedFile.name
        // );
        const formData = new FormData();
        formData.append("name", this.state.name);
        formData.append("email", this.state.email);
        formData.append("rollno", this.state.rollno);
        formData.append("selectedFile", this.state.selectedFile);

        console.log("new",formData);

        console.log("gorm",this.state.name,this.state.rollno,this.state.email,this.state.selectedFile);

        // const config = {
        //     headers: {
        //         'content-type': 'multipart/form-data'
        //     }
        // };
        
        axios.post("https://mahadev-crud-yash.herokuapp.com/students/CreateStudent",formData)
        .then((data)=>{
            console.log(data);
        })
        
        // fetch("http://localhost:4000/students/CreateStudent",{
        //     method:'POST',
        //     body:formData
        // }).then((res)=>{
        //     res.json()
        // }).then((data)=>{
        //     console.log(data);
        // })

        // axios.post('http://localhost:4000/students/CreateStudent',formData).then(res=>{
        //     alert("The file is successfully uploaded");
        //     console.log(res.data);
        // })

        this.setState({name: '', email: '', rollno: '',selectedFile:''});
        this.props.history.push('/StudentList')
    }   
    
    render() {
        return (
            <div>
                <h2 style={{ margin: '20px 0 20px 0' }}>React Create Student Component !</h2>
                <div className="create">
                    <Form onSubmit={this.onSubmit}>
                        <label>Name</label>
                        <input type="text" required onChange={this.onChange_Student_Name}/>

                        <label>Email</label>
                        <input type="email" required onChange={this.onChange_Student_Email}/>

                        <label>Roll No.</label>
                        <input type="text" required onChange={this.onChange_Student_Roll_no}/>
                        
                        <label>File</label>
                        <input type="file" required onChange={this.onChange_Student_file} accept="image/*" />

                        <Button variant="danger" size="lg" block="block" type="submit">
                            Create Student
                        </Button>

                    </Form>
                </div>
            </div>
        )
    }
}