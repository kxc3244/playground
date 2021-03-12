import React, { useEffect, useState, } from 'react';
import { BrowserRouter as Router, Switch, Route, Link, BrowserRouter, NavLink, useParams } from 'react-router-dom';
import instance from '../../Axios'
import Url from '../Url/index'
import Box from '@material-ui/core/Box';


function RecordDetails(){

    const {id} = useParams();

    // let newObject = []
    const [newObject,setNewObject] = useState([])

     instance.get(`/records/?id=${id}`)
         .then(res=>{
            // console.log(res.data,'THIS IS AN OBJECT')
            let copyData = res.data[0]
            setNewObject(copyData);
         })

         const {companyName,careerUrl,jobTitle,jobStartDate,universityName,graduationYear,Specialization} = newObject;
        //  console.log(newObject,'NEW OBJECT BLAHH')

    return(
        <div>
            
            <div style={{border:"1px solid black", margin:"5px", padding:"4px", backgroundColor:"lightgrey", width:"40%"}}><Url url={careerUrl} text={'Career Site'} styleClass={'link'}/></div>
            <div style={{border:"1px solid black", margin:"5px", padding:"4px", backgroundColor:"lightgrey", width:"40%"}}><strong>companyName:</strong>{companyName}</div>
            <div style={{border:"1px solid black", margin:"5px", padding:"4px", backgroundColor:"lightgrey", width:"40%"}}><strong>Graduation Year:</strong> {graduationYear}</div>
            <div style={{border:"1px solid black", margin:"5px", padding:"4px", backgroundColor:"lightgrey", width:"40%"}}><strong>Job Start Date:</strong> {jobStartDate}</div>
            <div style={{border:"1px solid black", margin:"5px", padding:"4px", backgroundColor:"lightgrey", width:"40%"}}><strong>Job Title:</strong> {jobTitle}</div>
            <div style={{border:"1px solid black", margin:"5px", padding:"4px", backgroundColor:"lightgrey", width:"40%"}}><strong>Specialization:</strong> {Specialization}</div>
            <div style={{border:"1px solid black", margin:"5px", padding:"4px", backgroundColor:"lightgrey", width:"40%"}}><strong>University Name:</strong> {universityName}</div>
            
        </div>
    )
}

export default RecordDetails