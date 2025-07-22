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
            name: "John Doe",
            clientid: "01",
            img: img1,
            clientname: "John Doe",
            status: "Initial",
            icon: <FaFileAlt size={30} className="text-[#4FD1C5]" />,
            profile: <ImProfile size={30} className="text-[#4FD1C5]" />,

        },
    ];

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
    ];
    return (
        <div>
            {/* top section */}
            <div className=" bg-[#F4FFFE] w-full min-h-screen">
                <div className="flex items-center gap-2 my-4 mx-5">
                    <a href="/Applicationslist" className="text-[#9E9E9E]"> Application &gt; </a>
                    <a href="/manageapplication" className="text-[#9E9E9E]"> Vineatz Technologies &gt; </a>
                    <div>
                        <a href="/" className="   "> 01</a>
                    </div>
                </div>
                <div>
                    <div className="grid grid-cols-7 rounded-xl items-center justify-items-center px-6 py-4  !m-5 ">
                        <div className="flex items-center">
                            <span className="text-[#030229]">Application id</span>
                            <MdOutlineArrowDropDown />
                        </div>
                        <div className="flex items-center">
                            <span className="text-[#030229]">Application name</span>
                            <MdOutlineArrowDropDown />
                        </div>
                        <div className="flex items-center">
                            <span className="text-[#030229]">Client id</span>
                            <MdOutlineArrowDropDown />
                        </div>
                        <div className="flex items-center">
                            <span className="text-[#030229]">Client name</span>
                            <MdOutlineArrowDropDown />
                        </div>
                        <div className="flex items-center">
                            <span className="text-[#030229]">Status</span>
                            <MdOutlineArrowDropDown />
                        </div>
                        <div className="flex items-center">
                            <span className="text-[#030229]">Application details</span>
                            <MdOutlineArrowDropDown />
                        </div>
                        <div className="flex items-center">
                            <span className="text-[#030229]">Client details</span>
                            <MdOutlineArrowDropDown />
                        </div>
                    </div>
                    <div className="">
                        {details.map((item) => (
                            <div className="grid grid-cols-7 bg-white shadow-sm rounded-xl items-center justify-items-center hover:bg-[#F8F9FF] transition px-6 py-4  !m-5 ">
                                <span className="text-[#030229]">{item.appid}</span>
                                <span className="text-[#030229]">{item.name}</span>
                                <span className="text-[#030229]">{item.clientid}</span>
                                <div className="flex items-center gap-2">
                                    <img src={item.img} alt="client" className="w-6 h-6 rounded-full object-cover" />
                                    <span className="text-[#030229]">{item.clientname}</span>
                                </div>
                                <span className="text-[#030229]">{item.status}</span>
                                <span className="text-[#030229] items-start ">{item.icon}</span>
                                <div className="relative items-center flex !gap-16">
                                    <span className="text-[#030229]">{item.profile}</span>
                                    <div className="relative flex justify-end">

                                        <Popconfirm
                                            title="Do you want to delete the client?"
                                            onConfirm={confirm}
                                            onOpenChange={() => console.log('open change')}
                                        >
                                            <Button
                                                type="primary"
                                                className='bg-[#FEF4F5] text-[#E71D36] flex items-center gap-2'
                                            >
                                                <MdDelete className='text-lg' /> Reject
                                            </Button>

                                        </Popconfirm>
                                    </div>
                                </div>

                            </div>
                        ))}
                    </div>
                    <div className='grid grid-cols-4 '>
                        <div className="grid bg-blue-100 shadow-xl rounded-xl  py-4  !m-5 ">
                            <div className="flex ">
                                {details1.map((item) => (
                                    <div className="flex bg-amber-300 gap-10">
                                        <div className="flex flex-col gap-2">
                                            <span className="text-[#030229]">{item.name}</span>
                                            <div className="flex items-center gap-2">
                                                <span className="text-[#030229]">{item.type}</span>
                                                <span className="text-[#030229]">({item.eid})</span>
                                            </div>
                                            <div className='flex items-center '>
                                                <img src={item.img1} alt="client" className="w-6 h-6 rounded-full " />
                                                <img src={item.img2} alt="client" className="w-6 h-6 rounded-full -ml-2" />
                                            </div>
                                        </div>
                                        <div className='justify-end'>
                                            <img src={item.profile} alt="client"
                                                className="w-12 h-12 rounded-full object-cover"
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Clientmanagement;
