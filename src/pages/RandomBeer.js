import { useState, useEffect } from "react";
import { NavLink, useParams } from 'react-router-dom'
import Header from "../assets/header.png"
import axios from 'axios'


function RandomBeer() {
    const [RandomBeer, setRandomBeer] = useState([]);
    

    useEffect(() => {
        axios
            .get(`https://ih-beers-api2.herokuapp.com/beers/random`)
            .then((response) => {
                console.log("response.data", response.data);
                setRandomBeer(response.data);

            });
        // eslint-disable-next-line
    }, []);
  
    return (
        <div>
            <NavLink to="/">
                <img src={Header} alt='Header' />
            </NavLink>
            <h3>Random Beer!</h3>
            <div>
                <img className="beerSize" src={RandomBeer.image_url} alt="apartment" />
                <h1>{RandomBeer.name}</h1>
                <h3>{RandomBeer.tagline}</h3>
                <h4>{RandomBeer.first_brewed}</h4>
                <p>{RandomBeer.attenuation_level}</p>
                <p>{RandomBeer.description}</p>
                <h5>Contributed by: {RandomBeer.contributed_by}</h5>
            </div>
        </div>
    );
}

export default RandomBeer;