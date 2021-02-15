import axios from 'axios';
import React, { Component } from 'react';
import {Button,Form} from 'react-bootstrap';
// import { useHistory } from 'react-router-dom';
// const history = useHistory();

export default class EditStudent extends Component {

    
    constructor(props)
    {
        super(props);
        this.onChange_Student_Name = this.onChange_Student_Name.bind(this);
        this.onChange_Student_Email = this.onChange_Student_Email.bind(this);
        this.onChange_Student_Roll_no = this.onChange_Student_Roll_no.bind(this);
        this.onChange_Student_file = this.onChange_Student_file.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            name: '',
            email: '',
            rollno: '',
            selectedFile : null,
            profile_Img : null
          }
    }

    componentDidMount() {
        axios.get('https://mahadev-crud-yash.herokuapp.com/students/EditStudent/' + this.props.match.params.id)
        .then((res) => {
            this.setState({
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

    onChange_Student_Name(e){
        this.setState({name:e.target.value})
    }

    onChange_Student_Email(e){
        this.setState({email:e.target.value})
    }

    onChange_Student_Roll_no(e) {
        this.setState({rollno: e.target.value})
    }

    onChange_Student_file(e){

        if(e.target.files.length > 0){
            this.setState({ selectedFile : e.target.files[0] })
        }
        //console.log(e.target.files[0] , loaded: 0)
    }

    
    
    onSubmit(e){
        e.preventDefault()
        
        // console.log(`Student successfully Updated!`);
        // console.log(`Name: ${this.state.name}`);
        // console.log(`Email: ${this.state.email}`);
        // console.log(`Roll no: ${this.state.rollno}`);
        
        // const StudentObject ={
        //     name : this.state.name,
        //     email : this.state.email,
        //     rollno : this.state.rollno
        // };


        const formData = new FormData();
        formData.append("name", this.state.name);
        formData.append("email", this.state.email);
        formData.append("rollno", this.state.rollno);
        //formData.append("selectedFile", this.state.selectedFile);   
        if(this.state.selectedFile != null)
        {
            formData.append("selectedFile", this.state.selectedFile);   
        }
        
        console.log("new",formData);
        
        console.log(this.state.selectedFile);

        console.log("gorm",this.state.name,this.state.rollno,this.state.email,this.state.selectedFile);

        console.log('ooo',this.props.match.params.id);
        //console.log(StudentObject);
        
        axios.put('https://mahadev-crud-yash.herokuapp.com/students/UpdateStudent/' + this.props.match.params.id, formData)
        .then((data)=>{
            console.log(data);
            console.log('Student successfully updated');
        }).catch((error)=>{
            console.log(error)
        })
            // .then((res) => {
            //     console.log(res.data)
            //     console.log('Student successfully updated')
            // }).catch((error) => {
            //     console.log(error)
            // })
            // Redirect to Student List 
            this.props.history.push('/StudentList')
        }


        render() {
            const isFile = this.state.selectedFile;
            return (
                <div>
                    <h2 style={{ margin: '20px 0 20px 0' }}>React Edit Student Component !</h2>
                    <div className="create">
                        <Form onSubmit={this.onSubmit}>
                            <img src={`../Img/${this.state.profile_Img}`} style={{width:'100px',height:'100px',borderRadius:'50px'}} />

                            <label>Name</label>
                            <input type="text"  value={this.state.name} onChange={this.onChange_Student_Name}/>

                            <label>Email</label>
                            <input type="email"  value={this.state.email} onChange={this.onChange_Student_Email}/>

                            <label>Roll No.</label>
                            <input type="text"  value={this.state.rollno} onChange={this.onChange_Student_Roll_no}/>
                            
                       
                            <label>File</label>
                            <input type="file" onChange={this.onChange_Student_file} accept="image/*" />
                            {/* <input type="hidden" value={this.state.selectedFile} /> */}
                        
                        {/* { isFile === null ?
                            //<input type="file" onChange={this.onChange_Student_file} accept="image/*" />
                            <input type="hidden" value={this.state.selectedFile} />
                            :
                            <input type="file" onChange={this.onChange_Student_file} accept="image/*" />
                            //<input type="hidden" value={this.state.selectedFile || ''} />
                        } */}

                           <Button variant="danger" size="lg" block="block" type="submit">
                                Update Student
                            </Button>

                        </Form>
                    </div>
                </div>
            )
        }
}
