import React, {Component} from "react";
import Search from "../search/Search";

/*const movieDB = require('moviedb')('4f6180974989b4115cfd59034eb82ace')

let film = movieDB.searchMovie({query: 'Alien'}, (err, res) => {
    console.log(res);
})*/
//console.log(film)

export default class App extends Component{
    constructor(props) {
        super(props);
        this.state = {
            db: 1//movieDB
        }
    }



    render() {
        return(
            <Search db={this.db}/>
        )
    }


}


