import {Link} from "react-router-dom"

const Navbar = () => {


    return (
      <div className="flex justify-end fixed h-1/8 w-full m-0 px-3 py-3 bg-black opacity-75 ">  
      
        <div
          className="  text-white hover:text-indigo-400 text-md underline-offset-4 hover:underline-offset-4 font-serif font-bold  px-3 py-1  "
        >
        <Link to="/">Home </Link> 
        </div>
        <div
          className=" text-white  hover:text-indigo-400 text-md font-serif font-bold  px-3 py-1  "
        >
         <Link to="/about">About </Link>
        </div>
        <div
          className=" text-white  hover:text-indigo-400 text-md font-serif font-bold  px-3 py-1  "
        >
         <Link to="/contact">Contact</Link>
        </div>
      </div>
    )
  }
  
  export default Navbar