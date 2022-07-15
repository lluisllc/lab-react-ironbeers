import React from "react";
import beer1 from "../assets/beers.png"
import beer2 from "../assets/random-beer.png"
import beer3 from "../assets/new-beer.png"


function Home() {
    return (
        <div>
            <img src={beer1} alt='Beers' />
            <br></br>
            <a href="/beers">Beers List</a>
            <p>Lorem ipsum 1</p>

            <img src={beer2} alt='rndBeers' />
            <br></br>
            <a href="/random-beer">Get a random beer</a>
            <p>Lorem ipsum 2</p>

            <img src={beer3} alt='newBeer' />
            <br></br>
            <a href="/new-beer">Send a new beer!</a>
            <p>Lorem ipsum 3</p>
        </div>
    )
}

export default Home;