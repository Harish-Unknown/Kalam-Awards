import React from 'react'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

const Faq = () => {
    return (
        <div id='Faq' className='p-10 md:p-20 flex flex-col md:flex-row h-full bg-[#FBF6F0]'>
            <div className='flex-1/2 md:m-10 w-[80vw] md:w-[50vw]'>
                <h1 className='text-5xl mb-5 font-bold'>FAQs</h1>
                <p className='text-xl my-5 w-[90%]'>Find answers to common questions about the nomination process, event details, and participation guidelines.</p>
            </div>
            <div className='flex-1/2 md:m-10 w-[80vw] md:w-[50vw]'>
                <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-1" className='border-2 px-3 mb-3 hover:shadow-lg'>
                        <AccordionTrigger className='text-[18px]'>How do I nominate?</AccordionTrigger>
                        <AccordionContent className='text-[15px]'>
                        To nominate, simply fill out the nomination form on our website with the required information.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2" className='border-2 px-3 my-3 hover:shadow-lg'>
                        <AccordionTrigger className='text-[18px]'>What are the event details?</AccordionTrigger>
                        <AccordionContent className='text-[15px]'>
                        The event details, including the date, time, and location, will be provided on our website and communicated to registered participants.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3" className='border-2 px-3 my-3 hover:shadow-lg'>
                        <AccordionTrigger className='text-[18px]'>How can I participate?</AccordionTrigger>
                        <AccordionContent className='text-[15px]'>
                        To participate, you need to register on our website and follow the guidelines provided.  
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-4" className='border-2 px-3 my-3 hover:shadow-lg'>
                        <AccordionTrigger className='text-[18px]'>What are the guidelines?</AccordionTrigger>
                        <AccordionContent className='text-[15px]'>
                        The guidelines for participation can be found on our website. Please make sure to read them carefully before registering.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-5" className='border-2 px-3 mt-3 hover:shadow-lg'>
                        <AccordionTrigger className='text-[18px]'>Can I nominate multiple candidates?</AccordionTrigger>
                        <AccordionContent className='text-[15px]'>
                        Yes, you can nominate multiple candidates by submitting separate nomination forms for each individual.
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>
        </div>
    )
}

export default Faq
