import React, { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import axios from 'axios'
import User from './User'

export default function UserList(){

    const [users, setUsers] = useState([]);
    const fetchUsers = async () => {
        const { data } = await axios.get(
        "http://localhost:4000/app/user"
        );
        const users = data;
        setUsers(users);
        console.log(users);
    }
    useEffect(() => {
        fetchUsers();
    }, [])

    return (
        <div>
            <div className='row'>
                <div className='col'> <h3>Username</h3> </div>
                <div className='col'> <h3>Email</h3> </div>
                <div className='col'> <h3>Referred</h3> </div>
                <div className='col'> <h3>Details</h3> </div>
            </div>

            { users.map( user => {
                    return <User key={user._id} user={user}/>
            }) }
        </div>
    )
}
