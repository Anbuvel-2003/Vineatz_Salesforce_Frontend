import React, { useEffect, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { authApi, Teampayload } from "@/config/fetchData";
import { toast } from "react-toastify";

// ---------------- Types ----------------
interface FormValues {
  teamName: string;
  teamDescription: string;
  teamLead: string;
  teamMembers: string[]; // 👈 step 2
}

// ---------------- Initial Values ----------------
const initialValues: FormValues = {
  teamName: "",
  teamDescription: "",
  teamLead: "",
  teamMembers: [],
};

// ---------------- Validation ----------------
const step1Schema = Yup.object().shape({
  teamName: Yup.string().required("Team Name is required"),
  teamDescription: Yup.string().required("Team Description is required"),
  teamLead: Yup.string().required("Please select a Team Lead"),
});

const step2Schema = Yup.object().shape({
  teamMembers: Yup.array()
    .min(1, "Select at least 1 employee")
    .required("Employees required"),
});

// ---------------- Component ----------------
const Addteam = () => {
  const navigate = useNavigate();
  const [employeelist, setEmployeelist] = useState<
    {
      _id: string;
      Employee_Name: string;
      Employee_Email: string;
      Employee_Mobilenumber: string;
      Employee_Id: string;
      Role: string;
      TeamId: string;
    }[]
  >([]);
  const [search, setSearch] = useState("");

  const [step, setStep] = useState(1);

  useEffect(() => {
    getallemployeelist();
  }, []);

  const getallemployeelist = async () => {
    try {
      const res = await authApi?.Gettotalemployee();
      if (res?.data) {
        setEmployeelist(res.data);
      }
    } catch (error) {
      console.log("error in getallemployee", error);
    }
  };

  const handleSubmit = async (values: FormValues) => {
    if (step === 1) {
      setStep(2);
    } else {
      const teamLeadData = employeelist.find(
        (emp) => emp._id === values.teamLead
      );

      if (!teamLeadData) {
        toast.error("Please select a valid team lead");
        return;
      }

      const finalData: Teampayload = {
        Team_Name: values.teamName,
        Team_Description: values.teamDescription,
        Teamlead_Id: teamLeadData._id, // ✅ safe string
        Teamleadname: teamLeadData.Employee_Name, // ✅ safe string
        Teammembers_ID: values.teamMembers.map((id) => id),
      };

      await authApi.Createteam(finalData);
      toast.success("Team Created Successfully!");
      navigate("/teamlist");
    }
  };

  return (
    <div className="bg-[#FDFAFE] w-full min-h-screen px-20">
      <p className="text-black text-[18px] font-semibold py-6">Create Team</p>

      <Formik
        initialValues={initialValues}
        validationSchema={step === 1 ? step1Schema : step2Schema}
        onSubmit={handleSubmit}
      >
        {({ values, setFieldValue }) => (
          <Form className="min-w-full bg-white rounded-xl px-16 pb-8 shadow-xl">
            {step === 1 ? (
              <>
                <Section title="Team Details" />
                <div className="grid grid-cols-2 gap-y-4 gap-x-10 px-5">
                  <div>
                    <InputField
                      name="teamName"
                      icon={<CgProfile size={24} />}
                      placeholder="Team Name"
                    />
                    <InputField
                      name="teamDescription"
                      icon={<CgProfile size={24} />}
                      placeholder="Team Description"
                    />
                  </div>
                  <div>
                    <DropdownField
                      name="teamLead"
                      label="Team Lead"
                      options={employeelist}
                    />
                  </div>
                </div>
              </>
            ) : (
              <>
                {/* Step 2: Assign Employees */}
                <Section title="Assign Employees" />

                <div className="px-5">
                  {/* 🔍 Search Bar */}
                  <input
                    type="text"
                    placeholder="Search employees..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="mb-4 w-full px-3 py-2 border border-[#BF9FFF] rounded-xl text-[#AD46FF] font-poppins focus:outline-none"
                  />

                  <table className="w-full border border-gray-200 rounded-lg">
                    <thead className="bg-[#F3EFFF]">
                      <tr>
                        <th className="p-2 text-left">Select</th>
                        <th className="p-2 text-left">Employee Name</th>
                        <th className="p-2 text-left">ID</th>
                        <th className="p-2 text-left">Mobile Number</th>
                      </tr>
                    </thead>
                    <tbody>
                      {employeelist.filter(
                        (emp) =>
                          emp.Role === "employee" &&
                          !emp.TeamId &&
                          emp._id !== values.teamLead &&
                          // ✅ only employees without team
                          (emp.Employee_Name.toLowerCase().includes(
                            search.toLowerCase()
                          ) ||
                            emp.Employee_Email?.toLowerCase().includes(
                              search.toLowerCase()
                            ) ||
                            emp.Employee_Id?.toLowerCase().includes(
                              search.toLowerCase()
                            ) ||
                            emp.Employee_Mobilenumber?.toLowerCase().includes(
                              search.toLowerCase()
                            ))
                      ).length === 0 ? (
                        <tr>
                          <td
                            colSpan={4}
                            className="p-4 text-center text-gray-500"
                          >
                            🚨 No employees found. Please create an employee
                            first.<span className="text-[#BF9FFF] cursor-pointer" onClick={()=>{
                              navigate('/employeelist')
                            }}> Create employee</span>
                          </td>
                        </tr>
                      ) : (
                        employeelist
                          .filter(
                            (emp) =>
                              emp.Role === "employee" &&
                              !emp.TeamId &&
                              emp._id !== values.teamLead &&
                              (emp.Employee_Name.toLowerCase().includes(
                                search.toLowerCase()
                              ) ||
                                emp.Employee_Email?.toLowerCase().includes(
                                  search.toLowerCase()
                                ) ||
                                emp.Employee_Id?.toLowerCase().includes(
                                  search.toLowerCase()
                                ) ||
                                emp.Employee_Mobilenumber?.toLowerCase().includes(
                                  search.toLowerCase()
                                ))
                          )
                          .map((emp) => (
                            <tr key={emp._id} className="border-t">
                              <td className="p-2">
                                <input
                                  type="checkbox"
                                  value={emp._id}
                                  checked={values.teamMembers.includes(emp._id)}
                                  onChange={(e) => {
                                    if (e.target.checked) {
                                      setFieldValue("teamMembers", [
                                        ...values.teamMembers,
                                        emp._id,
                                      ]);
                                    } else {
                                      setFieldValue(
                                        "teamMembers",
                                        values.teamMembers.filter(
                                          (id) => id !== emp._id
                                        )
                                      );
                                    }
                                  }}
                                />
                              </td>
                              <td className="p-2">{emp.Employee_Name}</td>
                              <td className="p-2">{emp.Employee_Id}</td>
                              <td className="p-2">
                                {emp.Employee_Mobilenumber}
                              </td>
                            </tr>
                          ))
                      )}
                    </tbody>
                  </table>

                  <ErrorMessage
                    name="teamMembers"
                    component="div"
                    className="text-red-500 text-sm mt-2"
                  />
                </div>
              </>
            )}

            {/* Submit Button */}
            <div className="px-5 pt-6 ">
              <button
                type="submit"
                className="bg-[#BF9FFF] text-white px-6 py-2 rounded-lg hover:bg-[#a982ff] font-medium"
              >
                {step === 1
                  ? "Next"
                  : employeelist?.length == 0
                  ? "Back"
                  : "Create Team"}
              </button>
              {step == 1 ? null : (
                <button
                  type="submit"
                  className="bg-[#BF9FFF] text-white px-6 py-2 !ml-5 rounded-lg hover:bg-[#a982ff] font-medium"
                  onClick={()=>{
                    setStep(1);
                  }}
                >
                  back
                </button>
              )}
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

// ---------------- Section Title ----------------
const Section = ({ title }: { title: string }) => (
  <div className="px-5 py-6">
    <span className="text-[#BF9FFF] text-[20px] font-poppins">{title}</span>
  </div>
);

// ---------------- Input Field ----------------
const InputField = ({
  name,
  placeholder,
  type = "text",
  icon,
}: {
  name: string;
  placeholder: string;
  type?: string;
  icon: React.ReactNode;
}) => (
  <Field name={name}>
    {({ field }: any) => (
      <div className="py-3">
        <div className="flex px-3 border rounded-xl w-[100%] h-[50px] border-[#BF9FFF] items-center">
          <div className="mr-2 text-[#BF9FFF]">{icon}</div>
          <input
            {...field}
            type={type}
            placeholder={placeholder}
            className="bg-transparent border-none outline-none text-[#AD46FF] text-[16px] font-poppins w-full placeholder:text-[#A0AEC0]"
          />
        </div>
        <ErrorMessage
          name={name}
          component="div"
          className="text-red-500 text-sm mt-1"
        />
      </div>
    )}
  </Field>
);

// ---------------- Dropdown Field ----------------
const DropdownField = ({
  name,
  label,
  options,
}: {
  name: string;
  label: string;
  options: { _id: string; Employee_Name: string }[];
}) => (
  <Field name={name}>
    {({ field }: any) => (
      <div className="py-3">
        <select
          {...field}
          className="w-full px-3 py-2 border border-[#BF9FFF] rounded-xl text-[#AD46FF] font-poppins focus:outline-none"
        >
          <option value="">Select {label}</option>
          {options.map((opt) => (
            <option key={opt._id} value={opt._id}>
              {opt.Employee_Name}
            </option>
          ))}
        </select>
        <ErrorMessage
          name={name}
          component="div"
          className="text-red-500 text-sm mt-1"
        />
      </div>
    )}
  </Field>
);

export default Addteam;
