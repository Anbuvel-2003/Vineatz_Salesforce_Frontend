// import React from 'react'

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import SkeletonLoader from "./skeleton";
import { toast } from "react-toastify";
import LeadTableSimple from "./leadtable";
interface Application {
  _id: string;
  Application_Name: string;
  Application_lunch_date: string;
  Application_url: string;
}
function Applicationlist() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [Data, setData] = useState<Application[]>([]);
  useEffect(() => {
    getproject();
  }, []);
  const getproject = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `${import.meta.env.VITE_LOCALHOST}/api/application`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const value = await response.json();
      setData(value?.data);
      console.log("data", value?.data);

      setLoading(false);
    } catch (error) {
      console.log(error, "Error Message");
    }
  };
  const deleteproject = async (id: any) => {
    const Comfirmation = window.confirm(
      "Are you sure you want to delete this Application?"
    );
    if (Comfirmation == true) {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_LOCALHOST}/api/application/${id}`,
          {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        } else {
          toast.success("Application deleted successfully!");
          getproject();
        }
      } catch (error) {
        console.log(error, "Error Message");
      }
    }
  };
  return (
    <div>
      <div className="p-3">
        <h2 className="text-center text-gray-500 text-3xl capitalize font-serif font-bold">
          Our Applications
        </h2>
      </div>
      <div className="p-3 flex justify-end">
        <div
          className="p-2 bg-[#F4EFFF] hover:bg-green-400 rounded-[10px] px-5 flex gap-1 place-items-center cursor-pointer group"
          onClick={() => {
            navigate("/createapplication");
          }}
        >
          <svg
            className="w-4 h-4 text-gray-800 dark:text-black group-hover:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 7.757v8.486M7.757 12h8.486M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>

          <h2 className="text-black text-[14px] uppercase font-medium group-hover:text-white ">
            Create
          </h2>
        </div>
      </div>
      {/* <div className="p-3">
        <table className="w-full text-sm text-left rtl:text-right text-gray-400">
          <thead className="text-xs uppercase  bg-[#9468ec] text-white font-bold">
            <tr>
              <th scope="col" className="px-6 py-3">
                S No :
              </th>
              <th scope="col" className="px-6 py-3">
                Application name :
              </th>
              <th scope="col" className="px-6 py-3">
                Application lunch date :
              </th>
              <th scope="col" className="px-6 py-3">
                Application url :
              </th>
              <th scope="col" className="px-6 py-3">
                Update
              </th>
              <th scope="col" className="px-6 py-3">
                Delete
              </th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr>
                <td colSpan={6}>
                  <SkeletonLoader />
                </td>
              </tr>
            ) : (
              Data?.map((data, index) => {
                return (
                  <tr
                    key={data._id}
                    className=" border-b bg-[#F4EFFF] border-gray-700 hover:bg-[#fff] "
                  >
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-[#000] whitespace-nowrap capitalize"
                    >
                      {index + 1}
                    </th>
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-[#000] whitespace-nowrap capitalize"
                    >
                      {data?.Application_Name}
                    </th>
                    <td className="px-6 py-4 text-[#000]">
                      {data?.Application_lunch_date}
                    </td>
                    <td className="px-6 py-4 text-[#000]">
                      {data?.Application_url}
                    </td>
                    <td
                      className="px-6 py-4"
                      onClick={() => {
                        navigate(`/UpdateApplication/${data._id}`, {
                          state: { value: data },
                        });
                      }}
                    >
                      <svg
                        className="w-6 h-6 text-[#000] cursor-pointer hover:text-green-400"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="m14.304 4.844 2.852 2.852M7 7H4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-4.5m2.409-9.91a2.017 2.017 0 0 1 0 2.853l-6.844 6.844L8 14l.713-3.565 6.844-6.844a2.015 2.015 0 0 1 2.852 0Z"
                        />
                      </svg>
                    </td>
                    <td
                      className="px-6 py-4 "
                      onClick={() => deleteproject(data._id)}
                    >
                      <svg
                        className="w-6 h-6 text-[#000] cursor-pointer hover:text-red-400"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="m15 9-6 6m0-6 6 6m6-3a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                        />
                      </svg>
                    </td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div> */}
      <LeadTableSimple />
    </div>
  );
}

export default Applicationlist;
