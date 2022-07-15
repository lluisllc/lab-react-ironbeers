import { useState, useEffect } from "react";
import axios from 'axios';
import { NavLink, Link } from 'react-router-dom'
import Header from "../assets/header.png"


function Beers() {
    const [BeerList, setBeerList] = useState([]);
    
    useEffect(() => {
        axios
          .get("https://ih-beers-api2.herokuapp.com/beers")
          .then((response) => {
            setBeerList(response.data);
            
          });
      }, []); 
    
      return (
        <div>
        <NavLink to="/">
        <img src= {Header} alt='Header'/>
        </NavLink>

          <h3>List of beers:</h3>
    
          {BeerList.map((beer) => {
            return (
              <div>
                <img className="beerSize" src={beer.image_url} alt="apartment" />
                <h1>{beer.name}</h1>
                <h3>{beer.tagline}</h3>
                <h5>Contributed by: {beer.contributed_by}</h5>
                <Link to={`/beers/${beer._id}`}>Beer's details</Link>
                <hr></hr>
              </div>
            );
          })}
        </div>
      );
    }
    
    export default Beers;
    