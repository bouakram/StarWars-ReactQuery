import React from 'react'


function Peopl({pepol}){
return   <table className="table table-zebra w-full">
    <thead>
      <tr>
        <th>Name</th> 
        <th>Gender</th> 
        <th>Skin-Color</th> 
      </tr>
    </thead> 
    {pepol.results.map(p => {return <tbody className='w-full'>
      <tr className='hover w-full'>
        <td className='mr-10'>{p.name}</td> 
        <td>{p.gender}</td> 
        <td>{p.skin_color}</td>
      </tr>
    </tbody> 
})}
  </table>
}

export default Peopl
