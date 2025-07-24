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
import { DeleteApplication } from "./deleteapplication";
import { date } from "yup";

function Adminlist() {
  const navigate = useNavigate();
  const [openMenuIndex, setOpenMenuIndex] = useState<number | null>(null);
  const details = [
    {
      id: 1,
      appid: "01",
      name: "John Doe",
      clientid: "01",
      mobilenumber1: "1234567890",
      img: img1,
      clientname: "John Doe",
      email: "12345@gmail.com",
      date: "01/01/2023",
      icon: <FaFileAlt className="text-[#4FD1C5]" />,
      profile: <ImProfile className="text-[#4FD1C5]" />,
    },
    {
      id: 2,
      appid: "01",
      name: "John Doe",
      clientid: "01",
      mobilenumber1: "1234567890",
      img: img1,
      clientname: "John Doe",
      email: "12345@gmail.com",
      date: "01/01/2023",
      icon: <FaFileAlt className="text-[#4FD1C5]" />,
      profile: <ImProfile className="text-[#4FD1C5]" />,
    },
    {
      id: 3,
      appid: "01",
      name: "John Doe",
      clientid: "01",
      mobilenumber1: "1234567890",
      img: img1,
      clientname: "John Doe",
      email: "12345@gmail.com",
      date: "01/01/2023",
      icon: <FaFileAlt className="text-[#4FD1C5]" />,
      profile: <ImProfile className="text-[#4FD1C5]" />,
    },
    {
      id: 4,
      appid: "01",
      name: "John Doe",
      clientid: "01",
      mobilenumber1: "1234567890",
      img: img1,
      clientname: "John Doe",
      email: "12345@gmail.com",
      date: "01/01/2023",
      icon: <FaFileAlt className="text-[#4FD1C5]" />,
      profile: <ImProfile className="text-[#4FD1C5]" />,
    },
    {
      id: 5,
      appid: "01",
      name: "John Doe",
      clientid: "01",
      mobilenumber1: "1234567890",
      img: img1,
      clientname: "John Doe",
      email: "12345@gmail.com",
      date: "01/01/2023",
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
      clientname: "John Doe",
      email: "12345@gmail.com",
      date: "2023-01-01",
      icon: <FaFileAlt className="text-[#4FD1C5]" />,
      profile: <ImProfile className="text-[#4FD1C5]" />,
    },
    {
      id: 7,
      appid: "01",
      name: "John Doe",
      clientid: "01",
      mobilenumber1: "1234567890",
      img: img1,
      clientname: "John Doe",
      email: "12345@gmail.com",
      date: "2023-01-01",
      icon: <FaFileAlt className="text-[#4FD1C5]" />,
      profile: <ImProfile className="text-[#4FD1C5]" />,
    },
    {
      id: 8,
      appid: "01",
      name: "John Doe",
      clientid: "01",
      mobilenumber1: "1234567890",
      img: img1,
      clientname: "John Doe",
      email: "12345@gmail.com",
      date: "2023-01-01",
      icon: <FaFileAlt className="text-[#4FD1C5]" />,
      profile: <ImProfile className="text-[#4FD1C5]" />,
    },
    {
      id: 9,
      appid: "01",
      name: "John Doe",
      clientid: "01",
      mobilenumber1: "1234567890",
      img: img1,
      clientname: "John Doe",
      email: "12345@gmail.com",
      date: "2023-01-01",
      icon: <FaFileAlt className="text-[#4FD1C5]" />,
      profile: <ImProfile className="text-[#4FD1C5]" />,
    },
    {
      id: 10,
      appid: "01",
      name: "John Doe",
      clientid: "01",
      mobilenumber1: "1234567890",
      img: img1,
      clientname: "John Doe",
      email: "12345@gmail.com",
      date: "2023-01-01",
      icon: <FaFileAlt className="text-[#4FD1C5]" />,
      profile: <ImProfile className="text-[#4FD1C5]" />,
    },
  ];

  return (
    <section className="bg-[#FDFBFF] min-h-screen w-full px-6 py-4">
      <div className="flex items-center justify-between">
        <a href="/" className="text-[#9E9E9E]  m-4">Admins &gt;</a>
        <div
          className="flex items-center gap-2 bg-[#BF9FFF] px-4 py-2 rounded-md cursor-pointer"
          onClick={() => navigate("/adduser")}
        >
          <GoPlus size={24} className="text-[#FFFF]" />
        </div>
      </div>

      <div className=" bg-[#FDFBFF] rounded-xl ">
        <table className="min-w-full text-sm text-left border-separate border-spacing-y-4">
          <thead className="bg-[#FDFBFF] text-[#030229] text-left">
          <tr className="grid grid-cols-7 bg-white text-center  hover:bg-[#F8F9FF] transition rounded-[15px] border-gray-100">
              <th className="px-6 py-3">
                <div className="flex items-center justify-center gap-1">
                  Admin ID <MdOutlineArrowDropDown />
                </div>
              </th>
              <th className="px-6 py-3">
                <div className="flex items-center justify-center gap-1">
                  Admin Name <MdOutlineArrowDropDown />
                </div>
              </th>
              <th className="px-6 py-3">
                <div className="flex items-center justify-center gap-1">
                  Mobile Number 1 <MdOutlineArrowDropDown />
                </div>
              </th>
              <th className="px-6 py-3">
                <div className="flex items-center justify-center gap-1">
                  Email Id <MdOutlineArrowDropDown />
                </div>
              </th>
              <th className="px-6 py-3">
                <div className="flex items-center justify-center gap-1">
                  Joining Date <MdOutlineArrowDropDown />
                </div>
              </th>
              <th className="px-6 py-3">
                <div className="flex items-center justify-center gap-1"></div>
              </th>
              <th className="px-6 py-3">
                <div className="flex items-center justify-center gap-1"></div>
              </th>
            </tr>
          </thead>
          <tbody className=" rounded-[60px] space-y-3 drop-shadow-md  ">
            {details.map((item) => (
              <tr key={item.id} className="grid grid-cols-7 bg-white text-center py-5  hover:bg-[#F8F9FF] transition rounded-[15px] border-gray-100">
                <td>{item.appid}</td>
                <td className="flex items-center justify-center gap-2">
                  <img src={item.img} alt="client" className="w-6 h-6 rounded-full object-cover" />
                  {item.clientname}
                </td>
                <td>{item.mobilenumber1}</td>
                <td>{item.email}</td>
                <td>{item.date}</td>
                <td></td>
                <td className="w-[80px] flex justify-end items-end">
                  <div className="relative flex gap-20">
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
                    <div className="absolute left-4 top-3 bg-white shadow-md p-3 space-y-2 rounded-2xl w-36 z-30">

                      <button className="flex items-center gap-2 w-full text-left px-4 py-2 rounded-xl bg-[#FCFAFF]  hover:bg-gray-100 text-[#4FD1C5]"
                        onClick={() => navigate(`/Updateuser/${item.id}`)}
                      >
                        <CiEdit />
                        Edit
                      </button>
                      <DeleteApplication>
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

export default Adminlist;
