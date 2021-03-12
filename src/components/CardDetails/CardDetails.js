import React , {useState} from 'react';
import './cardDetails.scss';
import Url from '../Url/index';
import PropTypes from 'prop-types'; // ES6



function CardDetails({companyName, careerUrl, jobTitle, jobStartDate,setFav,Specialization,
   fav,Id,deleteRecord,universityName}) 
   
   {

 

 return (
    <div>
     {/* <Url
     careerUrl={careerUrl}
     mystyle="new-style"
     >
    Click Here 
     </Url>     */}
    <div><Url url={careerUrl} text={'Career Site'} styleClass={'link'}/></div>
    <div> {companyName}</div>   
    <div>{jobTitle}</div>
    <div>{jobStartDate}</div>
    <div>{Specialization}</div>
    <div>{universityName}</div>
    <div>{jobTitle}</div>
    {/* <button onClick={(e)=>handleFavoriteClick(e,Id)}>Favorite</button>
    <button onClick={(e)=>handleUnFavoriteClick(e,Id)}>Unfavorite</button>
    <button onClick={()=>deleteRecord(Id)}>Delete Record</button> */}
    
    
    </div>)
}

export default CardDetails
 
CardDetails.propTypes = {
companyName:PropTypes.string.isRequired,
careerUrl:PropTypes.string,
jobTitle:PropTypes.string,

}