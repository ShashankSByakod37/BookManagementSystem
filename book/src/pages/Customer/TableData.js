import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Icon from "react-crud-icons";
// import "../node_modules/react-crud-icons/dist/react-crud-icons.css";

export const TableData = ({ u,deleteUser }) => {



    console.log("TableData",u);

    if(u.isAdmin == 1){

        return(
            null
        );
    }




  return (
    <>
      <tr key={u.id}>
        <td>
        
            {u.firstName} 
        
          </td>
          <td>
        
            {u.lastName}
        
          </td>

          <td>
          {u.username}
          </td>
          <td>
          {u.email}
          </td>
        <td>
          <div className=" deleteIcons " style={{ border: "none",width:"40%",height:"40%",cursor:"pointer" }}>
            <Icon
              tooltip=""
              name="delete"
              // tooltip="delete"
              theme="dark"
              size="big"
              style = {{cursor:"pointer"}}
              onClick={() => {

                deleteUser(u.id);
                
              }}
            />
          </div>
          {/* <button className="btn btn-danger" onClick={()=>{deleteEmployee(emp)}}>Delete</button> */}
        </td>
        <td>
          {/* <button className="btn btn-warning" onClick = {()=>{updateChange(emp)
            navi("/form")
        }}>Update</button> */}

          
        </td>
      </tr>
    </>
  );
};