import React, {useEffect, useState} from "react";
import styled from "styled-components";

import SearchResults from "./SearchResults/SearchResults";




function Search(){

    const [searchQuery, setSearchQuery] = useState('')
    const [searchRes, setSearchRes] = useState([])

    useEffect(() => {
        if(searchQuery === ''|| searchQuery === ' '){
            setSearchRes([])
        }
             fetch(`https://api.themoviedb.org/3/search/movie?api_key=4f6180974989b4115cfd59034eb82ace&language=en-US&query=${searchQuery}&page=1&include_adult=false`)
                .then(res => res.json()).then(res => setSearchRes(res.results.slice(0, 10)))
        },[searchQuery])
     function onSearch(e){

            setSearchQuery(e.target.value)

    }
    function onClose(){
        setSearchQuery('')
        setSearchRes([])
    }



    return(
        <>
            <input type="text" onChange={onSearch} value={searchQuery}/>
            <SearchResults results={searchRes} onClose={onClose}/>
        </>
    )
}

export default Search