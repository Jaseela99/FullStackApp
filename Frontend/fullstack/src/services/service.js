import axios from "axios"
const API_URL ="http://localhost:8080"

const createContact =({fullName,email,message})=>{
    return axios.post(API_URL+"/contact",{fullName,email,message},{})
}
const getHome =()=>{
    return axios.get(API_URL+"/",{},{})
}
const getAbout =()=>{
    return axios.get(API_URL+"/about",{},{})
}


const Service ={
    createContact,
    getAbout,
    getHome
}

export default Service