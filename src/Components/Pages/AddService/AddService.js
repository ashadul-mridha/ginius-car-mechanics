import React from 'react';
import axios  from 'axios';
import './AddService.css';
import { useForm } from "react-hook-form";

const AddService = () => {

    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        axios.post('http://intense-mountain-60560.herokuapp.com/addService', data)
        .then( res => {
            console.log(res);
            if(res.data.acknowledged){
                alert("data Insert Successfull");
                
            }
        })
    } ;

    return (
        <div className="add-service">
            
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name")} placeholder="Enter Name" />
                <input {...register("desc")} placeholder="Description" />
                <input {...register("img")} placeholder="Img URL" />
                <input type="number" {...register("price")} placeholder="Enter Price" />
                <input type="submit" />
            </form>
        </div>
    );
};

export default AddService;