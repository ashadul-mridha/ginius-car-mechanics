import React from 'react';
import { useParams } from 'react-router';

const Booking = () => {
    const { serviceID } = useParams();
    return (
        <div>
            <h3>Booking  {serviceID}</h3>
        </div>
    );
};

export default Booking;