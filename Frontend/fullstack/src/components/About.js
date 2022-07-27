import React,{useEffect} from "react"
import Service from "../services/service"

const About=()=>{

    const [abouts,setAbout] = React.useState([])

    const getAbout=()=>{
        Service.getAbout().then((res)=>{
            setAbout(res.data.about)
            console.log(res.data.about)
            
        })
    }
    useEffect(()=>{
        getAbout()
    },[])
    return(
        

        <div className="bg-gradient-to-r from-gray-500 to-sky-600 flex flex-col justify-center align-middle w-full">
           <h2 className="mt-24 font-serif text-white font-medium text-4xl">Skills I Know</h2>
       <div className=" flex  h-screen w-full" >
           
           {abouts && abouts.map((about)=> (
                
            <div className=" cursor-pointer transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none p-5 rounded-md w-1/6 h-1/4 mx-12 my-12 mt-20 mb-20 shadow-lg bg-white border-b-2 ">
               <h2 className="text-gray-900 text-xl font-serif mb-2">{about.skill}</h2>
            <p className="text-gray-700 text-base mb-4">{`${about.efficiency}/10`}</p>
        
            </div>
        ))}
        </div> 
        
   
  
</div>
    )
}
export default About