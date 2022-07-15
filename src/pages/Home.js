import React from "react";


function Home() {
    return (
        <div>
            <img src="../assets/beers.png" alt='Beers' />
            <a href="/beers">Beers List</a>
            <p>Lorem ipsum 1</p>
            <img src="../assets/random-beer.png.png" alt='rndBeers' />
            <a href="/random-beer">Get a random beer</a>
            <p>Lorem ipsum 2</p>
            <img src="../assets/new-beer.png" alt='Beers' />
            <a href="/new-beer">Send a new beer!</a>
            <p>Lorem ipsum 3</p>
        </div>
    )
}

export default Home;