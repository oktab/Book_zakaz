import React from 'react'
import { useLocation } from 'react-router'

const NewInfo = () => {
  const location = useLocation()
  const { item } = location.state || {}


  return (
    <div className='mt-[200px]'>
      <h1 className="text-3xl font-bold mb-4">{item.title}</h1>
    </div>
  )
}

export default NewInfo;