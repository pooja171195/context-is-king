import React from "react";
export const Users =() => {
    const [users,setUsers] = React.useState([]);

    React.useEffect(() => {
        fetch(`http://locathost:3000/users`)
        .then((res) => res.json())
        .then((res) => setUsers())
        .catch((erro) => console.log(erro));
    },[]);
    return (
        <table style={{border: "1px solid teal"}}>
            <thead>
                <tr>
                    <th style={{border: "1px solid teal"}}>Name</th>
                    <th style={{border: "1px solid teal"}}>Age</th>
                    <th style={{border: "1px solid teal"}}>Date of Birth</th>
                    <th style={{border: "1px solid teal"}}>State of Residence</th>
                    <th style={{border: "1px solid teal"}}>Address</th>
                    <th style={{border: "1px solid teal"}}>Pincode</th>
                </tr>
            </thead>
            <tbody>
                {users.map((user) => (
                <tr>
            <td style={{border: "1px solid teal"}}>{users.name}</td>
            <td style={{border: "1px solid teal"}}>{users.age}</td>
            <td style={{border: "1px solid teal"}}>{users.dateogbirth}</td>
            <td style={{border: "1px solid teal"}}>{users.StateofResidence}</td>
            <td style={{border: "1px solid teal"}}>{users.Address}</td>
            <td style={{border: "1px solid teal"}}>{users.Pincode}</td>
            </tr>
                 ))}
            </tbody>
        </table>
    );
    
};