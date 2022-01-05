import React, {Component} from "react";

const movieDB = require('moviedb')('4f6180974989b4115cfd59034eb82ace')

let film = movieDB.searchMovie({query: 'Alien'}, (err, res) => {
    console.log(res);
})


export default class Search extends Component{
    componentDidMount() {
        let db = require('moviedb')('4f6180974989b4115cfd59034eb82ace')
        this.setState(
            {db: db}
        )
    }

    constructor(props) {
        super(props);
        this.state = {
            db: {},
            results: []
        }
        this.searchFilm = this.searchFilm.bind(this)
    }

    searchFilm(){
        let {db, results} = this.state
        console.log([db, results])
        let films = db
    }


    render() {


        return(
            <div>
                <div className='search'>
                    <input type="text"/>
                    <button onClick={this.searchFilm}>Найти!</button>
                </div>
                <div className='result'>

                </div>
            </div>
/*            <SearchInput />
            <SearchResult />*/
        )
    }
}