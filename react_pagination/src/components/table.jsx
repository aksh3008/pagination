import React from "react";

function Table(props){
    return(
       <table className="table text-center">
        <thead>
            <tr>
                <th className="p-3">id</th>
                <th className="p-3">Name</th>
                <th className="p-3">Phone</th>
                <th className="p-3">Email</th>
                <th className="p-3">Signup Date</th>
            </tr>
        </thead>
        <tbody>
            {props.users.map(user => (
            <tr key={user.id}>
               <td>{user.id}</td>
               <td>{user.Full_Name}</td>
               <td>{user.Mobile_Number}</td>
               <td>{user.email}</td>
               <td>{user.Sign_up_date}</td>
            </tr>

            ))}

        </tbody>
       </table>
    );

}

export default Table;