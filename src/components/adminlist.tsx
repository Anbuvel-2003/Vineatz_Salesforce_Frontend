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
      mobilenumber2: "1234567890",
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
      mobilenumber1: "1234567890",
      mobilenumber2: "1234567890",
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
      mobilenumber1: "1234567890",
      mobilenumber2: "1234567890",
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
      mobilenumber1: "1234567890",
      mobilenumber2: "1234567890",
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
      mobilenumber1: "1234567890",
      mobilenumber2: "1234567890",
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
      mobilenumber1: "1234567890",
      mobilenumber2: "1234567890",
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
      mobilenumber1: "1234567890",
      mobilenumber2: "1234567890",
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
      mobilenumber1: "1234567890",
      mobilenumber2: "1234567890",
      img: img1,
      clientname: "John Doe",
      status: "Initial",
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
      status: "Initial",
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
      status: "Initial",
      icon: <FaFileAlt className="text-[#4FD1C5]" />,
      profile: <ImProfile className="text-[#4FD1C5]" />,
    },
  ];

  return (
    <section className="bg-[#FDFBFF] min-h-screen w-full px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="text-[#9E9E9E] mb-4">Admins &gt;</div>
        <div
          className="flex items-center gap-2 bg-[#BF9FFF] px-4 py-2 rounded-md cursor-pointer"
          onClick={() => navigate("/adduser")}
        >
          <GoPlus size={24} className="text-[#FFFF]" />
        </div>
      </div>

      <div className=" bg-[#FDFBFF] rounded-xl shadow-md">
        <table className="min-w-full divide-y divide-gray-200 text-sm text-left border-separate border-spacing-y-4">
          <thead className="bg-[#FDFBFF] text-[#030229] text-left">
            <tr>
              <th className="px-6 py-3">
                <div className="flex items-center gap-1">
                  Admin ID <MdOutlineArrowDropDown />
                </div>
              </th>
              <th className="px-6 py-3">
                <div className="flex items-center gap-1">
                  Admin Name <MdOutlineArrowDropDown />
                </div>
              </th>
              <th className="px-6 py-3">
                <div className="flex items-center gap-1">
                  Mobile Number 1 <MdOutlineArrowDropDown />
                </div>
              </th>
              <th className="px-6 py-3">
                <div className="flex items-center gap-1">
                  Email Id <MdOutlineArrowDropDown />
                </div>
              </th>
              <th className="px-6 py-3">
                <div className="flex items-center gap-1">
                  Joining Date <MdOutlineArrowDropDown />
                </div>
              </th>
              <th className="px-6 py-3">
                <div className="flex items-center gap-1"></div>
              </th>
              <th className="px-6 py-3">
                <div className="flex items-center gap-1"></div>
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 !mb-10">
            {details.map((item) => (
              <tr
                key={item.id}
                className="hover:bg-[#F8F9FF] bg-white transition duration-200 "
              >
                <td className="px-6 py-4">{item.appid}</td>
                <td className="px-6 py-4 flex items-center gap-2">
                  <img
                    src={item.img}
                    alt="profile"
                    className="w-6 h-6 rounded-full object-cover"
                  />
                  <span>{item.clientname}</span>
                </td>
                <td className="px-6 py-4">{item.mobilenumber1}</td>
                <td className="px-6 py-4">{item.mobilenumber2}</td>
                <td className="px-6 py-4">122324@gmail.com</td>
                <td className="px-6 py-4"></td>
                <td className="px-6 py-4 relative">
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
                    <div className="absolute right-0 top-8 bg-white shadow-lg rounded-lg w-28 z-20">
                      <button
                        className=" w-full text-left px-4 py-2 hover:bg-gray-100 text-[#4FD1C5] flex items-center !gap-2 "
                        onClick={() => navigate(`/Updateuser/${item.id}`)}
                      >
                        <CiEdit />
                        Edit
                      </button>
                      <DeleteApplication
                        appid={item.appid}
                        clientname={item.clientname}
                      >
                        <button className=" w-full text-left px-4 py-2 hover:bg-gray-100 text-red-500 flex items-center !gap-2 ">
                          <MdDelete />
                          Delete
                        </button>
                      </DeleteApplication>
                    </div>
                  )}
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
