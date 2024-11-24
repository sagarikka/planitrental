import React, { useState } from 'react'

function Contact() {
    const [value,setValue]=useState("")
    console.log(value)
  return (
    <div className='contact flex flex-col justify-center items-center space-y-8 '>
      <div className='blue-text contact-text text-2xl sm:text-4xl md:text-4xl font-bold'>CONTACT US</div>
      <div className='line'></div>
      <div className='contact-container '>
      <div className='contact-container-inner space-y-4 font-semibold w-full'>
        <div className='name space-x-8'>
            <div className='w-1/2  '>
                <div className='text-2xl blue-text'>First name<span className='green-text'>*</span></div>
                <input type='text'/>
            </div>
            <div className='w-1/2'>
                <div className='text-2xl blue-text'>Last name<span className='green-text'>*</span></div>
                <input type='text'/>
            </div>
        </div>
        <div>
            <div className='text-2xl blue-text'>Email<span className='green-text'>*</span></div>
            <input type='text'/>
        </div>
        <div>
            <div className='text-2xl blue-text'>Phone<span className='green-text'>*</span></div>
            <input type='phone' placeholder='phone'/>
        </div>
        <div>
            <div className='text-2xl blue-text'>Choose an option<span className='green-text'>*</span></div>
            <select id="custom-select" value={value} onChange={(e)=>{setValue(e.target.value)}} className={`${value}`?'green-text':'blue-text'}>
                <option value="" disabled selected className='blue-text'>Choose an  option</option>
                <option value="option1">American Fork, UT Office</option>
                <option value="option2">Cedar Park, TX Office</option>
            </select>
        </div>
        <div>
            <div className='text-2xl blue-text'>Phone<span className='green-text'>*</span></div>
            <textarea cols={40}/>
        </div>
        <div className='submit'>Submit</div>
      </div>
      </div>
    </div>
  )
}

export default Contact
