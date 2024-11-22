import React from 'react'
import logo from "../utils/blue-green-O.webp"
import { Link } from 'react-router-dom'
function Navbar() {
  return (
    <div className='navbar space-y-2'>
      <div className='navbar-upper space-x-6 '>
        <img src={logo} alt='logo'/>
        <div className='space-y-4 '>
            <div className='flex text-xl space-x-6 font-semibold menu'>
                <div className='green-text'>Home</div>
                <div>Location</div>
                <div>Rental</div>
                <div>Package Deals</div>
                <div>Contacts</div>
                <div>Policies</div>
                <div>Blog</div>
            </div>
            <div className='flex justify-end blue-text font-semibold contact-no'>Call Or Text Us! <Link className='underline'>801-319-5524</Link></div>
        </div>
      </div>
      <div className='navbar-lower space-y-0.5'>
        <div className='blue-text order-text '>ORDER ONLINE <Link className='red-text underline'>HERE</Link></div>
        <div className='green-text desc-text flex flex-col justify-center items-center'><span>You are browsing our <span className='red-text'>American Fork, Utah </span>Location </span>
        <span>Click <Link className='blue-text underline'>HERE</Link> to switch</span></div>
      </div>
    </div>
  )
}

export default Navbar
