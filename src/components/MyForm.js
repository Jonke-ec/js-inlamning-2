import React from 'react'

const MyForm = () => {
    return (
        <div className="container d-flex justify-content-center align-items-center vh-100">
            <form className="row g-3">
                <div className="col-md-6">
                    <input type="email" className="form-control" id="firstName" placeholder="Förnamn" />
                </div>
                <div className="col-md-6">
                    <input type="password" className="form-control" id="lastName" placeholder="Efternamn" />
                </div>
                <div className="col-md-12">
                    <input type="email" className="form-control" id="inputEmail4" placeholder="Mejladress" />
                </div>
                <div className="col-12">
                    <button type="submit" className="btn btn-primary">Sänd</button>
                </div>
            </form>
        </div>
    )
}

export default MyForm
