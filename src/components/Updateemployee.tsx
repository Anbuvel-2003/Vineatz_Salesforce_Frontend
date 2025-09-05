import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";
import { format } from "date-fns";

import { CgProfile } from "react-icons/cg";
import { TbLockPassword } from "react-icons/tb";
import { MdOutlineEmail, MdOutlineLocalPhone } from "react-icons/md";
import { SlNotebook } from "react-icons/sl";
import { CalendarIcon } from "lucide-react";
import { authApi } from "@/config/fetchData";
import { toast } from "react-toastify";

interface FormValues {
  name: string;
  email: string;
  contact: string;
  address: string;
  emergencyContact: string;
  bikeNumber: string;
  licenseNumber: string;
  joiningDate: Date | undefined;
}

const validationSchema = Yup.object().shape({
  name: Yup.string().required("Required name"),
  email: Yup.string().email("Invalid email").required("Required email"),
  contact: Yup.string()
    .required("Required contact number")
    .matches(/^[0-9]{10}$/, "Contact must be exactly 10 digits"),
  address: Yup.string().required("Required address"),
  emergencyContact: Yup.string()
    .required("Required emergency contact")
    .matches(/^[0-9]{10}$/, "Emergency contact must be exactly 10 digits"),
  bikeNumber: Yup.string()
    .required("Required bike number")
    .matches(
      /^[A-Z]{2}\d{2}[A-Z]{1,2}\d{4}$/,
      "Enter valid bike number (e.g., TN01AB1234)"
    ),
  licenseNumber: Yup.string()
    .required("Required license number")
    .matches(
      /^[A-Z]{2}\d{2}\d{11}$/,
      "Enter valid license number (e.g., TN1020201234567)"
    ),
  joiningDate: Yup.date().required("Joining Date is required"),
});

const Updateemployee = () => {
  const params = useParams<{ id: string }>();
  console.log("params", params);

  const navigate = useNavigate();
  let { state } = useLocation();
  console.log("state",state);
  
  const initialValues: FormValues = {
    name: state?.value?.Employee_Name || "",
    email: state?.value?.Employee_Email || "",  
    contact: state?.value?.Employee_Mobilenumber || "",
    address: state?.value?.Employee_Address || "",
    emergencyContact: state?.value?.Employee_Alternative_Mobilenumber || "",
    bikeNumber: state?.value?.Employee_Bike_Number || "",
    licenseNumber: state?.value?.Employee_Driving_License_Number || "",
    joiningDate: new Date(state?.value?.createdAt || ""),
  };
  const handleSubmit = async (values: FormValues) => {
    if (!params.id) {
      toast?.error("Invalid employee ID");
      return;
    }
    const updateapi = await authApi?.updateEmployee(
      {
        Employee_Name: values.name,
        Employee_Email: values.email,
        Employee_Mobilenumber: values.contact,
        Employee_Alternative_Mobilenumber: values.emergencyContact,
        Employee_Address: values.address,
        Employee_Bike_Number: values.bikeNumber,
        Employee_Driving_License_Number: values.licenseNumber,
        Employee_joining_date: values?.joiningDate
          ? values?.joiningDate.toISOString()
          : "",
      },
      params.id
    );
    if (updateapi?.success) {
      toast?.success(updateapi?.message);
      setTimeout(() => {
        navigate("/Employeelist");
      }, 1000);
    } else {
      toast?.error(updateapi?.message);
    }
  };
  return (
    <div className="bg-[#FDFAFE] w-full  min-h-screen px-20">
      <p className="text-black text-[18px] font-semibold py-6">
        Update Employee
      </p>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        {({ values, setFieldValue }) => (
          <Form className="min-w-full  bg-white rounded-xl px-16 pb-8 shadow-xl">
            {/* Personal Details */}
            <Section title="Personal Details" />
            <div className="grid grid-cols-2 gap-y-4 gap-x-10 px-5">
              <div>
                <InputField
                  name="name"
                  icon={<CgProfile />}
                  placeholder="Employee Name"
                />
                <InputField
                  name="email"
                  icon={<MdOutlineEmail />}
                  placeholder="Employee Email"
                />
              </div>
              <div>
                <InputField
                  name="contact"
                  icon={<MdOutlineLocalPhone />}
                  placeholder="Contact Number"
                />
                <InputField
                  name="address"
                  icon={<SlNotebook />}
                  placeholder="Address"
                />
              </div>
            </div>

            {/* Other Details */}
            <Section title="Other Details" />
            <div className="grid grid-cols-2 gap-y-4 gap-x-10 px-5">
              <div>
                <InputField
                  name="emergencyContact"
                  icon={<MdOutlineLocalPhone />}
                  placeholder="Emergency Contact"
                />
                <InputField
                  name="bikeNumber"
                  icon={<SlNotebook />}
                  placeholder="Bike Number"
                />
              </div>
              <div>
                <InputField
                  name="licenseNumber"
                  icon={<SlNotebook />}
                  placeholder="Driving License Number"
                />
                {/* Joining Date */}
                <div className="py-3">
                  <Popover>
                    <PopoverTrigger asChild>
                      <button
                        type="button"
                        className="w-[100%] h-[50px] flex justify-between  items-center px-4 border border-[#BF9FFF] rounded-xl text-left bg-transparent text-[#BF9FFF] font-poppins"
                      >
                        {values?.joiningDate ? (
                          format(values?.joiningDate, "dd-MM-yyyy")
                        ) : (
                          <span className="text-[#A0AEC0] pl-8">
                            Joining Date
                          </span>
                        )}
                        <CalendarIcon color="#A0AEC0" />
                      </button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={values.joiningDate}
                        onSelect={(date) => setFieldValue("joiningDate", date)}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                  <ErrorMessage
                    name="joiningDate"
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />
                </div>
              </div>
            </div>
            {/* Submit Button */}
            <div className=" px-5 pt-6">
              <button
                type="submit"
                className="bg-[#BF9FFF] text-white px-6 py-2 rounded-lg hover:bg-[#a982ff] font-medium"
              >
                Submit
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

// Section Title
const Section = ({ title }: { title: string }) => (
  <div className="px-5 py-6">
    <span className="text-[#BF9FFF] text-[20px] font-poppins">{title}</span>
  </div>
);

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
    {({ field, form }: any) => {
      // Custom logic
      const upperCaseFields = ["bikeNumber", "licenseNumber"];
      const maxLengthMap: Record<string, number> = {
        contact: 10,
        emergencyContact: 10,
        bikeNumber: 10,
        licenseNumber: 15,
      };
      const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        let value = e.target.value;
        // Allow only alphanumeric for bike/license; only numbers for contact
        if (["bikeNumber", "licenseNumber"].includes(name)) {
          value = value.replace(/[^a-zA-Z0-9]/g, "");
        } else if (["contact", "emergencyContact"].includes(name)) {
          value = value.replace(/[^0-9]/g, "");
        }
        // Enforce uppercase
        if (upperCaseFields.includes(name)) {
          value = value.toUpperCase();
        }
        // Enforce max length
        const maxLength = maxLengthMap[name];
        if (maxLength) {
          value = value.slice(0, maxLength);
        }
        form.setFieldValue(name, value);
      };
      return (
        <div className="py-3">
          <div className="flex px-3 border rounded-xl w-[100%] h-[50px] border-[#BF9FFF] items-center">
            <div className="mr-2 text-[#BF9FFF]">{icon}</div>
            <input
              {...field}
              type={type}
              placeholder={placeholder}
              value={field.value}
              onChange={handleChange}
              className="bg-transparent border-none outline-none text-[#BF9FFF] text-[16px] font-poppins w-full placeholder:text-[#A0AEC0]"
            />
          </div>
          <ErrorMessage
            name={name}
            component="div"
            className="text-red-500 text-sm mt-1"
          />
        </div>
      );
    }}
  </Field>
);

export default Updateemployee;
