import React from 'react';

const ServiceDetail = ({ service }) => {
    const { name, img, description } = service;
    return (
        <div className="col-md-4 mb-5 text-center">
            <img src={img} alt="" height="80" />
            <h4 className="my-4">{name}</h4>
            <p className="text-muted px-4">{description} </p>
        </div>
    );
};

export default ServiceDetail;