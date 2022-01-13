import React, {Component} from "react";
import './Search.css'


export default class Search extends Component{

    constructor(props) {
        super(props);

        this.state = {
            search: '',
            showRes: false
        }
        this.searchFilm = this.searchFilm.bind(this)
        this.showResults = this.showResults.bind(this)
    }

    searchFilm(e){
        const search = e.target.value
        this.setState({search})
        this.props.onSearch(search)
    }
    showResults(){

        this.setState({showRes: !this.state.showRes })
        this.props.showSearchRes(this.state.showRes)
    }

    render() {
        console.log(this.state.showRes)


        return(
            <div className='search'>
                <input type="search"
                       placeholder="Search..."
                       onChange={this.searchFilm}
                />
                <button onClick={this.showResults}/>
            </div>
        )
    }
}