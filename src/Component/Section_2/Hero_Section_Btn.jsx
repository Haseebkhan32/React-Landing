
import CTAButton from '../Section_1/CTAButton'

const Hero_Section_Btn = ({ text = "Get Started" }) => {
  return (
    <div className='flex items-center justify-center my-6'>
      <CTAButton text={text} />
      <h2 className='text-white ml-8 flex justify-center items-center'>
        <a href="" className='text-white font-semibold text-lg'>View Our Services
          </a>
          <i class="ri-arrow-right-line text-xl font-semibold mt-0.5 px-0.5"></i>
      </h2>
    </div>
  )
}

export default Hero_Section_Btn