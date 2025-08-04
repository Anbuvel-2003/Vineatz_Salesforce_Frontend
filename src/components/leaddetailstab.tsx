import { ErrorMessage, Field, Formik, FormikHelpers } from "formik";
import React, { useEffect, useState } from "react";
import { GoPlus } from "react-icons/go";
import { Form } from "formik";
import * as yup from "yup";
import { authApi } from "@/config/fetchData";
import { toast } from "react-toastify";

const tabs = [
  { id: 0, label: "Initial" },
  { id: 1, label: "Prospect" },
  { id: 2, label: "Qualify" },
  { id: 3, label: "Demo" },
  { id: 4, label: "Proposal" },
  { id: 5, label: "Onboard" },
  { id: 6, label: "Account" },
  { id: 8, label: "Notes" },
];
interface TabComponentProps {
  initialTabId?: number;
  leadid: string;
  state: any;
}
const TabComponent: React.FC<TabComponentProps> = ({
  initialTabId = 1,
  leadid,
  state,
}) => {
  const [activeTab, setActiveTab] = useState<number>(8);
  interface FormValues {
    title: string;
    message: string;
  }
  const initialValues: FormValues = {
    title: "",
    message: "",
  };
  const validationSchema = yup.object().shape({
    title: yup.string().required("Title is required"),
    message: yup.string().required("Message is required"),
  });

  const renderContent = () => {
    const [showTextarea, setShowTextarea] = useState(false);

    const [noteInput, setNoteInput] = useState("");
    const [noteTitle, setNoteTitle] = useState("");
    const [notes, setNotes] = useState<any>([]);
    
    useEffect(() => {
      getnotes();
    }, []);

    const getnotes = async () => {
      try {
        console.log("leadid", state);
        const response = await authApi.GetNotes(state?._id);
        console.log("response", response);
        if (response?.success) {
          console.log("valueee:", response.data);
          const sortedNotes = response?.data?.Notes?.slice().sort(
            (a: any, b: any) => {
              return (
                new Date(b.createdAt).getTime() -
                new Date(a.createdAt).getTime()
              );
            }
          );
          console.log("checking data", sortedNotes);

          setNotes(sortedNotes);
        } else {
          console.log("Failed to fetch notifications");
        }
      } catch (error) {
        console.log(error, "Error Message");
      }
    };

    switch (activeTab) {
      case 0:
        return (
          <div className="grid grid-cols-2 ">
            <div className=" p-4">
              <h1 className="text-[32px] font-semibold font-poppins text-[#BF9FFF] mb-4">
                Personal Details
              </h1>
              <div className=" w-1/2 items-center mb-3">
                <h2 className="text-[20px] font-semibold font-poppins text-[#BF9FFF] mb-2 ">
                  Name
                </h2>
                <p className="text-[17px] font-semibold font-poppins text-[#BDBDBD]">
                  {state?.Name}
                </p>
              </div>
              <div className=" w-1/2 items-center mb-3">
                <h2 className="text-[20px] font-semibold font-poppins text-[#BF9FFF] mb-2 ">
                  Email id
                </h2>
                <p className="text-[17px] font-semibold font-poppins text-[#BDBDBD]">
                  {state?.Email}
                </p>
              </div>
              <div className=" w-1/2 items-center mb-3">
                <h2 className="text-[20px] font-semibold font-poppins text-[#BF9FFF] mb-2">
                  Contact Number
                </h2>
                <p className="text-[17px] font-semibold font-poppins text-[#BDBDBD]">
                  {state?.Mobilenumber}
                </p>
              </div>
              <div className=" w-1/2 items-center mb-3">
                <h2 className="text-[20px] font-semibold font-poppins text-[#BF9FFF] mb-2 ">
                  Address
                </h2>
                <p className="text-[17px] font-semibold font-poppins text-[#BDBDBD]">
                  {state?.Address}
                </p>
              </div>
            </div>
            <div className=" p-4">
              <h1 className="text-[32px] font-semibold font-poppins text-[#BF9FFF] mb-4">
                Organization Details
              </h1>
              <div className=" w-1/2 items-center mb-3">
                <h2 className="text-[20px] font-semibold font-poppins text-[#BF9FFF] mb-2 ">
                  Company Name
                </h2>
                <p className="text-[17px] font-semibold font-poppins text-[#BDBDBD]">
                  {state?.Company_Name}
                </p>
              </div>
              <div className=" w-1/2 items-center mb-3">
                <h2 className="text-[20px] font-semibold font-poppins text-[#BF9FFF] mb-2 ">
                  Registered Certificate Number
                </h2>
                <p className="text-[17px] font-semibold font-poppins text-[#BDBDBD]">
                  {state?.Register_Certificate_Number}
                </p>
              </div>
              <div className=" w-1/2 items-center mb-3">
                <h2 className="text-[20px] font-semibold font-poppins text-[#BF9FFF] mb-2">
                  GST Number
                </h2>
                <p className="text-[17px] font-semibold font-poppins text-[#BDBDBD]">
                  {state?.GST}
                </p>
              </div>
              {/* <div className=" w-1/2 items-center mb-3">
                <h2 className="text-[20px] font-semibold font-poppins text-[#BF9FFF] mb-2 ">
                  Financial
                </h2>
                <p className="text-[17px] font-semibold font-poppins text-[#BDBDBD]">
                  {state?.Financial}
                </p>
              </div> */}
            </div>
          </div>
        );
      case 1:
        return (
          <div>
            <div className="grid grid-cols-3 ">
            
              <div className=" p-4">
                {/* <h1 className="text-[32px] font-semibold font-poppins text-[#BF9FFF] mb-4">
                 Prospect Details
                </h1> */}
                <div className=" w-1/2 items-center mb-3">
                  <h2 className="text-[20px] font-semibold font-poppins text-[#BF9FFF] mb-2 ">
                    Employee Name
                  </h2>
                  <p className="text-[17px] font-semibold font-poppins text-[#BDBDBD]">
                    {state?.details[0]?.employeeName}
                  </p>
                </div>
                <div className=" w-1/2 items-center mb-3">
                  <h2 className="text-[20px] font-semibold font-poppins text-[#BF9FFF] mb-2 ">
                    Employee emailid
                  </h2>
                  <p className="text-[17px] font-semibold font-poppins text-[#BDBDBD]">
                    {state?.details[0]?.employeeId}
                  </p>
                </div>
                <div className=" w-1/2 items-center mb-3">
                  <h2 className="text-[20px] font-semibold font-poppins text-[#BF9FFF] mb-2 ">
                    Employee Mobile Number
                  </h2>
                  <p className="text-[17px] font-semibold font-poppins text-[#BDBDBD]">
                    {state?.details[0]?.employeeAddress}
                  </p>
                </div>
              </div>
            </div>
          </div>
        );
      case 2:
        return (
          <div>
            <div className=" p-4">
              {/* <h1 className="text-[32px] font-semibold font-poppins text-[#BF9FFF] mb-4">
                Qualify Details
              </h1> */}
              <div className=" w-1/2 items-center mb-3">
                <h2 className="text-[20px] font-semibold font-poppins text-[#BF9FFF] mb-2 ">
                  Expected Amount
                </h2>
                <p className="text-[17px] font-semibold font-poppins text-[#BDBDBD]">
                  {`₹${state?.details[1]?.expectedAmount}`}
                </p>
              </div>
              <div className=" w-1/2 items-center mb-3">
                <h2 className="text-[20px] font-semibold font-poppins text-[#BF9FFF] mb-2 ">
                  Type of Business
                </h2>
                <p className="text-[17px] font-semibold font-poppins text-[#BDBDBD]">
                  {state?.details[1]?.typeOfBusiness}
                </p>
              </div>
              <div className=" w-1/2 items-center mb-3">
                <h2 className="text-[20px] font-semibold font-poppins text-[#BF9FFF] mb-2">
                  Expected Date
                </h2>
                <p className="text-[17px] font-semibold font-poppins text-[#BDBDBD]">
                  {new Date(state?.details[1]?.expectedDate).toLocaleDateString(
                    "en-GB",
                    {
                      day: "2-digit",
                      month: "short",
                      year: "numeric",
                    }
                  )}
                </p>
              </div>
              <div className=" w-1/2 items-center mb-3">
                <h2 className="text-[20px] font-semibold font-poppins text-[#BF9FFF] mb-2 ">
                  Confidence Level{" "}
                </h2>
                <p className="text-[17px] font-semibold font-poppins text-[#BDBDBD]">
                  {state?.details[1]?.confidenceLevel}
                </p>
              </div>
            </div>
          </div>
        );
      case 3:
        return (
          <div>
            <div className=" p-4">
              {/* <h1 className="text-[32px] font-semibold font-poppins text-[#BF9FFF] mb-4">
                Demo Details
              </h1> */}
              <div className=" w-1/2 items-center mb-3">
                <h2 className="text-[20px] font-semibold font-poppins text-[#BF9FFF] mb-2 ">
                  Application Demo
                </h2>
                <p className="text-[17px] font-semibold font-poppins text-[#BDBDBD]">
                  {state?.details[2]?.applicationDemo ? "Done" : "Pending"}
                </p>
              </div>
              <div className=" w-1/2 items-center mb-3">
                <h2 className="text-[20px] font-semibold font-poppins text-[#BF9FFF] mb-2 ">
                  Feature Explanation
                </h2>
                <p className="text-[17px] font-semibold font-poppins text-[#BDBDBD]">
                  {state?.details[2]?.featureExplanation ? "Done" : "Pending"}
                </p>
              </div>
            </div>
          </div>
        );
      case 4:
        return (
          <div>
            <div className=" p-4">
              {/* <h1 className="text-[32px] font-semibold font-poppins text-[#BF9FFF] mb-4">
                Proposal Details
              </h1> */}
              <div className=" w-1/2 items-center mb-3">
                <h2 className="text-[20px] font-semibold font-poppins text-[#BF9FFF] mb-2 ">
                  Finalized Amount
                </h2>
                <p className="text-[17px] font-semibold font-poppins text-[#BDBDBD]">
                  {`₹${state?.details[3]?.finalAmount}`}
                </p>
              </div>
              <div className=" w-1/2 items-center mb-3">
                <h2 className="text-[20px] font-semibold font-poppins text-[#BF9FFF] mb-2">
                  Due Date
                </h2>
                <p className="text-[17px] font-semibold font-poppins text-[#BDBDBD]">
                  {new Date(state?.details[3]?.finalDate).toLocaleDateString(
                    "en-GB",
                    {
                      day: "2-digit",
                      month: "short",
                      year: "numeric",
                    }
                  )}
                </p>
              </div>
            </div>
          </div>
        );
      case 5:
        return (
          <div>
            <div className=" p-4">
              {/* <h1 className="text-[32px] font-semibold font-poppins text-[#BF9FFF] mb-4">
                Onboard Details
              </h1> */}
              <div className=" w-1/2 items-center mb-3">
                <h2 className="text-[20px] font-semibold font-poppins text-[#BF9FFF] mb-2 ">
                  Mode of Payment
                </h2>
                <p className="text-[17px] font-semibold font-poppins text-[#BDBDBD]">
                  {state?.details[4]?.paymentType !== true
                    ? "Net Banking"
                    : "cash"}
                </p>
              </div>
            </div>
          </div>
        );
      case 7:
        return <div>🕒 Activity content goes here</div>;
      case 8:
        return (
          <div className="p-4">
            <div className="flex justify-between items-center mb-3">
              <h1 className="text-[32px] font-semibold font-poppins text-[#BF9FFF] mb-4">
                Notes
              </h1>
              <div
                className="flex items-center gap-2 bg-[#BF9FFF] px-4 py-2 rounded-md cursor-pointer"
                onClick={() => setShowTextarea(true)}
              >
                <GoPlus size={24} className="text-white" />
              </div>
            </div>

            {/* Display existing notes */}
            <div className="space-y-4 mb-4">
              {showTextarea && (
                <Formik
                  initialValues={initialValues}
                  validationSchema={validationSchema}
                  onSubmit={async (values, { resetForm }) => {
                    const newNote = {
                      title: values?.title?.trim(),
                      message: values?.message?.trim(),
                      timestamp: new Date().toLocaleString("en-IN", {
                        dateStyle: "medium",
                        timeStyle: "short",
                      }),
                    };
                    const Addnotes = await authApi.AddNotes(state?._id, {
                      subject: values?.title?.trim(),
                      note: values?.message?.trim(),
                    });
                    if (Addnotes.success) {
                      toast?.success(Addnotes?.message);
                      const sortedNotes = Addnotes?.data?.Notes?.slice().sort(
                        (a: any, b: any) => {
                          return (
                            new Date(b.createdAt).getTime() -
                            new Date(a.createdAt).getTime()
                          );
                        }
                      );

                      setNotes(sortedNotes);
                    } else {
                      toast?.error(Addnotes?.message);
                    }
                    resetForm();
                    setShowTextarea(false);
                  }}
                >
                  {({ values, handleChange, handleBlur, isSubmitting }) => (
                    <Form>
                      <div className="w-full mb-3 space-y-2">
                        <Field
                          name="title"
                          className="w-full p-2 border border-gray-300 rounded-md text-[18px] bg-[#FAFAFA] text-[#404040]"
                          placeholder="Enter note title..."
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.title}
                        />
                        <ErrorMessage
                          name="title"
                          component="div"
                          className="text-red-500 text-sm"
                        />
                        <Field
                          as="textarea"
                          name="message"
                          className="w-full h-[150px] p-2 border border-gray-300 rounded-md text-[18px] bg-[#FAFAFA] text-[#404040]"
                          placeholder="Enter note message..."
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.message}
                        />
                        <ErrorMessage
                          name="message"
                          component="div"
                          className="text-red-500 text-sm"
                        />
                        <div className="flex gap-2">
                          <button
                            type="submit"
                            disabled={isSubmitting}
                            className="px-4 py-2 bg-[#BF9FFF] text-white rounded-md"
                          >
                            Save Note
                          </button>
                          <button
                            type="button"
                            className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md"
                            onClick={() => setShowTextarea(false)}
                          >
                            Cancel
                          </button>
                        </div>
                      </div>
                    </Form>
                  )}
                </Formik>
              )}
              {notes?.map((note: any, index: number) => (
                <div
                  key={note?._id}
                  className="flex justify-between w-full bg-[#F1F1F1] text-[#404040] border border-gray-300 rounded-md px-4 py-3 relative"
                >
                  <div>
                    <div className="font-semibold text-lg text-[#333] mb-1">
                      {note?.subject}
                    </div>
                    <div className="text-[18px] mb-2">{note?.note}</div>
                    <div className="text-sm text-gray-500">
                      {note?.createdAt &&
                        new Date(note.createdAt).toLocaleString("en-IN", {
                          dateStyle: "medium",
                          timeStyle: "short",
                        })}
                    </div>
                  </div>
                  <div className="place-self-center">
                    <button
                      className="bg-white border rounded-lg text-red-500 font-bold hover:bg-red-500 hover:text-white p-3 text-sm"
                      onClick={async () => {
                        const deleteapi = await authApi.Deletenotes(
                          state?._id,
                          note?._id
                        );
                        if (deleteapi.success) {
                          toast?.success(deleteapi?.message);
                          const sortedNotes =
                            deleteapi?.data?.Notes?.slice().sort(
                              (a: any, b: any) => {
                                return (
                                  new Date(b.createdAt).getTime() -
                                  new Date(a.createdAt).getTime()
                                );
                              }
                            );
                          setNotes(sortedNotes);
                        } else {
                          toast?.error(deleteapi?.message);
                        }
                      }}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      default:
        return null;
    }
  };
  return (
    <div className="w-full mt-10 ">
      {/* Top Tabs */}
      <div className="flex border-b border-gray-200">
        {tabs
          .filter((tab) => tab.id < initialTabId || tab.label === "Notes")
          .map((tab) => {
            console.log(tab.id);

            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 text-sm font-medium border-b-2 transition-all duration-200 ${
                  activeTab === tab.id
                    ? "border-purple-600 text-purple-600"
                    : "border-transparent text-gray-500 hover:text-purple-600"
                }`}
              >
                {tab.label}
              </button>
            );
          })}
      </div>
      {/* Tab Content */}
      <div className="p-4 bg-white border border-t-0 rounded-b-lg shadow-sm">
        {renderContent()}
      </div>
    </div>
  );
};

export default TabComponent;
