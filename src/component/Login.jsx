
import axios from "axios";
import {useContext, useState } from "react"
import { ContextUser } from "../UserContext";
import { Link, Navigate } from "react-router-dom";

export default function Login(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

const {user , setUser} = useContext(ContextUser);

if(user){
    return <Navigate to={"/dashboard/profile"} />
}



function handleForm(e){
    e.preventDefault();

    try {
        axios.post('/login' , {
            email, password
        }).then(res => {
            if(res.data){
                setUser(res.data);
            }
        })
        .catch(err => console.error(err.code))
    } 
    catch (error) {
        console.error(error.code)
    }
    
}

    return(
        <div className="max-w-[1200px] m-auto p-2">
            <div className="max-w-full md:w-2/3 lg:w-2/4 primary-bg p-10 m-auto mt-20 rounded-md">
                <h5 className="capitalize text-2xl mb-5 text-center tracking-wider">login to continue!</h5>
                <form method="post" name="login--form" onSubmit={handleForm} className="custominput">
                    <div className="grid grid-cols-1 mb-4">
                        <input type="email" name="email" id="email" className="px-4 py-2" placeholder="Your Email" value={email} onChange={(e)=> setEmail(e.target.value)} required/>
                    </div>
                    <div className="grid grid-cols-1 mb-4">
                        <input type="password" name="password" id="password" className="px-4 py-2" placeholder="Your Password" value={password} onChange={(e)=> setPassword(e.target.value)} required/>
                    </div>
                    <button type="submit" className="primary-btn px-6 py-2 capitalize mt-5 w-full text-xl">Log in</button>
                </form>
                <p className="capitalize mt-5 text-center tracking-wide">Don't have an account? <Link to={'/user/register'} className="text-cyan-400">Register</Link></p>
           </div>
        </div>
    )
}