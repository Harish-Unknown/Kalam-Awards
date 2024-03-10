import React from 'react'

function Events() {
  return (
    <div id='Events' name="Events" className='flex flex-col justify-center items-center h-full w-full p-20'>
      <h1 className='pb-20 text-4xl md:text-5xl font-bold'>Event Process</h1>
      <div className='w-[90vw] flex flex-col justify-center'>
        <svg height="10" className='z-[-10] ml-[125px] w-[65vw] lg:w-[70vw] hidden md:flex absolute'>
          <line x1="0" y1="0" x2="100%" y2="0" stroke="black" strokeWidth="9" />
        </svg>
        <svg height="1" className='absolute z-[-10] left-1/2 transform -translate-x-1/2 h-[58vh] md:hidden' viewBox="0 0 1 100">
          <line x1="0" y1="0" x2="0" y2="100%" stroke="black" strokeWidth="2" />
        </svg>
        <div className='block md:flex justify-between items-center'>
          <div className='flex w-full my-5 md:flex-col justify-center items-center gap-3'>
            <h5 className='w-[30%]'>25.03.2024</h5>
            <div className='w-[100px] h-[100px] rounded-[360px] bg-[#000] flex justify-center items-center'>
              <div className='w-[50px] h-[50px] rounded-[360px] bg-[#BD9261]'></div>
            </div>
            <h5 className='w-[30%] md:w-full text-center'>Nomination Close</h5>
          </div>
          <div className='flex w-full my-5 md:flex-col justify-center items-center gap-3'>
            <h5 className='w-[30%]'>28.03.2024</h5>
            <div className='w-[100px] h-[100px] rounded-[360px] bg-[#000] flex justify-center items-center'>
              <div className='w-[50px] h-[50px] rounded-[360px] bg-[#BD9261]'></div>
            </div>
            <h5 className='w-[30%] md:w-full text-center'>Notification Mail</h5>
          </div>
          <div className='flex w-full my-5 md:flex-col justify-center items-center gap-3'>
            <h5 className='w-[30%]'>05.04.2024</h5>
            <div className='w-[100px] h-[100px] rounded-[360px] bg-[#000] flex justify-center items-center'>
              <div className='w-[50px] h-[50px] rounded-[360px] bg-[#BD9261]'></div>
            </div>
            <h5 className='w-[30%] md:w-full text-center'>Confirmation of Participation</h5>
          </div>
          <div className='flex w-full my-5 md:flex-col justify-center items-center gap-3'>
            <h5 className='w-[30%]'>09.04.2024</h5>
            <div className='w-[100px] h-[100px] rounded-[360px] bg-[#000] flex justify-center items-center'>
              <div className='w-[50px] h-[50px] rounded-[360px] bg-[#BD9261]'></div>
            </div>
            <h5 className='w-[30%] md:w-full text-center'>Award Function</h5>
          </div>
        </div>
      </div>
      <div className='mt-5 flex flex-col justify-center items-center rounded-lg border-2 border-solid border-[#FBAD53] py-3 px-3 md:px-20'>
        <h1 className='w-full text-center text-[18px] mb-4 font-bold'>Venue</h1>
        <p className='w-full text-start'>SRI SAI RAM INSTITUTIONS</p>
        <p className='w-full text-start'>Sai Leo Nagar, West Tambaram, Chennai - 600044, Tamil Nadu, India.</p>
      </div>
    </div>

  )
}

export default Events
