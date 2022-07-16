import React from 'react'

function Navbar ({setpage}) {
  return <div className ='flex justify-center space-x-4 mb-8'>
    <button className='btn btn-primary' onClick={()=>{setpage('planets')}}>Planets</button>
    <button className='btn btn-primary' onClick={()=>{setpage('people')}}>People</button>
    </div>
    
}

export default Navbar
