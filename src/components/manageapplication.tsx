import img1 from "../assets/Image & bg.png";
import { FaPlus } from "react-icons/fa6";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { FaFileAlt } from "react-icons/fa";
import { ImProfile } from "react-icons/im";
import { IoIosMore } from "react-icons/io";
import { useState } from "react";



function ManageApplication() {
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
            icon: <FaFileAlt className="text-[#4FD1C5]" />,
            profile: <ImProfile className="text-[#4FD1C5]" />,

        },
        {
            id: 2,
            appid: "01",
            name: "John Doe",
            clientid: "01",
            img: img1,
            clientname: "John Doe",
            status: "Initial",
            icon: <FaFileAlt className="text-[#4FD1C5]" />,
            profile: <ImProfile className="text-[#4FD1C5]" />,

        },
        {
            id: 3,
            appid: "01",
            name: "John Doe",
            clientid: "01",
            img: img1,
            clientname: "John Doe",
            status: "Initial",
            icon: <FaFileAlt className="text-[#4FD1C5]" />,
            profile: <ImProfile className="text-[#4FD1C5]" />,

        },
        {
            id: 4,
            appid: "01",
            name: "John Doe",
            clientid: "01",
            img: img1,
            clientname: "John Doe",
            status: "Initial",
            icon: <FaFileAlt className="text-[#4FD1C5]" />,
            profile: <ImProfile className="text-[#4FD1C5]" />,

        },
        {
            id: 5,
            appid: "01",
            name: "John Doe",
            clientid: "01",
            img: img1,
            clientname: "John Doe",
            status: "Initial",
            icon: <FaFileAlt className="text-[#4FD1C5]" />,
            profile: <ImProfile className="text-[#4FD1C5]" />,

        },
        {
            id: 6,
            appid: "01",
            name: "John Doe",
            clientid: "01",
            img: img1,
            clientname: "John Doe",
            status: "Initial",
            icon: <FaFileAlt className="text-[#4FD1C5]" />,
            profile: <ImProfile className="text-[#4FD1C5]" />,

        },
        {
            id: 7,
            appid: "01",
            name: "John Doe",
            clientid: "01",
            img: img1,
            clientname: "John Doe",
            status: "Initial",
            icon: <FaFileAlt className="text-[#4FD1C5]" />,
            profile: <ImProfile className="text-[#4FD1C5]" />,

        },
        {
            id: 8,
            appid: "01",
            name: "John Doe",
            clientid: "01",
            img: img1,
            clientname: "John Doe",
            status: "Initial",
            icon: <FaFileAlt className="text-[#4FD1C5]" />,
            profile: <ImProfile className="text-[#4FD1C5]" />,

        },
    ];

    return (
        // /top section
        <section ><div className="bg-[#F4FFFE] min-h-screen w-full">
            <div className="flex items-center bg-[#F4FFFE] gap-2 my-4 mx-5">
                <a href="/applicationlist" className="text-[#9E9E9E]"> Application &gt; </a>
                <a href="/manageapplication" className="text-[#000000]"> Vineatz Technologies  </a>
                <div className="bg-[#4FD1C5] w-10 h-10 flex rounded-sm items-center justify-center  ">
                    <a href="/">  <FaPlus color="#fff" className="size-6" /></a>
                </div>
            </div>

            <div>
                <div className="grid grid-cols-7 space-x-4 my-4 mx-8">
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
                        <div className="grid grid-cols-7 bg-white shadow-sm rounded-xl  hover:bg-[#F8F9FF] transition px-6 py-4  !m-5 ">
                            <span className="text-[#030229]">{item.appid}</span>
                            <span className="text-[#030229]">{item.name}</span>
                            <span className="text-[#030229]">{item.clientid}</span>
                            <div className="flex items-center gap-2">
                                <img src={item.img} alt="client" className="w-6 h-6 rounded-full object-cover" />
                                <span className="text-[#030229]">{item.clientname}</span>
                            </div>
                            <span className="text-[#030229]">{item.status}</span>
                            <span className="text-[#030229]">{item.icon}</span>
                            <div className="relative flex gap-20">
                                <span className="text-[#030229]">{item.profile}</span>
                                <button onClick={() => setOpenMenuIndex(openMenuIndex === item.id ? null : item.id)}>
                                    <IoIosMore className="text-xl text-[#030229]" />
                                </button>

                                {openMenuIndex === item.id && (
                                    <div className="absolute right-0 top-8 bg-white shadow-md rounded-lg w-28 z-20">
                                        <button className="block w-full text-left px-4 py-2 hover:bg-gray-100 text-[#4FD1C5]">
                                            Move
                                        </button>
                                        <button className="block w-full text-left px-4 py-2 hover:bg-gray-100 text-red-500">
                                            Reject
                                        </button>
                                    </div>
                                )}
                            </div>

                        </div>
                    ))}
                </div>
            </div>
        </div>
        </section>

    );
}

export default ManageApplication;