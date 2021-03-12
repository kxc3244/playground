import React, { useEffect, useState } from 'react';
import Card from './components/Card/Card'
import {v4 as uuidv4} from 'uuid';
import { BrowserRouter as Router, Switch, Route, Link, BrowserRouter, NavLink,useHistory } from 'react-router-dom';
import Form from './components/Form/Form'
import Home from './Home.js';
import Modal from './Modal';
import './bootcamp.scss'
import CardDetails from './components/CardDetails/CardDetails'
import {Button} from 'reactstrap'
import Checkbox from '@material-ui/core/Checkbox';
// import axios from 'axios'
import CircularProgress from '@material-ui/core/CircularProgress';
import axios from './Axios'
import {XYPlot, XAxis, YAxis, HorizontalGridLines, LineSeries, VerticalBarSeries} from 'react-vis';
// import RecordDetails from './components/RecordDetails/RecordDetails'
import Login from './Login'
import Logout from './Logout'






function Javascript_play() {  

      const [data,setData] = useState([]);
      const [careerUrl,setCareerUrl] =useState("");
      const [companyName,setcompanyName] =useState("");
      const [graduationYear,setGraduationYear] =useState("");
      const [jobStartDate,setJobStartDate] =useState("");
      const [jobTitle,setJobTitle] =useState("");
      const [specialization,setSpecialization] =useState("");
      const [universityName,setUniversityName] =useState("");
      const [isModelOpen,setIsModalOpen]=useState(false)
      const [viewCurrentRecord,setViewCurrentRecord]=useState({})
      const [searchText,setSearchText]=useState("")
      const [nextCursor, setNextCursor] = useState(null)
      const [searchInvoked,setSearchInvoked]=useState(false)
      const [loading, setLoading] = useState(true)
      const [isClear,setIsClear]  = useState(false)

      // const [isDataLoading, setIsDataLoading] = useState(false)

      // *********************************************************

      


            const [isSearching, setIsSearching] = useState(false);
               
            function handleSearch () {
               setSearchInvoked(true)
               setLoading(true)
           
               axios.get(`/v1/record/searchrecord?searchKeyword=${searchText}`)
               .then(res=>{
                   console.log(res)
                   setData(res.data)
                   setLoading(false)
           
           })
               .catch(e=>{
                   setLoading(false)
                   console.log(e)
               }) 
           
           }


           function getNext(){
            setLoading(true)
            axios.get(`v1/record/getallrecords?next_cursor=${nextCursor}`)
        .then(res=>{
            console.log(res)
            let copyData=[...data,...res.data]
            setData(copyData)
            setLoading(false)
        })
        .catch(e=>{
            setLoading(false)
            console.log(e)
        })
        }

        function handleKeyPress (e) {
         if(e.which === 13 || e.keyCode === 13){
             handleSearch();
         }
         }
               

               

         function handleClear(){
            setNextCursor(null)
            setIsClear(!isClear)
            setIsSearching(false)
            setSearchText("")
            setSearchInvoked(false)
            }

         
         useEffect(()=>{
              axios.get(`/v1/record/getallrecords?next_cursor=${nextCursor}`)
              .then(res=>{
               //   console.log(res.data,"THIS IS THE DATA")
                 setData(res.data)
                 setLoading(false)
               })
               .catch(e=>{
                  console.log(e)
                  setLoading(false)})
               },[isClear])


         useEffect(()=>{
            if(data && data.length) {
                  const lastElemId = data[data.length-1]._id
               setNextCursor(lastElemId)
            }
            
            },[data])

         //**************************************************************************************************** */

              
               
               
               
       return (
          <div>
             <XYPlot width={300} height={300} xType="ordinal">
            <HorizontalGridLines />
            <VerticalBarSeries
               data={[
                  { x: "january", y: 10 },
                  { x: "february", y: 5 },
                  { x: "march", y: 15 }
               ]}
            />
            <XAxis />
            <YAxis />
            </XYPlot>
             <div>
            <Login />
            <Logout />
            <input autoFocus placeholder='Search' onKeyPress={(e)=>handleKeyPress(e)}  value={searchText} style={{width:"20%"}} onChange={(e)=>setSearchText(e.target.value)}/>  
            <span style={{marginLeft:'20px'}}><Button disabled={searchInvoked} onClick={()=>handleSearch()} color="primary">Search</Button></span>
            {searchInvoked && <span style={{marginLeft:'20px'}}>
               <Button onClick={()=>handleClear()} color="primary">Clear</Button>
            </span>
            }
            </div>
                <div>
                   data length::: {data.length}                  
                </div>
            Here Is a List of Companies 
            <div style={{margin:'20px',textAlign:'center'}}>
            <Button onClick={()=>getNext()} color="danger">See more...</Button>
            </div>
            <div>
               {loading?<CircularProgress /> : false}
               {/* {
               data.map((i,idx,arr)=>{
                  const {companyName,careerUrl,jobTitle,id,graduationYear,universityName,specialization,jobStartDate} =i;
                  companyNameMap.set(id,companyName) */}

                  {/* return ( */}
                      <div className='clickCard'>
                      <Card data={data}/>
                      </div>
                      {/* ) */}
{/*                       
                  }) 
                   }                 */}
            </div>
            <div style={{margin:'20px',textAlign:'center'}}>
            <Button onClick={()=>getNext()} color="danger">See more...</Button>
            </div>
          </div>
       )
    
  }
  export default Javascript_play;