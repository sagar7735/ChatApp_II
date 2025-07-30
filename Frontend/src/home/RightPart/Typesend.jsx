import React from 'react'
import { IoSend } from "react-icons/io5";

 const Typesend = () => {
  return (
    <div className='flex space-x-2 h-[8vh] text-center bg-gray-800 mx-4'>
         <div className='w-[70%]'>
        <input type="text" placeholder="Type here" className="border border-gray-700 outline-none px-4 py-3 w-full mt-1 rounded-xl" />
    </div>
    <button className='p-2 '>
         <IoSend className='text-3xl'/>
    </button>
    </div>
   
   
  )
}

export default Typesend;