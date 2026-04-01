import React from 'react'

const NavLinks = () => {

  const links = ["Home","Service","About", "Contact Us"]
  return (
    <ul className='flex gap-6'>
      {links.map( (val,i)=>
      <li key={i} className='cursor-pointer hover:text-blue-400' >
        {val}
      </li>
    )}
    </ul>
  )
}

export default NavLinks