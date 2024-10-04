import React from 'react'
import { Link } from 'react-router-dom'
import logo_image from '../utils/MizRun_logo.jpg'

const Header = () => {
  return (
    // #3AAFA9
    <div className=' bg-green-300 h-28 w-full flex justify-between '>
       <div className='logo-container  ml-8 mt-4'> 
          <img className='w-20 h-20  rounded-sm cursor-pointer' src={logo_image} />
       </div>



       <div>
           <ul className='flex m-4 '>
             <li className='p-5'> 
                <Link className='text-2xl' to="/"> Home </Link>
             </li>
             <li className='p-5'>  
                <Link className='text-2xl ' to="/about"> About Us </Link>
             </li>
             <li className='p-5'> 
                <Link className='text-2xl' to="/contact"> Contact </Link>
             </li>
             <li className='p-5'> 
                <Link className='text-2xl' to="/achivement"> Achievement </Link>
             </li>
             <li className='p-5'> 
                <Link className='text-2xl' to="/partnership"> Partnership  </Link>
             </li>
             <li className='p-5'> 
                <Link className='text-2xl' to="/services"> Services </Link>
             </li>
           </ul>
       </div>

    </div>
   
  )
}


export default Header
