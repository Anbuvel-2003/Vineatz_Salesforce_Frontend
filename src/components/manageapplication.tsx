import img1 from "../assets/Image & bg.png";
import { FaPlus } from "react-icons/fa6";
import { MdDelete, MdOutlineArrowDropDown } from "react-icons/md";
import { FaFileAlt } from "react-icons/fa";
import { ImProfile } from "react-icons/im";
import { IoIosMore } from "react-icons/io";
import { useState } from "react";
import { BiSolidEditAlt } from "react-icons/bi";
import { GiMove } from "react-icons/gi";
import { useNavigate } from "react-router-dom";
import { GoPlus } from "react-icons/go";

function ManageApplication() {
  const navigate = useNavigate();
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
      icon: <FaFileAlt size={30} className="text-[#BF9FFF]" />,
      profile: <ImProfile size={30} className="text-[#BF9FFF]" />,
    },
    {
      id: 2,
      appid: "01",
      name: "John Doe",
      clientid: "01",
      img: img1,
      clientname: "John Doe",
      status: "Initial",
      icon: <FaFileAlt size={30} className="text-[#BF9FFF]" />,
      profile: <ImProfile size={30} className="text-[#BF9FFF]" />,
    },
    {
      id: 3,
      appid: "01",
      name: "John Doe",
      clientid: "01",
      img: img1,
      clientname: "John Doe",
      status: "Initial",
      icon: <FaFileAlt size={30} className="text-[#BF9FFF]" />,
      profile: <ImProfile size={30} className="text-[#BF9FFF]" />,
    },
    {
      id: 4,
      appid: "01",
      name: "John Doe",
      clientid: "01",
      img: img1,
      clientname: "John Doe",
      status: "Initial",
      icon: <FaFileAlt size={30} className="text-[#BF9FFF]" />,
      profile: <ImProfile size={30} className="text-[#BF9FFF]" />,
    },
    {
      id: 5,
      appid: "01",
      name: "John Doe",
      clientid: "01",
      img: img1,
      clientname: "John Doe",
      status: "Initial",
      icon: <FaFileAlt size={30} className="text-[#BF9FFF]" />,
      profile: <ImProfile size={30} className="text-[#BF9FFF]" />,
    },
    {
      id: 6,
      appid: "01",
      name: "John Doe",
      clientid: "01",
      img: img1,
      clientname: "John Doe",
      status: "Initial",
      icon: <FaFileAlt size={30} className="text-[#BF9FFF]" />,
      profile: <ImProfile size={30} className="text-[#BF9FFF]" />,
    },
    {
      id: 7,
      appid: "01",
      name: "John Doe",
      clientid: "01",
      img: img1,
      clientname: "John Doe",
      status: "Initial",
      icon: <FaFileAlt size={30} className="text-[#BF9FFF]" />,
      profile: <ImProfile size={30} className="text-[#BF9FFF]" />,
    },
    {
      id: 8,
      appid: "01",
      name: "John Doe",
      clientid: "01",
      img: img1,
      clientname: "John Doe",
      status: "Initial",
      icon: <FaFileAlt size={30} className="text-[#BF9FFF]" />,
      profile: <ImProfile size={30} className="text-[#BF9FFF]" />,
    },
    {
      id: 9,
      appid: "01",
      name: "John Doe",
      clientid: "01",
      img: img1,
      clientname: "John Doe",
      status: "Initial",
      icon: <FaFileAlt size={30} className="text-[#BF9FFF]" />,
      profile: <ImProfile size={30} className="text-[#BF9FFF]" />,
    },
    {
      id: 10,
      appid: "01",
      name: "John Doe",
      clientid: "01",
      img: img1,
      clientname: "John Doe",
      status: "Initial",
      icon: <FaFileAlt size={30} className="text-[#BF9FFF]" />,
      profile: <ImProfile size={30} className="text-[#BF9FFF]" />,
    },
  ];
  return (
    <section className="bg-[#FDFBFF] min-h-screen w-full px-6 pr-16">
      <div className="flex items-center justify-between">
        <div>
          <a href="/Applicationslist" className="text-[#9E9E9E]">Application &gt;</a>
          <a href="/manageapplication" className="text-[#000000]">Vineatz Technologies</a>
        </div>
        <div
          className="flex items-center gap-2 bg-[#BF9FFF] px-4 py-2 rounded-md cursor-pointer"
          onClick={() => navigate("/addemployee")}
        >
          <GoPlus size={24} className="text-white" />
        </div>
      </div>

      <div className="bg-[#FDFBFF] px-10">
        <table className="min-w-full">
          <thead className="bg-[#F4FFFE] text-[#030229] text-left">
            <tr className="grid grid-cols-8 items-center rounded-[70px]  py-4">
              <th className="flex items-center gap-1">Application id <MdOutlineArrowDropDown /></th>
              <th className="flex items-center gap-1">Application name <MdOutlineArrowDropDown /></th>
              <th className="flex items-center gap-1">Client id <MdOutlineArrowDropDown /></th>
              <th className="flex items-center gap-1">Client name <MdOutlineArrowDropDown /></th>
              <th className="flex items-center gap-1">Status <MdOutlineArrowDropDown /></th>
              <th className="flex items-center gap-1">Application details <MdOutlineArrowDropDown /></th>
              <th className="flex items-center gap-1">Client details <MdOutlineArrowDropDown /></th>
              <th className=""></th>
            </tr>
          </thead>

          <tbody className="rounded-[60px] space-y-3 drop-shadow-md">
            {details.map((item) => (
              <tr key={item.id} className="grid grid-cols-8 bg-white items-center px-6 py-2 hover:bg-[#F8F9FF] transition rounded-[15px] border-gray-100">
                <td>{item.appid}</td>
                <td>{item.name}</td>
                <td>{item.clientid}</td>
                <td className="flex items-center gap-2">
                  <img src={item.img} alt="client" className="w-6 h-6 rounded-full object-cover" />
                  {item.clientname}
                </td>
                <td className="border-none rounded-[20px] text-[#8144FB] bg-[#F9F5FF] text-[16px] font-sans w-fit px-2">{item.status}</td>
                <td>{item.icon}</td>
                <td>{item.profile}</td>
                <td className="">
                  <div className="">
                    <button
                      onClick={() =>
                        setOpenMenuIndex(openMenuIndex === item.id ? null : item.id)
                      }
                    >
                      <IoIosMore className="text-xl text-[#030229]" />
                    </button>

                    {openMenuIndex === item.id && (
                      <div className="absolute right-0 top-8 bg-white shadow-md rounded-lg w-28 z-20">
                        <button className="block w-full text-left px-4 py-2 hover:bg-gray-100 text-[#BF9FFF]">
                          Move
                        </button>
                        {/* <RejectApplication>
                          <button className="block w-full text-left px-4 py-2 hover:bg-gray-100 text-red-500">
                            Reject
                          </button>
                        </RejectApplication> */}
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

export default ManageApplication;
