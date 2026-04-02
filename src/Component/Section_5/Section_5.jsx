import React from 'react'
import Bg_Black_Btn from '../Section_4/Bg_Black_Btn'
import CTAButton from '../Section_1/CTAButton'

const Section_5 = ({ text = "Way us" }) => {


   let Section_5_CardData = [
  {
    id: 1,
    title: "End-to-End Expertise",
    des: "From precise AI annotation to strategic recruitment and modern website development, we deliver complete solutions tailored to your goals.",
  },
  {
    id: 2,
    title: "Industry-Specific Talent Sourcing",
    des: "We connect top professionals with startups, enterprises, and tech companies for both full-time and contract roles.",
  },
  {
    id: 3,
    title: "Accurate & Scalable Annotations",
    des: "Our team specializes in image, text, audio, and 3D/LiDAR annotations to power high-performing AI models.",
  },
  {
    id: 4,
    title: "Custom, User-Centric Web Development",
    des: "We build fast, responsive, and intuitive websites—from business sites to e-commerce platforms.",
  },
  {
    id: 5,
    title: "Quality & Commitment",
    des: "We focus on quality, on-time delivery, and transparent communication, ensuring your satisfaction at every step.",
  }
];


    return (
        <div className='w-6xl m-auto flex '>
            <div className='w-[50%] flex flex-col items-start'>
                <Bg_Black_Btn text={text} />
                <h1 className='text-white text-4xl font-semibold my-4'>Way Choose to.Squre</h1>
                <p className='text-white text-lg my-4'>We combine precision, creativity, and strategy to power <br />your digital growth. From smart annotations to expert <br /> hiring and custom web solutions trust us to deliver.</p>
                <CTAButton />
            </div>
            <div className='w-[50%]'>
                {Section_5_CardData.map( (val, i)=>{
                    return (
                            <div key={i} className='py-6 px-12 bg-[#0D0D0D] rounded-[10px]  text-white my-4'>
                    <div className='text-2xl text-blue-600'>{val.id}.</div>
                    <h1 className='my-5 text-2xl text-white'>{val.title}</h1>
                    <p className='text-[#c3c3c3]'>{val.des}</p>
                </div>
                )})}
     
            </div>
        </div>
    )
}

export default Section_5