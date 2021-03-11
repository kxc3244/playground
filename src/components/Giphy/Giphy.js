import React, { useEffect, useState, } from 'react';


function Giphy(){

    const[searchText,setSearchText] = useState();
    const[mdata,setData] = useState([])

    function handleSearch(){
        fetch(`https://api.giphy.com/v1/gifs/search?q=${searchText}&api_key=y1ZFwiomdYKWy80gtSxU4iEdv165yeOD`)
        .then(response => response.json())
        .then(data => setData(data));
        // .then(data.map(i)=>{})
        // renderImage();

    }

    // function renderImage(){

        

    // }

    console.log(mdata)


    return (
        <div>
            <input autoFocus placeholder='Search Image' value={searchText} onChange={(e)=>setSearchText(e.target.value)}/>
            <button onClick={handleSearch()}>Search</button>
        </div>
    )
}

export default Giphy