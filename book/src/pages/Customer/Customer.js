import React, { useContext } from 'react'
import Card from '../../components/shared/Card'
import {TableHeader} from './TableHeader'
import {TableData} from './TableData'
import BookStoreContext from '../../context/BookStoreContext'

export const Customer = () => {


  const {entireUsers,removeUser} = useContext(BookStoreContext);

  const deleteUser = (id) => {

    removeUser(id);

  }

  return (
    <div className='container' style = {{paddingTop : "10%"}}>
      <Card style = {{
        border:"2px solid green",
        borderRadius:"10px",


      }} reverse = {false}>
      <div style = {{
        width:"95%",
        margin : "5% 2.5% 5% 2.5%",
        padding : "5%",

      }}>


      <table className="table table-hover" width = "auto">
          <thead>
            <TableHeader />
          </thead>
          <tbody>
            {entireUsers.map((u) => {
              return (
                <TableData
                  u={u}
                  key={u.id}
                  // updateChange={updateChange}
                  deleteUser={deleteUser}
                />
              );
            })}
          </tbody>
        </table>
     

      </div>
      </Card>
      <div style = {{marginBottom:"10%"}}></div>
    </div>
  )
}
