import React from 'react'
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid m-3">
                <a class="navbar-brand" href="#">Course App</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav">
                        <NavLink class="nav-link active" aria-current="page" to="/" exact>Home</NavLink>
                        <NavLink class="nav-link" to="/costumers" exact>Registrera</NavLink>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
