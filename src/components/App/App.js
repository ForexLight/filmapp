import React, {Component} from "react";
import {BrowserRouter as Router, Routes, Route  } from "react-router-dom";
import Header from "../Header/Header";
import Home from "../Home/Home";
import Main from "../Main/Main";
import FilmData from "../FilmData/FilmData";
import Footer from "../Footer/Footer";


function App(props) {

    return(
        <>
           <Router>
               <Header />
               <Routes>
                   <Route exact path="/" element={<Main />} />
                   <Route path="/film" element={<Home />} />
                   <Route element={<FilmData />}>
                       <Route exact path="/film/:id"/>
                   </Route>
               </Routes>
               <Footer />
           </Router>
        </>
    )
}











/*
class App extends Component{

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


}*/


export default App;


