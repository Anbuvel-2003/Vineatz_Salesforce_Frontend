import React, { useState, useRef } from "react";
import { Formik, Form, Field, ErrorMessage, useFormikContext } from "formik";
import * as Yup from "yup";
import { DatePicker, Space, Switch } from "antd";
import { CalendarIcon } from "lucide-react";
import dayjs from "dayjs";

interface AssignleadProps {
  isDrawerOpen: boolean;
  setIsDrawerOpen: (isOpen: boolean) => void;
  setreject: (isOpen: boolean) => void;
  stageId: number;
  reject: boolean;
}

const stages = [
  "Initial",
  "Prospect",
  "Qualify",
  "Demo",
  "Proposal",
  "Onboard",
  "Accounts",
];

const rejectValidationSchema = Yup.object().shape({
  subject: Yup.string().required("Subject is required"),
  details: Yup.string()
    .min(10, "Reason should be at least 10 characters")
    .max(100, "Reason should be at most 100 characters")
    .required("Details is required"),
});

const getValidationSchema = (stageId: number) => {
  switch (stageId + 1) {
    case 1:
      return Yup.object({
        name: Yup.string().required("Name is required"),
        email: Yup.string()
          .email("Invalid email")
          .required("Email is required"),
        phone: Yup.string()
          .min(10, "Phone number should be 10 digits")
          .required("Phone number is required"),
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
        applicationDemo: Yup.boolean()
          .oneOf([true], "Please confirm application demo")
          .required("Application demo is required"),
        featureExplanation: Yup.boolean()
          .oneOf([true], "Please confirm feature explanation")
          .required("Feature explanation is required")
      });
    case 4:
      return Yup.object({
        finalizeAmount: Yup.number().required("Finalize amount is required"),
        dueDate: Yup.string().required('Due date is required')
      });
    case 5:
      return Yup.object({
        paymentMethod: Yup.string()
          .required("Please select a payment method")
          .oneOf(["cash", "netbanking"], "Invalid payment method"),
      });
    case 6:
      return Yup.object({
        paymentMethod: Yup.string().required("Select a payment method"),
      });
    default:
      return Yup.object();
  }
};

const getFieldsByStage = (
  stageId: number,
  setIsDrawerOpen: (isOpen: boolean) => void,
  reject: boolean,
  setreject: (value: boolean) => void,
  values: any,
  errors: any,
  submitCount: number,
  setFieldValue: (field: string, value: any) => void
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
              setIsDrawerOpen(false);
              setreject(false);
            }}
            className="text-gray-600 hover:text-white hover:bg-[#BF9FFF] rounded-full w-8 h-8 flex items-center justify-center"
          >
            ✕
          </button>
        </div>

        <div className="text-gray-500">
          <div className="w-full pt-6">
            <div className="mb-5">
              <div className="mb-2">
                <label className="text-[16px] text-[#111111] w-[125px] font-medium">
                  Subject
                </label>
              </div>
              <Field
                id="subject"
                name="subject"
                placeholder="Subject"
                className="text-[#808080] w-full bg-[#FAFAFA] border border-gray-300 rounded-md px-4 py-2 mt-1"
              />
              <ErrorMessage
                name="subject"
                component="div"
                className="text-red-500"
              />
            </div>

            <div>
              <div className="mb-2">
                <label className="text-[16px] text-[#111111] w-[125px] font-medium">
                  Details
                </label>
              </div>
              <Field
                as="textarea"
                id="details"
                name="details"
                placeholder="Rejection Details"
                className="bg-[#FAFAFA] row-span-3 text-[#808080] border border-gray-300 rounded-md px-4 py-2 mt-1 w-full h-[150px]"
              />
              <ErrorMessage
                name="details"
                component="div"
                className="text-red-500"
              />
            </div>
          </div>
        </div>
      </>
    );
  }

  switch (stageId + 1) {
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
              <Field 
                name="name"
                className="input w-full border-2 p-2 rounded-xl" 
              />
              <ErrorMessage
                name="name"
                component="div"
                className="text-red-500 pt-2 text-sm"
              />
            </div>
            <div>
              <label className="block text-lg font-medium mb-3">
                Employee Email
              </label>
              <Field
                name="email"
                type="email"
                className="input w-full p-2 rounded-xl"
              />
              <ErrorMessage
                name="email"
                component="div"
                className="text-red-500 pt-2 text-sm"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">
                Employee Phone
              </label>
              <Field name="phone">
                {({ field }: any) => (
                  <input
                    {...field}
                    maxLength={10}
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
                    className="w-full border p-2 rounded-lg border-[#AEAEAE]"
                  />
                )}
              </Field>
              <ErrorMessage
                name="phone"
                component="div"
                className="text-red-500 pt-2 text-sm"
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
        
          <div className="pt-5">
            <span className="text-[#000000] text-[20px] font-poppins">
              Details To Be Filled
            </span>

            <div className="grid grid-cols-1">
              <div className="grid grid-cols-1 w-full pt-10 pb-5 gap-3">
                <span className="text-[#111111] text-lg font-poppins font-medium">
                  Expected Amount
                </span>
                <Field
                  name="expectedAmount"
                  type="string"
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setFieldValue("expectedAmount", e.target.value)
                  }
                  onKeyDown={(e) => {
                    if (!/[0-9]/.test(e.key) && e.key !== 'Backspace' && e.key !== 'Tab') {
                      e.preventDefault();
                    }
                  }}
                  className="w-full md:w-[500px] h-[50px] bg-white rounded-xl px-5 text-[#808080] text-md border border-gray-300"
                  placeholder="Enter Expected Amount"
                />
                <ErrorMessage
                  name="expectedAmount"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>

              <div className="grid grid-cols-1 w-full pb-5 gap-3 pr-5">

                 <label className="block text-md font-medium mb-1">Due Date</label>
              <Field name="expectedDate">
                {({ field, form }: any) => (
                  <DatePicker
                    size="large"
                    value={field.value ? dayjs(field.value) : null}
                    onChange={(date) => {
                      const dateValue = date ? date.format('YYYY-MM-DD') : '';
                      form.setFieldValue(field.name, dateValue);
                      form.setFieldTouched(field.name, true);
                    }}
                    onBlur={() => form.setFieldTouched(field.name, true)}
                    placeholder="Select Due Date"
                    className="input w-full md:w-[500px] h-[50px] placeholder:text-[#AEAEAE] border p-3 rounded-lg"
                    suffixIcon={<CalendarIcon className="text-[#AEAEAE]" />}
                  />
                )}
              </Field>
              <ErrorMessage
                name="expectedDate"
                component="div"
                className="text-red-500 text-sm"
              />
    </div>

              <div className="grid grid-cols-1 w-full pb-5 gap-3">
                <span className="text-[#111111] text-lg font-poppins font-medium">
                  Type Of Business
                </span>
                <Field
                  name="typeofbusiness"
                  type="text"
                  className="w-full md:w-[500px] h-[50px] bg-white rounded-xl px-4 text-[#808080] text-md border border-gray-300"
                  placeholder="Enter type Of business"
                />
                <ErrorMessage
                  name="typeofbusiness"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>

              <div className="grid grid-cols-1 w-full pb-5 gap-3">
                <span className="text-[#111111] text-lg font-poppins font-medium">
                  Confidence Level
                </span>
                <Field name="confidence">
                  {({ field, form }: any) => (
                    <input
                      {...field}
                      type="text"
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                        const value = e.target.value;
                        if (/^\d{0,3}$/.test(value)) {
                          form.setFieldValue("confidence", value);
                        }
                      }}
                      onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => {
                        if (
                          !/[0-9]/.test(e.key) &&
                          e.key !== "Backspace" &&
                          e.key !== "Tab"
                        ) {
                          e.preventDefault();
                        }
                      }}
                      className="w-full md:w-[500px] h-[50px] bg-white rounded-xl px-4 text-[#808080] text-md border border-gray-300"
                      placeholder="Enter confidence level"
                    />
                  )}
                </Field>
                <ErrorMessage
                  name="confidence"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>
            </div>
          </div>
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

            <div className="flex flex-col gap-5">
              <div className="flex flex-row">
                <label className="text-lg font-medium w-[220px]">
                  Application Demo
                </label>
                <Field name="applicationDemo">
                  {({ field, form }: any) => (
                    <Space direction="vertical">
                      <Switch
                        checked={field.value}
                        onChange={(checked) => {
                          form.setFieldValue(field.name, checked);
                          form.setFieldTouched(field.name, true);
                          setTimeout(() => {
                            form.validateField(field.name);
                          }, 0);
                        }}
                        checkedChildren="1"
                        unCheckedChildren="O"
                        className="text-[#BF9FFF] hover:text-white hover:bg-[#BF9FFF] rounded-full"
                      />
                    </Space>
                  )}
                </Field>
              </div>
              <ErrorMessage
                name="applicationDemo"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>

            <div className="flex flex-col gap-5 pb-5">
              <div className="flex flex-row">
                <label className="text-lg font-medium w-[220px]">
                  Features Explanation
                </label>
                <Field name="featureExplanation">
                  {({ field, form }: any) => (
                    <Space direction="vertical">
                      <Switch
                        checked={field.value}
                        onChange={(checked) => {
                          form.setFieldValue(field.name, checked);
                          form.setFieldTouched(field.name, true);
                          setTimeout(() => {
                            form.validateField(field.name);
                          }, 0);
                        }}
                        checkedChildren="1"
                        unCheckedChildren="O"
                        className="text-[#BF9FFF] hover:text-white hover:bg-[#BF9FFF] rounded-full"
                      />
                    </Space>
                  )}
                </Field>
              </div>
              <ErrorMessage
                name="featureExplanation"
                component="div"
                className="text-red-500 text-sm -mt-1"
              />
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

            <div>
              <label className="block text-md font-medium mb-1">
                Finalized Amount
              </label>
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
                className="text-red-500 text-sm pt-3"
              />
            </div>

            <div>
              <label className="block text-md font-medium mb-1">Due Date</label>
              <Field name="dueDate">
                {({ field, form }: any) => (
                  <DatePicker
                    size="large"
                    value={field.value ? dayjs(field.value) : null}
                    onChange={(date) => {
                      const dateValue = date ? date.format('YYYY-MM-DD') : '';
                      form.setFieldValue(field.name, dateValue);
                      form.setFieldTouched(field.name, true);
                    }}
                    onBlur={() => form.setFieldTouched(field.name, true)}
                    placeholder="Select Due Date"
                    className="input w-full placeholder:text-[#AEAEAE] border p-2 rounded-lg"
                    suffixIcon={<CalendarIcon className="text-[#AEAEAE]" />}
                  />
                )}
              </Field>
              <ErrorMessage
                name="dueDate"
                component="div"
                className="text-red-500 text-sm pt-3 "
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
            <div className="flex flex-col py-8 gap-5">
              <label className="flex items-center gap-2">
                <Field type="radio" name="paymentMethod" value="cash" className="hidden peer" />
                <div className="w-5 h-5 rounded-full border-2 border-[#BF9FFF] flex items-center justify-center peer-checked:bg-blue-600">
                  <div className="w-2 h-2 bg-white rounded-full" />
                </div>
                Cash
              </label>
              <label className="flex items-center gap-2">
                <Field type="radio" name="paymentMethod" value="netbanking" className="hidden peer" />
                <div className="w-5 h-5 rounded-3xl border-2 border-[#BF9FFF] flex items-center justify-center peer-checked:bg-blue-600">
                  <div className="w-2 h-2 bg-white rounded-full" />
                </div>
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
    case 7:
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
    expectedAmount: "",
    expectedDate: undefined,
    typeofbusiness: "",
    confidence: "",
    applicationDemo: false,
    featureExplanation: false,
    paymentMethod: "",
    finalizeAmount: "",
    dueDate: undefined,
    subject: "",
    details: "",
  };

  const validationSchema = reject
    ? rejectValidationSchema
    : getValidationSchema(stageId);

  return (
    <div className="relative z-40">
      {isDrawerOpen && (
        <div
          className="fixed inset-0 bg-black/30 backdrop-blur-sm z-30 transition-opacity duration-300"
          onClick={() => setIsDrawerOpen(false)}
        />
      )}
      <div
        className={`fixed top-0 right-0 z-40 h-screen p-6 overflow-y-auto transition-transform transform bg-white shadow-lg ${
          isDrawerOpen ? "translate-x-0" : "translate-x-full"
        } w-[90%] sm:w-[60%] md:w-[40%] lg:w-[30%]`}
      >
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={(values, { resetForm }) => {
            console.log("Submitted Data:", values);
            if (reject) {
              console.log("Rejecting with:", values);
            } else {
              console.log("Submitting with:", values);
              resetForm();
            }
          }}
        >
          {({ 
            handleSubmit, 
            isSubmitting, 
            setErrors, 
            setTouched,
            values,
            errors,
            touched,
            submitCount,
            setFieldValue
          }) => {
            React.useEffect(() => {
              if (!isDrawerOpen) {
                setErrors({});
                setTouched({});
                if (reject) {
                  setreject(false);
                }
              }
            }, [isDrawerOpen, setErrors, setTouched, reject, setreject]);

            return (
              <Form
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    e.preventDefault();
                    handleSubmit();
                  }
                }}
              >
                {getFieldsByStage(
                  stageId, 
                  setIsDrawerOpen, 
                  reject, 
                  setreject,
                  values,
                  errors,
                  submitCount,
                  setFieldValue
                )}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`${
                    reject
                      ? 'bg-red-500 hover:bg-red-600'
                      : 'bg-[#BF9FFF] hover:bg-[#a57fff]'
                  } text-white px-4 py-2 rounded mt-4 disabled:opacity-50`}
                >
                  {isSubmitting
                    ? 'Submitting...'
                    : reject
                      ? 'Reject Lead'
                      : 'Submit'}
                </button>
              </Form>
            );
          }}
        </Formik>
      </div>
    </div>
  );
};

export default AddedLead;