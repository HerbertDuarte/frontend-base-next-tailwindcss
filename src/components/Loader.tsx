import React from 'react'

export default function Loader() {
  return (
    <div className='w-full h-screen absolute flex justify-center items-center z-50 top-0 bg-black/60 '>
      <div className='w-12 h-12 border-8 rounded-full border-dashed border-primary-light animate-spin'/>
    </div>
  )
}
