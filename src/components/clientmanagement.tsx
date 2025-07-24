import React, { useState } from 'react'
import img1 from "../assets/Image & bg.png";
import avatar1 from "../assets/avatar1.png";
import avatar2 from "../assets/avatar2.png";
import profile from "../assets/profile.png";
import { FaFileAlt } from 'react-icons/fa';
import { ImProfile } from 'react-icons/im';
import { MdOutlineArrowDropDown } from 'react-icons/md';
import { Button, Popconfirm } from 'antd';
import { MdDelete } from "react-icons/md";
import RejectApplication from '../components/rejectapplication';
import { useNavigate } from 'react-router-dom';

function Clientmanagement() {

    const confirm = () =>
        new Promise((resolve) => {
            setTimeout(() => resolve(null), 3000);
        });



    const [openMenuIndex, setOpenMenuIndex] = useState<number | null>(null);
    const details = [
        {
            id: 1,
            appid: "01",
            name: "John De",
            clientid: "01",
            img: img1,
            clientname: "John Doe",
            status: "Initial",
            link: "/applicationdetails",
            icon: <FaFileAlt size={30} className="text-[#4FD1C5]" />,
            profile: <ImProfile size={30} className="text-[#4FD1C5]" />,

        },
    ];
    const navigate = useNavigate();

    const details1 = [
        {
            id: 1,
            name: "Harish",
            type: "Employee",
            eid: "01",
            profile: profile,
            img1: avatar1,
            img2: avatar2,
        },
        {
            id: 2,
            name: "Harish",
            type: "Employee",
            eid: "01",
            profile: profile,
            img1: avatar1,
            img2: avatar2,
        },
        {
            id: 3,
            name: "Harish",
            type: "Employee",
            eid: "01",
            profile: profile,
            img1: avatar1,
            img2: avatar2,
        },
        {
            id: 4,
            name: "Harish",
            type: "Employee",
            eid: "01",
            profile: profile,
            img1: avatar1,
            img2: avatar2,
        },
        {
            id: 5,
            name: "Harish",
            type: "Employee",
            eid: "01",
            profile: profile,
            img1: avatar1,
            img2: avatar2,
        },
        {
            id: 6,
            name: "Harish",
            type: "Employee",
            eid: "01",
            profile: profile,
            img1: avatar1,
            img2: avatar2,
        },
        {
            id: 7,
            name: "Harish",
            type: "Employee",
            eid: "01",
            profile: profile,
            img1: avatar1,
            img2: avatar2,
        },
        {
            id: 8,
            name: "Harish",
            type: "Employee",
            eid: "01",
            profile: profile,
            img1: avatar1,
            img2: avatar2,
        },
        {
            id: 9,
            name: "Harish",
            type: "Employee",
            eid: "01",
            profile: profile,
            img1: avatar1,
            img2: avatar2,
        },
        {
            id: 10,
            name: "Harish",
            type: "Employee",
            eid: "01",
            profile: profile,
            img1: avatar1,
            img2: avatar2,
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

            {/* Table */}
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
                                <td>
                                    <div
                                        className="cursor-pointer hover:scale-110 transition"
                                        onClick={() => navigate(item.link)}
                                    >
                                        {item.icon}
                                    </div>
                                </td>

                                <td>{item.profile}</td>
                                <td className="w-[80px] flex items-center">
                                    <RejectApplication >
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

            {/* Employee Cards */}
            <div className='grid grid-cols-4 gap-10 mx-4 mt-10'>
                {details1.map((item) => (
                    <div key={item.id} className="bg-white shadow-xl hover:bg-[#F8F9FF] transition rounded-xl p-4">
                        <div className="flex items-center justify-between mb-4">
                            <div>
                                <h2 className="text-[#202020] font-poppins font-medium text-lg">{item.name}</h2>
                                <div className="flex items-center gap-2">
                                    <span className="text-[#626262] font-poppins font-medium text-sm">{item.type}</span>
                                    <span className="text-[#626262] font-poppins font-medium text-sm">({item.eid})</span>
                                </div>
                                <div className='flex items-center mt-2'>
                                    <img src={item.img1} alt="avatar1" className="w-8 h-8 rounded-full" />
                                    <img src={item.img2} alt="avatar2" className="w-8 h-8 rounded-full -ml-2" />
                                </div>
                            </div>
                            <img src={item.profile} alt="profile" className="w-16 h-16 rounded-full object-cover" />
                        </div>
                        <button className="w-full py-2 rounded-full bg-[#4FD1C5] text-white font-poppins text-sm font-medium hover:bg-[#35c0e8] transition">
                            Assign
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Clientmanagement;