import { useState } from 'react'
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";


export const Banner = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const[showEye, setShowEye] = useState(false);
    
    const handleEmail = (e) => {
        e.preventDefault();
        setEmail(e.target.value);
        setEmailError("Please Enter a Valid Email Address");
        setEmailError("");
    }
    const handlePassword = (e) => {
        e.preventDefault();
        setPassword(e.target.value);
        setPasswordError("Please Enter a Valid Password");
        setPasswordError("");
    }
    const handleClick = (e) => {
        e.preventDefault();
        !email ? setEmailError("Please Enter a Valid Email Address") : setEmailError("");
        !password ? setPasswordError("Please Enter a Valid Password") : setPasswordError("");
        
    }
    const handleSubmit = () => {
        console.log("");
    }    
        
    






  return (
    <div className="mt-20">
        
        <form className="max-w-sm mx-auto" onSubmit={handleClick}>
        <div className="mb-5">
            <label htmlFor="email" className="block mb-2.5 text-sm font-medium text-heading">Your email</label>
            <input type="email" id="email" className="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body" placeholder="name@flowbite.com"  onChange={handleEmail}/>
        </div>
        <h2 className="text-sm text-red-500">{emailError}</h2>
        <div className="mb-5 relative">
            <label htmlFor="password" className="block mb-2.5 text-sm font-medium text-heading">Your password</label>
            <input type={showEye ? "text" : "password"} id="password" className="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body" placeholder="••••••••" onChange={handlePassword} />
           {showEye ? <FaEye className='absolute right-3 top-[45px] text-gray-400 cursor-pointer' onClick={() => setShowEye(false)}/> : <FaEyeSlash className='absolute right-3 top-[45px] text-gray-400 cursor-pointer' onClick={() => setShowEye(true)}/>}



        </div>
        <h2 className="text-sm text-red-500">{passwordError}</h2>
        <label htmlFor="remember" className="flex items-center mb-5">
            <input id="remember" type="checkbox" defaultValue className="w-4 h-4 border border-default-medium rounded-xs bg-neutral-secondary-medium focus:ring-2 focus:ring-brand-soft"  />
            <p className="ms-2 text-sm font-medium text-heading select-none">I agree with the <a href="#" className="text-fg-brand hover:underline">terms and conditions</a>.</p>
        </label>
        <button type="submit" className="text-[#000000] bg-[#00ffff] rounded-md bg-brand box-border border border-transparent hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none cursor-pointer" onClick={handleClick}>Submit</button>
        </form>


    </div>
  )
}
