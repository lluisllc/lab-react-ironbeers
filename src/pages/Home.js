import React from "react";
import beer1 from "../assets/beers.png"
import beer2 from "../assets/beers.png"
import beer3 from "../assets/beers.png"


function Home() {
    return (
        <div>
            <img src={beer1} alt='Beers' />
            <br></br>
            <a href="/beers">Beers List</a>
            <p>Lorem ipsum 1</p>

            <img src="../assets/random-beer.png" alt='rndBeers' />
            <a href="/random-beer">Get a random beer</a>
            <p>Lorem ipsum 2</p>

            <img src="../assets/new-beer.png" alt='newBeer' />
            <a href="/new-beer">Send a new beer!</a>
            <p>Lorem ipsum 3</p>
        </div>
    )
}

export default Home;