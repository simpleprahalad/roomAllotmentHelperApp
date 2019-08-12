import React from 'react'
import Card from './Card'

const CardList = ({robots}) => {
    const cardArray = robots.map((item, index)=>{
        return (
            <Card 
                key={index}
                mid={robots[index]["M-ID"]} 
                name={robots[index]["First Name"] + "   " + robots[index]["Last Name"]} 
                mobileNum={robots[index]["Mobile Number"]}
                hotelName={robots[index]["Hotel Name"]}
                rootAlloted={robots[index]["Hotel Room"]}
            />
        )
    })

    return (
        <div>
            {cardArray}
        </div>
    )
}

export default CardList