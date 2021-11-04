import React from 'react'

const MyCard = ({item}) => {
    return (
        <div className="container d-flex justify-content-center align-items-center shadow">
            <div className="m-3">
                <div className="card-body">
                    <h5 className="card-title"><strong>{item.firstName} {item.lastName}</strong></h5>
                    <p className="card-subtitle mb-2 text-muted">{item.lastName}</p>
                    <p className="card-text">{item.email}</p>
                </div>
            </div>
        </div>
    )
}

export default MyCard
