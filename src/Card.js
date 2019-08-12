import React from 'react'
import phone from '../public/phone.png'
import citadel from '../public/citadel.jpg'
import holidayInn from '../public/holidayInn.png'

const Card = ({name, mid, mobileNum, hotelName, rootAlloted}) => {
    let hotelImg = holidayInn;
    if(hotelName === "Citadel" || hotelName === "CITADEL"){
        hotelImg = citadel;
    } else {
        hotelImg = holidayInn;
    }
    let nameUpperCase = name.toUpperCase();
    return (
        <div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
            <img src="Mascot.jpg" className="image" alt="robots"></img>
            <h4>{nameUpperCase}</h4>
            <h4>{mid}</h4>
            <h4>
                <img src={phone} className="phone-logo" alt="logo" />
                {mobileNum}
            </h4>
            <h4>Room - {rootAlloted}</h4>
            <h4>
            <img src={hotelImg} className="hotel-logo" alt="logo" />
                {/* {hotelName} */}
            </h4>
        </div>
    )
}

export default Card