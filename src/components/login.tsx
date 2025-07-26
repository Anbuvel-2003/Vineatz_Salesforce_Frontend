import { Formik } from "formik";
import axios from "axios";
import * as Yup from "yup";
import React from "react";
import img1 from "../assets/login_img.png";
import { HiEye, HiEyeOff } from "react-icons/hi";
import { authApi } from "@/config/fetchData";
import { log } from "console";
import { toast } from "react-toastify";

interface LoginProps {
  isDrawerOpen: boolean;
  setIsDrawerOpen: (isOpen: boolean) => void;
}

const LoginPage: React.FC<LoginProps> = ({ isDrawerOpen, setIsDrawerOpen }) => {
  const [showPassword, setShowPassword] = React.useState(false);
  const validationSchema = Yup.object().shape({
    Email: Yup.string()
      .email("Invalid email format *")
      .required("Email is required *"),
    Password: Yup.string()
      .required("Password is required *")
      .min(8, "Password must be at least 8 characters *")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8,}$/,
        "Password must contain uppercase, lowercase, number, and special character *"
      ),
  });
  return (
    <section className="h-screen flex items-center justify-center">
      <div className="flex w-full h-full">
        {/* Left: Form */}
        <div className="w-1/2 flex items-center justify-center">
          <div className="w-[70%]">
            <h1 className="text-[42px] font-bold font-poppins mb-6">Welcome</h1>
            <Formik
              initialValues={{ Email: "", Password: "" }}
              validationSchema={validationSchema}
              onSubmit={async (values) => {
                try {
                  const login = await authApi?.LoginApi({
                    Email: values?.Email,
                    Password: values?.Password,
                  });
                  if (login?.success) {
                    toast?.success(login?.message);
                    localStorage.setItem(
                      "user_id",
                      JSON.stringify(login?.data?._id)
                    );
                    localStorage.setItem(
                      "user_data",
                      JSON.stringify(login?.data)
                    );
                    setTimeout(() => {
                      window.location.href = "/";
                    }, 1000);
                  } else {
                    toast?.error(login?.message);
                  }
                } catch (error) {
                  console.error(error);
                  toast?.error("Something went wrong");
                }
              }}
            >
              {({ values, errors, touched, handleChange, handleSubmit }) => (
                <form className="flex flex-col" onSubmit={handleSubmit}>
                  <label>Email</label>
                  <input
                    type="email"
                    name="Email"
                    value={values.Email}
                    onChange={handleChange}
                    className="border border-gray-200 rounded-xl font-poppins p-2 mb-1"
                  />
                  {touched.Email && errors.Email && (
                    <div className="text-red-500 text-sm mb-2">
                      {errors.Email}
                    </div>
                  )}
                  <label>Password</label>
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      name="Password"
                      value={values.Password}
                      onChange={handleChange}
                      className="border border-gray-200 rounded-xl font-poppins p-2 pr-10 mb-1 w-full"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-600"
                    >
                      {showPassword ? (
                        <HiEye className="w-5 h-5" />
                      ) : (
                        <HiEyeOff className="w-5 h-5" />
                      )}
                    </button>
                  </div>
                  {touched.Password && errors.Password && (
                    <div className="text-red-500 text-sm mb-2">
                      {errors.Password}
                    </div>
                  )}
                  <a
                    href="/ForgotPassword"
                    className="text-[#4FD1C5] hover:text-blue-700 pb-3 font-poppins w-fit"
                  >
                    Forgot Password?
                  </a>
                  <button
                    type="submit"
                    className="bg-[#4FD1C5] hover:bg-blue-700 text-white font-bold rounded-xl font-poppins py-3 px-4 mt-4"
                  >
                    Sign in
                  </button>
                </form>
              )}
            </Formik>
          </div>
        </div>

        {/* Right: Image */}
        <div className="w-1/2 flex items-center justify-center">
          <img
            src={img1}
            alt="profile"
            className="w-full h-[100%] object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default LoginPage;
