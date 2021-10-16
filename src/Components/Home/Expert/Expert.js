import React from 'react';

const Expert = (props) => {
    const {name , expert , img} = props.expert;
    
    return (
        <div className="col-lg-4 col-md-6 col-sm-1">
            <div className="bg-secondary text-center pb-5">
                <img className="img-fluid" src={img} alt="" />
                <h2 className="text-white">Name: {name}</h2>
                <h4 className="text-danger">Expert In {expert}</h4>
            </div>
        </div>
    );
};

export default Expert;