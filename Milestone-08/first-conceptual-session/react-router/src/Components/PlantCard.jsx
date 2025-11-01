import React from 'react';

const PlantCard = ({ plant }) => {

    const { name, image, description } = plant;

    console.log(plant);

    return (
        <div>

            <div className="card bg-base-100 shadow-sm">
                <figure className='h-48'>
                    <img src={image} alt={name} />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>{description}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default PlantCard;