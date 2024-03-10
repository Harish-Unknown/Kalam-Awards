import React from 'react'
import { Container } from 'react-bootstrap';
import { Link as Linker } from 'react-router-dom'

function About() {
    return (
        <div id='About' name="About" className='bg-About h-full md:h-full bg-center bg-cover lg:flex justify-center items-center md:p-10 pb-5'>
            <div className='flex-50 p-5'>
                <h2 className='font-bold leading-10 p-3'>Celebrating 72th Birth Anniversary of Our Founder Chairman Shri M.J.F.Ln Leo Muthu on April 9th 2024.</h2>
                <ul className='leading-8 p-3'>
                    <li style={{ listStyleType: "circle" }}>A great visionary by birth and philanthropist of par excellence, our revered Founder Chairman, MJF. Ln. Leo Muthu ventured into the realm of providing quality education affordable to all.</li>
                    <li style={{ listStyleType: "circle" }}>The phenomenal growth has been marked by his tireless and extraordinary efforts taken with the sole aim of providing quality education to the middle class and lower-middle-class society.</li>
                    <li style={{ listStyleType: "circle" }}>In order to remember our Founder Chairman’s excellent contributions made in the Educational Field and service to the society.</li>
                </ul>
                <div>
                    <Linker to='/nomination'>
                        <button className='border border-transparent bg-gray-800 text-gray-100 m-3 rounded-md px-[30px] py-[12px] hover:bg-gray-900'>
                            Nominate
                        </button>
                    </Linker>
                    <Linker to='/register'>
                        <button className='border-2 text-gray-900 border-gray-900 !important m-3 rounded-md px-[30px] py-[12px] hover:bg-gray-100'>
                            Register
                        </button>
                    </Linker>
                </div>
            </div>
            <Container>
                <div className='flex-50 rounded-lg ratio ratio-16x9 p-5 z-0'>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/g85TNWgwRIg?si=cMd_RAbo4bpWPmJ7" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
            </Container>

        </div>
    )
}

export default About

//bg-[url("https://i.postimg.cc/kXmxSWn7/aboutbg.png")]