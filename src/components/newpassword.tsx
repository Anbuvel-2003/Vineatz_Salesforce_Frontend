import { Formik } from "formik";
import * as Yup from "yup";
import React, { useState } from "react";
import img1 from "../assets/login_img.png";
import { HiEye, HiEyeOff } from "react-icons/hi";
import { Navigate, useNavigate } from "react-router-dom";

const NewPassword: React.FC = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = React.useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const togglePassword = () => setShowPassword(!showPassword);
  const toggleConfirm = () => setShowConfirm(!showConfirm);
  const validationSchema = Yup.object().shape({
    Password: Yup.string()
      .required("Password is required *")
      .min(8, "Password must be at least 8 characters *")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8,}$/,
        "Password must contain uppercase, lowercase, number, and special character *"
      ),
    ConfirmPassword: Yup.string()
      .oneOf([Yup.ref("Password")], "Passwords must match")
      .required("Required confirm password"),
  });
  return (
    <section className="h-screen flex items-center justify-center">
      <div className="flex w-full h-full">
        {/* Left: Form */}
        <div className="w-1/2 flex items-center justify-center">
          <div className="w-[70%]">
            <h1 className="text-[42px] text-[#111111] font-bold font-poppins mb-6">
              Change Password!
            </h1>
            <Formik
              initialValues={{ Password: "", ConfirmPassword: "" }}
              validationSchema={validationSchema}
              onSubmit={async (values) => {
                try {
                  console.log("Submitted Values:", values);
                } catch (error) {
                  console.log(error, "Error Message");
                }
                // navigate("/Login");
              }}
            >
              {({ values, errors, touched, handleChange, handleSubmit }) => (
                <form className="flex flex-col" onSubmit={handleSubmit}>
                  <label className="text-[#2D3748]">New Password</label>
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      name="Password"
                      value={values.Password}
                      onChange={handleChange}
                      className="border border-[#E2E8F0] rounded-xl font-poppins p-2 pr-10 mb-1 w-full"
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
                  <label className="text-[#2D3748]">Re Enter Password</label>
                  <div className="relative">
                    <input
                      type={showConfirm ? "text" : "password"}
                      name="ConfirmPassword"
                      value={values.ConfirmPassword}
                      onChange={handleChange}
                      className="border border-[#E2E8F0] rounded-xl font-poppins p-2 pr-10 mb-1 w-full"
                    />
                    <button
                      type="button"
                      onClick={() => setShowConfirm(!showConfirm)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-600"
                    >
                      {showConfirm ? (
                        <HiEye className="w-5 h-5" />
                      ) : (
                        <HiEyeOff className="w-5 h-5" />
                      )}
                    </button>
                  </div>
                  {touched.Password && errors.Password && (
                    <div className="text-red-500 text-sm mb-2">
                      {errors.ConfirmPassword}
                    </div>
                  )}

                  <button
                    type="submit"
                    className="bg-[#BF9FFF] hover:bg-[#9b77e2] text-white font-bold rounded-xl font-poppins py-3 px-4 mt-4"
                  >
                    Change Password
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

export default NewPassword;
