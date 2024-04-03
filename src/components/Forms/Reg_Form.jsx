import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { v4 as uuidv4 } from "uuid";
import { Button, Spin } from "antd";
import '../../index.css';

const organizationCodeMap = {
  Government: "GO",
  GovernmentAided: "GA",
  Matriculation: "MA",
  CBSC: "CB",
  International: "IS",
};

export default function RegForm() {
  const { handleSubmit, control, register, setValue, reset } = useForm();
  const [counter, setCounter] = useState(1);
  const [customUUID, setCustomUUID] = useState("");
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [submitClicked, setsubmitClicked] = useState(false);
  const [loading, setLoading] = useState(false);

  const onSubmit = (data) => {
    setLoading(true);
    const finalData = { ...data };
    finalData.dob = new Date(data.dob).getUTCMilliseconds();
    fetch("https://kalam-awards-server.onrender.com/register", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(finalData),
    })
      .then((res) => res.json())
      .then((data) => {
        setsubmitClicked(false);
        console.log(data);
        setCustomUUID(data.id);
        setShowConfirmation(true);
        reset();
      })
      .catch(function (res) {
        console.log(res);
        // setsubmitClicked(false);
      })
      .finally(() => {
        setLoading(false); 
      });
  };

  return (
    <div className="bg-[#dad4c3] p-10 rounded-md shadow-md w-300 mx-auto max-w-full">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white p-5 rounded-xl shadow-md w-300 mx-auto max-w-[800px] text-black"
      >
        <h1 className="text-3xl font-bold mb-4">Kalam Leo-Muthu educational awards 2024</h1>
        <h3 className="text-2xl font-bold mb-4">Registration Form</h3>
        <hr />
        <br />
        <label className="block text-sm mb-2">Nomination Type*</label>
        <Controller
          name="nominationType"
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <select {...field} className="w-full p-2 border border-gray-300 rounded-md">
              <option value="Student">Student</option>
              <option value="Teacher">Teacher</option>
            </select>
          )}
        />

        <label className="block text-sm mt-4 mb-2">Select Your Organization*</label>
        <Controller
          name="organisationType"
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <select {...field} className="w-full p-2 border border-gray-300 rounded-md">
              <option value="">Select</option>
              <option value="Government">Government</option>
              <option value="GovernmentAided">Government Aided</option>
              <option value="Matriculation">Matriculation</option>
              <option value="CBSE">CBSE</option>
              <option value="International">International</option>
            </select>
          )}
        />

        <label className="block text-sm mt-4 mb-2">Fullname*</label>
        <input
          type="text"
          placeholder="Name"
          {...register("fullName", { required: true })}
          className="w-full p-2 border border-gray-300 rounded-md"
        />

        <label className="block text-sm mt-4 mb-2">Gender*</label>
        <select {...register("gender", { required: true })} className="w-full p-2 border border-gray-300 rounded-md">
          <option value="">Select</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>

        <label className="block text-sm mt-4 mb-2">Aadhar Number*</label>
        <input
          type="text"
          placeholder="Aadhar Number"
          {...register("aadharNumber", { required: true })}
          className="w-full p-2 border border-gray-300 rounded-md"
        />

        <label className="block text-sm mt-4 mb-2">School Name*</label>
        <textarea
          placeholder="School Name"
          {...register("schoolName", { required: true })}
          className="w-full p-2 border border-gray-300 rounded-md"
        />

        <label className="block text-sm mt-4 mb-2">Date of Birth*</label>
        <input
          type="date"
          placeholder="Date of Birth"
          {...register("dob", { required: true })}
          className="w-full p-2 border border-gray-300 rounded-md"
        />

        <label className="block text-sm mt-4 mb-2">School Registration Number*</label>
        <input
          type="text"
          placeholder="School Registration Number"
          {...register("schoolRegistrationNumber", { required: true })}
          className="w-full p-2 border border-gray-300 rounded-md"
        />

        <label className="block text-sm mt-4 mb-2">Location*</label>
        <input
          type="text"
          placeholder="Location"
          {...register("location", { required: true })}
          className="w-full p-2 border border-gray-300 rounded-md"
        />

        <label className="block text-sm mt-4 mb-2">School Contact Number*</label>
        <input
          type="tel"
          placeholder="School Contact Number"
          {...register("schoolContactNumber", { required: true })}
          className="w-full p-2 border border-gray-300 rounded-md"
        />

        <label className="block text-sm mt-4 mb-2">Address*</label>
        <textarea
          placeholder="Address"
          {...register("address", { required: true })}
          className="w-full p-2 border border-gray-300 rounded-md"
        />

        <label className="block text-sm mt-4 mb-2">Contact Person Number*</label>
        <input
          type="tel"
          placeholder="Contact Person Number"
          {...register("contactPersonNumber", { required: true })}
          className="w-full p-2 border border-gray-300 rounded-md"
        />

        <label className="block text-sm mt-4 mb-2">District*</label>
        <input
          type="text"
          placeholder="District"
          {...register("district", { required: true })}
          className="w-full p-2 border border-gray-300 rounded-md"
        />

        <label className="block text-sm mt-4 mb-2">Select Subject*</label>
        <Controller
          name="subject"
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <select {...field} className="w-full p-2 border border-gray-300 rounded-md">
              <option value="">Select Subject</option>
              <option value="Tamil">Tamil</option>
              <option value="English">English</option>
              <option value="Maths">Maths</option>
              <option value="Science">Science</option>
              <option value="Social">Social</option>
              <option value="ComputerScience">Computer Science</option>
            </select>
          )}
        />

        <label className="block text-sm mt-4 mb-2">School Email ID*</label>
        <input
          type="email"
          placeholder="School Email ID"
          {...register("schoolEmailId", { required: true })}
          className="w-full p-2 border border-gray-300 rounded-md"
        />

        <label className="block text-sm mt-4 mb-2">Email ID*</label>
        <input
          type="email"
          placeholder="Email ID"
          {...register("emailId", { required: true })}
          className="w-full p-2 border border-gray-300 rounded-md"
        />

        <label className="block text-sm mt-4 mb-2">Mobile Number*</label>
        <input
          type="tel"
          placeholder="Mobile Number"
          {...register("mobileNumber", { required: true })}
          className="w-full p-2 border border-gray-300 rounded-md"
        />

        <label className="block text-sm mt-4 mb-2">Landline</label>
        <input
          type="tel"
          placeholder="Landline"
          {...register("landline")}
          className="w-full p-2 border border-gray-300 rounded-md"
        />

        <div className="w-full flex justify-between mt-6">
          <Button htmlType="submit" className="sub bg-green-500 text-white px-3 rounded-md cursor-pointer hover:border-none" loading={loading}>
            Submit
          </Button>
          <input type="reset" className="bg-red-500 text-white px-3 rounded-md cursor-pointer hover:bg-red-600" />
        </div>
      </form>

      {loading && ( 
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75">
          <Spin size="large" />
        </div>
      )}

      {showConfirmation && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75">
          <div className="bg-white p-8 rounded-md shadow-md text-center">
            <h2 className="text-2xl font-bold mb-4">Thank you for Registration!</h2>
            <p className="mb-4">Your unique ID is: {customUUID}</p>
            <p>Once the registration is confirmed, you will receive a confirmation email. Thank you </p>
            <button
              className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
              onClick={() => setShowConfirmation(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
