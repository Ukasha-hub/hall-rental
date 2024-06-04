"use client";

import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";




const Register = () => {
          
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const router = useRouter();

    const handleSubmit = async (e) => {
      e.preventDefault();
  
     
  
      
  
           
    return (
        
        <div>
            
            

       <div className="flex lg:flex-row flex-col justify-center mb-5" >
       <div className="lg:w-[40%] w-full flex flex-col gap-5 border-2 p-20 bg-slate-300/75 lg:rounded-full md:rounded-full" style={{backgroundImage:"url('https://static.vecteezy.com/system/resources/previews/006/891/146/non_2x/abstract-gradient-background-light-spring-color-perfect-for-design-wallpaper-promotion-presentation-website-banner-etc-illustration-background-vector.jpg')",backgroundSize:'cover', backgroundRepeat:'no-repeat'}}>
       <h1 className="flex justify-center font-bold text-3xl text-black">Join our club now</h1>
            <form onSubmit={handleSubmit} >
            <div className="flex flex-col gap-5">
            <label className="input input-bordered flex items-center gap-2 ">
            <svg xmlns="https://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" /><path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" /></svg>
            <input type="email" required onChange={(e) => setEmail(e.target.value)} name="email" className="grow" placeholder="Email" />
            </label>
            
            <label className="input input-bordered flex items-center gap-2">
            <svg xmlns="https://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" /></svg>
            <input type="text" onChange={(e) => setName(e.target.value)} required name="username" className="grow" placeholder="Username" />
            </label>
            <label className="input input-bordered flex items-center gap-2">
            <svg xmlns="https://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z" clipRule="evenodd" /></svg>
            <input type="password" required onChange={(e) => setPassword(e.target.value)}   name="password" className="grow" placeholder="password" />
        </label>
            </div>
        <div className="flex justify-center"><button className="btn border-2 rounded-lg border-black p-2 mt-4">Register</button></div>    
        
            </form>


        <div className="flex justify-center text-black"><p>Already have an account? Then <Link href='/Login' className="text-blue-700 underline font-bold">Sign In</Link></p></div>
        
        </div>
        
       </div>
          
        </div>
    );
};

export default Register;