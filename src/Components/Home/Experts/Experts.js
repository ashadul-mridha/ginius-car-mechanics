import React from 'react';
import Expert from '../Expert/Expert';

const Experts = () => {
    const experts = [
        {
            name: "Ashadul Mridha",
            expert : "Engineen Expert",
            img : "https://images.unsplash.com/photo-1615906655593-ad0386982a0f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGNhciUyMHJlcGFpciUyMG1hbnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
        },
        {
            name: "Sani Howladar",
            expert : "Parts Expert",
            img : "https://images.unsplash.com/photo-1618783129985-dd97dbe4ad99?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y2FyJTIwcmVwYWlyJTIwbWFufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
        },
        {
            name: "Sourav Biswas",
            expert : "Car Wash",
            img : "https://images.unsplash.com/photo-1601998543706-1aaa490346d1?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGNhciUyMHJlcGFpciUyMG1hbnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
        }
    ];

    return (
        <div className="mt-5" id="experts">
            <h2 className="text-primary text-center">Our Experts</h2>
            <div className="row">
                {
                    experts.map(expert => <Expert
                        key={expert.name}
                        expert={expert}
                    ></Expert>)
                }
            </div>
        </div>
    );
};

export default Experts;