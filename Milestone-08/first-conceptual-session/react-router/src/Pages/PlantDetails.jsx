import React from 'react';



const PlantDetails = ({ plant }) => {
    
    if (!plant) return <p className='w-full mx-100 text-5xl  my-50'>No plant data found</p>;

    const { name, image, category, price, } = plant;
    
    return (
        <div className="card bg-base-100 max-w-150 mx-auto my-5 shadow-sm">
           
            <figure>
                <img
                    src={image} />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{category}</p>
                <p>{price}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default PlantDetails;