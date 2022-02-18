import React from 'react'

export const GetUserName = ({r,entireUsers}) => {

    const c = entireUsers.filter((u) => u.id == r.userid);

    console.log(typeof(c));

    

    c.map((u) => {

        return(

                // console.log(u.name)/
                <div>
                hello</div>


        )}
    

    )}
