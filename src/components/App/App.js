import React, {Component} from "react";

import Search from "../Search/Search";
import FoundedFilms from "../Search/FoundedFilms";
import FilmInfo from "../FilmInfo/FilmInfo";
import InitData from "../data/InitData";
import SimpleBarReact from 'simplebar-react';

import './app.css'










export default class App extends Component{
    constructor(props) {
        super(props);
        this.state = {
            db: [
                    {
                        img: 'https://image.tmdb.org/t/p/w200/yguBaPk5V0nZCcSBthre4YFMAgk.jpg',
                        name: "Fight Club",
                        budget: 63000000,
                        id: 550
                    },
                    {
                        img: 'https://image.tmdb.org/t/p/w200/yguBaPk5V0nZCcSBthre4YFMAgk.jpg',
                        name: "Terminator",
                        budget: 63000000,
                        id: 551
                    },
                    {
                        img: 'https://image.tmdb.org/t/p/w200/yguBaPk5V0nZCcSBthre4YFMAgk.jpg',
                        name: "Glad Valakas",
                        budget: 63000000,
                        id: 552
                    }
                ],
            search: '',
            currFilm: {}
        }
        this.onSearch = this.onSearch.bind(this)
        this.clickOnCard = this.clickOnCard.bind(this)
    }


     onSearch(search){
        this.setState({search})
    }


    clickOnCard(currFilm){
        this.setState({
            currFilm: {...currFilm}
        })
    }

    render() {
        let {db, search, currFilm} = this.state

        const film = db.find(i => i.id === currFilm)

        return(
            <div className='container'>
                <div className='a_side'>
                    <Search
                        onSearch={this.onSearch}
                    />
                    <FoundedFilms
                        search={search}
                        currFilm={currFilm}
                        clickOnCard={this.clickOnCard}
                    />
                </div>
                <div className='film-info'>
                    <FilmInfo
                        currFilm={currFilm}
                        films={db}
                    />
                </div>

            </div>
        )
    }


}


