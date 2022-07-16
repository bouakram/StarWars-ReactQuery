import React from 'react'
import {useQuery} from 'react-query'
import Plant from './Plant.js'

const fetcher = url => fetch(url).then(res => res.json())

function Planets () {
  const {data ,isLoading ,isError} = useQuery('planets',() => fetcher('https://swapi.dev/api/planets/'))
  if(isLoading) return 'Loeading...'
  if(isError) return 'An error has occurred : ' + isError 
  return <>
    <h2>Planets</h2>  
    <hr className='my-2'/>
    <Plant planet={data} />
    </>
}

export default Planets
