import React from 'react'

import CTAButton from './CTAButton'
import NavLinks from './NavLinks'
import Logo from './Logo'


const Navbar = () => {
  return (
    <div className='w-6xl m-auto bg-black/20 backdrop-blur-sm  text-white rounded-xl'>
      <div className='max-w-6xl mx-auto px-4 py-3.5 flex items-center justify-between  '>
        <Logo/>
        <NavLinks/>
        <CTAButton/>
      </div>
    </div>
  )
}

export default Navbar