import React from "react";

const logo = 'https://upload.wikimedia.org/wikipedia/commons/a/a3/June_odd-eyed-cat.jpg'
const Creator = () => {

    return (
        <div className='about flex w-3/12'>
            <span className=''>Hello it's my first app</span>
            <img src={logo} alt="avatar" className='rounded-full '/>
        </div>
    )
}

export default Creator;