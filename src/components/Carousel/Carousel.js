import React, { useEffect, useState, } from 'react';
import magnolia from '../../magnolia.jpg'
import ggstan from '../../GilgitBaltistan.jpg'
import bigBend from '../../bigBend.png'


function Carousel(){

    let carouselArray = [magnolia,ggstan,bigBend]
    const [currentImage,setCurrentImage] = useState(0);

    function handleDisabledPrev(){
       return currentImage ===0? true : false
    }
    function handleDisabledNext(){
       return currentImage === carouselArray.length-1? true : false
    }

    function handleFirst(){
        return currentImage === 0? false : true
    }
    function handleSecond(){
        return currentImage === 1? false : true
    }
    function handleThird(){
        return currentImage === 2? false : true
    }

    
    
    return(
        <div style={{backgroundColor:"darkSlateGrey", padding:"10px"}}>
            <div style={{margin:"auto"}}>

            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
            <button onClick={()=>setCurrentImage(currentImage-1)} disabled={handleDisabledPrev()} style={{margin:"auto"}}>
            <i class="fa fa-chevron-circle-left"></i>                
                </button>          
            <img src={carouselArray[currentImage]} style={{height:"600px"}} alt=""></img>  
            <button onClick={()=>setCurrentImage(currentImage+1)} disabled={handleDisabledNext()} style={{margin:"auto"}}>
            <i class="fa fa-chevron-circle-right"></i>
                
                </button>          
            </div>
            <div style={{marginLeft:"400px"}}>
                <button disabled={handleFirst()} style={{margin:"2px"}}></button>
                <button disabled={handleSecond()} style={{margin:"2px"}}></button>
                <button disabled={handleThird()} style={{margin:"2px"}}></button>
            </div>
        </div>
    )
}

export default Carousel;