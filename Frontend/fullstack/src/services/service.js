import axios from "axios"
const API_URL ="http://localhost:8080"

const createContact =({fullName,email,message})=>{
    return axios.post(API_URL+"/contact",{fullName,email,message},{})
}


const Service ={
    createContact
}

export default Service