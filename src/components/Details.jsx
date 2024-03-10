import React from 'react'
import c1 from '/c1.svg'
import c2 from '/c2.svg'


const Details = () => {
    return (
        <div className='p-10 md:p-20 flex flex-col md:flex-row bg-[#FBF6F0]'>
            <div className='flex-50 w-[80vw] md:w-[50vw]'>
                <h1 className='m-5 text-5xl font-bold'>Participating Institutions</h1>
                <ul className='m-5 text-xl'>
                    <li className='list-disc'>Government & Government Aided Higher Secondary Schools</li>
                    <li className='list-disc'>Matriculation Schools</li>
                    <li className='list-disc'>CBSE Schools</li>
                    <li className='list-disc'>International Schools</li>
                </ul>
            </div>
            <div className='flex w-[80vw] md:w-[50vw] flex-col justify-center items-center'>
                <div className='flex m-3 p-2 w-[250px] rounded-xl bg-[#BD9261] justify-center items-center'>
                    <img src={c1} className='w-[80px]' alt='' />
                    <p className='font-bold px-3'>50 Awards &
                        Certificates</p>
                </div>
                <div className='flex m-3 p-2 w-[250px] justify-center rounded-xl bg-[#BD9261] items-center'>
                    <img src={c2} className='w-[80px]' alt='' />
                    <p className='font-bold px-3'>Exciting Prizes</p>
                </div>
            </div>
        </div>
    )
}

export default Details
