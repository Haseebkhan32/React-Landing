import React from 'react'
import Company_1 from './Company_1'
import Company_2 from './Company_2'
import Company_3 from './Company_3'
import Company_4 from './Company_4'

const Section_3 = () => {
  return (
    <div>
        <div className='flex justify-center items-center text-[#FFFFFF80]'>
        <p className='text-lg font-semibold leading-5'>Trusted By<br/>Compnys</p>
        <div className='mx-10 '>|</div>
        <div className='flex gap-9'>
        <Company_1/>
        <Company_2/>
        <Company_3/>
        <Company_4/>
        </div>
        </div>
    </div>
  )
}

export default Section_3