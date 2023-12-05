import React from 'react'
import{download} from '../assets'
import{downloadImage} from '../utils'

const Card = ({ _id, name, prompt, photo }) => {

  console.log(name);

  return (
    <div className='rounded-xl group relative shadow-card hover:shadow-cardhover card'>
      <h1>hello</h1>
       <img className='w-full h-auto object-cover rounded-xl' src={photo} alt={prompt} /> 

    </div>
  )
}

export default Card