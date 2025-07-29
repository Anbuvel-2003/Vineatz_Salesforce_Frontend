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

function Adminlist() {
  const navigate = useNavigate();
  const [openMenuIndex, setOpenMenuIndex] = useState<number | null>(null);
  const [adminlist, setAdminlist] = useState<any[]>([]);
  const GetAdmin = async () => {
    const res = await authApi.GetAdmin(1, 10);
    console.log(res);
    if (res?.success) {
      setAdminlist(res?.data);
    }
  };
  useEffect(() => {
    GetAdmin();
  }, []);

  const deleteTask = async (id: any) => {
    const Comfirmation = window.confirm(
      "Are you sure you want to delete this Admin?"
    );
    if (Comfirmation == true) {
      try {
        const deleteapi = await authApi.DeleteAdmin(id);
        if (deleteapi?.success) {
          toast.success("Admin deleted successfully!");
          GetAdmin();
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
        <div className="text-[#9E9E9E] ">Admin &gt;</div>
        <div
          className="flex items-center gap-2 bg-[#BF9FFF] px-4 py-2 rounded-md cursor-pointer"
          onClick={() => navigate("/Admincreation")}
        >
          <GoPlus size={24} className="text-[#FFFF] " />
        </div>
      </div>
      <div className=" bg-[#FDFBFF] px-10 ">
        <table className="min-w-full">
          <thead className="bg-[#FDFBFF] text-[#030229] text-left">
            <tr className="grid grid-cols-6  items-center rounded-[70px]  py-4 px-5">
              <th className="flex items-center gap-1">
                Admin id <MdOutlineArrowDropDown />
              </th>
              <th className="flex items-center gap-1">
                Admin name <MdOutlineArrowDropDown />
              </th>
              <th className="flex items-center gap-1">
                Mobile number <MdOutlineArrowDropDown />
              </th>
              <th className="flex items-center gap-1">
                Email id <MdOutlineArrowDropDown />
              </th>
              <th className="flex items-center gap-1">
                Address <MdOutlineArrowDropDown />
              </th>
            </tr>
          </thead>
          <tbody className=" rounded-[60px] space-y-3 drop-shadow-md ">
            {adminlist.length === 0 ? (
              <div className="flex items-center justify-center h-[300px] ">
                <h2 className="text-[#BF9FFF] text-[20px] font-medium ">
                  No data found
                </h2>
              </div>
            ) : (
              adminlist.map((item, index) => (
                <tr
                  key={item._id}
                  className="grid grid-cols-6 items-center w-full  py-2 bg-white  hover:bg-[#F8F9FF] transition rounded-[10px] px-5 border-gray-100 relative"
                >
                  <td className=" ">{item?.User_Id}</td>
                  <td className="flex items-center gap-2">
                    <img
                      src={img1}
                      alt="client"
                      className="w-6 h-7 rounded-full object-cover"
                    />
                    {item.first_Name}
                  </td>
                  <td>{item.Mobile_Number}</td>
                  <td className="truncate max-w-[180px] overflow-hidden text-ellipsis ">
                    <span title={item.Email}>{item.Email}</span>
                  </td>
                  <td className="truncate max-w-[180px] overflow-hidden text-ellipsis ">
                    <span title={item.Address}>{item.Address}</span>
                  </td>
                  <div className="px-10 absolute right-0 z-20">
                    <div className="relative flex justify-end  gap-20">
                      <button
                        onClick={() =>
                          setOpenMenuIndex(
                            openMenuIndex === item._id ? null : item._id
                          )
                        }
                      >
                        <IoIosMore className="text-xl text-[#030229]" />
                      </button>
                      {openMenuIndex === item._id && (
                        <div className="absolute left-0 top-3 bg-white shadow-lg rounded-lg w-28 z-20">
                          <button
                            className=" w-full text-left px-4 py-2 hover:bg-gray-100 text-[#BF9FFF] flex items-center !gap-2 "
                            onClick={() =>
                              navigate(`/updateuser/${item._id}`, {
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

export default Adminlist;
