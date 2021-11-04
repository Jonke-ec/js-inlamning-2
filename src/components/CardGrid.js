import React, { useState, useEffect } from 'react'
import MyCard from './MyCard'

const CardGrid = () => {

    const [customers, setCustomers] = useState([])

    return (
        <div className="row row-cols-1 row-cols-md-4 g-4 m-5">
            {
                customers.map(customer => (
                    <div className="col">
                        <MyCard item={customer} />
                    </div>
                ))
            }
        </div>
    )
}

export default CardGrid
