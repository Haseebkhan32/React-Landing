
const ServiceCard = () => {
    return (
        <div className='flex gap-2  bg-amber-700 p-2'>
            <div className='bg-amber-100 w-full p-5' >
                <div>icon</div>
                <div className="text-2xl text-hite ">Annotation Services</div>
                <div>
                    <ul className="text-lg  my-4" >
                        <li className="list-disc list-inside font-semibold"> Text Annotation</li>
                        <p> NER, sentiment, classification & more</p>
                    </ul>
                    <ul className="text-lg  my-4" >
                        <li className="list-disc list-inside font-semibold"> Text Annotation</li>
                        <p> NER, sentiment, classification & more</p>
                    </ul>
                    <ul className="text-lg  my-4" >
                        <li className="list-disc list-inside font-semibold"> Text Annotation</li>
                        <p> NER, sentiment, classification & more</p>
                    </ul>
                    <ul className="text-lg  my-4" >
                        <li className="list-disc list-inside font-semibold"> Text Annotation</li>
                        <p> NER, sentiment, classification & more</p>
                    </ul>
                </div>
            </div>
            <div className='bg-amber-100 w-full'>2</div>
            <div className='bg-amber-100 w-full'>3</div>
        </div>
    )
}

export default ServiceCard