import { useState } from 'react'
import logo from '../assets/react.svg'
export const NavBar = () => {

    const [state, setState] = useState (false);
    const [color, setColor] = useState ('bg-[#00cccc]');
    const handleClick = () => {
        setState(!state);
    }
    const colorChange = () => {
        color == 'bg-[#00cccc]' ? setColor('bg-red-600') : setColor('bg-[#00cccc]');
        
    }


  return (
    <div>
        <nav>
            <div className='bg-gray-950 text-white py-4 px-10 font-bold'>
                <div className='flex justify-between items-center'>
                    <div>
                        <a href="#">
                            <img src={logo} alt="Logo" />
                        </a>
                    </div>
                    <ul className='flex gap-10'>
                        <li className='hover:bg-gray-950 hover:text-[#00ffff] cursor-pointer'><a href="#">Home</a></li>
                        <li className='hover:bg-gray-950 hover:text-[#00ffff] cursor-pointer'><a href="#">Services</a></li>
                        <li className='hover:bg-gray-950 hover:text-[#00ffff] cursor-pointer'><a href="#">About</a></li>
                        <li className='hover:bg-gray-950 hover:text-[#00ffff] cursor-pointer'><a href="#">Contact</a></li>
                        <li className='hover:bg-gray-950 hover:text-[#00ffff] cursor-pointer'><a href="#">Help</a></li>
                        <li className='hover:bg-gray-950 hover:text-[#00ffff] cursor-pointer'><a href="#">Feedback</a></li>
                        <li className='hover:bg-gray-950 hover:text-[#00ffff] cursor-pointer'><a href="#">Settings</a></li>
                        <li className='hover:bg-gray-950 hover:text-[#00ffff] cursor-pointer'><a href="#">Carer</a></li>  
                    </ul>
                    <div>
                        <button className={`text-xl ${color} text-white py-4 px-8 rounded-md hover:bg-[#00cccc] hover:text-black cursor-pointer`} onClick={handleClick}>Get Started</button>
                    </div>
                </div>
            </div>  
                {
                    state ?
                    <div className={`h-80 ${color} mt-10 py-2 px-40`}>
                      <h1 className='font-bold text-2xl'>Welcome to Our App</h1>
                      <h2 className='font-semibold'>Your journey starts here</h2>
                      <h2 className='font-semibold'>Your journey starts here</h2>
                      <h2 className='font-semibold'>Your journey starts here</h2>
                      <h2 className='font-semibold'>Your journey starts here</h2>
                      <button className=' mt-10 text-xl bg-[#00ffff] text-white py-4 px-8 rounded-md hover:bg-[#00cccc] hover:text-black cursor-pointer' onClick={colorChange}>Get Started</button>
                    </div> : null
                }
            
                
        </nav>
    </div>
    
    

          


    
  )
}
