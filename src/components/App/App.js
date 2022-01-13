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
            db: [],
            search: '',
            currFilm: {},
            SearchRes: true
        }
        this.onSearch = this.onSearch.bind(this)
        this.clickOnCard = this.clickOnCard.bind(this)
        this.showSearchRes= this.showSearchRes.bind(this)
    }

    showSearchRes(SearchRes){
        this.setState({SearchRes})
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

        let {db, search, currFilm, showSearchRes} = this.state



        return(
            <div className='container'>
                <div className='a_side'>
                    <Search
                        onSearch={this.onSearch}
                        showSearchRes={this.showSearchRes}
                    />
                   
                        <FoundedFilms
                        search={search}
                        currFilm={currFilm}
                        clickOnCard={this.clickOnCard}/>


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


