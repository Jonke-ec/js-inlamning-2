import React from 'react'
import MyCard from './MyCard'

const CardGrid = () => {
    return (
        <div className="row row-cols-1 row-cols-md-3 g-4">
            <div className="col">
                <MyCard name="Juni Ida Linéa Askling" email="juni.askling@gmail.com" message="Världens bästa bebis." />
            </div>
        </div>
    )
}

export default CardGrid
