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

         const {Employer,Career_Url,Job_Title,Job_Start_Date,University_Name,Graduation_Year,Specialization} = newObject;
        //  console.log(newObject,'NEW OBJECT BLAHH')

    return(
        <div>
            
            <div style={{border:"1px solid black", margin:"5px", padding:"4px", backgroundColor:"lightgrey", width:"40%"}}><Url url={Career_Url} text={'Career Site'} styleClass={'link'}/></div>
            <div style={{border:"1px solid black", margin:"5px", padding:"4px", backgroundColor:"lightgrey", width:"40%"}}><strong>Employer:</strong>{Employer}</div>
            <div style={{border:"1px solid black", margin:"5px", padding:"4px", backgroundColor:"lightgrey", width:"40%"}}><strong>Graduation Year:</strong> {Graduation_Year}</div>
            <div style={{border:"1px solid black", margin:"5px", padding:"4px", backgroundColor:"lightgrey", width:"40%"}}><strong>Job Start Date:</strong> {Job_Start_Date}</div>
            <div style={{border:"1px solid black", margin:"5px", padding:"4px", backgroundColor:"lightgrey", width:"40%"}}><strong>Job Title:</strong> {Job_Title}</div>
            <div style={{border:"1px solid black", margin:"5px", padding:"4px", backgroundColor:"lightgrey", width:"40%"}}><strong>Specialization:</strong> {Specialization}</div>
            <div style={{border:"1px solid black", margin:"5px", padding:"4px", backgroundColor:"lightgrey", width:"40%"}}><strong>University Name:</strong> {University_Name}</div>
            
        </div>
    )
}

export default RecordDetails