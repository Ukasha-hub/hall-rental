//"use client";

import Link from "next/link";

//import { Link,  useLocation, useNavigate } from "react-router-dom";


 





const Login = () => {
   
   
   
    return (
        <div className="" >
            
           <div className="flex-flex-row" >
           <div className="bg-slate-700/75 flex flex-col  gap-5 mb-5 py-10 lg:mx-[20vw] lg:rounded-full md:rounded-full  border-y-2" style={{backgroundImage:"url('https://img.freepik.com/free-vector/futuristic-background-design_23-2148503793.jpg?size=626&ext=jpg&ga=GA1.1.553209589.1715040000&semt=ais')",backgroundSize:'cover', backgroundRepeat:'no-repeat'}}>
            <h1 className="flex justify-center font-bold text-5xl text-white">Welcome Back</h1>
             <p className="flex justify-center text text-gray-400 ">Enter to get unlimited access to data and information</p>
            <div className="flex justify-center">
            <div className=" lg:w-[40%] w-full">
            
            <form  >
             <div className="flex-flex-col gap-3">
             <label className="input input-bordered flex items-center gap-2 mb-5">
                 <svg xmlns="https://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" /><path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" /></svg>
                 <input type="email" required name="email" className="grow" placeholder="Email" />
             </label>

                 <label className="input input-bordered flex items-center gap-2">
                 <svg xmlns="https://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z" clipRule="evenodd" /></svg>
                 <input type="password" required name="password" className="grow" placeholder="password" />
             </label>
             <div className="flex justify-center"><button className="btn  mt-5 text-black bg-gray-400 ">Login</button></div>
             </div>
             
            </form>


         <p className="mt-5 flex text-white justify-center font-bold text-xl">Dont have an account? Then<Link href='/Register' className="text-blue-400 underline"> Register</Link></p>
         
         </div>
            </div>
            </div>
            <div></div>
           </div>
		   
        </div>
    );
};

export default Login;