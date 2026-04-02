import React from 'react'
import Bg_Black_Btn from '../Section_4/Bg_Black_Btn'
import Feedback_Card from './Feedback_Card'

const Section_6 = ( {text = "Testimonial"}) => {
  return (
    <div  className='w-6xl m-auto py-32'>
        <Bg_Black_Btn text={text}/>
        <h1 className='text-4xl font-medium text-white text-center my-6'>What Our Client’s Say</h1>
        <div>
            <Feedback_Card/>
        </div>
    </div>
  )
}

export default Section_6