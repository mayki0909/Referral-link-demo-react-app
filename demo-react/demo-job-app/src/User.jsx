import React, { useState, useEffect } from 'react'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Collapse } from 'reactstrap';

export default function User({ user }){

    const [isOpen, setOpen] = useState(false)
    const [refUsers, setRefUsers] = useState([])

    useEffect(() => {
        const fetchRefUsers = async () => {
            const { data } = await axios.get(
                `http://localhost:4000/app/userRefs?id=${user._id}`
            )
            const refUsers = data;
            setRefUsers(refUsers);
            console.log(refUsers);
        };
        fetchRefUsers();
    }, []);

    const toggle = () => setOpen(!isOpen);

    const referred = typeof user.referral == 'string'
    const refLink = `http://localhost:3000/createUser/${user._id}`

    return (
        <div>
            <div className='row'>
                <div className='col'> {user.username} </div>
                <div className='col'> {user.email} </div>
                <div className='col'> <input disabled className='form-check-input' type='checkbox' defaultChecked={referred}/> </div>
                <div className='col'> 
                    <button className='btn btn-primary btn-block' onClick={toggle}> Details </button> 
                </div>
            </div>

            <Collapse isOpen={isOpen}>
                <div className='row card'>
                    <div className='col'>Referred by: {user.referral}</div>
                    <div className='col'>Referral link: <a href={refLink}>{refLink}</a></div>
                    <div className='col'>Invited users: {refUsers.length}</div>
                    <div className='container'>
                        <div className='row'>
                            <div className='col'><h6>Referred username</h6></div>
                            <div className='col'><h6>Referred email</h6></div>
                            <div className='col'><h6>Reffered id</h6></div>
                        </div>

                        { refUsers.map( user => {
                            return <div key={'Referred'+user._id} className='row'>
                                <div className='col'>{user.username}</div>
                                <div className='col'>{user.email}</div>
                                <div className='col'>{user._id}</div>
                            </div>
                        }) }
                    </div>
                </div>
            </Collapse>
            <p></p>
        </div>
    )

}