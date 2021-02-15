import { NavLink } from "react-router-dom";

const NavBar = () => {
    return ( 
            <nav className="navbar">
                <h1>STUDENT CRUD</h1>
                <div className="links">
                    {/* <a href="/">home</a>
                    <a href="/create">New Blog</a> */}
                    <NavLink className="nav-link" exact to="/">Home</NavLink>
                    <NavLink className="nav-link" exact to="/CreateStudent">Create Student</NavLink>
                    <NavLink className="nav-link" exact to="/StudentList">Student List</NavLink>
                    
                    {/* <NavLink className="nav-link" exact to="/Blog">Blog</NavLink>
                    <NavLink className="nav-link" exact to="/Fetch_Data">fetch Json data</NavLink>
                    <NavLink className="nav-link" exact to="/Blog_Detalis">Blog Detalis data</NavLink>
                    <NavLink className="nav-link" exact to="/Create">Form</NavLink> */}
                </div>
            </nav>
     );
}
 
export default NavBar;