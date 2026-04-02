import React from 'react'
import Bg_Black_Btn from '../Section_4/Bg_Black_Btn'

const Section_7 = ({text= "Testimonial"}) => {
  return (
    <div>
        <Bg_Black_Btn text={text}/>
        <h1 className='text-4xl font-medium text-white text-center my-6'>Frequently Asked <br /> Questions</h1>
        <p className="text-[#c3c3c3] text-center" >Have more questions? Reach out to us, and our <br />
         team will be happy to assist you!</p>

    </div>
  )
}

export default Section_7