import React from 'react'
import Navbar from './Component/Section_1/Navbar'
import Section_2 from './Component/Section_2/Section_2'
import Section_3 from './Component/Section_3/Section_3'
import Section_4 from './Component/Section_4/Section_4'
import Section_5 from './Component/Section_5/Section_5'
import Section_6 from './Component/Section_6/Section_6'
import Section_7 from './Component/Section_7/Section_7'



const App = () => {
  return (
    <div className="bg-[url('/public/Home_Img.jpg')]">
      <div className=" pt-8 bg-black/80">
        <Navbar />
        <Section_2 />
        <Section_3 />
        <Section_4/>
        <Section_5/>
        <Section_6/>
        <Section_7/>
      </div>
    </div>
  )
}

export default App