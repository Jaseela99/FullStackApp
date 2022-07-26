import React from "react"
import Service from "../services/service";

const Contact=()=>{

    const [state, setState] = React.useState({
        fullName: "",
        email: "",
        message:""
      });
      const handleChange = (e) => {
        const { name, value } = e.target;
        setState((prevState) => ({ ...prevState, [name]: value }));
      };
      const handleSubmit = (e) => {
        e.preventDefault()
        Service.createContact( {
            fullName: state.fullName,
            email: state.email,
            message:state.message
          })
          .then((res) => {
            console.log(res.data);
            alert("Get Back to you soon!")
          });
      };
    return(
        <div className="  overflow-hidden flex flex-col h-screen w-full bg-gradient-to-r from-sky-300 to-gray-300">
         <div className="flex mt-24 ">
            <div className="w-1/2 flex flex-col justify-center "> 
                <h1 className=" mt-5 text-3xl ont-serif font-bold text-black-800 text-sky-800">Connect With Us!</h1>
            <img src="https://c.tenor.com/z94kQ6GwgyEAAAAC/hello-cute.gif " alt="hello" className=" w-1/2  mx-auto my-auto mt-auto mb-auto rounded-full shadow-md"/>
            </div>
         <form 
             onSubmit={(e) => {
              handleSubmit(e);
            }} 
            className=" mx-10 flex w-1/2 flex-col font-serif font-bold text-black-800 text-sm  shadow-md rounded-lg  bg-gradient-to-r from-zinc-500 to-gray-600"
          >
        
              <input
                onChange={(e) => {
                  handleChange(e);
                }}
                value={state.fullName||""}
                className="p-3 mx-16 mt-20 mb-10 w-3/4 rounded-lg shadow-md outline-none placeholder:italic placeholder:text-slate-400"
                type="text"
                name="fullName"
                placeholder="Enter Your Name"
              />
              
              <input
                 onChange={(e) => {
                  handleChange(e);
                }}
                value={state.email||""}
                className="p-3 mx-16 mb-10 w-3/4 rounded-lg shadow-md outline-none placeholder:italic placeholder:text-slate-400"
                type="email"
                name="email"
                placeholder="Enter Your Email"
              />
              <textarea
                 onChange={(e) => {
                  handleChange(e);
                }}
                value={state.message||""} 
                className="p-3 mx-16 mb-10 w-3/4 rounded-lg shadow-md outline-none placeholder:italic placeholder:text-slate-400"
                type="text"
                name="message"
                placeholder="Message..."
              ></textarea>
              
              <div className="flex justify-center mx-7 mb-3 mt-3 text-white">
              <button
                 onSubmit={(e) => {
                  handleSubmit(e);
                }} 
                type="submit"
                className=" bg-gradient-to-r from-red-700 to-red-400 hover:from-green-800 hover:to-lime-500  p-3 m-3 rounded-lg shadow-md"
              >
                Submit
              </button>
            </div>
            </form>
        </div>   
        </div>
    )
}
export default Contact