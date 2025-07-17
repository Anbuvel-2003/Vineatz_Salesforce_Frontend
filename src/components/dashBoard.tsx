// import React from 'react'

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import SkeletonLoader from "./skeleton";
import { toast } from "react-toastify";
import { ChartRadialShape } from "./chart";

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
    <div className="">
      <div className=" flex m-10 !gap-10 place-content-center">
        <ChartRadialShape name="Client" />
        <ChartRadialShape name="Employees"/>
        <ChartRadialShape name="Leads"/>
        <ChartRadialShape name="Rejects"/>
      </div>
    </div>
  );
}

export default Dashboard;
