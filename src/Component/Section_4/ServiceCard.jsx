import ServiceCard_Btn from "./ServiceCard_Btn";



const ServiceCard = () => {

    return (
        <div className='flex gap-2  my-8 '>
            <div className='w-full p-2 text-white shadow-[inset_0px_0px_30px_rgba(255,255,255,0.06)] bg-[#1e1e1e74] border border-white/20 rounded-[10px]' >
                <div className="bg-black/50 p-4 rounded-[10px] ">
                    <div className="">icon</div>
                    <div className="text-2xl text-hite ">Annotation Services</div>
                    <div className="my-7"> <ul className="my-4" >
                        <li className="list-disc list-inside text-lg font-semibold"> Text Annotation</li>
                        <p> NER, sentiment, classification & more</p> </ul> <ul className="my-4" >
                            <li className="list-disc list-inside text-lg font-semibold">Image Annotation</li>
                            <p>Bounding boxes, segmentation, keypoints</p> </ul> <ul className="my-4" >
                            <li className="list-disc list-inside text-lg font-semibold">Audio Annotation</li>
                            <p>Transcription, speaker ID, event detection</p> </ul> <ul className="my-4" >
                            <li className="list-disc list-inside text-lg font-semibold">LiDAR & 3D</li>
                            <p>Annotation for autonomous systems & spatial mapping</p> </ul>
                    </div>
                    <ServiceCard_Btn />
                </div>
            </div>
            <div className='w-full p-2 text-white shadow-[inset_0px_0px_30px_rgba(255,255,255,0.06)] bg-[#1e1e1e74] border border-white/20 rounded-[10px]' >
                <div className="bg-black/50 p-4 rounded-[10px] ">
                    <div>icon</div>
                    <div className="my-7">
                        <ul className="my-18" >
                            <li className="list-disc list-inside text-lg font-semibold">Connecting top talent with leading organizations across industries, We specialize in:</li>

                            <li className="list-disc list-inside text-lg font-semibold">Tech & IT Recruitment</li>

                            <li className="list-disc list-inside text-lg font-semibold">Al & Data Talent Sourcingt</li>

                            <li className="list-disc list-inside text-lg font-semibold">contract & Full-Time Hiring</li>
                            <li className="list-disc list-inside text-lg font-semibold">Startup & Enterprise Recruitment Support</li>
                        </ul>
                    </div>
                    <ServiceCard_Btn />
                </div>
            </div>
            <div className=' w-full p-2 text-white shadow-[inset_0px_0px_30px_rgba(255,255,255,0.06)] bg-[#1e1e1e74] border border-white/20 rounded-[10px]' >
                <div className="bg-black/50 p-4 rounded-[10px] ">  
                <div>icon</div>
                <div className="text-2xl text-hite ">Website Development</div>
                <div className="my-10">
                    <ul className="my-4 mb-32" >
                        <li className="list-disc list-inside text-lg font-semibold">We craft custom websites that are fast, responsive, and user-friendly.</li>
                        <li className="list-disc list-inside text-lg font-semibold">Whether it's a business site, e-commerce platform, or portfolio, we trun your ideas into impactful digital experiences</li>
                    </ul>
                </div>
                <ServiceCard_Btn />
                </div>
            </div>
        </div>

    )
}

export default ServiceCard

