import React from "react";
import img1 from "../assets/login_img.png";
import { Formik } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";
import axios from "axios";
import { authApi } from "@/config/fetchData";
import { InputOTPDemo } from "./otp";
import { Navigate, useNavigate } from "react-router-dom";



interface OTPProps {
  isDrawerOpen: boolean;
  setIsDrawerOpen: (isOpen: boolean) => void;
}

const Otpscreen: React.FC<OTPProps> = ({ isDrawerOpen, setIsDrawerOpen }) => {
  const navigate = useNavigate();
  const validationSchema = Yup.object().shape({
    otp: Yup.string()
      .matches(/^\d{6}$/, "OTP must be exactly 6 digits")
      .required("OTP is required"),
  });

  const handleSubmit = async (values: { otp: string }) => {
    navigate("/NewPassword");
  };

  return (
    <section className="h-screen flex items-center justify-center">
      <div className="flex w-full h-full">
        {/* Left: Form */}
        <div className="w-1/2 flex flex-col items-center justify-center">
          <div className="w-[70%]">
            <h1 className="text-[42px] font-bold font-poppins mb-6">
              Enter OTP
            </h1>

            <Formik
              initialValues={{ otp: "" }}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              {({
                values,
                errors,
                touched,
                setFieldValue,
                setFieldTouched,
                handleSubmit,
              }) => (
                <form className="flex flex-col" onSubmit={handleSubmit}>
                  <label className="font-poppins text-[#2D3748] mb-1">OTP</label>

                  <InputOTPDemo
                    value={values.otp}
                    onChange={(val) => setFieldValue("otp", val)}
                    onBlur={() => setFieldTouched("otp", true)}
                  />

                  {touched.otp && errors.otp && (
                    <div className="text-red-500 text-sm mt-2">
                      {errors.otp}
                    </div>
                  )}

                  <button
                    type="submit"
                    className="bg-[#BF9FFF] hover:bg-[#9b77e2] text-white font-bold w-full rounded-xl font-poppins py-3 px-4 mt-4"
                  >
                    Submit
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

export default Otpscreen;
