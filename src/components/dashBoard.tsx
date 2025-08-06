// import React from 'react'

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import SkeletonLoader from "./skeleton";
import { toast } from "react-toastify";
import { ChartRadialShape } from "./chart";
import dashboard1 from "../assets/dashboard1.png";
import dashboard2 from "../assets/dashboard2.png";
import dashboard3 from "../assets/dashboard3.png";
import dashboard4 from "../assets/dashboard4.png";
import dashboard01 from "../assets/dashboard01.png";
import dashboard02 from "../assets/dashboard02.png";
import dashboard03 from "../assets/dashboard03.png";
import dashboard04 from "../assets/dashboard04.png";
import dashboard05 from "../assets/dashboard05.png";
import sample from "../assets/sample3.png";
import dashboard06 from "../assets/dashboard06.png";
import TopApplicationComponent from "./topapplication";

function Dashboard() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [Data, setData] = useState([]);
  useEffect(() => {
    getproject();
  }, []);
  const getproject = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `${import.meta.env.VITE_LOCALHOST}/api/projects`,
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
      const data = await response.json();
      setData(data);
      setLoading(false);
    } catch (error) {
      console.log(error, "Error Message");
    }
  };
  const deleteproject = async (id: any) => {
    const Comfirmation = window.confirm(
      "Are you sure you want to delete this project?"
    );
    if (Comfirmation == true) {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_LOCALHOST}/api/deleteprojects/${id}`,
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
          toast.success("Project deleted successfully!");
          getproject();
        }
      } catch (error) {
        console.log(error, "Error Message");
      }
    }
  };

  return (
    <div className="bg-[#FDFAFE]   min-h-full">
      <div className="grid grid-cols-4 gap-4 px-10 ">
        <div className="flex items-center bg-white gap-4 p-10 rounded-[10px]">
          <img src={dashboard1} alt="" />
          <div>
            <h2 className="text-[20px] font-medium text-[#030229]">178+</h2>
            <h3 className="text-[#030229] text-[14px] font-thin">
              total leads
            </h3>
          </div>
        </div>
        <div className="flex items-center bg-white gap-4 p-10 rounded-[10px]">
          <img src={dashboard2} alt="" />
          <div>
            <h2 className="text-[20px] font-medium text-[#030229]">20+</h2>
            <h3 className="text-[#030229] text-[14px] font-thin">
              Our products
            </h3>
          </div>
        </div>
        <div className="flex items-center bg-white gap-4 p-10 rounded-[10px]">
          <img src={dashboard3} alt="" />
          <div>
            <h2 className="text-[20px] font-medium text-[#030229]">190+</h2>
            <h3 className="text-[#030229] text-[14px] font-thin">
              Projects in Hand
            </h3>
          </div>
        </div>
        <div className="flex items-center bg-white gap-4 p-10 rounded-[10px]">
          <img src={dashboard4} alt="" />
          <div>
            <h2 className="text-[20px] font-medium text-[#030229]">12</h2>
            <h3 className="text-[#030229] text-[14px] font-thin">
              Total Reject
            </h3>
          </div>
        </div>
      </div>
      <div className="flex bg-white m-10 rounded-[10px]">
        <div className="w-1/3 ">
          <h2 className="text-[20px] text-center font-medium text-[#030229] pt-10">
            Analytics
          </h2>
        </div>
        <div className="grid grid-cols-3 gap-4 p-10 w-full">
          <div className="flex items-center  gap-4 p-10 rounded-[10px]">
            <img src={dashboard01} alt="" />
            <div>
              <h2 className="text-[20px] font-medium text-[#030229]">178+</h2>
              <h3 className="text-[#030229] text-[14px] font-thin">
                New Applicants
              </h3>
            </div>
          </div>
          <div className="flex items-center  gap-4 p-10 rounded-[10px]">
            <img src={dashboard02} alt="" />
            <div>
              <h2 className="text-[20px] font-medium text-[#030229]">20+</h2>
              <h3 className="text-[#030229] text-[14px] font-thin">
                New Qualified
              </h3>
            </div>
          </div>
          <div className="flex items-center  gap-4 p-10 rounded-[10px]">
            <img src={dashboard03} alt="" />
            <div>
              <h2 className="text-[20px] font-medium text-[#030229]">190+</h2>
              <h3 className="text-[#030229] text-[14px] font-thin">
                Proposal sent
              </h3>
            </div>
          </div>
          <div className="flex items-center  gap-4 p-10 rounded-[10px]">
            <img src={dashboard04} alt="" />
            <div>
              <h2 className="text-[20px] font-medium text-[#030229]">12</h2>
              <h3 className="text-[#030229] text-[14px] font-thin">
                New Prospect
              </h3>
            </div>
          </div>
          <div className="flex items-center  gap-4 p-10 rounded-[10px]">
            <img src={dashboard05} alt="" />
            <div>
              <h2 className="text-[20px] font-medium text-[#030229]">12</h2>
              <h3 className="text-[#030229] text-[14px] font-thin">In Demo</h3>
            </div>
          </div>
          <div className="flex items-center  gap-4 p-10 rounded-[10px]">
            <img src={dashboard06} alt="" />
            <div>
              <h2 className="text-[20px] font-medium text-[#030229]">12</h2>
              <h3 className="text-[#030229] text-[14px] font-thin">
                Onboarded
              </h3>
            </div>
          </div>
        </div>
      </div>
      <div className="m-10  flex gap-10">
        <div className="bg-[#fff] w-[100%]  rounded-[10px]">
          <div className="px-10 py-4">
            <h2 className="text-[20px] text-[#05004E]  font-medium">
              Top Applications
            </h2>
          </div>
          <TopApplicationComponent />
        </div>
        <div className="bg-[#fff] w-1/3 rounded-[10px]">
          <h2 className="text-[20px]">sss</h2>
        </div>
      </div>
      <div className="w-[20%] h-[25%] relative ">
        <img src={sample} alt="" className="w-full h-full rounded-[20px]" />
        <div className="absolute top-7 right-9 bg-white rounded-l-[20px] w-[50px] h-[50px]">
          <h3>tick</h3>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
