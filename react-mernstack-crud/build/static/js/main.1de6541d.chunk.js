(this["webpackJsonpreact-mernstack-crud"]=this["webpackJsonpreact-mernstack-crud"]||[]).push([[0],{42:function(e,t,n){},43:function(e,t,n){},69:function(e,t,n){"use strict";n.r(t);var a=n(1),s=n(0),i=n(35),c=n.n(i),l=n(16),o=(n(42),n(43),n(44),n(6)),d=n(11),r=n(12),h=n(7),u=n(14),j=n(13),b=n(71),m=n(72),p=n(17),O=n.n(p),g=function(e){Object(u.a)(n,e);var t=Object(j.a)(n);function n(e){var a;return Object(d.a)(this,n),(a=t.call(this,e)).onChange_Student_Name=a.onChange_Student_Name.bind(Object(h.a)(a)),a.onChange_Student_Email=a.onChange_Student_Email.bind(Object(h.a)(a)),a.onChange_Student_Roll_no=a.onChange_Student_Roll_no.bind(Object(h.a)(a)),a.onChange_Student_file=a.onChange_Student_file.bind(Object(h.a)(a)),a.onSubmit=a.onSubmit.bind(Object(h.a)(a)),a.state={name:"",email:"",rollno:"",selectedFile:null},a}return Object(r.a)(n,[{key:"onChange_Student_Name",value:function(e){this.setState({name:e.target.value})}},{key:"onChange_Student_Email",value:function(e){this.setState({email:e.target.value})}},{key:"onChange_Student_Roll_no",value:function(e){this.setState({rollno:e.target.value})}},{key:"onChange_Student_file",value:function(e){this.setState({selectedFile:e.target.files[0]})}},{key:"onSubmit",value:function(e){e.preventDefault();var t=new FormData;t.append("name",this.state.name),t.append("email",this.state.email),t.append("rollno",this.state.rollno),t.append("selectedFile",this.state.selectedFile),console.log("new",t),console.log("gorm",this.state.name,this.state.rollno,this.state.email,this.state.selectedFile),O.a.post("https://mahadev-crud-yash.herokuapp.com/students/CreateStudent",t).then((function(e){console.log(e)})),this.setState({name:"",email:"",rollno:"",selectedFile:""}),this.props.history.push("/StudentList")}},{key:"render",value:function(){return Object(a.jsxs)("div",{children:[Object(a.jsx)("h2",{style:{margin:"20px 0 20px 0"},children:"React Create Student Component !"}),Object(a.jsx)("div",{className:"create",children:Object(a.jsxs)(b.a,{onSubmit:this.onSubmit,children:[Object(a.jsx)("label",{children:"Name"}),Object(a.jsx)("input",{type:"text",required:!0,onChange:this.onChange_Student_Name}),Object(a.jsx)("label",{children:"Email"}),Object(a.jsx)("input",{type:"email",required:!0,onChange:this.onChange_Student_Email}),Object(a.jsx)("label",{children:"Roll No."}),Object(a.jsx)("input",{type:"text",required:!0,onChange:this.onChange_Student_Roll_no}),Object(a.jsx)("label",{children:"File"}),Object(a.jsx)("input",{type:"file",required:!0,onChange:this.onChange_Student_file,accept:"image/*"}),Object(a.jsx)(m.a,{variant:"danger",size:"lg",block:"block",type:"submit",children:"Create Student"})]})})]})}}]),n}(s.Component),x=function(e){Object(u.a)(n,e);var t=Object(j.a)(n);function n(e){var a;return Object(d.a)(this,n),(a=t.call(this,e)).onChange_Student_Name=a.onChange_Student_Name.bind(Object(h.a)(a)),a.onChange_Student_Email=a.onChange_Student_Email.bind(Object(h.a)(a)),a.onChange_Student_Roll_no=a.onChange_Student_Roll_no.bind(Object(h.a)(a)),a.onChange_Student_file=a.onChange_Student_file.bind(Object(h.a)(a)),a.onSubmit=a.onSubmit.bind(Object(h.a)(a)),a.state={name:"",email:"",rollno:"",selectedFile:null,profile_Img:null},a}return Object(r.a)(n,[{key:"componentDidMount",value:function(){var e=this;O.a.get("https://mahadev-crud-yash.herokuapp.com/students/EditStudent/"+this.props.match.params.id).then((function(t){e.setState({name:t.data.name,email:t.data.email,rollno:t.data.rollno,profile_Img:t.data.selectedFile})})).catch((function(e){console.log(e)}))}},{key:"onChange_Student_Name",value:function(e){this.setState({name:e.target.value})}},{key:"onChange_Student_Email",value:function(e){this.setState({email:e.target.value})}},{key:"onChange_Student_Roll_no",value:function(e){this.setState({rollno:e.target.value})}},{key:"onChange_Student_file",value:function(e){e.target.files.length>0&&this.setState({selectedFile:e.target.files[0]})}},{key:"onSubmit",value:function(e){e.preventDefault();var t=new FormData;t.append("name",this.state.name),t.append("email",this.state.email),t.append("rollno",this.state.rollno),null!=this.state.selectedFile&&t.append("selectedFile",this.state.selectedFile),console.log("new",t),console.log(this.state.selectedFile),console.log("gorm",this.state.name,this.state.rollno,this.state.email,this.state.selectedFile),console.log("ooo",this.props.match.params.id),O.a.put("https://mahadev-crud-yash.herokuapp.com/students/UpdateStudent/"+this.props.match.params.id,t).then((function(e){console.log(e),console.log("Student successfully updated")})).catch((function(e){console.log(e)})),this.props.history.push("/StudentList")}},{key:"render",value:function(){this.state.selectedFile;return Object(a.jsxs)("div",{children:[Object(a.jsx)("h2",{style:{margin:"20px 0 20px 0"},children:"React Edit Student Component !"}),Object(a.jsx)("div",{className:"create",children:Object(a.jsxs)(b.a,{onSubmit:this.onSubmit,children:[Object(a.jsx)("img",{src:"../Img/".concat(this.state.profile_Img),style:{width:"100px",height:"100px",borderRadius:"50px"}}),Object(a.jsx)("label",{children:"Name"}),Object(a.jsx)("input",{type:"text",value:this.state.name,onChange:this.onChange_Student_Name}),Object(a.jsx)("label",{children:"Email"}),Object(a.jsx)("input",{type:"email",value:this.state.email,onChange:this.onChange_Student_Email}),Object(a.jsx)("label",{children:"Roll No."}),Object(a.jsx)("input",{type:"text",value:this.state.rollno,onChange:this.onChange_Student_Roll_no}),Object(a.jsx)("label",{children:"File"}),Object(a.jsx)("input",{type:"file",onChange:this.onChange_Student_file,accept:"image/*"}),Object(a.jsx)(m.a,{variant:"danger",size:"lg",block:"block",type:"submit",children:"Update Student"})]})})]})}}]),n}(s.Component),S=n(70),_=function(e){Object(u.a)(n,e);var t=Object(j.a)(n);function n(e){var a;return Object(d.a)(this,n),(a=t.call(this,e)).delete_Student=a.delete_Student.bind(Object(h.a)(a)),a}return Object(r.a)(n,[{key:"delete_Student",value:function(){var e=this;O.a.delete("https://mahadev-crud-yash.herokuapp.com/students/DeleteStudent/"+this.props.obj._id).then((function(t){console.log("Student successfully deleted!"),e.props.history.push("/StudentList")})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){var e=this;return Object(a.jsxs)("tr",{children:[Object(a.jsx)("td",{children:this.props.obj.name}),Object(a.jsx)("td",{children:this.props.obj.email}),Object(a.jsx)("td",{children:this.props.obj.rollno}),Object(a.jsx)("td",{children:Object(a.jsx)("img",{src:"Img/".concat(this.props.obj.selectedFile),width:"50",height:"50"})}),Object(a.jsxs)("td",{style:{display:"flex"},children:[Object(a.jsx)(l.b,{className:"nav-link",exact:!0,to:"/EditStudent/"+this.props.obj._id,children:"EDIT"}),Object(a.jsx)(m.a,{onClick:function(){window.confirm("Are you sure you wish to delete this item?")&&e.delete_Student()},size:"sm",variant:"danger",children:"DELETE"})]})]})}}]),n}(s.Component),v=function(e){Object(u.a)(n,e);var t=Object(j.a)(n);function n(e){var a;return Object(d.a)(this,n),(a=t.call(this,e)).state={students:[]},a}return Object(r.a)(n,[{key:"componentDidMount",value:function(){var e=this;O.a.get("http://localhost:4000/students/StudentList").then((function(t){e.setState({students:t.data})})).catch((function(e){console.log(e)}))}},{key:"DataTable",value:function(){return this.state.students.map((function(e,t){return Object(a.jsx)(_,{obj:e},t)}))}},{key:"render",value:function(){return Object(a.jsxs)("div",{children:[Object(a.jsx)("div",{children:Object(a.jsx)("h1",{style:{margin:"20px 0 20px 0"},children:"React Student List Component!"})}),Object(a.jsx)("div",{className:"table-wrapper",children:Object(a.jsxs)(S.a,{className:"striped bordered hover table-hover",children:[Object(a.jsx)("thead",{children:Object(a.jsxs)("tr",{children:[Object(a.jsx)("th",{children:"Name"}),Object(a.jsx)("th",{children:"Email"}),Object(a.jsx)("th",{children:"ROll No"}),Object(a.jsx)("th",{children:"image"}),Object(a.jsx)("th",{children:"Action"})]})}),Object(a.jsx)("tbody",{children:this.DataTable()})]})})]})}}]),n}(s.Component),f=function(){return Object(a.jsxs)("nav",{className:"navbar",children:[Object(a.jsx)("h1",{children:"STUDENT CRUD"}),Object(a.jsxs)("div",{className:"links",children:[Object(a.jsx)(l.b,{className:"nav-link",exact:!0,to:"/",children:"Home"}),Object(a.jsx)(l.b,{className:"nav-link",exact:!0,to:"/CreateStudent",children:"Create Student"}),Object(a.jsx)(l.b,{className:"nav-link",exact:!0,to:"/StudentList",children:"Student List"})]})]})},C=function(e){Object(u.a)(n,e);var t=Object(j.a)(n);function n(){return Object(d.a)(this,n),t.apply(this,arguments)}return Object(r.a)(n,[{key:"render",value:function(){return Object(a.jsx)("div",{children:Object(a.jsx)("h1",{style:{margin:"250px 0 20px 0"},children:"Welcome Student register"})})}}]),n}(s.Component),y=function(e){Object(u.a)(n,e);var t=Object(j.a)(n);function n(){return Object(d.a)(this,n),t.apply(this,arguments)}return Object(r.a)(n,[{key:"render",value:function(){return Object(a.jsx)("div",{className:"not-found",children:Object(a.jsx)("h1",{className:"display-1",children:"Page Not Found"})})}}]),n}(s.Component);var k=function(){return Object(a.jsx)("div",{className:"App",children:Object(a.jsx)("div",{className:"content",children:Object(a.jsx)(l.a,{children:Object(a.jsxs)("div",{className:"App",children:[Object(a.jsx)(f,{}),Object(a.jsxs)(o.c,{children:[Object(a.jsx)(o.a,{exact:!0,path:"/",component:C}),Object(a.jsx)(o.a,{exact:!0,path:"/CreateStudent",component:g}),Object(a.jsx)(o.a,{exact:!0,path:"/StudentList",component:v}),Object(a.jsx)(o.a,{exact:!0,path:"/EditStudent/:id",component:x}),Object(a.jsx)(o.a,{component:y})]})]})})})})},N=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,73)).then((function(t){var n=t.getCLS,a=t.getFID,s=t.getFCP,i=t.getLCP,c=t.getTTFB;n(e),a(e),s(e),i(e),c(e)}))};c.a.render(Object(a.jsx)(l.a,{children:Object(a.jsx)(k,{})}),document.getElementById("root")),N()}},[[69,1,2]]]);
//# sourceMappingURL=main.1de6541d.chunk.js.map