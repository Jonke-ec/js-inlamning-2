import React from 'react'
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light shadow">
            <div className="container">
                <NavLink className="navbar-brand" to="/" exact>Course App</NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <NavLink className="nav-link" aria-current="page" to="/" exact activeClassName="active" >Hem</NavLink>
                        <NavLink className="nav-link" to="/customers" exact activeClassName="active" >Registrera</NavLink>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
