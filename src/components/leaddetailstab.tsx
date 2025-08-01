import { Formik, FormikHelpers } from "formik";
import React, { useState } from "react";
import { GoPlus } from "react-icons/go";
import { Form } from "react-router-dom";
import * as yup from "yup";

const tabs = [
  { id: 1, label: "Initial" },
  { id: 2, label: "Prospect" },
  { id: 3, label: "Qualify" },
  { id: 4, label: "Demo" },
  { id: 5, label: "Proposal" },
  { id: 6, label: "Onboard" },
  { id: 7, label: "Account" },
  { id: 8, label: "Notes" },
];
interface TabComponentProps {
  initialTabId?: number;
}
const TabComponent: React.FC<TabComponentProps> = ({ initialTabId = 1 }) => {
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
  })
  
  const renderContent = () => {
    const [showTextarea, setShowTextarea] = useState(false);
    const [noteInput, setNoteInput] = useState("");
    const [noteTitle, setNoteTitle] = useState("");
    const [notes, setNotes] = useState<
      { title: string; message: string; timestamp: string }[]
    >([]);
    switch (activeTab) {
      case 1:
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
                  John
                </p>
              </div>
              <div className=" w-1/2 items-center mb-3">
                <h2 className="text-[20px] font-semibold font-poppins text-[#BF9FFF] mb-2 ">
                  Email id
                </h2>
                <p className="text-[17px] font-semibold font-poppins text-[#BDBDBD]">
                  John123@gmail.com
                </p>
              </div>
              <div className=" w-1/2 items-center mb-3">
                <h2 className="text-[20px] font-semibold font-poppins text-[#BF9FFF] mb-2">
                  Contact Number
                </h2>
                <p className="text-[17px] font-semibold font-poppins text-[#BDBDBD]">
                  9874563210
                </p>
              </div>
              <div className=" w-1/2 items-center mb-3">
                <h2 className="text-[20px] font-semibold font-poppins text-[#BF9FFF] mb-2 ">
                  Message
                </h2>
                <p className="text-[17px] font-semibold font-poppins text-[#BDBDBD]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
                  aut asperiores incidunt facilis veritatis assumenda mollitia
                  eveniet impedit consequatur enim quo architecto ut excepturi
                  eaque, at vitae, quibusdam reiciendis minima!
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
                  John
                </p>
              </div>
              <div className=" w-1/2 items-center mb-3">
                <h2 className="text-[20px] font-semibold font-poppins text-[#BF9FFF] mb-2 ">
                  Registered Certificate Number
                </h2>
                <p className="text-[17px] font-semibold font-poppins text-[#BDBDBD]">
                  6544654465132465
                </p>
              </div>
              <div className=" w-1/2 items-center mb-3">
                <h2 className="text-[20px] font-semibold font-poppins text-[#BF9FFF] mb-2">
                  GST Number
                </h2>
                <p className="text-[17px] font-semibold font-poppins text-[#BDBDBD]">
                  9874563254510
                </p>
              </div>
              <div className=" w-1/2 items-center mb-3">
                <h2 className="text-[20px] font-semibold font-poppins text-[#BF9FFF] mb-2 ">
                  Financial
                </h2>
                <p className="text-[17px] font-semibold font-poppins text-[#BDBDBD]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
                  aut asperiores incidunt facilis veritatis assumenda mollitia
                  eveniet impedit consequatur enim quo architecto ut excepturi
                  eaque, at vitae, quibusdam reiciendis minima!
                </p>
              </div>
            </div>
          </div>
        );
      case 2:
        return (
          <div>
            <div className="grid grid-cols-3 ">
              <div className=" p-4 ">
                <h1 className="text-[32px] font-semibold font-poppins text-[#BF9FFF] mb-4">
                  Personal Details
                </h1>
                <div className=" w-1/2 items-center mb-3">
                  <h2 className="text-[20px] font-semibold font-poppins text-[#BF9FFF] mb-2 ">
                    Name
                  </h2>
                  <p className="text-[17px] font-semibold font-poppins text-[#BDBDBD]">
                    John
                  </p>
                </div>
                <div className=" w-1/2 items-center mb-3">
                  <h2 className="text-[20px] font-semibold font-poppins text-[#BF9FFF] mb-2 ">
                    Email id
                  </h2>
                  <p className="text-[17px] font-semibold font-poppins text-[#BDBDBD]">
                    John123@gmail.com
                  </p>
                </div>
                <div className=" w-1/2 items-center mb-3">
                  <h2 className="text-[20px] font-semibold font-poppins text-[#BF9FFF] mb-2">
                    Contact Number
                  </h2>
                  <p className="text-[17px] font-semibold font-poppins text-[#BDBDBD]">
                    9874563210
                  </p>
                </div>
                <div className=" w-3/4 items-center mb-3">
                  <h2 className="text-[20px] font-semibold font-poppins text-[#BF9FFF] mb-2 ">
                    Message
                  </h2>
                  <p className="text-[17px] font-semibold font-poppins text-[#BDBDBD]">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Vero aut asperiores incidunt facilis veritatis assumenda
                    mollitia eveniet impedit consequatur enim quo architecto ut
                    excepturi eaque, at vitae, quibusdam reiciendis minima!
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
                    John
                  </p>
                </div>
                <div className=" items-center mb-3 w-full ">
                  <h2 className="text-[20px] font-semibold font-poppins text-[#BF9FFF] mb-2 ">
                    Registered Certificate Number
                  </h2>
                  <p className="text-[17px] font-semibold font-poppins text-[#BDBDBD]">
                    6544654465132465
                  </p>
                </div>
                <div className=" w-1/2 items-center mb-3">
                  <h2 className="text-[20px] font-semibold font-poppins text-[#BF9FFF] mb-2">
                    GST Number
                  </h2>
                  <p className="text-[17px] font-semibold font-poppins text-[#BDBDBD]">
                    9874563254510
                  </p>
                </div>
                <div className=" w-3/4 items-center mb-3">
                  <h2 className="text-[20px] font-semibold font-poppins text-[#BF9FFF] mb-2 ">
                    Financial
                  </h2>
                  <p className="text-[17px] font-semibold font-poppins text-[#BDBDBD]">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Vero aut asperiores incidunt facilis veritatis assumenda
                  </p>
                </div>
              </div>
              <div className=" p-4">
                <h1 className="text-[32px] font-semibold font-poppins text-[#BF9FFF] mb-4">
                  Employee Details
                </h1>
                <div className=" w-1/2 items-center mb-3">
                  <h2 className="text-[20px] font-semibold font-poppins text-[#BF9FFF] mb-2 ">
                    Employee Name
                  </h2>
                  <p className="text-[17px] font-semibold font-poppins text-[#BDBDBD]">
                    John
                  </p>
                </div>
                <div className=" w-1/2 items-center mb-3">
                  <h2 className="text-[20px] font-semibold font-poppins text-[#BF9FFF] mb-2 ">
                    Employee id
                  </h2>
                  <p className="text-[17px] font-semibold font-poppins text-[#BDBDBD]">
                    001
                  </p>
                </div>
              </div>
            </div>
          </div>
        );
      case 3:
        return (
          <div>
            <div className=" p-4">
              <h1 className="text-[32px] font-semibold font-poppins text-[#BF9FFF] mb-4">
                Prospect Details
              </h1>
              <div className=" w-1/2 items-center mb-3">
                <h2 className="text-[20px] font-semibold font-poppins text-[#BF9FFF] mb-2 ">
                  Expected Amount
                </h2>
                <p className="text-[17px] font-semibold font-poppins text-[#BDBDBD]">
                  &#8377;1,00,000
                </p>
              </div>
              <div className=" w-1/2 items-center mb-3">
                <h2 className="text-[20px] font-semibold font-poppins text-[#BF9FFF] mb-2 ">
                  Type of Business
                </h2>
                <p className="text-[17px] font-semibold font-poppins text-[#BDBDBD]">
                  Marketing
                </p>
              </div>
              <div className=" w-1/2 items-center mb-3">
                <h2 className="text-[20px] font-semibold font-poppins text-[#BF9FFF] mb-2">
                  Expected Date
                </h2>
                <p className="text-[17px] font-semibold font-poppins text-[#BDBDBD]">
                  12/12/2023
                </p>
              </div>
              <div className=" w-1/2 items-center mb-3">
                <h2 className="text-[20px] font-semibold font-poppins text-[#BF9FFF] mb-2 ">
                  Confidence Level{" "}
                </h2>
                <p className="text-[17px] font-semibold font-poppins text-[#BDBDBD]">
                  90%
                </p>
              </div>
            </div>
          </div>
        );
      case 4:
        return (
          <div>
            <div className=" p-4">
              <h1 className="text-[32px] font-semibold font-poppins text-[#BF9FFF] mb-4">
                Demo Details
              </h1>
              <div className=" w-1/2 items-center mb-3">
                <h2 className="text-[20px] font-semibold font-poppins text-[#BF9FFF] mb-2 ">
                  Application Demo
                </h2>
                <p className="text-[17px] font-semibold font-poppins text-[#BDBDBD]">
                  Done
                </p>
              </div>
              <div className=" w-1/2 items-center mb-3">
                <h2 className="text-[20px] font-semibold font-poppins text-[#BF9FFF] mb-2 ">
                  Feature Explanation
                </h2>
                <p className="text-[17px] font-semibold font-poppins text-[#BDBDBD]">
                  In Progress
                </p>
              </div>
            </div>
          </div>
        );
      case 5:
        return (
          <div>
            <div className=" p-4">
              <h1 className="text-[32px] font-semibold font-poppins text-[#BF9FFF] mb-4">
                Proposal Details
              </h1>
              <div className=" w-1/2 items-center mb-3">
                <h2 className="text-[20px] font-semibold font-poppins text-[#BF9FFF] mb-2 ">
                  Finalized Amount
                </h2>
                <p className="text-[17px] font-semibold font-poppins text-[#BDBDBD]">
                  &#8377;1,00,000
                </p>
              </div>
              <div className=" w-1/2 items-center mb-3">
                <h2 className="text-[20px] font-semibold font-poppins text-[#BF9FFF] mb-2">
                  Due Date
                </h2>
                <p className="text-[17px] font-semibold font-poppins text-[#BDBDBD]">
                  12/12/2023
                </p>
              </div>
            </div>
          </div>
        );
      case 6:
        return (
          <div>
            <div className=" p-4">
              <h1 className="text-[32px] font-semibold font-poppins text-[#BF9FFF] mb-4">
                Onboard Details
              </h1>
              <div className=" w-1/2 items-center mb-3">
                <h2 className="text-[20px] font-semibold font-poppins text-[#BF9FFF] mb-2 ">
                  Mode of Payment
                </h2>
                <p className="text-[17px] font-semibold font-poppins text-[#BDBDBD]">
                  Net Banking
                </p>
              </div>
            </div>
          </div>
        );
      case 7:
        return <div>🕒 Activity content goes here</div>;
      case 8:
        function handleSubmit(values: FormValues, formikHelpers: FormikHelpers<FormValues>): void | Promise<any> {
          throw new Error("Function not implemented.");
        }

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

            {/* Display notes - latest first */}
            <div className="space-y-4 mb-4">
              {notes
                .slice()
                .reverse()
                .map((note, index) => (
                  <div
                    key={index}
                    className="flex justify-between w-full bg-[#F1F1F1] text-[#404040] border border-gray-300 rounded-md px-4 py-3 relative"
                  >
                    <div>
                      <div className="font-semibold text-lg text-[#333] mb-1">
                        {note.title}
                      </div>
                      <div className="text-[18px] mb-2">{note.message}</div>
                      <div className="text-sm text-gray-500">
                        {note.timestamp}
                      </div>
                    </div>
                    <div className="place-self-center ">
                      <button
                        className=" bg-white  text-center  border rounded-lg text-red-500 font-bold hover:bg-red-500 hover:text-white p-3 text-sm"
                        onClick={() => {
                          const newNotes = [...notes];
                          newNotes.splice(notes.length - 1 - index, 1); // reverse index
                          setNotes(newNotes);
                        }}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                ))}
            </div>
                  
            {/* Add new note */}
            {showTextarea && (
                <Formik
                      initialValues={initialValues}
                      onSubmit={handleSubmit}
                      validationSchema={validationSchema}
                    >
                      {({ values, setFieldValue }) => (
                        <Form>
              <div className="w-full mb-3 space-y-2">
                <input
                  className="w-full p-2 border border-gray-300 rounded-md text-[18px] bg-[#FAFAFA] text-[#404040]"
                  placeholder="Enter note title..."
                  value={noteTitle}
                  onChange={(e) => setNoteTitle(e.target.value)}
                />
                <textarea
                  className="w-full h-[150px] p-2 border border-gray-300 rounded-md text-[18px] bg-[#FAFAFA] text-[#404040]"
                  placeholder="Enter note message..."
                  value={noteInput}
                  onChange={(e) => setNoteInput(e.target.value)}
                />
                <button
                  className="px-4 py-2 bg-[#BF9FFF] text-white rounded-md"
                  onClick={() => {
                    if (noteTitle.trim() && noteInput.trim()) {
                      const newNote = {
                        title: noteTitle.trim(),
                        message: noteInput.trim(),
                        timestamp: new Date().toLocaleString("en-IN", {
                          dateStyle: "medium",
                          timeStyle: "short",
                        }),
                      };
                      setNotes((prev) => [...prev, newNote]);
                      setNoteTitle("");
                      setNoteInput("");
                      setShowTextarea(false);
                    }
                  }}
                >
                  Save Note
                </button>
              </div>
              </Form>
                      )}
                    </Formik>
            )}
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
        .filter((tab) => tab.id < initialTabId || tab.label === "Notes" )
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
