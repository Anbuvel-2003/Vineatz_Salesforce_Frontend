import React from 'react'
import { CgProfile } from 'react-icons/cg'
import { GoPlus } from 'react-icons/go'
import { MdOutlineEmail, MdOutlineLocalPhone } from 'react-icons/md'
import { SlNotebook } from 'react-icons/sl'
import { useNavigate } from 'react-router-dom'

function Adminupdation() {
    const navigate = useNavigate();

    return (
        <div>
            <div className="bg-[#F4FFFE] w-full min-h-screen px-20">
                {/* Breadcrumb */}
                <div className="flex items-center justify-between">
                    <div className="text-[#000000] text-[18px] text-poppins">Update Admin Details </div>
                    <div
                        className="flex items-center gap-2 bg-[#BF9FFF] px-2 py-2 rounded-md cursor-pointer"
                        onClick={() => navigate("/Admincreation")}
                    >
                        <GoPlus size={35} className="text-[#FFFF]" />
                    </div>
                </div>
                <div className=' '>
                <p className="text-black text-[18px] font-semibold  py-6">Admin Update</p>

                <div className="  ">
                    <div className="min-w-full h-[fit] bg-white rounded-xl px-16 pb-8 shadow-xl">
                        <div className=' items-center justify-between px-5 py-6'>
                            <span className="text-[#BF9FFF] text-[20px] font-poppins  ">Personal Details</span>
                        </div>
                        <div className='px-5'>
                            <form>
                                <div className='flex gap-y-4 gap-x-32'>
                                    <div className=' '>
                                        {/* Name Input */}
                                        <div className='py-3'>
                                            <div className='flex px-3 border rounded-xl w-[600px] h-[50px] border-[#BF9FFF]  items-center'>
                                                <CgProfile color='#BF9FFF' size={20} className='mr-2' />
                                                <input
                                                    type="text"
                                                    placeholder="First Name"
                                                    className="bg-transparent border-none outline-none text-[#4FD1C5] text-[16px] font-poppins w-full placeholder:text-[#A0AEC0]"
                                                />
                                            </div>
                                        </div>
                                        <div className='py-3'>
                                            <div className='flex px-3 border rounded-xl w-[600px] h-[50px] border-[#BF9FFF]  items-center'>
                                                <CgProfile color='#BF9FFF' size={20} className='mr-2' />
                                                <input
                                                    type="text"
                                                    placeholder="Last Name"
                                                    className="bg-transparent border-none outline-none text-[#4FD1C5] text-[16px] font-poppins w-full placeholder:text-[#A0AEC0]"
                                                />
                                            </div>
                                        </div>

                                        {/* Email Input */}
                                        <div className='py-3'>
                                            <div className='flex px-3 border rounded-xl w-[600px] h-[50px]  border-[#BF9FFF] items-center'>
                                                <MdOutlineEmail color='#BF9FFF' size={20} className='mr-2' />
                                                <input
                                                    type="email"
                                                    placeholder="Email"
                                                    className="bg-transparent border-none outline-none text-[#4FD1C5] text-[16px] font-poppins w-full placeholder:text-[#A0AEC0]"
                                                />
                                            </div>
                                        </div>
                                        {/* Password Input */}
                                        <div className='py-3'>
                                            <div className='flex px-3 border rounded-xl w-[600px] h-[50px]  border-[#BF9FFF] items-center'>
                                                <input
                                                    type="text"
                                                    placeholder="Password"
                                                    className="bg-transparent border-none outline-none text-[#4FD1C5] text-[16px] font-poppins w-full placeholder:text-[#A0AEC0]"
                                                />
                                            </div>
                                        </div>
                                        <div className='py-3'>
                                            <div className='flex px-3 border rounded-xl w-[600px] h-[50px]  border-[#BF9FFF] items-center'>
                                                <input
                                                    type="text"
                                                    placeholder="Confirm Password"
                                                    className="bg-transparent border-none outline-none text-[#4FD1C5] text-[16px] font-poppins w-full placeholder:text-[#A0AEC0]"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        {/* Read-only field (as per your 2nd column) */}
                                        <div className='py-3'>
                                            <div className='flex px-3 border rounded-xl w-[600px] h-[50px]  border-[#BF9FFF] items-center'>
                                                <MdOutlineLocalPhone color='#BF9FFF' size={20} className='mr-2' />
                                                <input
                                                    type="text"
                                                    placeholder="Mobile Number"
                                                    className="bg-transparent border-none outline-none text-[#4FD1C5] text-[16px] font-poppins w-full placeholder:text-[#A0AEC0]"
                                                />
                                            </div>
                                        </div>
                                        <div className='py-3'>
                                            <div className='flex px-3 py-2 border rounded-xl w-[600px] h-[200px] border-[#BF9FFF] '>
                                                <SlNotebook color='#BF9FFF' size={20} className='mt-3 mr-1' />
                                                <textarea
                                                    placeholder="Address"
                                                    className="bg-transparent border-none outline-none resize-none text-[#4FD1C5] text-[16px]  font-poppins w-full h-full"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                        {/* button */}
                        <div className='!p-5 '>
                            <button className='text-white bg-[#BF9FFF] hover:bg-[#4FD1C5] text-[20px] font-poppins rounded-xl px-10 py-3' >Submit</button>
                        </div>
                    </div>
                </div>
            </div>
     </div>
        </div>
    )
}

export default Adminupdation;
