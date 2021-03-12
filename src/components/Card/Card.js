import React, { useState } from 'react'; 
// import './card.scss'
import Url from '../Url/index'
import PropTypes from 'prop-types'
// import '../../bootcamp.scss'

// function Card({companyNameMap,careerUrl,jobTitle,id,graduationYear,universityName}){

//     const [theme,setTheme] = useState('lighttheme')

//                  return( 
                    
//                       <div className={theme}> 
                        
//                             <div><Url url={careerUrl} text={'Career Site'} styleClass={'link'}/></div>
//                             <div>{companyNameMap.get(id)}</div>
//                             <div>{universityName}</div>
//                             <div>{jobTitle}</div>     
//                             <div>{graduationYear}</div>
//                     </div>                 
//                  )
             
     
// }

// Card.propTypes = {

//     careerUrl: PropTypes.string,
//     jobTitle: PropTypes.string
// }

// import React from 'react';
import { Table } from 'reactstrap';


const Card = ({data}) => {

const [currentIndex,setCurrentIndex] = useState(1);

  return (

    
    <Table hover dark striped>
      <thead>
        <tr>
          <th style={{fontWeight:"bold"}}>Employer</th>
          <th style={{fontWeight:"bold"}}>Job Title</th>
          <th style={{fontWeight:"bold"}}>Job Start Date</th>
          <th style={{fontWeight:"bold"}}>University Name</th>
          <th style={{fontWeight:"bold"}}>Graduation Year</th>
          <th style={{fontWeight:"bold"}}>Specialization</th>
          <th style={{fontWeight:"bold"}}>Career Link</th>
        </tr>
      </thead>
      <tbody>
          {data.map((i)=>{
              console.log(i);
        return(

        <tr>
          <td>{i.company.companyName}</td>
          <td>{i.jobTitle}</td>
          <td>{i.jobStartDate}</td>
          <td>{i.universityName}</td>
          <td>{i.graduationYear}</td>
          <td>{i.specialization}</td>
          <td><a href={i.company.careerUrl}>Apply</a></td>
        </tr>
        )
    })}
      </tbody>
    </Table>
  );
}

// export default Example;

export default Card;