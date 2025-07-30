import React from 'react'
import { IoSearch } from "react-icons/io5";

export const Search = () => {
  return (
    <div className='h-[10vh]'>
    <div className='px-6 py-4'>
<form action="">
  <div className='flex space-x-3'>
<label className=" border-[1px] border-gray-600 p-3 rounded-lg flex items-center gap-2 w-[80%] bg-slate-900">
 
  <input type="search" className="grow outline-none
  " placeholder="Search" />
  
</label>
<button>
  <IoSearch className='text-5xl p-2 hover:bg-gray-600 rounded-full duration-300' />
</button>
</div>
</form>


</div>
    </div>
  )
}
