import axios from 'axios';

// console.log(process.env.REACT_APP_BACKEND_URL,'LOOKY HERE')

let baseURL=process.env.REACT_APP_BACKEND_URL
export default axios.create({
    baseURL
  });