import React, {Component} from "react";
import './Search.css'


export default class Search extends Component{
    constructor(props) {
        super(props);
        this.state = {
            search: ''
        }
        this.searchFilm = this.searchFilm.bind(this)
    }

    searchFilm(e){
        const search = e.target.value
        this.setState({search})
        this.props.onSearch(search)
    }

    render() {


        return(
            <div className='search'>
                <input type="search"
                       placeholder="Search..."
                       onChange={this.searchFilm}
                />
            </div>
        )
    }
}