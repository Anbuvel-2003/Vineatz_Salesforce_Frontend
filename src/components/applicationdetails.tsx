import React, { useState } from 'react'
import img1 from "../assets/Image & bg.png";
import avatar1 from "../assets/avatar1.png";
import avatar2 from "../assets/avatar2.png";
import profile from "../assets/profile.png";
import { FaFileAlt } from 'react-icons/fa';
import { ImProfile } from 'react-icons/im';
import { Button, Popconfirm } from 'antd';
import { MdOutlineArrowDropDown, MdDelete } from 'react-icons/md';
import RejectApplication from '../components/rejectapplication';


function Applicationdetails() {

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
      status: "Initial",
      icon: <FaFileAlt size={30} className="text-[#4FD1C5]" />,
      profile: <ImProfile size={30} className="text-[#4FD1C5]" />,

    },
  ];

  return (
    <div className="bg-[#F4FFFE] w-full min-h-screen px-10">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 mx-5 py-4">
        <a href="/Applicationslist" className="text-[#9E9E9E]">Application &gt;</a>
        <a href="/manageapplication" className="text-[#9E9E9E]">Vineatz Technologies &gt;</a>
        <a href="/" className="">01</a>
      </div>


      <div className="overflow-x-auto">
        <table className="min-w-full bg-white rounded-xl shadow-sm">
          <thead className="bg-[#F0F4F8] text-[#030229] text-left">
            <tr className="grid grid-cols-[repeat(7,1fr)_auto]  items-center px-6 py-4 rounded-t-xl">
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
              <tr key={item.id} className="grid grid-cols-[repeat(7,1fr)_auto]  items-center px-6 py-4 hover:bg-[#F8F9FF] transition border-t border-gray-100">
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
                  <RejectApplication appid={item.appid} clientname={item.clientname}>
                    <Button
                      type="primary"
                      className='bg-[#FEF4F5] hover:bg-red-500 hover:text-white text-[#E71D36] flex items-center gap-1 text-xs px-2 py-1'
                    >
                      <MdDelete className='text-lg' /> Reject
                    </Button>
                  </RejectApplication>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="py-5 ">
        <span className="text-[#000000] text-[20px] font-poppins py-10">Application Details</span>
        <div className="min-w-full h-[500px] bg-white rounded-xl shadow-sm">
          <div className='flex items-center justify-between px-5 py-4'>
            <span className="text-[#4FD1C5] text-[20px] font-poppins ">Personal Details</span>


          </div>
        </div>
      </div>
    </div>
  )
}

export default Applicationdetails;
