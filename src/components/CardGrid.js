import React, { useState, useEffect } from 'react'
import MyCard from './MyCard'

const CardGrid = () => {

    const [customers, setCustomers] = useState([])

    useEffect(async () => {
        const res = await fetch("https://ecexam-webapi.azurewebsites.net/api/Customers")
        setCustomers(await res.json())
    },[])

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
