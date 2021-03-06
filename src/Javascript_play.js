import React, { useEffect, useState } from 'react';
import Student_Data from './Student_Data.json'
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
import RecordDetails from './components/RecordDetails/RecordDetails'






function Javascript_play() {  
   
     function switchCase(str){
        switch (str) {
           case 'Bad':
              console.log('Your credit score below 650');              
              break;
            
            case 'Good':
               console.log('Your credit score is between 650 to 700');
               break;
            
            case 'Excellent': 
               console.log('Your credit score is above 700');
               break;
        
           default:
              console.log('Invalid Input ');
              break;
        }
     }

     switchCase('Good');

     function calculateLetters(str){
        let count = new Map();
        for(let i=0; i < str.length; i++){
           if(!count.has(str.charAt(i))){
              count.set(str.charAt(i),0)
           }
           count.set(str.charAt(i),count.get(str.charAt(i))+1);
        }
        return count;
     }

     function capitalizeLetter(str){
      str = str.toLowerCase()
      .split(' ')
      .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
      .join(' ');
      
      return str;
     }

     function calculateLength(str,char) {
        let wordArray = str.split(' ');
        for(let i=0;i<wordArray.length;i++){
           if(wordArray[i].charAt(0)=== char){
              return wordArray[i].length;
           }
        }
        return 'Word not found';
     }

     console.log(capitalizeLetter('this is a test scentence for task 4'),'= Capitalized');

     console.log(calculateLetters('Please'),'= Occurence of each character');

     console.log(calculateLength('When boy went to boarding school, he was fine','b'), '= Length of word');

     function getThreeLetters(str){
        let centerIndex = Math.round(str.length/2) -1;
        return str.charAt(centerIndex-1)+str.charAt(centerIndex)+str.charAt(centerIndex+1);
     }

     console.log(getThreeLetters('aacjddfdd'), '= Mid Three Letter');

     function checkPrimeAndGiveNext(n){
        let  next = null;

        

        for(let i=n+1; i<=100;i++){
           if(primeHelper(i)){
              next = i;
              break;
           }
        }

        return [primeHelper(n),next];

     }

     function primeHelper(n){
      let flag=true;
      for(let i=2; i<n; i++){
         if(n%i===0) flag=false;
      }

      return flag;
     }

     console.log(checkPrimeAndGiveNext(47));

     function countDigits(str){
      let count = new Map();
      let foo=0
      for(let i=0; i < str.length; i++){
         if(!count.has(str.charAt(i))){
            count.set(str.charAt(i),0)
            foo++;
         }
         count.set(str.charAt(i),count.get(str.charAt(i))+1);
      }
      return foo;

     }

     console.log(countDigits('aaabbc'),'Count Digits in encoding');

     function strinManipulation(str){
        for(let i=0;i<str.length;i++){
           str =str.replace(str.charAt(i),String.fromCharCode(str.charCodeAt(i)+1));
           if(str.charAt(i)===str.charAt(i).toUpperCase()){
           str  =str.replace(str.charAt(i),str.charAt(i).toLowerCase());
           } else{
              str = str.replace(str.charAt(i),str.charAt(i).toUpperCase());              
           }
        }
        return str;
     }

     console.log(strinManipulation('cchme'),'<---cchme');



      
     const regex = /a{2,}|b{2,}|c{2,}|d{2,}|e{2,}|f{2,}|g{2,}|h{2,}|i{2,}|j{2,}|k{2,}|l{2,}|m{2,}|n{2,}|o{2,}|p{2,}|q{2,}|r{2,}|s{2,}|t{2,}|u{2,}|v{2,}|w{2,}|x{2,}|y{2,}|z{2,}/gmi;
      const str = `Three girls went to forest .Monkey said yee yaaaaaw `;
      let m;
      let k=[];

      while ((m = regex.exec(str)) !== null) {
         // This is necessary to avoid infinite loops with zero-width matches
         if (m.index === regex.lastIndex) {
            regex.lastIndex++;
         }
         
         // The result can be accessed through the `m`-variable.
         m.forEach((match, groupIndex) => {
            // console.log(`${match}`);
            k.push(match);
         });
      }

      console.log(k.join(''));


   // const regex1 = /(aws)/gmi;
   // const regex2 = /(azure)/gmi;
   // const regex3 = /(gcp)/gmi;
   // const str = `http://qa-aws01pub.mockery.com/2017/11/16/federal-reserve-president-says-country-needs-more-immigration-to-save-economy.html%22`;
   // let m;
   
   // if(regex1.test(str)){
   //    console.log('hosted on aws');
   // } else if(regex2.test(str)) {
   //    console.log('hosted on azure');
   // } else if(regex3.test(str)){
   //    console.log('hosted on google cloud platform');
   // } else {
   //    console.log('no hosting platform found');
   // }

//    const regex = /(\d{1,4}([.\/])\d{1,2}([.\/])\d{1,4})/gmi;
//    const str = `http://qa-aws01pub.mockery.com/2017/11/16/federal-reserve-president-says-country-needs-more-immigration-to-save-economy.html%22`;
//    let m;

//    while ((m = regex.exec(str)) !== null) {
//       // This is necessary to avoid infinite loops with zero-width matches
//       if (m.index === regex.lastIndex) {
//          regex.lastIndex++;
//       }
      
//       // The result can be accessed through the `m`-variable.
//       console.log(m[0])
// }

   // const str = `http://qa-aws01pub.mockery.com/2017/11/16/federal-reserve-president-says-country-needs-more-immigration-to-save-economy.html%22`;
   // const regex = /[\/]\d{1,4}[\/]/gmi;
   // let m = regex.exec(str)[0];
   // let sol= m.replaceAll('/',"");
   // let ans =str.replace(sol, `Year${sol}`);

   // console.log(ans);
  

   //  console.log(parseInt((19000-555)*Math.random()+555))

   //  function something(x){

   //    const now = new Date()  
   //    const secondsSinceEpoch = Math.round(now.getTime() / 1000);
   //    let subtract= Math.abs(x-secondsSinceEpoch)
   //    let drop = Math.floor(subtract / (Math.pow(10,parseInt(Math.log10(subtract))-3+1)))
   //    console.log(drop,'first digits');
   //    let cube = Math.pow(drop,3);
   //    let max = Math.max(...cube.toString().split(""));
   //    let min = Math.min(...cube.toString().split(""));
   //    let ans ;

           
   //    if(min<max){
   //       ans = Math.round((min/max)*now.getDate())
   //    } else {
   //       ans = Math.round((min/max)*now.getDate())
   //    }

   //    console.log(ans);

   // let reactBootcamp ={
   //    name:'React Bootcamp',
   //    startDate:"02/15/2021",
   //    instructorFirstName:"Sachin", 
   //    instructorLastName:"Rajgire",
   //    startTime:"6.30PMEST",
   //    timeElapsedSinceStart: function(){
   //          let a =Date.now() - this.startTime;
   //          return a;
   //    },
   //    professorName: function(){
   //       return this.instructorFirstName + this.instructorLastName;
   //    }
   //    }


   //    reactBootcamp.course_url = "https://www.wynisco.com";
   //    console.log(reactBootcamp);
   //    console.log(reactBootcamp.professorName());

   function Bootcamp(firstName, lastName ,description, startDate, endDate){

      this.firstName = firstName;
      this.lastName = lastName;
      this.description = description;
      this.startDate = startDate;
      this.endDate = endDate;
   }

   Bootcamp.prototype.calculateElapsedTime = function(){
      let today = new Date().toLocaleDateString()
      return today-(this.startDate);
   }
      
   // const feb15React = new Bootcamp('React', 'Bootcamp','Full stack Development', '02/15/2021', '30March2021');
   // console.log(feb15React);
   // console.log(feb15React.calculateElapsedTime());

   // let obj1 ={bootCampStatus:"inProgress",estCompletion:"30thMarch"}
   // let obj2 = Object.assign(obj1,{isCompleted:false})


   // // for(const key in obj2) {
   // //    console.log(`This is ${key} and this is the ${obj2[key]} for it`);
   // // }

   // // for(let i=0; i<Object.keys(obj2).length;i++){
   // //    console.log(`This is ${Object.keys(obj2)[i]} and this is the ${obj2[Object.keys(obj2)[i]]} for it`)
   // // }

   // console.log(Object.keys(obj2))
   // console.log(Object.values(obj2))
   // console.log(Object.entries(obj2))

   // const testArr = [

   //    {bootCampName:"Front End React",startDate:'2/15/2020',instructorName:'Sachin Rajgire',schedule:{
   //    startTime:"6.30PMEST",
   //    endTime:"11.30PMEST"
   //    }},
      
   //    {bootCampName:"Data Analyst",startDate:'2/15/2020',instructorName:'Messi',
   //    schedule:{
   //    startTime:"6.30PMEST",
   //    endTime:"11.30PMEST"
   //    }},
   //    {bootCampName:"Full Stack Developer",startDate:'2/25/2020',instructorName:'John Doe',
   //    schedule:{
   //    startTime:"5.30PMEST",
   //    endTime:"11.30PMEST"
   //    }}
   //    ]

      // const filtered = testArr.find((item)=> item.bootCampName.includes('React'))

      // const {bootCampName:renameIt} = filtered
      
         // testArr.sort(function(a, b) {
         // var nameA = a.bootCampName.toUpperCase(); // ignore upper and lowercase
         // var nameB = b.bootCampName.toUpperCase(); // ignore upper and lowercase
         // if (nameA < nameB) {
         //   return -1;
         // }
         // if (nameA > nameB) {
         //   return 1;
         // }
         // })
         // console.log(testArr);


         const newCopy = Student_Data.map((item)=>{
            if(item.University_Name.toLowerCase().includes('Maryland'.toLowerCase())){
               item.isStudent = true;
            } else {
               item.isStudent = false;
            }
            return item;
         })

         // console.log(Student_Data)




         
            //SORTING FUNCTOIN 
            function sortDataOnParams(){

               const sortGraduation = newCopy.sort(function (a, b) {
                  return b.Graduation_Year - a.Graduation_Year;
                });
      
               const sortJobStartDate = sortGraduation.sort(function(a,b) {
                  return new Date(b.Job_Start_Date).getTime() - new Date(a.Job_Start_Date).getTime();
                });
      
               const sortByEmployer = sortJobStartDate.sort(function(a, b) {
                  var nameA = a.Employer.toUpperCase(); // ignore upper and lowercase
                  var nameB = b.Employer.toUpperCase(); // ignore upper and lowercase
                  if (nameA < nameB) {
                    return -1;
                  }
                  if (nameA > nameB) {
                    return 1;
                  }

                  return 0;
                  })

                  return sortByEmployer;

            }

            console.log(sortDataOnParams());    


      const [fav,setFav] = useState(['You dont have any yet']);
      const [data,setData] = useState([]);
      const [deletedRecords,setDeletedRecords] = useState([]);

      const [careerUrl,setCareerUrl] =useState("");
      const [employer,setEmployer] =useState("");
      const [graduationYear,setGraduationYear] =useState("");
      const [jobStartDate,setJobStartDate] =useState("");
      const [jobTitle,setJobTitle] =useState("");
      const [specialization,setSpecialization] =useState("");
      const [universityName,setUniversityName] =useState("");
      const [isModelOpen,setIsModalOpen]=useState(false)
      const [viewCurrentRecord,setViewCurrentRecord]=useState({})
      const [searchText,setSearchText]=useState("")
      const [searchInvoked,setSearchInvoked]=useState(false)
      const [filteredData,setFilteredData]=useState([])
      const [graduationYearFilter,setGraduationYearFilter]=useState({})



      // const uuidData = Student_Data.map((i)=>{
      //    return {
      //       ...i,
      //       id: uuidv4()
      //    }
      // })

      // const uuidData = []

      const EmployerMap = new Map();

      // var remainingRecords;
      // var deletedRecordCurrent;
      
      
         function deleteCard(e,id) {
            // function deleteCard(id){
               // EmployerMap.delete(id);
               e.stopPropagation();
                let deletedRecordCurrent  = data.filter((i)=>{
                  return i.id === id;
               })
               // setDeletedRecords(deletedRecords.push(deletedRecordCurrent))
               let copyDeleted = [...deletedRecords];
               copyDeleted.push(deletedRecordCurrent[0]);
               console.log(copyDeleted,'CopyDeleter')
               setDeletedRecords(copyDeleted);
                  let remainingRecords = data.filter((i)=>{
                  // deletedRecord = {...i};
                  return i.id !== id;               
               })
      
               setData(remainingRecords)
               
            // }
         }

         function retrieveDeleted(){

            let newData = [...data,...deletedRecords]
            setData(newData)
            // console.log(newData,'Total Data');
            setDeletedRecords([])
         }
         
         function handleSubmit(){
            let newObj = {
                Career_Url: careerUrl,
                Employer: employer,
                Graduation_Year: graduationYear,
                Job_Start_Date: jobStartDate,
                Job_Title : jobTitle,
                Specialization: specialization,
                University_Name: universityName,
                id: uuidv4()
            }

            let newData = [newObj,...data];            
            // newData.push(newObj)

            setData(newData);
            // console.log(newData,'newData')

            document.getElementById("SubmitButton").disabled = true;
            setTimeout(function() {
               document.getElementById("SubmitButton").disabled = false;
            }, 3000);
        }
    

      



      // useEffect(()=>{ 

      //    setData(uuidData);            

      // },[])

      const history = useHistory();

      function handleOnClickCard(id){
         // instance.get(`/allrecords/id?=${id}`)
         // .then(res=>{
         //    console.log(res.data)
         // })

         history.push(`/recorddetails/${id}`)
         console.log("ONCLICK WAS CLICKED")
         let entry =data.filter(i=>i.id === id)
         console.log(entry,'filteredEntry');
         setViewCurrentRecord(entry[0])
         setIsModalOpen(true)
      }             


            // const givenData = data.map((item)=>{
            //    const {Employer,Career_Url,Job_Title,id} =item;
            //    EmployerMap.set(id,Employer)

               
               
            //    return(

            //    <div className="clickCard" onClick={()=>handleOnClickCard(id)}>
            //       <Card EmployerMap={EmployerMap} Career_Url={Career_Url} 
            //       Job_Title={Job_Title} id={id} key ={id} fav={fav} setFav={setFav} deleteCard={deleteCard}/>

            //    </div>
            //    )


            // })



            const [isSearching, setIsSearching] = useState(false);

            (!isSearching) ? console.log('IS SEARCHING FALSE') : console.log('ISSEARCHING IS TRUE')


            // const univName =filterLogic().map((i,idx,arr)=>{
            //    const {Employer,Career_Url,Job_Title,id,Graduation_Year} =i;
            //    EmployerMap.set(id,Employer)
               
               
            //    return (
            //        <div className='clickCard' onClick={()=>handleOnClickCard(id)}>
            //        <Card 
            //       EmployerMap={EmployerMap} Career_Url={Career_Url} 
            //             Job_Title={Job_Title} id={id} key ={id} fav={fav} setFav={setFav} deleteCard={deleteCard} 
            //             Graduation_Year= {Graduation_Year}
            //        />
            //        </div>
            //        )
                   
            //    })  

               // let n = data.length/25;
               // for(let i=0;i<n;i++){
               //    return (<button style={{margin: "2px" ,display:"inline"}}>{i+1}</button>)
               // }

               function generateButtonsArray(){
                  let a=[]
                  // let copy = data
                  const n = Math.ceil(data.length/25);
                  for(let i=0;i<n;i++){
                     a.push(i)
                     }
                     return a;
               }
            
               const[currentPage,setCurrentPage] = useState(1);
               
               let copyPagination = data.slice(25 * (currentPage - 1), 25 * currentPage);

               const buttonStuff = generateButtonsArray().map((i)=>{
                  return (<button disabled={(i+1===currentPage)? true : false} onClick={()=>{handlePageClick(i)}}style={{margin: "2px" ,display:"inline"}}>{i+1}</button>)
               })


               function handlePageClick(i){
                  setCurrentPage(i+1);
                  // handleNextClick();
               }

               function handlePrev(i){
                  setCurrentPage(currentPage-1);
               }
               

               function handleNextClick(){

                  setCurrentPage(currentPage+1)

                  }

               
                  
                    
               




            function handleClear(){
               setIsSearching(false)
               setSearchText("")
               setSearchInvoked(false)
               }

               function handleSearch () {
                  setIsSearching(true)
                   if(searchText.length ===0){
                       setSearchInvoked(false)
                   }
                   else {
                       setSearchInvoked(true)
                   }
               
                   let copyData =[...data]
                       copyData = copyData.filter(i=>{
                       return i.Employer.toLowerCase().includes(searchText.toLowerCase())
                      }) 
                      console.log(copyData,'copyData');
                   if(setSearchInvoked){
                      setFilteredData(copyData)
                   }
                   
               }

               function getGraduationYear(){

                  return  Object.entries(graduationYearFilter).map(j=>{
                      return  <span style={{display:'inlineFlex'}}>
                     <label>{j[0]}</label>
                     <Checkbox
                        checked={j[1]}
                        onChange={()=>handleGraduationDateOnChange(j[0])}
                        inputProps={{ 'aria-label': 'primary checkbox' }}
                      />
                      </span>
                   })
                    
                }

                function handleGraduationDateOnChange(year){

                  let copyObj= {...graduationYearFilter}
                  copyObj[year]=!copyObj[year]
               console.log(copyObj,'copyObj');
               setGraduationYearFilter(copyObj)
              
              }

            

            // function getNthFib(n) {
            //    const cache = new Map();
            //    cache.set(1,0);
            //    cache.set(2,1);
            //    return getNthFibHelper(n,cache);
            // } 

            // function getNthFibHelper(n,cache){
            //    if(cache.has(n)){
            //       return cache.get(n);
            //    }
            //    else{
            //       cache.set(n,getNthFibHelper(n-1,cache) + getNthFibHelper(n-2,cache))
            //       return cache.get(n);
            //    }
            // }

            // console.log(getNthFib(6))

            function filterLogic () {
               if(searchInvoked){
                   // return filteredData
                  const filterByYear= filteredData.filter((i)=>{
                const gradYear = i.Graduation_Year 
               return graduationYearFilter[gradYear]
                  })
                  return filterByYear
               }
                   return data
               }

            useEffect(()=>{
               let getyears=filteredData.map(i=>i.Graduation_Year)
               let unique = [...new Set(getyears)];
            
               let obj={}
           unique.forEach(l=>{
                 obj[l]=true
            })
             setGraduationYearFilter(obj)
               
           },[searchInvoked])



           function handleEnter(event){
              setIsSearching(true)
              if(event.which === 13) {
               handleSearch();
               // console.log('ENTER WORKS')
               // alert('Kevin')
            }
           }


           let pageLower = (25 * (currentPage - 1)) +1
           let PageUpper = 25 * currentPage


           const [loading, setLoading] = useState(true)

         //   const baseUrl = 'https://reaction-kevin-chawla.herokuapp.com'

         //   const instance = axios.create({
         //      baseURL: 'https://reaction-kevin-chawla.herokuapp.com'
         //   });
         //   instance.baseUrl = 'https://reaction-kevin-chawla.herokuapp.com'
           useEffect(()=>{
              axios.get('/allrecords')
              .then(res=>{
                  setData(res.data)
                  setLoading(false)
              })
              .catch(e=>console.log(e))
           },[])

          

       return (
          <div>

             {/* <Modal startButtonLabel ="Open" title="My Modal Title" body="I am having fun" startButtonColor="danger" 
             actionButtonlabel="Submit" actionButtonColor="danger" handleSubmit={handleSubmit}>

             <Form 
                   careerUrl = {careerUrl}
                   setCareerUrl={ setCareerUrl}
                   employer = {employer}
                   setEmployer ={setEmployer}
                   graduationYear = {graduationYear}
                   setGraduationYear = {setGraduationYear}
                   jobStartDate = {jobStartDate}
                   setJobStartDate = {setJobStartDate}
                   jobTitle = {jobTitle}
                   setJobTitle = {setJobTitle}
                   specialization ={ specialization}
                   setSpecialization = {setSpecialization}
                   universityName ={ universityName}
                   setUniversityName = {setUniversityName}
                   handleSubmit={handleSubmit}/>
             </Modal> */}


               <Modal
               buttonLabel="Open"
               title="Please enter the form "
               handleSubmit={handleSubmit}
               isModalOpen={isModelOpen}
               setIsModalOpen={setIsModalOpen}
               cta_primary = "Enter"
               cta_secondary ="Okay"
               >
               <CardDetails
               Employer={viewCurrentRecord.Employer}
               careerUrl={viewCurrentRecord.Career_Url}
               Job_Title={viewCurrentRecord.Job_Title}
               Job_Start_Date={viewCurrentRecord.Job_Start_Date}
               Specialization={viewCurrentRecord.Specialization}
               University_Name={viewCurrentRecord.University_Name}

               />
               </Modal>
             Here is a list of your Current Favorites
             <div>
            <input autoFocus placeholder='Company Name' onKeyPress={(e)=>handleEnter(e)}  value={searchText} onChange={(e)=>setSearchText(e.target.value)}/>
            <span style={{marginLeft:'20px'}}><Button disabled={searchInvoked} onClick={()=>handleSearch()} color="primary">Search</Button></span>
            {searchInvoked && <span style={{marginLeft:'20px'}}>
               <Button onClick={()=>handleClear()} color="primary">Clear</Button>
               {getGraduationYear()}

            </span>

            }
            </div>
             <div>
                <ul>
                {fav.map((i)=>{
                   return(
                   <li>{i}</li>
                   )
                })}
                
                </ul>

                <button onClick={()=>setFav(['You do not have any favorites'])}>Clear</button>
                
                </div>
                <div>
                   {/* <</p> */}
                   <button onClick={()=>retrieveDeleted()}>Retrive Deleted Records</button>
                </div>
                <div>
                   data length::: {copyPagination.length}
                   {/* <button onClick={()=>createEntry()}>Create Entry</button> */}
                   {/* <Link to={{
                      pathname: "/form",
                      state: {
                        careerUrl : {careerUrl},
                        setCareerUrl: {setCareerUrl},
                        employer: {employer},
                        setEmployer: {setEmployer},
                        graduationYear: {graduationYear},
                        setGraduationYear: {setGraduationYear},
                        jobStartDate: {jobStartDate},
                        setJobStartDate: {setJobStartDate},
                        jobTitle: {jobTitle},
                        setJobTitle: {setJobTitle},
                        specialization: {specialization},
                        setSpecialization: {setSpecialization},
                        universityName: {universityName},
                        setUniversityName: {setUniversityName},
                        handleSubmit :{handleSubmit}
                      }
                   }} className="btn btn-primary">Create Entry</Link> */}

                   

                   {/* <Form 
                   careerUrl = {careerUrl}
                   setCareerUrl={ setCareerUrl}
                   employer = {employer}
                   setEmployer ={setEmployer}
                   graduationYear = {graduationYear}
                   setGraduationYear = {setGraduationYear}
                   jobStartDate = {jobStartDate}
                   setJobStartDate = {setJobStartDate}
                   jobTitle = {jobTitle}
                   setJobTitle = {setJobTitle}
                   specialization ={ specialization}
                   setSpecialization = {setSpecialization}
                   universityName ={ universityName}
                   setUniversityName = {setUniversityName}
                   handleSubmit={handleSubmit}/> */}
                </div>
            Here Is a List of Companies 
            <button disabled={currentPage===1?true : false} onClick={handlePrev} style={{margin: "2px" ,display:"inline"}}>Previous</button>
            {buttonStuff}
            <button disabled={currentPage===generateButtonsArray().length?true:false} onClick={handleNextClick} style={{margin: "2px" ,display:"inline"}}>Next</button>
            <div style={{ textAlign: "center"}}>
            {pageLower} - {PageUpper}
            </div>          
            
            <div>
               {loading?<CircularProgress /> : false}
               {isSearching?
               filterLogic().map((i,idx,arr)=>{
                  const {Employer,Career_Url,Job_Title,id,Graduation_Year} =i;
                  EmployerMap.set(id,Employer)
                  
                  
                  return (
                      <div className='clickCard' onClick={()=>handleOnClickCard(id)}>
                      <Card 
                     EmployerMap={EmployerMap} Career_Url={Career_Url} 
                           Job_Title={Job_Title} id={id} key ={id} fav={fav} setFav={setFav} deleteCard={deleteCard} 
                           Graduation_Year= {Graduation_Year}
                      />
                      </div>
                      )
                      
                  }) :

                  copyPagination.map((i,idx,arr)=>{
                     const {Employer,Career_Url,Job_Title,id,Graduation_Year} =i;
                     EmployerMap.set(id,Employer)
                     
                     
                     return (
                         <div className='clickCard' onClick={()=>handleOnClickCard(id)}>
                         <Card 
                        EmployerMap={EmployerMap} Career_Url={Career_Url} 
                              Job_Title={Job_Title} id={id} key ={id} fav={fav} setFav={setFav} deleteCard={deleteCard} 
                              Graduation_Year= {Graduation_Year}
                         />
                         </div>
                         )
                         
                     })
                   }                
            </div>
          </div>
       )
    
  }
  export default Javascript_play;