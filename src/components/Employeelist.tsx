import img1 from "../assets/Image & bg.png";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { FaFileAlt } from "react-icons/fa";
import { ImProfile } from "react-icons/im";
import { IoIosMore } from "react-icons/io";
import { useState } from "react";
import { GoPlus } from "react-icons/go";
import { useNavigate } from "react-router-dom";
import { CiEdit } from "react-icons/ci";
import { MdDelete } from "react-icons/md";
import RejectApplication from "./rejectapplication";
import DeleteApplication from "./deleteapplication";

function Employeelist() {
  const navigate = useNavigate();
  const [openMenuIndex, setOpenMenuIndex] = useState<number | null>(null);
  const details = [
    {
      id: 1,
      appid: "01",
      name: "John Doe",
      clientid: "01",
      mobilenumber1: "1234567890",
      mobilenumber2: "1234567890",
      img: img1,
      clientname: "John Doe",
      email: "12345@gmail.com",
      date: "12 Jun 2025",
      icon: <FaFileAlt className="text-[#4FD1C5]" />,
      profile: <ImProfile className="text-[#4FD1C5]" />,
    },
    {
      id: 2,
      appid: "01",
      name: "John Doe",
      clientid: "01",
      mobilenumber1: "1234567890",
      mobilenumber2: "1234567890",
      img: img1,
      clientname: "John Doe",
      email: "12345@gmail.com",
      date: "12 Jun 2025",
      icon: <FaFileAlt className="text-[#4FD1C5]" />,
      profile: <ImProfile className="text-[#4FD1C5]" />,
    },
    {
      id: 3,
      appid: "01",
      name: "John Doe",
      clientid: "01",
      mobilenumber1: "1234567890",
      mobilenumber2: "1234567890",
      img: img1,
      clientname: "John Doe",
      email: "12345@gmail.com",
      date: "12 Jun 2025",
      icon: <FaFileAlt className="text-[#4FD1C5]" />,
      profile: <ImProfile className="text-[#4FD1C5]" />,
    },
    {
      id: 4,
      appid: "01",
      name: "John Doe",
      clientid: "01",
      mobilenumber1: "1234567890",
      mobilenumber2: "1234567890",
      img: img1,
      clientname: "John Doe",
      email: "12345@gmail.com",
      date: "12 Jun 2025",
      icon: <FaFileAlt className="text-[#4FD1C5]" />,
      profile: <ImProfile className="text-[#4FD1C5]" />,
    },
    {
      id: 5,
      appid: "01",
      name: "John Doe",
      clientid: "01",
      mobilenumber1: "1234567890",
      mobilenumber2: "1234567890",
      img: img1,
      clientname: "John Doe",
      email: "12345@gmail.com",
      date: "12 Jun 2025",
      icon: <FaFileAlt className="text-[#4FD1C5]" />,
      profile: <ImProfile className="text-[#4FD1C5]" />,
    },
    {
      id: 6,
      appid: "01",
      name: "John Doe",
      clientid: "01",
      img: img1,
      mobilenumber1: "1234567890",
      mobilenumber2: "1234567890",
      clientname: "John Doe",
      email: "12345@gmail.com",
      date: "12 Jun 2025",
      icon: <FaFileAlt className="text-[#4FD1C5]" />,
      profile: <ImProfile className="text-[#4FD1C5]" />,
    },
    {
      id: 7,
      appid: "01",
      name: "John Doe",
      clientid: "01",
      mobilenumber1: "1234567890",
      mobilenumber2: "1234567890",
      img: img1,
      clientname: "John Doe",
      email: "12345@gmail.com",
      date: "12 Jun 2025",
      icon: <FaFileAlt className="text-[#4FD1C5]" />,
      profile: <ImProfile className="text-[#4FD1C5]" />,
    },
    {
      id: 8,
      appid: "01",
      name: "John Doe",
      clientid: "01",
      mobilenumber1: "1234567890",
      mobilenumber2: "1234567890",
      img: img1,
      clientname: "John Doe",
      email: "12345@gmail.com",
      date: "12 Jun 2025",
      icon: <FaFileAlt className="text-[#4FD1C5]" />,
      profile: <ImProfile className="text-[#4FD1C5]" />,
    },
    {
      id: 9,
      appid: "01",
      name: "John Doe",
      clientid: "01",
      mobilenumber1: "1234567890",
      mobilenumber2: "1234567890",
      img: img1,
      clientname: "John Doe",
      email: "12345@gmail.com",
      date: "12 Jun 2025",
      icon: <FaFileAlt className="text-[#4FD1C5]" />,
      profile: <ImProfile className="text-[#4FD1C5]" />,
    },
    {
      id: 10,
      appid: "01",
      name: "John Doe",
      clientid: "01",
      mobilenumber1: "1234567890",
      mobilenumber2: "1234567890",
      img: img1,
      clientname: "John Doe",
      email: "12345@gmail.com",
      date: "12 Jun 2025",
      icon: <FaFileAlt className="text-[#4FD1C5] bg-[#F2ECFF]" />,
      profile: <ImProfile className="text-[#4FD1C5]" />,
    },
  ];

  return (
    <section className="bg-[#FDFBFF] min-h-screen w-full px-6 pr-16 ">
      <div className="flex items-center justify-between">
        <div className="text-[#9E9E9E] ">Employees &gt;</div>
        <div
          className="flex items-center gap-2 bg-[#BF9FFF] px-4 py-2 rounded-md cursor-pointer"
          onClick={() => navigate("/addemployee")}
        >
          <GoPlus size={24} className="text-[#FFFF] " />
        </div>
      </div>

      <div className=" bg-[#FDFBFF] px-10 ">
        <table className="min-w-full">
          <thead className="bg-[#FDFBFF] text-[#030229] text-left">
              <tr className="grid grid-cols-7  items-center rounded-[70px]  py-4 ">
              <th className="flex items-center gap-1">Employee id <MdOutlineArrowDropDown /></th>
              <th className="flex items-center gap-1">Employee name <MdOutlineArrowDropDown /></th>
              <th className="flex items-center gap-1">Mobile number 1 <MdOutlineArrowDropDown /></th>
              <th className="flex items-center gap-1">Mobile number 2 <MdOutlineArrowDropDown /></th>
              <th className="flex items-center gap-1">Email id <MdOutlineArrowDropDown /></th>
              <th className="flex items-center gap-1">Joining date <MdOutlineArrowDropDown /></th>
              <th className=""></th>
            </tr>
          </thead>
           <tbody className=" rounded-[60px] space-y-3 drop-shadow-md ">
            {details.map((item) => (
              <tr key={item.id} className="grid grid-cols-7 bg-white items-center  py-2  hover:bg-[#F8F9FF] transition rounded-[15px] border-gray-100">
                <td className="px-5">{item.appid}</td>
                <td className="flex items-center gap-2">
                  <img src={item.img} alt="client" className="w-6 h-7 rounded-full object-cover" />
                  {item.clientname}
                </td>
                <td>{item.mobilenumber1}</td>
                <td>{item.mobilenumber2}</td>
 <td>{item.email}</td>
                <td>{item.date}</td>
                <td className="px-10">
                  <div className="relative flex justify-end  gap-20">
                  <button
                    onClick={() =>
                      setOpenMenuIndex(
                        openMenuIndex === item.id ? null : item.id
                      )
                    }
                  >
                    <IoIosMore className="text-xl text-[#030229]" />
                  </button>

                  {openMenuIndex === item.id && (
                    <div className="absolute left-32 top-3 bg-white shadow-lg rounded-lg w-28 z-20">
                      <button
                        className=" w-full text-left px-4 py-2 hover:bg-gray-100 text-[#BF9FFF] flex items-center !gap-2 "
                        onClick={() => navigate(`/updateemployee/${item.id}`)}
                      >
                        <CiEdit />
                        Edit
                      </button>
                      <DeleteApplication
                      >
                        <button className=" w-full text-left px-4 py-2 hover:bg-gray-100 text-red-500 flex items-center !gap-2 ">
                          <MdDelete />
                          Delete
                        </button>
                      </DeleteApplication>
                    </div>
                  )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default Employeelist;
