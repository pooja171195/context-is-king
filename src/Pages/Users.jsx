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
        <table style={{border: "1px solid #005F61"}}>
            <thead>
                <tr>
                    <th style={{border: "1px solid #005F61"}}>Name</th>
                    <th style={{border: "1px solid #005F61"}}>Age</th>
                    <th style={{border: "1px solid #005F61"}}>Date of Birth</th>
                    <th style={{border: "1px solid #005F61"}}>State of Residence</th>
                    <th style={{border: "1px solid #005F61"}}>Address</th>
                    <th style={{border: "1px solid #005F61"}}>Pincode</th>
                </tr>
            </thead>
            <tbody>
                {users.map((user) => (
                <tr >
            <td style={{border: "1px solid #005F61"}}>{user.name}</td>
            <td style={{border: "1px solid #005F61"}}>{user.age}</td>
            <td style={{border: "1px solid #005F61"}}>{user.dateofbirth}</td>
            <td style={{border: "1px solid #005F61"}}>{user.StateofResidence}</td>
            <td style={{border: "1px solid #005F61"}}>{user.Address}</td>
            <td style={{border: "1px solid #005F61"}}>{user.Pincode}</td>
            </tr>
                 ))}
            </tbody>
        </table>
    );
    
};