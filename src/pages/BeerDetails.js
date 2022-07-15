import { useState, useEffect } from "react";
import { NavLink, useParams } from 'react-router-dom'
import Header from "../assets/header.png"
import axios from 'axios'


function BeerDetails() {
    const [BeerDetails, setBeerDetails] = useState([]);
    const { beerId } = useParams();

    useEffect(() => {
        axios
            .get(`https://ih-beers-api2.herokuapp.com/beers/${beerId}`)
            .then((response) => {
                console.log("response.data", response.data);
                setBeerDetails(response.data);

            });
        // eslint-disable-next-line
    }, []);
    // if (!BeerDetails) {
    //     return <h1>is loading</h1>
    // }
    return (
        <div>
            <NavLink to="/">
                <img src={Header} alt='Header' />
            </NavLink>
            <h3>Details of the beer:</h3>
            <div>
                <img className="beerSize" src={BeerDetails.image_url} alt="apartment" />
                <h1>{BeerDetails.name}</h1>
                <h3>{BeerDetails.tagline}</h3>
                <h4>{BeerDetails.first_brewed}</h4>
                <p>{BeerDetails.attenuation_level}</p>
                <p>{BeerDetails.description}</p>
                <h5>Contributed by: {BeerDetails.contributed_by}</h5>
            </div>
        </div>
    );
}

export default BeerDetails;