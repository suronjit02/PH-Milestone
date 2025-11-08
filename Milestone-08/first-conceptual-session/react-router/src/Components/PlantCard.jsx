import React from 'react';
import { Link } from 'react-router';
import PlantDetails from '../Pages/PlantDetails';

const PlantCard = ({ plant }) => {

    const { name, image, category, price, id } = plant;

    // console.log(plant);

    return (
        <div>

            <div className="card bg-base-100 shadow-sm">
                <figure className='h-48'>
                    <img src={image} alt={name} />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>Category: {category}</p>
                    <p>Price: {price}</p>
                    <div className="card-actions justify-end">
                        <Link to={`/plant-details/${id}`} state={plant} className="btn btn-primary">View Details</Link>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default PlantCard;