import React, { useState } from "react";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";

import img1 from "../assets/Image & bg.png";
import { FaFileAlt } from "react-icons/fa";
import { ImProfile } from "react-icons/im";
import { MdOutlineArrowDropDown, MdDelete } from "react-icons/md";

import RejectApplication from "../components/rejectapplication";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
    Popover,
    PopoverTrigger,
    PopoverContent,
} from "@/components/ui/popover";

const ProspectMoveLeads: React.FC = () => {
    const [expectedAmount, setExpectedAmount] = useState<string>("");
    const [expectedDate, setExpectedDate] = useState<Date | undefined>();
    const [typeofbusiness, setBusiness] = useState<string>("");
    const [confidence, setConfidence] = useState<string>("");

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
            status: "Prospect",
            icon: <FaFileAlt size={30} className="text-[#4FD1C5]" />,
            profile: <ImProfile size={30} className="text-[#4FD1C5]" />,
        },
    ];

    return (
        <div className="bg-[#F4FFFE] w-full min-h-screen pl-10">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 mx-5 py-4">
                <a href="/Applicationslist" className="text-[#9E9E9E]">
                    Application &gt;
                </a>
                <a href="/manageapplication" className="text-[#9E9E9E]">
                    Vineatz Technologies &gt;
                </a>
                <a href="/" className="">
                    01
                </a>
            </div>

            {/* Table */}
            <div className="overflow-x-auto px-10 pb-5 ">
                <table className="min-w-full rounded-2xl ">
                    <thead className="bg-[#FDFBFF] text-[#030229] text-left">
                        <tr className="grid grid-cols-8 items-center  py-4 rounded-[70px]">
                            <th className="flex items-center gap-1">
                                Application id <MdOutlineArrowDropDown />
                            </th>
                            <th className="flex items-center gap-1">
                                Application name <MdOutlineArrowDropDown />
                            </th>
                            <th className="flex items-center gap-1">
                                Client id <MdOutlineArrowDropDown />
                            </th>
                            <th className="flex items-center gap-1">
                                Client name <MdOutlineArrowDropDown />
                            </th>
                            <th className="flex items-center gap-1">
                                Status <MdOutlineArrowDropDown />
                            </th>
                            <th className="flex items-center gap-1">
                                Application details <MdOutlineArrowDropDown />
                            </th>
                            <th className="flex items-center gap-1">
                                Client details <MdOutlineArrowDropDown />
                            </th>
                            <th className=""></th>
                        </tr>
                    </thead>
                    <tbody className=" rounded-[60px] space-y-3 drop-shadow-md ">
                        {details.map((item) => (
                            <tr
                                key={item.id}
                                className="grid grid-cols-8 items-center  py-2 bg-white hover:bg-[#F8F9FF] drop-shadow-lg rounded-[15px] border-gray-100" >

                                <td className="px-5">{item.appid}</td>
                                <td>{item.name}</td>
                                <td>{item.clientid}</td>
                                <td className="flex items-center gap-2">
                                    <img
                                        src={item.img}
                                        alt="client"
                                        className="w-6 h-6 rounded-full object-cover"
                                    />
                                    {item.clientname}
                                </td>
                                <td className="border-none rounded-[20px] text-[#8144FB] bg-[#F9F5FF] text-[16px] font-sans w-fit p-2">{item.status}</td>
                                <td>{item.icon}</td>
                                <td>{item.profile}</td>
                                <td className="px-16 ">
                                    <RejectApplication
                                        appid={item.appid}
                                        clientname={item.clientname}
                                    >
                                        <Button
                                            type="button"
                                            className="bg-[#FEF4F5] hover:bg-red-500 hover:text-white text-[#E71D36] flex items-center gap-1 text-xs px-2 py-1"
                                        >
                                            <MdDelete className="text-lg" /> Reject
                                        </Button>
                                    </RejectApplication>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Form Section */}
            <div className="py-5">
                <div className="py-5">
                    <span className="text-[#000000] text-[20px] font-poppins">
                        Details To Be Filled
                    </span>
                </div>

                <div className="min-w-full grid grid-cols-2 h-full px-10 pb-3 ">
                    {/* Expected Amount */}
                    <div className="grid grid-cols-1 w-full py-5 gap-5">
                        <span className="text-[#111111] text-[20px] font-poppins font-medium">
                            Expected Amount
                        </span>
                        <input
                            type="text"
                            value={expectedAmount}
                            onChange={(e) => setExpectedAmount(e.target.value)}
                            className="w-[500px] h-[60px] bg-white rounded-xl px-5 text-[#808080] text-[18px] border border-gray-300"
                            placeholder="Enter the Expected Amount"
                        />
                    </div>

                    {/* Expected Date with Popover and Calendar */}
                    <div className="grid grid-cols-1 w-full py-5 gap-5">
                        <span className="text-[#111111] text-[20px] font-poppins font-medium">
                            Expected Date
                        </span>
                        <Popover>
                            <PopoverTrigger asChild>
                                <button
                                    type="button"
                                    className="w-[500px] h-[60px] flex items-center justify-between bg-white rounded-xl px-4 text-[#808080] text-[18px] border border-gray-300"
                                >
                                    {expectedDate ? format(expectedDate, "PPP") : "Pick a date"}
                                    <CalendarIcon className="text-gray-400 w-5 h-5" />
                                </button>
                            </PopoverTrigger>

                            <PopoverContent
                                side="top"
                                align="end"
                                className="w-auto p-0 mt-2 shadow-md rounded-xl border bg-white"
                            >
                                <Calendar
                                    mode="single"
                                    selected={expectedDate}
                                    onSelect={setExpectedDate}
                                    captionLayout="dropdown"
                                    disabled={(date) =>
                                        date > new Date() || date < new Date("1900-01-01")
                                    }
                                />
                            </PopoverContent>
                        </Popover>
                    </div>
                    <div className="grid grid-cols-1 w-full py-10 gap-5">
                        <span className="text-[#111111] text-[20px] font-poppins font-medium">
                            Type Of Business
                        </span>
                        <input
                            type="text"
                            value={typeofbusiness}
                            onChange={(e) => setBusiness(e.target.value)}
                            className="w-[500px] h-[60px] bg-white rounded-xl px-4 text-[#808080] text-[18px] border border-gray-300"
                            placeholder="Enter type Of business"
                        />
                    </div>

                    <div className="grid grid-cols-1 w-full py-10 gap-5">
                        <span className="text-[#111111] text-[20px] font-poppins font-medium">
                            Confidence Level
                        </span>
                        <input
                            type="text"
                            value={confidence}
                            onChange={(e) => setConfidence(e.target.value)}
                            className="w-[500px] h-[60px] bg-white rounded-xl px-4 text-[#808080] text-[18px] border border-gray-300"
                            placeholder="Enter confidence level"
                        />
                    </div>


                    {/* Submit Button */}
                    <div className="p-">
                        <button
                            className="text-white bg-[#BF9FFF] hover:bg-[#4FD1C5] text-[20px] font-poppins rounded-xl px-10 py-3"
                            onClick={() => {
                                console.log("Expected Amount:", expectedAmount);
                                console.log("Expected Date:", expectedDate);
                                console.log("Type of Business:", typeofbusiness);
                                console.log("Confidence:", confidence);
                            }}
                        >
                            Submit
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProspectMoveLeads;
