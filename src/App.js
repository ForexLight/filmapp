import React from "react";
import {BrowserRouter as Router, Routes, Route  } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Main from "./components/Main/Main";
import FilmData from "./components/FilmData/FilmData";
import Footer from "./components/Footer/Footer";
import ScrollToTop from "./components/shared/ScrollToTop";


function App() {

    return(
        <>
            <Router>
                <Header />
                <ScrollToTop />
                <Routes>
                    <Route exact path="/" element={<Main />} />
                    <Route path="/film" element={<Home />} />
                    <Route path="/film/:id" element={<FilmData />} />
                </Routes>
            </Router>
            <Footer />
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


