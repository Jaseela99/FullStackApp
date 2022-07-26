import {Link} from "react-router-dom"

const Navbar = () => {


    return (
      <div className="flex justify-end fixed h-1/8 w-full m-0 px-3 py-3 bg-gradient-to-r from-zinc-600 to-gray-800 opacity-50">  
      
        <div
          className=" transition ease-in-out delay-150 hover:-translate-y-1 duration-300  text-white  text-md underline-offset-4 hover:underline-offset-4 font-serif font-bold  px-3 py-1  "
        >
        <Link to="/">Home </Link> 
        </div>
        <div
          className="transition ease-in-out delay-150 hover:-translate-y-1 duration-300 text-white text-md font-serif font-bold  px-3 py-1  "
        >
         <Link to="/about">About </Link>
        </div>
        <div
          className="transition ease-in-out delay-150 hover:-translate-y-1 duration-300 text-white text-md font-serif font-bold  px-3 py-1  "
        >
         <Link to="/contact">Contact</Link>
        </div>
      </div>
    )
  }
  
  export default Navbar