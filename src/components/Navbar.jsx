// rafce to generate a functional component
import React from 'react'

const Navbar = () => {
  return (
    <div className='flex items-center justify-between p-4 z-[100] w-full absolute'>
        <h1 className='text-blue-600 text-4xl font-bold cursor-pointer'>Kid's Watch</h1>
        <div>
            <button className='text-white pr-4'>Sign in</button>
            <button className='bg-blue-600 px-6 py-4 rounded cursor-pointer text-white'>Sign up</button>
        </div>
    </div>
  )
}

export default Navbar