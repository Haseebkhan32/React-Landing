import React from 'react'

const Feedback_Card = () => {

    const feedbackData = [
  {
    id: 1,
    stars: "★★★★★",
    text: "Their text annotation team delivered fast, clean, and accurate data. It really helped accelerate our AI model training process.",
    name: "Mehul Rana",
    role: "machine learning engineer",
    img: "/public/FeedbackCard_1.png"
  },
  {
    id: 2,
    stars: "★★★★★",
    text: "From the first meeting to the final website launch, they were professional, creative, and highly responsive. I'm beyond satisfied!",
    name: "Sara Trivedi",
    role: "creative director",
    img: "/public/FeedbackCard_2.png"
  },
  {
    id: 3,
    stars: "★★★★★",
    text: "Our new e-commerce website is sleek, fast, and mobile-friendly. The user experience is exactly what we wanted.",
    name: "Ritika Shah",
    role: "e-commerce manager",
    img: "/public/FeedbackCard_3.png"
  },
  {
    id: 4,
    stars: "★★★★★",
    text: "Thanks to their tech recruitment team, we hired 3 top developers in less than a month. They really understood our needs.",
    name: "Karan Joshi",
    role: "head of engineering",
    img: "/public/FeedbackCard_4.png"
  },
  {
    id: 5,
    stars: "★★★★★",
    text: "Their ability to provide contract-based AI talent saved our startup time and money. Highly recommend them!",
    name: "Devang Mehta",
    role: "startup co-founder",
    img: "/public/FeedbackCard_5.png"
  },
  {
    id: 6,
    stars: "★★★★★",
    text: "Our new e-commerce website is sleek, fast, and mobile-friendly. The user experience is exactly what we wanted.",
    name: "Ankita Sinha",
    role: "ai research scientist",
    img: "/public/FeedbackCard_6.png"
  }
];

  return (
    <div> 
        <div className='grid grid-cols-3 text-white gap-3 py-6'>
            {feedbackData.map( (val, i ) =>
             <div key={i} className='p-2 rounded-[10px] bg-[#0f0f0f]' >
                <div className='rounded-[10px] bg-[#090909] p-14'>
                    <span className='text-xl text-yellow-300'>{val.stars}</span>
                    <p className='my-8'>{val.text}</p>
                    <div className='flex gap-4'>
                        <img src={val.img} alt="" className='object-contain' />
                        <div>
                            <p>{val.name}</p>
                            <p>{val.role}</p>
                        </div>
                    </div>
                </div>
            </div>
              )}
        </div>
    </div>
  )
}

export default Feedback_Card