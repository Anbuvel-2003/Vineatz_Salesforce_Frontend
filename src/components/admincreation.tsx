import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { CgProfile } from "react-icons/cg";
import { MdOutlineEmail, MdOutlineLocalPhone } from "react-icons/md";
import { TbLockPassword } from "react-icons/tb";
import { SlNotebook } from "react-icons/sl";
import { HiEye, HiEyeOff } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { authApi } from "@/config/fetchData";

interface FormValues {
  firstname: string;
  lastname: string;
  email: string;
  contact: string;
  password: string;
  confirmPassword: string;
  address: string;
}

const initialValues: FormValues = {
  firstname: "",
  lastname: "",
  email: "",
  contact: "",
  password: "",
  confirmPassword: "",
  address: "",
};

const validationSchema = Yup.object().shape({
  firstname: Yup.string().required("Required first name"),
  lastname: Yup.string().required("Required last name"),
  email: Yup.string().email("Invalid email").required("Required email"),
  contact: Yup.string()
    .required("Required contact number")
    .matches(/^[0-9]{10}$/, "Contact must be exactly 10 digits"),
  password: Yup.string()
    .required("Required password")
    .min(8, "Password must be at least 8 characters")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/,
      "Must include uppercase, lowercase, number & special character"
    ),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Passwords must match")
    .required("Required confirm password"),
  address: Yup.string().required("Required address"),
});

const AdminCreation: React.FC = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const handleSubmit = async (values: FormValues) => {
    console.log("Submitted Values:", values);
    const createapi = await authApi?.CreateAdmin({
      first_Name: values.firstname,
      last_Name: values.lastname,
      Mobile_Number: values.contact,
      Email: values.email,
      Password: values.password,
      Address: values.address,
    });
    if (createapi?.success) {
      toast?.success(createapi?.message);
      setTimeout(() => {
        navigate("/adminlist");
      }, 1000);
    } else {
      toast?.error(createapi?.message);
    }
  };
  return (
    <div className="bg-[#FDFAFE] w-full min-h-screen px-20 py-10">
      <h2 className="text-[20px] font-semibold mb-6">Create Admin</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ values, setFieldValue }) => (
          <Form className="bg-white rounded-xl px-10 py-8 shadow-xl space-y-6">
            <Section title="Personal Details" />

            <div className="grid grid-cols-2 gap-x-10 gap-y-6">
              <div className="space-y-6">
                <InputField
                  name="firstname"
                  value={values.firstname}
                  onChange={(e) => setFieldValue("firstname", e.target.value)}
                  placeholder="First Name"
                  icon={<CgProfile />}
                />
                <InputField
                  name="lastname"
                  value={values.lastname}
                  onChange={(e) => setFieldValue("lastname", e.target.value)}
                  placeholder="Last Name"
                  icon={<CgProfile />}
                />
                <InputField
                  name="email"
                  value={values?.email}
                  onChange={(e) => setFieldValue("email", e.target.value)}
                  placeholder="Email"
                  icon={<MdOutlineEmail />}
                />

                <InputField
                  name="password"
                  placeholder="Password"
                  value={values?.password}
                  onChange={(e) => setFieldValue("password", e.target.value)}
                  type={showPassword ? "text" : "password"}
                  icon={<TbLockPassword />}
                  rightIcon={showPassword ? <HiEyeOff /> : <HiEye />}
                  onRightIconClick={() => setShowPassword((prev) => !prev)}
                />

                <InputField
                  name="confirmPassword"
                  placeholder="Confirm Password"
                  value={values.confirmPassword}
                  onChange={(e) =>
                    setFieldValue("confirmPassword", e.target.value)
                  }
                  type={showConfirm ? "text" : "password"}
                  icon={<TbLockPassword />}
                  rightIcon={showConfirm ? <HiEyeOff /> : <HiEye />}
                  onRightIconClick={() => setShowConfirm((prev) => !prev)}
                />
              </div>
              <div className="space-y-6">
                <InputField
                  name="contact"
                  value={values.contact}
                  onChange={(e) => setFieldValue("contact", e.target.value)}
                  placeholder="Mobile Number"
                  icon={<MdOutlineLocalPhone />}
                />
                <InputField
                  name="address"
                  value={values.address}
                  onChange={(e) => setFieldValue("address", e.target.value)}
                  placeholder="Address"
                  icon={<SlNotebook />}
                />
              </div>
            </div>
            <button
              type="submit"
              className="bg-[#BF9FFF] text-white px-6 py-2 rounded-lg hover:bg-[#a982ff] font-medium w-fit"
            >
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

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
    {({ field }: any) => {
      const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
      ) => {
        let newValue = e.target.value;

        // Example: mobile number validation
        if (name === "contact") {
          newValue = newValue.replace(/[^0-9]/g, "").slice(0, 10); // Only digits, max 10
        }

        // Call the parent handler if provided
        if (onChange) {
          // Override event.target.value so parent can access cleaned value
          const modifiedEvent = {
            ...e,
            target: {
              ...e.target,
              value: newValue,
            },
          };
          onChange(
            modifiedEvent as React.ChangeEvent<
              HTMLInputElement | HTMLTextAreaElement
            >
          );
        }
      };

      const isTextarea = name === "address";

      return (
        <div className="space-y-1 w-full">
          <div
            className={`flex items-start px-3 border rounded-xl w-full border-[#BF9FFF] ${
              isTextarea ? "h-[150px]" : "h-[50px] items-center"
            }`}
          >
            <div
              className={`text-[#BF9FFF] ${isTextarea ? "mt-1 pt-2" : "mr-2"}`}
            >
              {icon}
            </div>

            {isTextarea ? (
              <textarea
                {...field}
                value={value}
                onChange={handleChange}
                placeholder={placeholder}
                className="bg-transparent border-none text-[#AD46FF] text-[16px] font-poppins w-full placeholder:text-[#A0AEC0] resize-none outline-none"
                rows={3}
              />
            ) : (
              <>
                <input
                  {...field}
                  type={type}
                  value={value}
                  onChange={handleChange}
                  placeholder={placeholder}
                  className="bg-transparent border-none text-[#AD46FF] text-[16px] font-poppins w-full placeholder:text-[#A0AEC0] outline-none"
                />
                {rightIcon && (
                  <div
                    className="text-[#BF9FFF] cursor-pointer ml-2"
                    onClick={onRightIconClick}
                  >
                    {rightIcon}
                  </div>
                )}
              </>
            )}
          </div>
          <ErrorMessage
            name={name}
            component="div"
            className="text-red-500 text-sm"
          />
        </div>
      );
    }}
  </Field>
);

const Section = ({ title }: { title: string }) => (
  <h3 className="text-lg font-semibold text-[#AD46FF] mb-2">{title}</h3>
);

export default AdminCreation;
