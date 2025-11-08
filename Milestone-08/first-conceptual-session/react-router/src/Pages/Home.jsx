// import React, { useEffect, useState } from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import PlantCard from '../Components/PlantCard';
import { useLoaderData } from 'react-router';


const Home = () => {

    // const [plants, setPlants] = useState([]);

    // useEffect(() => {

    //     fetch('https://openapi.programming-hero.com/api/plants')
    //         .then(res => res.json())
    //         .then(data => setPlants(data?.plants))

    // }, [])

    const { plants } = useLoaderData();

    // console.log(plants)


    return (
        <div className='px-10 py-4'>

            <div className='grid grid-cols-3 gap-4'>
                {
                    plants.map(plant => (
                        <PlantCard key={plant.id} plant={plant} />
                    ))
                }

            </div>


        </div>
    );
};

export default Home;