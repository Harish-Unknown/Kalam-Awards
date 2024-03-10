import React from 'react'
import logo from '/images/logo.svg'
import { Link } from 'react-router-dom';



const Home = () => {
    return (
        <div id="Home" className='h-screen bg-Home bg-center bg-cover text-white flex flex-col justify-center items-center '>
            <img className='w-[150px]' src={logo} alt="" />
            <h1 className='mt-5 text-4xl md:text-6xl font-bold w-[70vw] md:w-[50vw] text-center leading-[45px]'>Kalam - Leo Muthu Education Awards 2024</h1>
            <p className='mt-3 w-[70vw] md:w-[50vw] text-center md:text-xl leading-6 md:leading-10'>Join us in celebrating the visionaries who are shaping the future.
                Recognizing and Honoring the best schools & teachers of Tamil Nadu</p>
            <Link to='/register'>
                <button className='border-2 mt-3 text-xl text-white rounded-md px-[30px] py-[12px] hover:bg-gray-800 hover:text-gray-100'>
                    Register
                </button>
            </Link>
        </div>
    )
}

export default Home;

