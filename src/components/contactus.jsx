import React from 'react';
import { useForm } from 'react-hook-form';

export default function Contactus() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);

  return (
          
    <div className='p-6 md:p-10 flex flex-col md:flex-row h-full bg-[]'>
    <div className='flex-1/2 md:m-10 w-[80vw] md:w-[50vw]'>
        <h1 className='text-4xl mb-5 font-bold'>CONTACT US</h1>
        <p className="text-gray-700 mb-2">
               <h3 className='text-md'>Email</h3>
               <p className='text-md my-3 w-[90%]'>if you have any questions or concerns about the terms & conditions please contact us :</p>
          
               <h3 className='text-lg my-3 w-[90%] text-yellow-700'>kalamawards2024@gmail.com</h3>
            </p>
            <p className="text-sm text-gray-700 mb-2">
            <h3>Phone</h3>
            <ul className='text-lg my-3 w-[90%] list-disc' >
                <li>Mrs. T. Mangayarkarasi - 87545 02226 </li>
                <li>Dr. V. Brindha Devi - 87545 82225 </li>
                <li>Dr. G. Prakash - 87545 82221</li>
                <li>Dr. K. Renganathan - 87545 02228</li>
            </ul>
            </p>
    </div>
    
    <div className='flex-1/2 md:m-10 w-[80vw] md:w-[50vw] '>
          <form action="https://formcarry.com/s/nG-UNvm9GnP" method="POST">
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                Name
              </label>
              <input
                id="name"
                type="text"
                name="name"
                placeholder="Name"
                className="w-full px-3 py-2 border rounded-md"
                {...register("Name", { required: true })}
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                Email
              </label>
              <input
                id="email"
                type="email"
                name="email"
                placeholder="Email"
                className="w-full px-3 py-2 border rounded-md"
                {...register("Email", { required: true })}
              />
            </div>

            <div className="mb-5">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="Message"
                {...register("Message", {})}
                className="w-full px-4 py-3 border rounded-md"
              />
            </div>

            <input
              
              type="submit"
              value="Send"
              className="bg-[#7D582D] text-white px-2 py-2 rounded-lg cursor-pointer w-full"
            />
          </form>
        </div>
      </div>
    
  );
}
