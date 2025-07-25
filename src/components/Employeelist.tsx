import img1 from "../assets/Image & bg.png";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { FaFileAlt } from "react-icons/fa";
import { ImProfile } from "react-icons/im";
import { IoIosMore } from "react-icons/io";
import { useEffect, useState } from "react";
import { GoPlus } from "react-icons/go";
import { useNavigate } from "react-router-dom";
import { CiEdit } from "react-icons/ci";
import { MdDelete } from "react-icons/md";
import RejectApplication from "./rejectapplication";
import DeleteApplication from "./deleteapplication";
import { authApi } from "../config/fetchData";
import { set } from "date-fns";
import { toast } from "react-toastify";

function Employeelist() {
  const navigate = useNavigate();
  const [openMenuIndex, setOpenMenuIndex] = useState<number | null>(null);
  const [employeelist, setEmployeelist] = useState<any[]>([]);
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
  const GetEmployee = async () => {
    const res = await authApi.GetEmployee(1, 10);
    console.log(res);
    if (res?.success) {
      setEmployeelist(res?.data);
    }
  };

  useEffect(() => {
    GetEmployee();
  }, []);

  const deleteTask = async (id: any) => {
    const Comfirmation = window.confirm(
      "Are you sure you want to delete this Employee?"
    );
    if (Comfirmation == true) {
      try {
        const deleteapi = await authApi.DeleteEmployee(id);
        if (deleteapi?.success) {
          toast.success("Employee deleted successfully!");
          GetEmployee();
        } else {
          toast.error("Something went wrong");
        }
      } catch (error) {
        console.log(error, "Error Message");
      }
    }
  };
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
            <tr className="grid grid-cols-6  items-center rounded-[70px]  py-4 px-5">
              <th className="flex items-center gap-1">
                Employee id <MdOutlineArrowDropDown />
              </th>
              <th className="flex items-center gap-1">
                Employee name <MdOutlineArrowDropDown />
              </th>
              <th className="flex items-center gap-1">
                Mobile number 1 <MdOutlineArrowDropDown />
              </th>
              <th className="flex items-center gap-1">
                Mobile number 2 <MdOutlineArrowDropDown />
              </th>
              <th className="flex items-center gap-1">
                Email id <MdOutlineArrowDropDown />
              </th>
              <th className="flex items-center gap-1">
                Joining date <MdOutlineArrowDropDown />
              </th>
            </tr>
          </thead>
          <tbody className=" rounded-[60px] space-y-3 drop-shadow-md ">
            {employeelist.length === 0 ? (
              <div className="flex items-center justify-center h-[300px] ">
                <h2 className="text-[#BF9FFF] text-[20px] font-medium ">
                  No data found
                </h2>
              </div>
            ) : (
              employeelist.map((item, index) => (
                <tr
                  key={item.id}
                  className="grid grid-cols-6 items-center w-full  py-2 bg-white  hover:bg-[#F8F9FF] transition rounded-[10px] px-5 border-gray-100 relative"
                >
                  <td className=" ">{item.Employee_Id}</td>
                  <td className="flex items-center gap-2">
                    <img
                      src={img1}
                      alt="client"
                      className="w-6 h-7 rounded-full object-cover"
                    />
                    {item.Employee_Name}
                  </td>
                  <td>{item.Employee_Mobilenumber}</td>
                  <td>{item.Employee_Alternative_Mobilenumber}</td>
                  <td className="truncate max-w-[180px] overflow-hidden text-ellipsis ">
                    <span title={item.Employee_Email}>
                      {item.Employee_Email}
                    </span>
                  </td>
                  <td>
                    {" "}
                    {new Date(item?.Employee_joining_date).toLocaleDateString(
                      "en-GB",
                      {
                        day: "2-digit",
                        month: "short",
                        year: "numeric",
                      }
                    )}
                  </td>
                  <div className="px-10 absolute right-0 z-20">
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
                        <div className="absolute left-0 top-3 bg-white shadow-lg rounded-lg w-28 z-20">
                          <button
                            className=" w-full text-left px-4 py-2 hover:bg-gray-100 text-[#BF9FFF] flex items-center !gap-2 "
                            onClick={() =>
                              navigate(`/updateemployee/${item._id}`, {
                                state: { value: item },
                              })
                            }
                          >
                            <CiEdit />
                            Edit
                          </button>
                          <button
                            className=" w-full text-left px-4 py-2 hover:bg-gray-100 text-red-500 flex items-center !gap-2 "
                            onClick={() => deleteTask(item._id)}
                          >
                            <MdDelete />
                            Delete
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default Employeelist;

