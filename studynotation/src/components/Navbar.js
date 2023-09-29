// import React, { lazy } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/Logo.svg"
import { toast } from "react-hot-toast";

const Navbar=(props) =>{
    let isLoggedIn = props.isLoggedIn;
    let setIsLoggedIn = props.setIsLoggedIn;


    return(
        <div className="flex justify-between items-center w-11/12 max-w-[1160px] py-4 mx-auto">
          
          <Link to="/" >
            <img src={logo} alt="logo" width={160} height={32} loading="lazy"/> 
          </Link>
          
         <nav>
            <ul className="flex gap-x-6 text-gray-300 ">
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/">About</Link>
                </li>
                <li>
                    <Link to="/">Contact</Link> 
                </li>
            </ul>
         </nav>

        {/* Login signup Logout Dashboard */}
        <div className="flex items-center gap-x-4">
              { ! isLoggedIn &&
                <Link to="/login">
                    <button className="bg-slate-700 text-gray-300 py-[8px] px-[12px] rounded-[8px] border border-r-zinc-700">
                        Log in
                    </button>
                </Link>
              }

            { ! isLoggedIn &&
                <Link to="/signup">
                    <button className="bg-zinc-700 text-gray-300 py-[8px] px-[12px] rounded-[8px] border border-r-zinc-1200">
                        Sign up
                    </button>
                </Link>
              }

              { isLoggedIn &&
                <Link to="/">
                    <button onClick={() =>{
                        setIsLoggedIn(false);
                       toast.success("Logged out")
                    }}
                    className=" text-gray-300 py-[8px] px-[12px] rounded-[8px] border border-r-zinc-700 ">
                        Log-Out
                    </button>
                </Link>
              }

              { isLoggedIn &&
                <Link to="/dashboard">
                    <button className="bg-zinc-800 text-gray-300 py-[8px] px-[12px] rounded-[8px] border border-r-zinc-700 ">
                       Dashboard
                    </button>
                </Link>
              }
        </div>

        </div>
    )
}

export default Navbar;