
import axios from "axios";
import {useContext, useState } from "react"
import { ContextUser } from "../UserContext";
import { Navigate, Link } from "react-router-dom";

export default function Register(){
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone , setPhone] = useState(0);
    const [password, setPassword] = useState('');
    const [message , setMessage] = useState('');

const {user , setUser} = useContext(ContextUser);

if(user){
    return <Navigate to={"/dashboard"} />
}


function handleForm(e){
    e.preventDefault();
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>]).{8,}$/;

    if(!emailRegex.test(email)){
        setMessage("Please Provide a corect email address!");
        return false;
    }

    if(!/^\d+$/.test(phone)){
        setMessage("Please Provide a valid phone number!")
        return false;
    } 

    if(phone.length !== 10){ 
        setMessage("Please Provide a valid phone number!")
        return false; 
    }
   

    if(!passwordRegex.test(password)){
        setMessage("Password should contain uppercase, lowercase, special char, digits, and 8 character long!")
        return false;
    }

    setMessage("");

    try {
        axios.post('/register' , {
            name,email, phone, password
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
        <div className="h-[550px] max-w-[1200px] m-auto p-5 lg:p-10 authentication mt-20 rounded-md border-b-2 border-b-gray-950 overflow-hidden">
            <div className="flex items-center gap-10 ">
            <div className="w-full md:w-2/4 primary-bg p-10 m-auto md:m-0 lg:mx-10 rounded-lg z-50">
                <h5 className="capitalize text-2xl mb-2 text-center tracking-wider">sign up and join us</h5>
                <div className="text-red-500 text-center mb-8 capitalize text-sm">{message}</div>
                <form action="/register" method="post" name="register--form" onSubmit={handleForm} className="custominput">
                    <div className="grid grid-cols-1 mb-4">
                        <input type="text" name="name" id="name" className="px-4 py-2" placeholder="Your Name" value={name} onChange={(e)=> setName(e.target.value)} required/>
                    </div>
                    <div className="grid grid-cols-1 mb-4">
                        <input type="email" name="email" id="email" className="px-4 py-2" placeholder="Your Email" value={email} onChange={(e)=> setEmail(e.target.value)} required/>
                    </div>
                    <div className="grid grid-cols-1 mb-4">
                        <input type="text" name="phone" id="phone" className="px-4 py-2" placeholder="Your Phone Number" onChange={(e)=> setPhone(e.target.value)} required />
                    </div>
                    <div className="grid grid-cols-1 mb-4">
                        <input type="password" name="password" id="password" className="px-4 py-2" placeholder="Your Password" value={password} onChange={(e)=> setPassword(e.target.value)} required/>
                    </div>
                    <button type="submit" className="primary-btn px-6 py-2 capitalize mt-5 w-full text-xl">Register</button>
                </form>
                <p className="capitalize mt-5 text-center tracking-wide">Already a user? <Link to={'/user/login'} className="text-cyan-400">sign in</Link></p>
            </div>

            <div className="img absolute hidden md:block md:-right-36 lg:-right-20 xl:right-1 md:h-[580px] lg:h-[540px] opacity-80 z-0 lg:z-40">
                <img src="/regPhoto.png" alt="photo" className="object-cover h-full"/>
            </div>

            </div>
        </div>
    )
}