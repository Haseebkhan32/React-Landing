import React from 'react'

const Bg_Black_Btn = ({ text = "Our Core Services", onclick }) => {
  return (
    <div className=' text-center'>
      <button onclick={onclick} className='
      shadow-[inset_0px_0px_30px_rgba(255,255,255,0.06)] bg-[#1e1e1e74] border border-white/20 
      px-5 py-2 text-white rounded-[10px] transition-all active:scale-95 font-semibold text-lg'>{text}</button>

    </div>
  )
}




export default Bg_Black_Btn