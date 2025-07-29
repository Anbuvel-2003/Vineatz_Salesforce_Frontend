import React, { useState } from "react";
import { IoIosCheckmarkCircle } from "react-icons/io";
import AddedLead from "./inputfield";
import TabComponent from "./leaddetailstab";

function Leaddetails() {
  const steper = [
    {
      id: 1,
      name: "initial",
    },
    {
      id: 2,
      name: "prospect",
    },
    {
      id: 3,
      name: "qualify",
    },
    {
      id: 4,
      name: "demo",
    },
    {
      id: 5,
      name: "proposal",
    },
    {
      id: 6,
      name: "onboard",
    },
    {
      id: 7,
      name: "account",
    },
  ];
  const activeStep = 3;
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);
  const [isRejected, setIsRejected] = useState<boolean>(false);
  return (
    <div>
      <div className="!m-10 flex items-center justify-between">
        <div>
          <h2>LEAD ID : LEAD00001</h2>
        </div>
        <div className="flex items-center !gap-10">
          <div
            className="border border-1 border-[#BF9FFF] !p-2 rounded-[10px] "
            onClick={() => {
              setIsRejected(false);
              setIsDrawerOpen(true);
            }}
          >
            <h2 className="text-[#BF9FFF] font-medium ">Move</h2>
          </div>
          <div
            onClick={() => {
              setIsRejected(true), setIsDrawerOpen(true);
            }}
          >
            <h2>reject</h2>
          </div>
        </div>
      </div>
      <div className="!m-10">
        <ol className="flex items-center w-full p-3 space-x-2 text-sm place-content-center font-medium text-center text-gray-500 bg-white border border-gray-200 rounded-lg shadow-xs dark:text-gray-400 sm:text-base dark:bg-gray-800 dark:border-gray-700 sm:p-4 sm:space-x-4 rtl:space-x-reverse">
          {steper.map(({ id, name }, index) => {
            const isCompleted = id < activeStep;
            const isActive = id === activeStep;
            return (
              <li key={id} className="flex items-center space-x-2">
                {id <= activeStep ? (
                  <IoIosCheckmarkCircle
                    size={25}
                    className={`${
                      isActive ? "text-purple-600" : "text-green-500"
                    }`}
                  />
                ) : (
                  <span
                    className={`flex items-center justify-center w-6 h-6 text-xs font-bold rounded-full border ${
                      isActive
                        ? "text-purple-600 border-purple-600"
                        : "text-gray-400 border-gray-300"
                    }`}
                  >
                    {id}
                  </span>
                )}
                <span
                  className={`${
                    isActive ? "text-purple-600 font-semibold" : "text-gray-600"
                  } capitalize`}
                >
                  {name}
                </span>
                {/* Arrow between steps */}
                {index !== steper.length - 1 && (
                  <svg
                    className="w-3 h-3 mx-2 rtl:rotate-180 text-gray-400"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 12 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m7 9 4-4-4-4M1 9l4-4-4-4"
                    />
                  </svg>
                )}
              </li>
            );
          })}
        </ol>
      </div>
      <div className="flex items-center justify-between !m-10">
        <div className="w-full">
          <h1>Lead Details</h1>
          <TabComponent />
        </div>
      </div>

      <AddedLead
        isDrawerOpen={isDrawerOpen}
        setIsDrawerOpen={setIsDrawerOpen}
        reject={isRejected}
        setreject={setIsRejected}
        stageId={activeStep}
      />
    </div>
  );
}

export default Leaddetails;
