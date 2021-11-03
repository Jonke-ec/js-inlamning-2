import React from 'react'

const MyCard = ({name, email, message}) => {
    return (
        <div className="container d-flex justify-content-center align-items-center">
            <div className="card w-50 m-3">
                <div className="card-body">
                    <p className="card-title"><strong>{name}</strong></p>
                    <p className="card-subtitle mb-2 text-muted">{email}</p>
                    <p className="card-text">{message}</p>
                </div>
            </div>
        </div>
    )
}

export default MyCard
