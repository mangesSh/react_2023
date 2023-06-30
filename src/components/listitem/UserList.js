


import React from 'react';
import users from './Users.json';

export default function UserList() {
  return <>
    <h2 className='text-center'>User List</h2>

    <table className='table table-bordered table-striped'>
        <tbody>
            {users.map((user)=>{
                return <tr key={user.street}>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.phone}</td>
                </tr>
            })}
        </tbody>
    </table>
  </>
}