import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router';

const UpdateService = () => {
    const {serviceID} = useParams();
    const [service , setService] = useState({});

    useEffect( () => {
        fetch(`http://intense-mountain-60560.herokuapp.com/service/${serviceID}`)
        .then( res => res.json())
        .then( data => {
            setService(data)
        })
    } , [])

    //from handle 
    const nameRef = useRef('');
    const descRef = useRef('');
    const priceRef = useRef();
    const imgRef = useRef();

    const handleName = () => {
        const value = nameRef.current.value;
        const newService = {...service};
        newService.name = value;
        setService(newService)
    }

    const handleDesc = () => {
        const value = descRef.current.value;
        const newService = {...service};
        newService.desc = value;
        setService(newService)
    }

    const handleImg = () => {
        const value = imgRef.current.value;
        const newService = {...service};
        newService.img = value;
        setService(newService)
    }

    const handlePrice = () => {
        const value = priceRef.current.value;
        const newService = {...service};
        newService.price = value;
        setService(newService)
    }

    

    const handleSubmit = e => {
        
       axios.put(`http://intense-mountain-60560.herokuapp.com/service/update/${serviceID}`,service)
       .then( res => {
           if(res.modifiedCount > 0){
               alert('Data Updated SuccessFull')
           }
           console.log(res);
       })

        e.preventDefault();
    } ;

    return (
        
        <div className="add-service">
            
            <form onSubmit={handleSubmit}>
                <input value={service.name || ' '} ref={nameRef} onChange={handleName} placeholder="Enter Name" />
                <input value={service.desc || ' '} ref={descRef} onChange={handleDesc} placeholder="Description" />
                <input value={service.img || ' '} ref={imgRef} onChange={handleImg} placeholder="Img URL" />
                <input type="number" value={service.price || ' '} onChange={handlePrice} ref={priceRef} placeholder="Enter Price" />
                <input type="submit" />
            </form>
        </div>
    );
};

export default UpdateService;