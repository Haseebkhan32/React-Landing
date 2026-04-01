import React from 'react'
import CTAButton from '../Section_1/CTAButton'

const Sm_Heading = ( { text = "New"}) => {
  return (
    <div>
        <div className='flex justify-center items-center gap-4 p-1 rounded'>
            <CTAButton text={text}/>
            <h2 className='text-white font-semibold text-lg'>Shaping the Future of Identity</h2>
        </div>

    </div>
  )
}

export default Sm_Heading