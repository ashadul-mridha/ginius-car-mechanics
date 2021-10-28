import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router';

const Booking = () => {
    const { serviceID } = useParams();

    const [service , setService] = useState({});

    useEffect( () => {
        fetch(`http://intense-mountain-60560.herokuapp.com/service/${serviceID}`)
        .then( res => res.json())
        .then( data => {
            setService(data);
            console.log(data);
        })
    } ,[])

    return (
        <div style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
            <h1>{service.name}</h1>
            <img src={service.img} width="50%" alt="" />
            <p>{service.desc}</p>
            <button>{service.price}</button>
            {/* <h3>Booking  {service}</h3> */}
        </div>
    );
};

export default Booking;