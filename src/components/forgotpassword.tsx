import { Formik } from "formik";
import axios from "axios";
import * as Yup from "yup";
import React from "react";
import img1 from "../assets/login_img.png";
import { toast } from "react-toastify";
import { authApi } from "@/config/fetchData";
import { useNavigate } from "react-router-dom";

const ForgotPassword: React.FC = () => {
  const navigate = useNavigate();
  const validationSchema = Yup.object().shape({
    Email: Yup.string()
      .email("Invalid email format *")
      .required("Email is required *"),
  });

  const handleSubmit = async (values: { Email: string }) => {
    try {
      const sendotp = await authApi?.Sentemail({
        email: values.Email,
      });
      if (sendotp?.success) {
        toast?.success(sendotp?.message);
        navigate("/Otpscreen", { state: { value: sendotp?.token } });
      } else {
        toast?.error(sendotp?.message);
      }
    } catch (error) {
      console.log("error", error);
      toast?.error("Something went wrong");
    }
  };
  return (
    <section className="h-screen flex items-center justify-center">
      <div className="flex w-full h-full">
        {/* Left: Form */}
        <div className="w-1/2 flex items-center justify-center">
          <div className="w-[70%]">
            <h1 className="text-[42px] font-bold font-poppins mb-6">
              Forgot Password!
            </h1>
            <Formik
              initialValues={{ Email: "" }}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              {({ values, errors, touched, handleChange, handleSubmit }) => (
                <form className="flex flex-col" onSubmit={handleSubmit}>
                  <label className="font-poppins text-[#2D3748]  mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    name="Email"
                    value={values.Email}
                    onChange={handleChange}
                    placeholder="Enter Your registered Email address"
                    className="border border-[#E2E8F0] text-[#2D3748] placeholder:text-[#A0AEC0] rounded-xl font-poppins p-3 mb-1"
                  />
                  {touched.Email && errors.Email && (
                    <div className="text-red-500 text-sm mb-2">
                      {errors.Email}
                    </div>
                  )}
                  <a href="/Otpscreen">
                    <button
                      type="submit"
                      className="bg-[#BF9FFF] hover:bg-[#9b77e2] text-white font-bold rounded-xl w-full font-poppins py-3 px-4 mt-4"
                    >
                      Get OTP
                    </button>
                  </a>
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

export default ForgotPassword;
