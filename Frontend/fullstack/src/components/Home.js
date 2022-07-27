import React,{useEffect} from "react"
import Service from "../services/service"

const Home=()=>{
    
    const [home,setHome]=React.useState([])

    const getHome=()=>{
     Service.getHome().then((res)=>{
        setHome(res.data.home)
        console.log(res.data.home)
     })
    }

    useEffect(()=>{
        getHome()
    },[])
    return(
        <div className="bg-gradient-to-r from-gray-400 to-zinc-600  h-screen w-full flex justify-center ">
          
          <div className="w-1/4 flex align-middle">
             <img src="https://thumbs.gfycat.com/ImpressiveJampackedKinglet-max-1mb.gif" alt="call" className="cursor-pointer h-1/2 mx-20 my-auto  align-middle  border-r-2 border-b-2 rounded-full shadow-md"/> 
          </div>
         {home[0] &&   <div className="flex flex-col align-middle justify-center w-3/4 text-white font-serif">
             <h2 className="text-5xl  p-3 font-normal tracking-wide ">{`Hey! I am ${home[0].userName}`}</h2>
        <p className="text-3xl p-2s">{home[0].title}</p>

        <p className="text-xl p-2">{home[0].bio}</p>
    
            </div>
}
        </div>
    )
}
export default Home