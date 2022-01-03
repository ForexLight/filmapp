import React from "react";
import Creator from "./Creator/Creator";
import Search from "./Search/Search"



const NavBar = () => {
   

    return (
        <nav className='flex justify-between'>

            <span className='w-3/12'>IMDB</span>
            <Search />
            <Creator />
        </nav>
    )
}

export default NavBar;