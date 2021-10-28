import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Service.css';

const Service = (props) => {
    const {_id ,name , img , price , desc} = props.service;
    return (
        <div className="service pb-4">
            
            <img width="100%" height="50%" src={img} alt=""  />
            <h2> {name}</h2>
            <h5> {price}</h5>
            <p> {desc}</p>
            <Link to={`/booking/${_id}`}>
                <Button variant="warning">Book {name.toLowerCase()}</Button>
            </Link>
        </div>
    );
};

export default Service;