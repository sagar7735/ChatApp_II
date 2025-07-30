import React from 'react'
import Chatuser from './Chatuser';
import Message from './Messages';
import Typesend from './Typesend';

 const Right = () => {
  return (
    <div className=' hide-scrollbar w-[70%] bg-slate-900 text-gray-300n p-2'>
      <Chatuser/>
      <div className='hide-scrollbar overflow-y-auto' style={{maxHeight:"calc(92vh - 8vh)"}}>
      <Message/>
      </div>

      <Typesend/>
    </div>
  )
}

export default Right;