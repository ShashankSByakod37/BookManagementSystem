import React from "react";

export const TableHeader = () => {
  return (
    <>
      <tr>
        <th className="h3"> First Name </th>
        <th className="h3"> Last Name </th>
        <th className="h3"> Username </th>
        <th className="h3"> Email </th>
        
        
        {/* <th> Email </th> */}
        <th className="h3"> Delete? </th>
      </tr>

    </>
  );
};