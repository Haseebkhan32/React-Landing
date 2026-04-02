import React from 'react'

const CTAButton = ({ text = "Get Now",  }) => {

  function name(params) {
    
  }

  return (
    <button onClick={name}
      className=" bg-[#5E94FF] px-5 py-2  text-white rounded transition-all active:scale-95 font-semibold text-lg">{text}</button>
  )
}

export default CTAButton