import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover";
import { format } from "date-fns";

import { CgProfile } from "react-icons/cg";
import { GoPlus } from "react-icons/go";
import { TbLockPassword } from "react-icons/tb";
import { MdOutlineEmail, MdOutlineLocalPhone } from "react-icons/md";
import { SlNotebook } from "react-icons/sl";
import { CalendarIcon } from "lucide-react";

interface FormValues {
  name: string;
  email: string;
  contact: string;
  password: string;
  confirmPassword: string;
  address: string;
  emergencyContact: string;
  bikeNumber: string;
  licenseNumber: string;
  joiningDate: Date | undefined;
}

const initialValues: FormValues = {
  name: "",
  email: "",
  contact: "",
  password: "",
  confirmPassword: "",
  address: "",
  emergencyContact: "",
  bikeNumber: "",
  licenseNumber: "",
  joiningDate: undefined,
};

const validationSchema = Yup.object().shape({
  name: Yup.string().required("Required"),
  email: Yup.string().email("Invalid").required("Required"),
  contact: Yup.string().required("Required"),
  password: Yup.string().required("Required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Passwords must match")
    .required("Required"),
  address: Yup.string().required("Required"),
  emergencyContact: Yup.string().required("Required"),
  bikeNumber: Yup.string().required("Required"),
  licenseNumber: Yup.string().required("Required"),
  joiningDate: Yup.date().required("Joining Date is required"),
});

const Addemployee = () => {
  const navigate = useNavigate();

  const handleSubmit = (values: FormValues) => {
    console.log("Submitted Values:", values);
  };

  return (
    <div className="bg-[#FDFBFF] min-h-screen w-full px-6 pr-16">
      <div className="flex items-center justify-between">
        <div className="text-[#000000] text-[18px] text-poppins">Employee</div>
       
      </div>

      <p className="text-black text-[18px] font-semibold py-6">Employee Details</p>

      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        {({ values, setFieldValue }) => (
          <Form className="min-w-full bg-white rounded-xl px-16 pb-8 shadow-xl">
            {/* Personal Details */}
            <Section title="Personal Details" />
            <div className="grid grid-cols-2 gap-y-4 gap-x-10 px-5">
              <div>
                <InputField name="name" icon={<CgProfile />} placeholder="Employee Name" />
                <InputField name="email" icon={<MdOutlineEmail />} placeholder="Employee Email" />
                <InputField name="contact" icon={<MdOutlineLocalPhone />} placeholder="Contact Number" />
              </div>
              <div>
                <InputField name="password" type="password" icon={<TbLockPassword />} placeholder="Password" />
                <InputField name="confirmPassword" type="password" icon={<TbLockPassword />} placeholder="Confirm Password" />
                <InputField name="address" icon={<SlNotebook />} placeholder="Address" />
              </div>
            </div>

            {/* Other Details */}
            <Section title="Other Details" />
            <div className="grid grid-cols-2 gap-y-4 gap-x-10 px-5">
              <div>
                <InputField name="emergencyContact" icon={<MdOutlineLocalPhone />} placeholder="Emergency Contact" />
                <InputField name="bikeNumber" icon={<SlNotebook />} placeholder="Bike Number" />
              </div>
              <div>
                <InputField name="licenseNumber" icon={<SlNotebook />} placeholder="Driving License Number" />

                {/* Joining Date */}
                <div className="py-3">
                  <Popover>
                    <PopoverTrigger asChild>
                      <button
                        type="button"
                        className="w-[600px] h-[50px] flex justify-between  items-center px-4 border border-[#BF9FFF] rounded-xl text-left bg-transparent text-[#4FD1C5] font-poppins"
                      >
                        {values.joiningDate ? (     
                            format(values.joiningDate, "dd-MM-yyyy")
                        ) : (
                            <span className="text-[#A0AEC0] pl-8">Joining Date</span>
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

// InputField with Formik <Field />
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
  <div className="py-3">
    <div className="flex px-3 border rounded-xl w-[600px] h-[50px] border-[#BF9FFF] items-center">
      <div className="mr-2 text-[#BF9FFF]">{icon}</div>
      <Field
        type={type}
        name={name}
        placeholder={placeholder}
        className="bg-transparent border-none outline-none text-[#4FD1C5] text-[16px] font-poppins w-full placeholder:text-[#A0AEC0]"
      />
    </div>
    <ErrorMessage name={name} component="div" className="text-red-500 text-sm mt-1" />
  </div>
);

export default Addemployee;
