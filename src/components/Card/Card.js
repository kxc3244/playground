import React, { useState } from 'react'; 
// import './card.scss'
import Url from '../Url/index'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
// import '../../bootcamp.scss'


import { Table } from 'reactstrap';


const Card = ({data}) => {

const [currentIndex,setCurrentIndex] = useState(1);

  return (

    
    <Table hover dark striped>
      <thead>
        <tr>
          <th style={{fontWeight:"900"}}>Employer</th>
          <th style={{fontWeight:"900"}}>Job Title</th>
          <th style={{fontWeight:"900"}}>Job Start Date</th>
          <th style={{fontWeight:"900"}}>University Name</th>
          <th style={{fontWeight:"900"}}>Graduation Year</th>
          <th style={{fontWeight:"900"}}>Specialization</th>
          <th style={{fontWeight:"900"}}>Career Link</th>
          <th style={{fontWeight:"900"}}>Edit</th>
        </tr>
      </thead>
      <tbody>
          {data.map((i)=>{
              // console.log(i);
        return(

        <tr>
          <td>{i.company.companyName}</td>
          <td>{i.jobTitle}</td>
          <td>{i.jobStartDate}</td>
          <td>{i.universityName}</td>
          <td>{i.graduationYear}</td>
          <td>{i.specialization}</td>
          <td><a href={i.company.careerUrl}>Apply</a></td>
          <td><Link to={`/editrecord/${i._id}`}>Edit</Link></td>
        </tr>
        )
    })}
      </tbody>
    </Table>
  );
}

// export default Example;

export default Card;