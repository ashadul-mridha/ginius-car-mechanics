import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Service.css';

const Service = (props) => {
    const {id ,name , img , price , desc} = props.service;
    return (
        <div className="service pb-4">
            
            <img width="100%" height="50%" src={img} alt=""  />
            <h2>Name : {name}</h2>
            <h5>price : {price}</h5>
            <p>Desc : {desc}</p>
            <Link to={`/booking/${id}`}>
                <Button variant="warning">Book {name.toLowerCase()}</Button>
            </Link>
        </div>
    );
};

export default Service;