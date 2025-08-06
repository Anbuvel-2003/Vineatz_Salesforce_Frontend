import React, { useState } from 'react'
import img1 from "../assets/Image & bg.png";
import { FaFileAlt } from 'react-icons/fa';
import { ImProfile } from 'react-icons/im';
import { CgProfile } from "react-icons/cg";
import { MdOutlineArrowDropDown, MdDelete } from 'react-icons/md';
import { Button } from './ui/button';
import { MdOutlineEmail } from "react-icons/md";
import { MdOutlineLocalPhone } from "react-icons/md";
import { SlNotebook } from "react-icons/sl";


function 
Applicationdetails() {

  const confirm = () =>
    new Promise((resolve) => {
      setTimeout(() => resolve(null), 3000);
    });



  const [openMenuIndex, setOpenMenuIndex] = useState<number | null>(null);
  const details = [
    {
      id: 1,
      appid: "01",
      name: "John Doe",
      clientid: "01",
      img: img1,
      clientname: "John Doe",
      email: "oZVv3@example.com",
      mobilenumber1: "1234567890",
      status: "Initial",
      icon: <FaFileAlt size={30} className="text-[#4FD1C5]" />,
      profile: <ImProfile size={30} className="text-[#4FD1C5]" />,

    },
  ];
  const [clientName, setClientName] = useState(details[0].clientname);
  const [clientEmail, setClientEmail] = useState(details[0].email);
  const [clientNumber, setClientNumber] = useState(details[0].mobilenumber1);

  return (
    <div className="bg-[#F4FFFE] w-full min-h-screen px-10">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 mx-5 py-4">
        <a href="/Applicationslist" className="text-[#9E9E9E]">Application &gt;</a>
        <a href="/manageapplication" className="text-[#9E9E9E]">Vineatz Technologies &gt;</a>
        <a href="/" className="">01</a>
      </div>


      <div className="overflow-x-auto ">
        <table className="min-w-full bg-white rounded-xl border-separate shadow-sm">
          <thead className="bg-[#F0F4F8] text-[#030229] text-left">
            <tr className="grid grid-cols-8 items-center px-6 py-4 rounded-t-xl">
              <th className="flex items-center gap-1">Application id <MdOutlineArrowDropDown /></th>
              <th className="flex items-center gap-1">Application name <MdOutlineArrowDropDown /></th>
              <th className="flex items-center gap-1">Client id <MdOutlineArrowDropDown /></th>
              <th className="flex items-center gap-1">Client name <MdOutlineArrowDropDown /></th>
              <th className="flex items-center gap-1">Status <MdOutlineArrowDropDown /></th>
              <th className="flex items-center gap-1">Application details <MdOutlineArrowDropDown /></th>
              <th className="flex items-center gap-1">Client details <MdOutlineArrowDropDown /></th>
              <th className="w-[80px] ">Action</th>
            </tr>
          </thead>
          <tbody>
            {details.map((item) => (
              <tr key={item.id} className="grid grid-cols-8  items-center px-6 py-4 hover:bg-[#F8F9FF] transition border-t border-gray-100">
                <td>{item.appid}</td>
                <td>{item.name}</td>
                <td>{item.clientid}</td>
                <td className="flex items-center gap-2">
                  <img src={item.img} alt="client" className="w-6 h-6 rounded-full object-cover" />
                  {item.clientname}
                </td>
                <td>{item.status}</td>
                <td>{item.icon}</td>
                <td>{item.profile}</td>
                <td className="w-[80px] flex items-center">
                  {/* <RejectApplication appid={item.appid} clientname={item.clientname}>
                    <Button
                      type="button"
                      className='bg-[#FEF4F5] hover:bg-red-500 hover:text-white text-[#E71D36] flex items-center gap-1 text-xs px-2 py-1'
                    >
                      <MdDelete className='text-lg' /> Reject
                    </Button>
                  </RejectApplication> */}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="  ">
        <div className='py-5'>
          <span className="text-[#000000] text-[20px] font-poppins py-10">Application Details</span>
        </div>
        <div className="min-w-full h-[fit] bg-white rounded-xl px-10 pb-8 shadow-sm">
          <div className=' items-center justify-between px-5 py-6'>
            <span className="text-[#4FD1C5] text-[20px] font-poppins  ">Personal Details</span>
          </div>
          <div className='px-5'>
            <form>
              <div className='flex gap-y-4 gap-x-32'>
                <div className=' '>
                  {/* Name Input */}
                  <div className='py-3'>
                    <div className='flex px-3 border rounded-xl w-[450px] h-[50px] border-[#4FD1C5]  items-center'>
                      <CgProfile color='#4FD1C5' size={20} className='mr-2' />
                      <input
                        type="text"
                        value={clientName}
                        onChange={(e) => setClientName(e.target.value)}
                        placeholder="Client Name"
                        className="bg-transparent border-none outline-none text-[#4FD1C5] text-[16px] font-poppins w-full placeholder:text-[#A0AEC0]"
                      />
                    </div>
                  </div>

                  {/* Email Input */}
                  <div className='py-3'>
                    <div className='flex px-3 border rounded-xl w-[450px] h-[50px]  border-[#4FD1C5] items-center'>
                      <MdOutlineEmail color='#4FD1C5' size={20} className='mr-2' />
                      <input
                        type="email"
                        value={clientEmail}
                        onChange={(e) => setClientEmail(e.target.value)}
                        placeholder="Email"
                        className="bg-transparent border-none outline-none text-[#4FD1C5] text-[16px] font-poppins w-full placeholder:text-[#A0AEC0]"
                      />
                    </div>
                  </div>
                  {/* Mobile Number Input */}
                  <div className='py-3'>
                    <div className='flex px-3 border rounded-xl w-[450px] h-[50px]  border-[#4FD1C5] items-center'>
                      <MdOutlineLocalPhone color='#4FD1C5' size={20} className='mr-2' />
                      <input
                        type="text"
                        value={clientNumber}
                        onChange={(e) => setClientNumber(e.target.value)}
                        placeholder="Mobile Number"
                        className="bg-transparent border-none outline-none text-[#4FD1C5] text-[16px] font-poppins w-full placeholder:text-[#A0AEC0]"
                      />
                    </div>
                  </div>
                </div>

                {/* Read-only field (as per your 2nd column) */}
                <div className='py-3'>
                  <div className='flex px-3 py-2 border rounded-xl w-[850px] h-[200px] border-[#4FD1C5] '>
                    <SlNotebook color='#4FD1C5' size={20} className='mt-3 mr-1' />
                    <textarea
                      placeholder="Hello"
                      className="bg-transparent border-none outline-none resize-none text-[#4FD1C5] text-[16px]  font-poppins w-full h-full"
                    />
                  </div>
                </div>
              </div>


            </form>


        </div>
          <div className=' items-center justify-between px-5 py-6'>
            <span className="text-[#4FD1C5] text-[20px] font-poppins  ">Organization Details</span>
          </div>
          <div className='px-5'>
            <form>
              <div className='flex gap-y-4 gap-x-32'>
                <div className=' '>
                  {/* Name Input */}
                  <div className='py-3'>
                    <div className='flex px-3 border rounded-xl w-[450px] h-[50px] border-[#4FD1C5]  items-center'>
                      <input
                        placeholder="Company Name"
                        className="bg-transparent border-none outline-none text-[#4FD1C5] text-[16px] font-poppins w-full placeholder:text-[#A0AEC0]"
                      />
                    </div>
                  </div>

                  {/* Email Input */}
                  <div className='py-3'>
                    <div className='flex px-3 border rounded-xl w-[450px] h-[50px]  border-[#4FD1C5] items-center'>
                      <input
                        placeholder="Registered Certificate Number"
                        className="bg-transparent border-none outline-none text-[#4FD1C5] text-[16px] font-poppins w-full placeholder:text-[#A0AEC0]"
                      />
                    </div>
                  </div>
                  {/* Mobile Number Input */}
                  <div className='py-3'>
                    <div className='flex px-3 border rounded-xl w-[450px] h-[50px]  border-[#4FD1C5] items-center'>
                      <input
                        placeholder="Financial"
                        className="bg-transparent border-none outline-none text-[#4FD1C5] text-[16px] font-poppins w-full placeholder:text-[#A0AEC0]"
                      />
                    </div>
                  </div>
                </div>

                {/* Read-only field (as per your 2nd column) */}
                <div className='py-3'>
                    <div className='flex px-3 border rounded-xl w-[450px] h-[50px]  border-[#4FD1C5] items-center'>
                      <input
                        placeholder="GST Number"
                        className="bg-transparent border-none outline-none text-[#4FD1C5] text-[16px] font-poppins w-full placeholder:text-[#A0AEC0]"
                      />
                    </div>
                  
                </div>
              </div>


            </form>

</div>
          </div>
      </div>
    </div>
  )
}

export default Applicationdetails;
