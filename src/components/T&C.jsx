import React from 'react'
import NavBar from './NavBar'

function Terms()  {
  return (
    <>
    <NavBar />
    <div className="flex flex-col justify-center items-center bg-gradient-to-r space-y-3 from-[#907b65] via-[#886642] to-[#907b65] py-12">
        <h1 className='text-white text-5xl font-bold text-center' >Terms & Conditions</h1>
        <h3 className='text-black text-sm'>Kalam - Leo Muthu Education Awards 2024</h3>
    </div>
    <div className='flex flex-col w-full h-full items-center p-5'>
        <div className='flex flex-col lg:w-3/4 md:w-full space-y-3'>
        <h3 className="text-black font-bold">Regulations</h3>
        <div>
            <p>1. Kalam Best Principal Award minimum 10 years of experience.</p>
            <p>2. Best Teacher Award minimum 5 years of experience for TGT and 3 years experience for PGT <br/>(Note - Higher Secondary and High school teachers handpng 9th std. to 12th std. shall only apply)</p>
            <p>3. Teachers' Nomination One school can nominate only one teacher in each category.</p>
            <p>4. Leo Muthu Best School Perception, social media reviews will also be taken into account.</p>
            <p>5. Documents proof and photo proof wherever required must be uploaded.</p>
            <p>6. Teachers must attach the Bonafide certificate along with the nominations.</p>
            <p>7. Preferably 3 hardcopies of nominations with all proof must be sent to the below address by 25.03.2024.<br/>(Note - Data and details submitted as softcopy will be considered in case of delay in receiving the hard copy)</p>
            <p>8. Award winning schools and teachers shall bring minimum 10 high school and higher secondary school students to witness the technology project display.</p>
            <p>9. Incomplete nominations will not be considered.</p>
            <p>10. Jury's decision for the award is final.</p>
            <p>11.  For any queries you can reach the Organizers through mail and phone call.</p>
        </div>
        </div>
    </div>


    </>
  )
}
export default Terms