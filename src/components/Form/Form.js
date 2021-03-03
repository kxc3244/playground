import ReactDOM from 'react-dom';
import React, { useState, Component, useEffect } from 'react';
import {Button} from 'reactstrap'




function Form({careerUrl,
    setCareerUrl,
    employer,
    setEmployer,
    graduationYear,
    setGraduationYear,
    jobStartDate,
    setJobStartDate,
    jobTitle,
    setJobTitle,
    specialization,
    setSpecialization,
    universityName,
    setUniversityName,
    handleSubmit}) {
    
    // const [careerUrl,setCareerUrl] =useState("");
    // const [employer,setEmployer] =useState("");
    // const [graduationYear,setGraduationYear] =useState("");
    // const [jobStartDate,setJobStartDate] =useState("");
    // const [jobTitle,setJobTitle] =useState("");
    // const [specialization,setSpecialization] =useState("");
    // const [universityName,setUniversityName] =useState("");
    // console.log('Hello')

    // componentDidMount {

    // useEffect(()=>{
        
        // const {careerUrl,
        //         setCareerUrl,
        //         employer,
        //         setEmployer,
        //         graduationYear,
        //         setGraduationYear,
        //         jobStartDate,
        //         setJobStartDate,
        //         jobTitle,
        //         setJobTitle,
        //         specialization,
        //         setSpecialization,
        //         universityName,
        //         setUniversityName,
        //         handleSubmit} = this.props.location.state;
    // })
    // }


    function handleDisable(){
        if(employer.length <=100 && employer.length >=2){
            return false;
        }
        return true;
    }

    
       return (
          <div>
              <div>
                {/* Career URL */}
                <label for="career_url">Career Url:</label><br></br>
                <input type="text" id="career_url" name="career_url" onChange={(e)=>setCareerUrl(e.target.value)} value={careerUrl} placeholder='Valid link with https://'></input><br></br>

                {/* Employer */}
                <label for="Employer">Employer:</label><br></br>
                <input type="text" id="Employer" name="Employer" onChange={(e)=>setEmployer(e.target.value)} value={employer} placeholder ='ABC Company' required></input><br></br>

                {/* Graduation Year */}
                <label for="gYear">Graduation Year:</label><br></br>
                <input type="text" id="gYear" name="gYear" onChange={(e)=>setGraduationYear(e.target.value)} value={graduationYear} placeholder='YYYY'></input><br></br>

                {/* Job Start Date  */}
                <label for="jbDate">Job Start Date:</label><br></br>
                <input type="text" id="jbDate" name="jbDate" onChange={(e)=>setJobStartDate(e.target.value)} value={jobStartDate} placeholder='MM-DD-YYYY'></input><br></br>

                {/* Job Title */}
                <label for="jbTitle">Job Title:</label><br></br>
                <input type="jbTitle" id="jbTitle" name="jbTitle" onChange={(e)=>setJobTitle(e.target.value)} value={jobTitle} placeholder='Cool Guy'></input><br></br>

                {/* Specialization  */}
                <label for="specialization">Specialization:</label><br></br>
                <input type="text" id="specialization" name="specialization" onChange={(e)=>setSpecialization(e.target.value)} value={specialization} placeholder='whatever you want'></input><br></br>

                {/* University Name  */}
                <label for="uName">University Name:</label><br></br>
                <input type="text" id="uName" name="uName" onChange={(e)=>setUniversityName(e.target.value)} value={universityName} placeholder='University of Blah and Blah'></input><br></br><br></br>

                {/* <Button disabled={handleDisable()} id="SubmitButton" type="submit" onClick={()=>handleSubmit()} color="primary">Submit</Button>                 */}
            </div>
          </div>
       )
    
  }
  export default Form;