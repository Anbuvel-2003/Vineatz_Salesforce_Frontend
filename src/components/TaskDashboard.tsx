// import React from 'react'

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import SkeletonLoader from "./skeleton";
import { toast } from 'react-toastify';
function TaskDashboard() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [Data, setData] = useState([]);
  useEffect(() => {
    gettasks();
  }, []);
  const gettasks = async () => {
    setLoading(true);
    try {
      const response = await fetch(`${import.meta.env.VITE_LOCALHOST}/api/gettasks`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setData(data);
      setLoading(false);
    } catch (error) {
      console.log(error, "Error Message");
    }
  };
  const deleteTask = async (id : any) => {
    const Comfirmation = window.confirm(
      "Are you sure you want to delete this task?"
    )
    if (Comfirmation == true) {
      try {
        const response = await fetch(`${import.meta.env.VITE_LOCALHOST}/api/deletetask/${id}`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        });
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }else{
          toast.success("Task deleted successfully!");
          gettasks();
        }
      } catch (error) {
        console.log(error, "Error Message");
      }
    }
  };
  return (
    <div>
      <div className="p-3">
        <h2 className="text-center text-gray-500 text-3xl capitalize font-serif font-bold">Task DashBoard</h2>
      </div>
      <div className="p-3">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-500 uppercase bg-gray-50 dark:bg-blue-700 dark:text-white font-bold">
            <tr>
              <th scope="col" className="px-6 py-3">
                Task Name
              </th>
              <th scope="col" className="px-6 py-3">
                Task Assigned To
              </th>
              <th scope="col" className="px-6 py-3">
              Task Assigned By
              </th>
              <th scope="col" className="px-6 py-3">
                Task Deadline
              </th>
              <th scope="col" className="px-6 py-3">
                Task Status
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
            {loading ? 
            <tr>
              <td colSpan="8">
                <SkeletonLoader/>
              </td>
            </tr>
              : 
              Data?.map((data) => 
                {
                  const endDate = new Date(data?.Task_Deadline).toISOString().split('T')[0];
                  console.log(data,'----');
                  
                  return ( 
                
            <tr key={data._id}
             className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white capitalize">
                {data?.Task_Name}
              </th>
              <td className="px-6 py-4 capitalize">
                {data?.Task_Assigned_To}
              </td>
              <td className="px-6 py-4 capitalize">
                {data?.Task_Assigned_By}
              </td>
              <td className="px-6 py-4">
                {endDate}
              </td>
              <td className="px-6 py-4 uppercase">
                {data?.Task_Status}
              </td>
              <td className="px-6 py-4" onClick={() => {
               navigate(`/UpdateTask/${data._id}`, { state: { value: data } });
                 }}>
                <svg className="w-6 h-6 text-gray-800 dark:text-white cursor-pointer" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m14.304 4.844 2.852 2.852M7 7H4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-4.5m2.409-9.91a2.017 2.017 0 0 1 0 2.853l-6.844 6.844L8 14l.713-3.565 6.844-6.844a2.015 2.015 0 0 1 2.852 0Z" />
                </svg>
              </td>
              <td className="px-6 py-4 " onClick={() => deleteTask(data._id)}>
                <svg className="w-6 h-6 text-gray-800 dark:text-white cursor-pointer" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m15 9-6 6m0-6 6 6m6-3a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
              </td>
            </tr> 
                  )})
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default TaskDashboard