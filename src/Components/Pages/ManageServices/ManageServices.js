import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const ManageServices = () => {
    const [services , setServices] = useState([[]]);

    useEffect( () => {
        fetch('http://intense-mountain-60560.herokuapp.com/services')
        .then(res => res.json())
        .then( data => {
            setServices(data);
        })
    } , [])

    // fetch delete api 

    const deleteService = (id) => {
        console.log('Delete Click',id);
        fetch(`http://intense-mountain-60560.herokuapp.com/service/${id}`,{
            method: 'delete'
        })
        .then( res => res.json())
        .then( data => {
            if(data.acknowledged){
                alert('Deleted Successfull')
               const filterServices =  services.filter( service => service._id !== id);
               setServices(filterServices)
            }
        })

    }

    return (
        <div>
            <h2>Manage Services {services.length}</h2>
            <ul>
                {
                    services.map( service => <li key={service._id}> {service.name} :: {service.price} 
                    
                    <Link to={`/update/service/${service._id}`}> <button> Update </button> </Link>
                    
                    <button onClick={ () => deleteService(service._id)}>Delete</button> </li> )
                }
            </ul>
        </div>
    );
};

export default ManageServices;