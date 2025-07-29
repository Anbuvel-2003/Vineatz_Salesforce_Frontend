import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

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
        budget: Yup.number().required("Budget is required"),
        timeline: Yup.string().required("Timeline is required"),
        industry: Yup.string().required("Industry is required"),
        priority: Yup.string().required("Priority is required"),
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
) =>  {
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
          This lead has been marked as <strong>rejected</strong>. No form data
          is required.
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
              <label className="block text-sm font-medium mb-1">
                Employee Name
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
                Employee Email
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
                Employee Phone
              </label>
              <Field name="phone" className="input w-full border p-2 rounded" />
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
              <span>qualify</span>
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
          </div>
        </>
      );
    case 3:
      return (
        <>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-gray-800 flex items-center">
              qualify
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
              <span>demo</span>
            </h2>
            <button
              onClick={() => setIsDrawerOpen(false)}
              className="text-gray-600 hover:text-white hover:bg-[#BF9FFF] rounded-full w-8 h-8 flex items-center justify-center"
            >
              ✕
            </button>
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex items-center !gap-3 ">
              <Field name="appDemo">
                {({ field }: any) => (
                  <input
                    type="checkbox"
                    checked={field.value}
                    onChange={() =>
                      field.onChange({
                        target: { name: field.name, value: !field.value },
                      })
                    }
                    className="toggle"
                  />
                )}
              </Field>
              <label className="text-sm font-medium">Application Demo</label>
            </div>
            <div className="flex items-center !gap-3 ">
              <Field name="featuresExplanation">
                {({ field }: any) => (
                  <input
                    type="checkbox"
                    checked={field.value}
                    onChange={() =>
                      field.onChange({
                        target: { name: field.name, value: !field.value },
                      })
                    }
                    className="toggle"
                  />
                )}
              </Field>
              <label className="text-sm font-medium">
                Features Explanation
              </label>
            </div>
          </div>
        </>
      );
    case 4:
      return (
        <>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-gray-800 flex items-center">
              demo
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
              <span>proposal</span>
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
              <label className="block text-sm font-medium mb-1">
                Actual Amount
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
                Actual Date
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
          </div>
        </>
      );
    case 5:
      return (
        <>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-gray-800 flex items-center">
              proposal
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
              <span>onboard</span>
            </h2>
            <button
              onClick={() => setIsDrawerOpen(false)}
              className="text-gray-600 hover:text-white hover:bg-[#BF9FFF] rounded-full w-8 h-8 flex items-center justify-center"
            >
              ✕
            </button>
          </div>
          <div className="flex flex-col gap-2">
            <label className="block text-sm font-medium mb-1">
              Payment Mode
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
    appDemo: false, // for toggle
    featuresExplanation: false, // for toggle
    paymentMethod: "", // for radio
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
        className={`fixed top-0 right-0 z-40 h-screen p-6 overflow-y-auto transition-transform transform bg-white shadow-lg ${
          isDrawerOpen ? "translate-x-0" : "translate-x-full"
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
