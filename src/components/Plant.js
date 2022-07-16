import React from 'react'


function Plant({planet}){
return   <table className="table table-zebra w-full">
    <thead>
      <tr>
        <th>Name</th> 
        <th>Population</th> 
        <th>Terrain</th> 
      </tr>
    </thead> 
    {planet.results.map(plant => {return <tbody className='w-full'>
      <tr className='hover w-full'>
        <td className='mr-10'>{plant.name}</td> 
        <td>{plant.population}</td> 
        <td>{plant.terrain}</td>
      </tr>
    </tbody> 
})}
  </table>
}

export default Plant
