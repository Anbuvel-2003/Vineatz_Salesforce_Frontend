import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
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
import { HiEyeOff, HiEye } from "react-icons/hi";

interface FormValues {
  Applicationname: string;
  Applicationdescription: string;
  Applicationurl: string;
  joiningDate: Date | undefined;
}

const initialValues: FormValues = {
  Applicationname: "",
  Applicationdescription: "",
  Applicationurl: "",
  joiningDate: undefined,
};

const validationSchema = Yup.object().shape({
  Applicationname: Yup.string().required("Required Applicationname"),
  Applicationdescription: Yup.string().required(
    "Required Applicationdescription"
  ),
  Applicationurl: Yup.string().required("Required applicationurl"),
  joiningDate: Yup.date().required("Joining Date is required"),
});

const Createapplication = () => {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const handleSubmit = async (values: FormValues) => {
    console.log("Submitted Values:", values);
    const createapi = await authApi?.CreateApplication({
      Application_Name: values.Applicationname,
      Application_Description: values.Applicationdescription,
      Application_url: values.Applicationurl,
      Application_lunch_date:values.joiningDate
        ? values.joiningDate.toISOString()
        : ""
    });
    if (createapi?.success) {
      toast?.success(createapi?.message);
      setTimeout(() => {
        navigate("/Applicationlist");
      }, 1000);
    } else {
      toast?.error(createapi?.message);
    }
  };
  return (
    <div className="bg-[#FDFAFE] w-full min-h-screen px-20">
      <p className="text-black text-[18px] font-semibold py-6">
        Create Application
      </p>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        {({ values, setFieldValue }) => (
          <Form className="min-w-full bg-white rounded-xl px-16 pb-8 shadow-xl">
            {/* Personal Details */}
            <Section title="Application Details" />
            <div className="grid grid-cols-2 gap-y-4 gap-x-10 px-5">
              <div>
                <InputField
                  name="Applicationname"
                  icon={<SlNotebook size={24} />}
                  placeholder="Application Name"
                />

                <InputField
                  name="Applicationdescription"
                  icon={<SlNotebook size={24} />}
                  placeholder="Application Description"
                />

                <InputField
                  name="Applicationurl"
                  icon={<SlNotebook size={24} />}
                  placeholder="Application Url"
                />

                <div className="py-3">
                  <Popover>
                    <PopoverTrigger asChild>
                      <button
                        type="button"
                        className="w-[600px] h-[50px] flex justify-between  items-center px-4 border border-[#BF9FFF] rounded-xl text-left bg-transparent text-[#AD46FF] placeholder:text-[#BF9FFF] font-poppins"
                      >
                        {values.joiningDate ? (
                          format(values.joiningDate, "dd-MM-yyyy")
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
  rightIcon,
  value,
  onChange,
  onRightIconClick,
}: {
  name: string;
  value?: string;
  onChange?: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  placeholder: string;
  type?: string;
  icon: React.ReactNode;
  rightIcon?: React.ReactNode;
  onRightIconClick?: () => void;
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
          <div className="flex px-3 border rounded-xl w-[600px] h-[50px] border-[#BF9FFF] items-center">
            <div className="mr-2 text-[#BF9FFF]">{icon}</div>
            <input
              {...field}
              type={type}
              placeholder={placeholder}
              value={field.value}
              onChange={handleChange}
              className="bg-transparent border-none outline-none text-[#AD46FF] text-[16px] font-poppins w-full placeholder:text-[#A0AEC0]"
            />
            {rightIcon && (
              <div
                className="text-[#BF9FFF] cursor-pointer ml-2"
                onClick={onRightIconClick}
              >
                {rightIcon}
              </div>
            )}
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

export default Createapplication;
