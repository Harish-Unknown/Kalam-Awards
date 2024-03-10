import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

function Footer() {
	return (
		<>
			<div className="bg-[#FBF6F0] h-1/2 w-full flex md:flex-row flex-col justify-around items-start p-10">
				<div className="p-5">
					<ul>
						<p className="text-gray-800 font-bold text-3xl pb-6">
							Kalam <span className="text-brown-600">Awards</span>
						</p>
						<div className="flex gap-6 pb-5">
							<FaInstagram className="text-2xl cursor-pointer hover:text-pink-600" />
							<FaTwitter className="text-2xl cursor-pointer hover:text-blue-600" />
							<FaLinkedin className="text-2xl cursor-pointer hover:text-blue-600" />
							<FaYoutube className="text-2xl cursor-pointer hover:text-red-600" />
						</div>
					</ul>
				</div>
				<div className="p-4">
					<ul>
						<p className="text-gray-800 font-bold text-2xl pb-4">Company</p>
						<li className="text-gray-600 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
							About
						</li>
						<li className="text-gray-600 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
							Contact Us
						</li>
						<li className="text-gray-600 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
							FAQ
						</li>
                        <li className="text-gray-600 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
							Events
						</li>
						
					</ul>
				</div>
				<div className="p-5">
					<ul>
                    <p className="text-gray-800 font-bold text-2xl pb-3">Support</p>
                    <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
							Register
						</li>
						<li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
							Nomination
						</li>
						<li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
							Terms and Conditions
						</li>
					</ul>
				</div>
			</div>
           
			<div className="flex flex-col justify-center items-center text-center  p-2 bg-gray-50">
				<p className=" text-gray-500 font-semibold">
					© 2024 All rights reserved Kalam-Leo Muthu Awards
				</p>
			</div>
		</>
	);
}

export default Footer;