import { useState, useEffect } from "react";
import axios from 'axios';
import { NavLink } from 'react-router-dom'
import Header from "../assets/header.png"


function Beers() {
    const [BeerList, setBeerList] = useState([]);
    
    useEffect(() => {
        axios
          .get("https://ih-beers-api2.herokuapp.com/beers")
          .then((response) => {
            console.log("response.data", response.data);
            setBeerList(response.data);
            
          });
      }, []); 
    
      return (
        <div>
        <NavLink to="/">
        <img src= {Header} alt='Header'/>
        </NavLink>

          <h3>List of beers</h3>
    
          {BeerList.map((beer) => {
            return (
              <div>
                <img className="beerSize" src={beer.image_url} alt="apartment" />
                <h1>{beer.name}</h1>
                <h3>{beer.tagline}</h3>
                <h5>{beer.contributed_by}</h5>
                <a href="/beers/:beerId">Beer's details</a>
              </div>
            );
          })}
        </div>
      );
    }
    
    export default Beers;
    