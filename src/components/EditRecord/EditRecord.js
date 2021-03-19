import React, {useEffect, useState} from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import axios from '../../Axios'
import { Link, Redirect, useHistory,useParams,useLocation } from "react-router-dom";
import CircularProgress from '@material-ui/core/CircularProgress';
import useCallApi from '../CustomHooks/useCallApi'
import Spinner from '@material-ui/core/LinearProgress';
import NavBar from '../../components/NavBar/NavBar';
import BigHeader from '../ReusableUI/BigHeader';
import moment from 'moment'

const EditRecord = ({gotData, editingMode='new'}) => {

  function getInitialValues () {
    let initialState={
      careerUrl:"",
      graduationDate:null,
      jobStartDate:null,
      specialization:"",
      universityName:"",
      jobTitle:"",
      companyName:"",
      careerUrl:"",
    
    }
    
    if(editingMode === 'new'){
    return initialState
    }
    
    initialState.graduationDate= gotData.graduationDate
    initialState.jobStartDate= gotData.jobStartDate
    initialState.specialization= gotData.specialization
    initialState.universityName= gotData.universityName
    initialState.jobTitle= gotData.jobTitle
    
    return initialState
    }
    
    // function handleFormDisable () {
    // let elen= employer.length
    // if(elen >=2 && elen <=20 && !isSubmitDisabled){
    //     return false 
    // }
    // return true
    // }
    
    const history= useHistory()
    
    const [universityName,setUniversityName]=useState(getInitialValues().universityName)
    const [specialization,setSpecialization]=useState(getInitialValues().specialization)
    const [jobTitle,setJobTitle]=useState(getInitialValues().jobTitle)
    const [jobStartDate,setjobStartDate]=useState(getInitialValues().jobStartDate)
    const [graduationDate,setGraduationDate]=useState(getInitialValues().graduationDate)
    const [companyName,setCompanyName]=useState(getInitialValues().companyName)
    const [careerUrl,setCareerUrl]=useState(getInitialValues().careerUrl)
    const [submitted,setSubmitted] =useState(false)
    
    console.log(graduationDate,'graduation Date')
    console.log(typeof(graduationDate),'graduation Date')
    console.log(moment(graduationDate).format(),'MOMEMT')
    
    const editMode = editingMode === 'edit'
    
    let commonFields ={
      universityName,
      specialization,
      jobStartDate:moment(jobStartDate).format(),
      jobTitle,
      graduationDate:moment(graduationDate).format()
      
      
    }
    
    
    function handleUpdateSubmit (e) {
    e.stopPropagation()
    e.preventDefault()
    setSubmitted(true)
    
    if(editMode) {
    
    axios.put('v1/record/editrecord',{...commonFields,_id:gotData._id})
            .then(res=>{
                console.log(res)
                setSubmitted(false)
                history.push('/jsplayground')
                // setData(res.data)
                // setIsLoading(false)
            })
            .catch(e=>{
                // setIsLoading(false)
                console.log(e)
                setSubmitted(false)
                alert(`Error Updating Record`)
            })
     }
     else {
      axios.post('v1/record/createnewrecord',
      {...commonFields,
      companyName,
      careerUrl
    
      })
      .then(res=>{
          console.log(res)
          setSubmitted(false)
          history.push('/jsplayground')
          // setData(res.data)
          // setIsLoading(false)
      })
      .catch(e=>{
          // setIsLoading(false)
          console.log(e)
          setSubmitted(false)
          alert(`Error Creating New Record`)
      })
      
     }
    
    }

    function handleDelete(e){
      axios.delete(`/v1/record/deleterecord?id=${gotData._id}`)
      .then(res=>{
        history.push('/jsplayground')
      })
    }

  return (
    <div className='new-edit-container'>
    <NavBar>
     <BigHeader 
     banner={editMode ? `Edit Record` : `New Record`} 
     />
     <div className='field-container' >
      <span className='edit-label'><label>University Name</label></span>
       <input type='text' size='60' onChange={(e)=>setUniversityName(e.target.value)} value={universityName}  
       placeholder='Enter University Name'></input>
       </div>

     <div className='field-container' >
      <span className='edit-label'><label>Specialization</label></span>
       <input type='text' size='60' onChange={(e)=>setSpecialization(e.target.value)} value={specialization}  
       placeholder='Enter Specialization'></input>
       </div>

    
     <div className='field-container' >
      <span className='edit-label'><label>Graduation Date</label></span>
       <input type='date' size='60' onChange={(e)=>setGraduationDate(e.target.value)} value={graduationDate}
       placeholder='When did you graduate?'></input>
       </div>


       {!editMode && <div>
        <div className='field-container' >
      <span className='edit-label'><label>Company Name</label></span>
       <input type='text' size='60' onChange={(e)=>setCompanyName(e.target.value)} value={companyName}
       placeholder='Who hired you?'></input>
       </div>

       <div className='field-container' >
      <span className='edit-label'><label>Career Url</label></span>
       <input type='text' size='60' onChange={(e)=>setCareerUrl(e.target.value)} value={careerUrl}
       placeholder='https://www.example.com'></input>
       </div>
       
       </div>}  

       <div className='field-container' >
      <span className='edit-label'><label>Job Title</label></span>
       <input type='text' size='60' onChange={(e)=>setJobTitle(e.target.value)} value={jobTitle }  
       placeholder='Respective Poistion of Employment'></input>
       </div>

       <div className='field-container' >
      <span className='edit-label'><label>Job Start Date</label></span>
       <input type='date' size='60' onChange={(e)=>setjobStartDate(e.target.value)} value={jobStartDate}
       placeholder=''></input>
       </div>

     <div className='field-container' >
       <Button disabled={submitted} onClick={(e)=>handleUpdateSubmit(e)} color="secondary">{editMode ? `Update` : `Submit`} </Button>
       </div>

       <div style={{alignContent:"center"}}>
         <Button onClick={(e)=>handleDelete(e)} color="danger">Delete Record</Button>
       </div>

     </NavBar>
  </div>
  );
}

export default EditRecord;