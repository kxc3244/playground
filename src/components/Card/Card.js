import React, { useState } from 'react'; 
import Student_Data from '../../Student_Data.json'
// import './card.scss'
import Url from '../Url/index'
import PropTypes from 'prop-types'
import '../../bootcamp.scss'

function Card({EmployerMap,Career_Url,Job_Title,id,fav,setFav,deleteCard,Graduation_Year}){

    
    // console.log(id);
    const [theme,setTheme] = useState('lighttheme')


    function handleFavClick({EmployerMap,id,e,setTheme}){

        e.stopPropagation();

        const copyFav = [...fav]
        if(copyFav.includes(EmployerMap.get(id))){
            window.alert('Already Included in the Favorites')
        } else{            
            copyFav.push(EmployerMap.get(id));
        }
        // console.log(EmployerMap);
        // copyFav[0]==='You dont have any yet'? copyFav.pop():setFav(copyFav);
        setFav(copyFav);
        setTheme('darktheme')
    }

    function handleDeleteFav({EmployerMap,id,e,setTheme}) {
        const copyFav = [...fav]
        e.stopPropagation();
        if(!copyFav.includes(EmployerMap.get(id))){
            window.alert('It is not here why would you try to remove it?')
        } else {
        const index = copyFav.indexOf(EmployerMap.get(id));
        if (index > -1) {
        copyFav.splice(index, 1);
        }
        setFav(copyFav);
        setTheme('lightheme')
        }
    }
    


    
        
                 return( 
                    
                      <div className={theme}> 
                        
                            <div><Url url={Career_Url} text={'Career Site'} styleClass={'link'}/></div>
                            <div>{EmployerMap.get(id)}</div>
                            <div>{Job_Title}</div>     
                            <div>{Graduation_Year}</div>
                            <button onClick={(e)=>handleFavClick({EmployerMap,id,e,setTheme})}>Favorite</button> 
                            <button onClick={(e)=>handleDeleteFav({EmployerMap,id,e,setTheme})}>Delete Favorite</button>
                            <button onClick={(e)=>deleteCard(e,id)}>Delete Record</button>
                    </div>                 
                 )
             
     
}

Card.propTypes = {

    Career_Url: PropTypes.string,
    Job_Title: PropTypes.string
}

export default Card;