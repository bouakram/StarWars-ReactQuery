import React from 'react'
import {useQuery} from 'react-query'
import Peopl from './Peopl.js'
const fetcher = url => fetch(url).then(res => res.json())

function People () {
  const {data ,isLoading ,isError} = useQuery('people',() => fetcher('https://swapi.dev/api/people/'))
  if(isLoading) return 'Loeading...'
  if(isError) return 'An error has occurred : ' + isError 
  return <>
    <h2>People</h2>  
    <hr className='my-2'/>
    <Peopl pepol={data} />
    </>
}

export default People
