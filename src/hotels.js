import React from 'react';

const Hotel = ({hotels}) => (
    <figure>
        <div>
            <img className="guests-loves__image-photo" src={hotels.imageUrl} alt={hotels.country}/>
        </div>
        <figcaption className="guests-loves__destination">   
            <span className="guests-loves__hotel">{hotels.name}</span>
            <span className="guests-loves__city">{hotels.city}</span>
        </figcaption>
    </figure>
);

export default Hotel;