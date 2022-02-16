import React,{useContext} from "react";
import { Link, useNavigate } from "react-router-dom";

import Card from "./shared/Card";
import BookStoreContext from "../context/BookStoreContext";

export const Header = () => {

    const {logout,isAdmin,isLogged} = useContext(BookStoreContext);

       const navigate = useNavigate();
    
  return (
    <Card reverse={true} style = {{
        display : isLogged ? "auto" : "none",
    }}>
      <div style ={{paddingLeft:" 5%"}} >
        {/* <nav class="navbar navbar-dark bg-dark">
        
      </nav> */}

        <ul className="nav">
          <li className="nav-item  ">
            <Link className="nav-link h3 " to="/home">
              Home
            </Link>
          </li>
          <li className="nav-item ">
            <Link className="nav-link h3" to="/about">
              About
            </Link>
          </li>
          <li className="nav-item ">
            <Link className="nav-link h3" to="/books">
              Books
            </Link>
          </li>
          
          <li className="nav-item " style = {{  display : isAdmin ?  "auto" : "none" }}>
            <Link className="nav-link h3" to="/books">
              Customers
            </Link>
          </li>
        
          <li className="nav-item" style = {{  display : !isAdmin ?  "auto" : "none" }}>
            <Link className="nav-link h3" to="/orders">
              Orders
            </Link>
          </li>
          
          <li className="nav-item">
            <Link className="nav-link " to="/books/:id"></Link>
          </li>
       <li>

        <button onClick={()=>{
            logout();
            navigate("/");
        }} className="btn btn-info btn-lg" style = {{marginTop:"17%",marginLeft : "100%"}}>
          <span className="glyphicon glyphicon-log-out"></span> Log out
        </button>
       </li>
        </ul>
        {/* <nav class="navbar navbar-light" style={{backgroundColor: "#e3f2fd"}}>

</nav>  */}
      </div>
    </Card>
  );
};
