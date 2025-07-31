import { useState } from "react";
import React, { useRef } from "react";
import { Formik, Form, Field, ErrorMessage, useFormikContext } from "formik";
import * as Yup from "yup";
import ProspectMoveLeads from "./prospect_move";
import { Button, Calendar, DatePicker, Input, Popover, Space, Switch } from 'antd';
import { CheckOutlined, CloseOutlined } from '@ant-design/icons';
import { PopoverTrigger, PopoverContent } from "@radix-ui/react-popover";
import { CalendarIcon } from "lucide-react";
import { format } from "path";
import RejectApplication from "./rejectapplication";
import Rejectapplication from "./rejectapplication";
import { Textarea } from "flowbite-react";
import { Label } from "recharts";



interface AssignleadProps {
  isDrawerOpen: boolean;
  setIsDrawerOpen: (isOpen: boolean) => void;
  setreject: (isOpen: boolean) => void;
  stageId: number; // 👈 New Prop
  reject: boolean;
}

const stages = [
  "initial",
  "prospect",
  "qualify",
  "demo",
  "proposal",
  "onboard",
  "accounts",
];

// Dynamic validation schema based on stage
const getValidationSchema = (stageId: number) => {
  switch (stageId) {
    case 1:
      return Yup.object({
        name: Yup.string().required("Name is required"),
        email: Yup.string()
          .email("Invalid email")
          .required("Email is required"),
        phone: Yup.string().required("Phone is required"),
        company: Yup.string().required("Company is required"),
      });
    case 2:
      return Yup.object({
        expectedAmount: Yup.number()
          .typeError("Expected amount must be a number")
          .required("Expected amount is required"),
        expectedDate: Yup.string().required("Expected date is required"),
        typeofbusiness: Yup.string().required("Type of business is required"),
        confidence: Yup.number()
          .typeError("Confidence must be a number")
          .min(1, "Confidence must be between 1% to 100%")
          .max(100, "Confidence must be below 100%")
          .required("Confidence is required"),
      });
    case 3:
      return Yup.object({
        demoDate: Yup.date().required("Demo date is required"),
        demoTime: Yup.string().required("Demo time is required"),
        demoLocation: Yup.string().required("Demo location is required"),
      });
    case 4:
      return Yup.object({
        finalizeAmount: Yup.number()
          .typeError("Finalize amount must be a number")
          .required("Finalize amount is required"),
        dueDate: Yup.date().required("Due date is required"),
      });
    case 5:
      return Yup.object({
        paymentMethod: Yup.string().required("Select a payment method"),
      });
    // Add more cases as needed
    default:
      return Yup.object();
  }
};

const getFieldsByStage = (
  stageId: number,
  setIsDrawerOpen: (isOpen: boolean) => void,
  reject: boolean,
  setReject: (value: boolean) => void
) => {
  if (reject) {
    return (
      <>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold text-gray-800 flex items-center">
            Rejected Lead
          </h2>
          <button
            onClick={() => {
              setIsDrawerOpen(false), setreject(false)
            }}
            className="text-gray-600 hover:text-white hover:bg-[#BF9FFF] rounded-full w-8 h-8 flex items-center justify-center"
          >
            ✕
          </button>
        </div>


        <div className="text-gray-500">
         
          <div className=" w-full rounded-xl shadow-md bg-white px-6 py-6">
            <h2 className="text-[20px] text-[#111111] text-center font-poppins font-semibold mb-4">
              Reject Application
            </h2>
            {/* Rejection Subject */}
            <div className="flex  mb-4">
              <label className="text-[16px] text-[#111111] w-[125px] font-medium">
                Rejection Subject
              </label>
              <Field
                id="subject"
                name="subject"
                placeholder="Subject"
                className="text-[#808080] w-full bg-[#FAFAFA] border border-gray-300 rounded-md px-4 py-2 mt-1"
              />
            </div>

            {/* Rejection Details */}
            <div className="flex mb-4">
              <label className="text-[16px] text-[#111111] w-[125px] font-medium">
                Details
              </label>
              <textarea
              id="details"
                name="details"
                placeholder="Rejection Details"
                className="bg-[#FAFAFA] row-span-3 text-[#808080] border border-gray-300 rounded-md px-4 py-2 mt-1 w-full h-[150px]"
              />
            </div>

           
          </div>
        </div>



      </>

    );
  }


  switch (stageId) {
    case 1:
      return (
        <>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-gray-800 flex items-center">
              Initial
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
              <span>Prospect</span>
            </h2>
            <button
              onClick={() => setIsDrawerOpen(false)}
              className="text-gray-600 hover:text-white hover:bg-[#BF9FFF] rounded-full w-8 h-8 flex items-center justify-center"
            >
              ✕
            </button>
          </div>
          <div className="flex flex-col gap-4">
            <div>
              <label className="block text-lg font-medium mb-3">
                Employee Name
              </label>
              <Field name="name"
              className="input w-full border p-2 rounded-xl" />
              <ErrorMessage
                name="name"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>
            <div>
              <label className="block text-lg font-medium mb-3">
                Employee Email
              </label>
              <Field
                name="email"
                type="Email"
                className="input w-full border border-gray-300 hover:border-2 hover:border-[#111111] p-2 rounded-xl"
              />
              <ErrorMessage
                name="email"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">
                Employee Phone
              </label>
              <Field name="phone" className="input w-full border p-2  rounded-xl" />
              <ErrorMessage
                name="phone"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>
          </div>
        </>
      );
    case 2:
      return (
        <>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-gray-800 flex items-center">
              Prospect
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
              <span>Qualify</span>
            </h2>
            <button
              onClick={() => setIsDrawerOpen(false)}
              className="text-gray-600 hover:text-white hover:bg-[#BF9FFF] rounded-full w-8 h-8 flex items-center justify-center"
            >
              ✕
            </button>
          </div>
          {/* <div className="flex flex-col gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">
                Expected Amount
              </label>
              <Field name="name" className="input w-full border p-2 rounded" />
              <ErrorMessage
                name="name"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">
                Expected date
              </label>
              <Field
                name="email"
                type="email"
                className="input w-full border p-2 rounded"
              />
              <ErrorMessage
                name="email"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">
                Type of Business
              </label>
              <Field name="phone" className="input w-full border p-2 rounded" />
              <ErrorMessage
                name="phone"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">
                Confidence level
              </label>
              <Field
                name="company"
                className="input w-full border p-2 rounded"
              />
              <ErrorMessage
                name="company"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>
          </div> */}
          < ProspectMoveLeads />
        </>
      );
    case 3:
      
      return (
        <>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-gray-800 flex items-center">
              Qualify
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
              <span>Demo</span>
            </h2>
            <button
              onClick={() => setIsDrawerOpen(false)}
              className="text-gray-600 hover:text-white hover:bg-[#BF9FFF] rounded-full w-8 h-8 flex items-center justify-center"
            >
              ✕
            </button>
          </div>
          <div className="flex flex-col gap-8">
            <span className="text-[#000000] text-[20px] font-poppins">
              Details To Be Filled
            </span>
            <div className="flex items-center ">

              <label className="text-lg font-medium w-[220px]">Application Demo</label>
              <Space direction="vertical">
                <Switch checkedChildren="1" unCheckedChildren="O" />
              </Space>
            </div>
            <div className="flex items-center pb-5 ">

              <label className="text-lg font-medium w-[220px]"> Features Explanation
              </label>
              <Space direction="vertical" >
                <Switch checkedChildren="1" unCheckedChildren="O" />
              </Space>
            </div>
          </div>
        </>
      );
    case 4:

      return (
         <>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-gray-800 flex items-center">
          Demo
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
          <span>Proposal</span>
        </h2>
        <button
          onClick={() => setIsDrawerOpen(false)}
          className="text-gray-600 hover:text-white hover:bg-[#BF9FFF] rounded-full w-8 h-8 flex items-center justify-center"
        >
          ✕
        </button>
      </div>

      <div className="flex flex-col gap-8">
        <span className="text-[#000000] text-[20px] font-poppins">
          Details To Be Filled
        </span>

        {/* Finalized Amount Input */}
        <div>
          <label className="block text-md font-medium mb-1">Finalized Amount</label>
          <Field name="finalizeAmount">
            {({ field }: any) => (
              <input
                {...field}
                type="text"
                 onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => {
        if (
          !/[0-9]/.test(e.key) &&
          e.key !== "Backspace" &&
          e.key !== "Tab" &&
          e.key !== "ArrowLeft" &&
          e.key !== "ArrowRight"
        ) {
          e.preventDefault();
        }
      }}  
                name="finalizeAmount"
                placeholder="Enter Finalized Amount"
                className="input w-full border p-2 rounded-lg placeholder:text-[#AEAEAE]"
              />
            )}
          </Field>
          <ErrorMessage
            name="finalizeAmount"
            component="div"
            className="text-red-500 text-sm"
          />
        </div>

        {/* Due Date Input */}
        <div>
          <label className="block text-md font-medium mb-1">Due Date</label>
          <DatePicker
            size="large"
            name="dueDate"
            placeholder="Select Due Date"
            className="input w-full placeholder:text-[#AEAEAE] border p-2 rounded-lg"
            suffixIcon={<CalendarIcon className="text-[#AEAEAE]" />}
          />
          <ErrorMessage
            name="dueDate"
            component="div"
            className="text-red-500 text-sm"
          />
        </div>
      </div>
    </>
      );
    case 5:
      return (
        <>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-gray-800 flex items-center">
              Proposal
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
              <span>Onboard</span>
            </h2>
            <button
              onClick={() => setIsDrawerOpen(false)}
              className="text-gray-600 hover:text-white hover:bg-[#BF9FFF] rounded-full w-8 h-8 flex items-center justify-center"
            >
              ✕
            </button>
          </div>
          <div className="flex flex-col gap-2">
            <label className="block text-lg font-medium mb-1">
              Select Payment Mode
            </label>
            <div className="flex gap-4">
              <label className="flex items-center gap-2">
                <Field type="radio" name="paymentMethod" value="cash" />
                Cash
              </label>
              <label className="flex items-center gap-2">
                <Field type="radio" name="paymentMethod" value="netbanking" />
                Net Banking
              </label>
            </div>
            <ErrorMessage
              name="paymentMethod"
              component="div"
              className="text-red-500 text-sm"
            />
          </div>
        </>
      );
    case 6:
      return (
        <>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-gray-800 flex items-center">
              onboard
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
              <span>account</span>
            </h2>
            <button
              onClick={() => setIsDrawerOpen(false)}
              className="text-gray-600 hover:text-white hover:bg-[#BF9FFF] rounded-full w-8 h-8 flex items-center justify-center"
            >
              ✕
            </button>
          </div>
          <div className="flex flex-col gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">Name</label>
              <Field name="name" className="input w-full border p-2 rounded" />
              <ErrorMessage
                name="name"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Email</label>
              <Field
                name="email"
                type="email"
                className="input w-full border p-2 rounded"
              />
              <ErrorMessage
                name="email"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Phone</label>
              <Field name="phone" className="input w-full border p-2 rounded" />
              <ErrorMessage
                name="phone"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Company</label>
              <Field
                name="company"
                className="input w-full border p-2 rounded"
              />
              <ErrorMessage
                name="company"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>
          </div>
        </>
      );
    case 7:
      return (
        <>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-gray-800 flex items-center">
              Initial
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
              <span>Prospect</span>
            </h2>
            <button
              onClick={() => setIsDrawerOpen(false)}
              className="text-gray-600 hover:text-white hover:bg-[#BF9FFF] rounded-full w-8 h-8 flex items-center justify-center"
            >
              ✕
            </button>
          </div>
          <div className="flex flex-col gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">Name</label>
              <Field name="name" className="input w-full border p-2 rounded" />
              <ErrorMessage
                name="name"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Email</label>
              <Field
                name="email"
                type="email"
                className="input w-full border p-2 rounded"
              />
              <ErrorMessage
                name="email"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Phone</label>
              <Field name="phone" className="input w-full border p-2 rounded" />
              <ErrorMessage
                name="phone"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Company</label>
              <Field
                name="company"
                className="input w-full border p-2 rounded"
              />
              <ErrorMessage
                name="company"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>
          </div>
        </>
      );
    default:
      return <div>No fields for this stage.</div>;
  }
};

const AddedLead: React.FC<AssignleadProps> = ({
  isDrawerOpen,
  setIsDrawerOpen,
  stageId,
  reject = false,
  setreject,
}) => {
  const initialValues = {
    name: "",
    email: "",
    phone: "",
    company: "",
    budget: "",
    timeline: "",
    industry: "",
    priority: "",
    expectedAmount: "",   // for prospect
    expectedDate: undefined,   // for prospect
    typeofbusiness: "",   // for prospect
    confidence: "",   // for prospect
    appDemo: false, // for toggle
    featuresExplanation: false, // for toggle
    paymentMethod: "", // for radio
    finalizeAmount: "",
    dueDate: undefined,
  };

  

  return (
    <div className="relative z-40">
      {/* Backdrop */}
      {isDrawerOpen && (
        <div
          className="fixed inset-0 bg-black/30 backdrop-blur-sm z-30 transition-opacity duration-300"
          onClick={() => setIsDrawerOpen(false)}
        />
      )}
      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 z-40 h-screen p-6 overflow-y-auto transition-transform transform bg-white shadow-lg ${isDrawerOpen ? "translate-x-0" : "translate-x-full"
          } w-[90%] sm:w-[60%] md:w-[40%] lg:w-[30%]`}
      >
        <Formik
          initialValues={initialValues}
          validationSchema={getValidationSchema(stageId)}
          onSubmit={(values) => {
            console.log("Submitted Data:", values);
          }}
        >
          <Form>
            {getFieldsByStage(stageId, setIsDrawerOpen, reject, setreject)}
            <button
              type="submit"
              className="bg-[#BF9FFF] text-white px-4 py-2 rounded hover:bg-[#a57fff] mt-4"
            >
              Submit
            </button>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default AddedLead;
