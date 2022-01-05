import React from "react";

const movieDB = require('moviedb')('4f6180974989b4115cfd59034eb82ace')

let film = movieDB.searchMovie({query: 'Alien'}, (err, res) => {
    console.log(res);
})
console.log(film)
const App = () => {
    return(
        <div>
            <span>
                <h1>${film}</h1>
            </span>
        </div>
    )
}

export default App
