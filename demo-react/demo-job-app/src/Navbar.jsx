import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

export default function Navbar(){
    return(
        <nav className="navbar navbar-expand-sm navbar navbar-dark bg-dark">
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">            
                            <a className="navbar-brand" href="/">Demo app</a>
                            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">                
                                <li className="nav-item">
                                    <a className="nav-link" href="/">Home</a>
                                </li>

                                <li className="nav-item">
                                    <a className="nav-link" href="/createUser">Create</a>
                                </li>
                            </ul>
                        </div>
        </nav>
    )
}