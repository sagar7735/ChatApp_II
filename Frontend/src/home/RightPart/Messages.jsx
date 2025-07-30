import React from 'react'
import Message from './Message.jsx';

 const Messages = () => {
  return (
    <div className='hide-scrollbar overflow-y-auto' style={{minHeight:"calc(92vh - 8vh)"}}>


<Message/>
<Message/>
<Message/>

<Message/>
<Message/>
<Message/>

<Message/>
<Message/>
<Message/>

    </div>
  )
}

export default Messages;