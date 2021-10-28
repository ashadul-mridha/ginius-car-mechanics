import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css';

const Services = () => {
    const [services , setServices] = useState([]);

    useEffect( () => {

        fetch('http://intense-mountain-60560.herokuapp.com/services')
        .then(response => response.json())
        .then(data => setServices(data))

    },[])
    return (
        <div id="services">
            <h2 className="text-primary text-center">Our Services</h2>
            <div className="services-container">
                {
                    services.map(service => <Service key={service._id} service={service}></Service>)
                }
            </div>
        </div>
    );
};

export default Services;