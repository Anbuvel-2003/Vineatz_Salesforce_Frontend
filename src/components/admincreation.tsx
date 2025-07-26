import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { CgProfile } from "react-icons/cg";
import { MdOutlineEmail, MdOutlineLocalPhone } from "react-icons/md";
import { TbLockPassword } from "react-icons/tb";
import { SlNotebook } from "react-icons/sl";
import { HiEye, HiEyeOff } from "react-icons/hi";
import { useNavigate } from "react-router-dom";

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
        .min(8, "Min 8 characters")
        .matches(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/,
            "Must include upper, lower, number & special char"
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

    const togglePassword = () => setShowPassword(!showPassword);
    const toggleConfirm = () => setShowConfirm(!showConfirm);

    const handleSubmit = (values: FormValues) => {
        console.log("Submitted Data:", values);
        navigate("/Adminlist");
    };
    return (
        <div className="bg-[#FDFAFE] w-full min-h-screen px-20 py-10">
            <h2 className="text-[20px] font-semibold mb-6">Create Admin</h2>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={(values) => {
                    console.log("Submitted:", values);
                    navigate("/Adminlist");
                }}
            >
                {() => (
                    <Form className="bg-white rounded-xl px-10 py-8 shadow-xl space-y-6">
                        <Section title="Personal Details" />

                        <div className="grid grid-cols-2 gap-x-10 gap-y-6">
                            <div className="space-y-6">
                                <InputField name="firstname" placeholder="First Name" icon={<CgProfile />} />
                                <InputField name="lastname" placeholder="Last Name" icon={<CgProfile />} />
                                <InputField name="email" placeholder="Email" icon={<MdOutlineEmail />} />

                                <InputField
                                    name="password"
                                    placeholder="Password"
                                    type={showPassword ? "text" : "password"}
                                    icon={<TbLockPassword />}
                                    rightIcon={showPassword ? <HiEyeOff /> : <HiEye />}
                                    onRightIconClick={() => setShowPassword((prev) => !prev)}
                                />

                                <InputField
                                    name="confirmPassword"
                                    placeholder="Confirm Password"
                                    type={showConfirm ? "text" : "password"}
                                    icon={<TbLockPassword />}
                                    rightIcon={showConfirm ? <HiEyeOff /> : <HiEye />}
                                    onRightIconClick={() => setShowConfirm((prev) => !prev)}
                                />
                            </div>
                            <div className="space-y-6">

                                <InputField name="contact" placeholder="Mobile Number" icon={<MdOutlineLocalPhone />} />
                                <InputField name="address" placeholder="Address" icon={<SlNotebook />} />
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
    onRightIconClick,
}: {
    name: string;
    placeholder: string;
    type?: string;
    icon: React.ReactNode;
    rightIcon?: React.ReactNode;
    onRightIconClick?: () => void;
}) => (
    <Field name={name}>
        {({ field }: any) => (
            <div className="space-y-1 w-full">
                <div
                    className={`flex items-start px-3 border rounded-xl w-full border-[#BF9FFF] ${name === "address" ? "h-[150px]" : "h-[50px] items-center"
                        }`}
                >
                    <div
                        className={`text-[#BF9FFF] ${name === "address" ? "mt-1 pt-2" : "mr-2"
                            }`}
                    >
                        {icon}
                    </div>

                    {name === "address" ? (
                        <textarea
                            {...field}
                            placeholder={placeholder}
                            className="bg-transparent border-none text-[#AD46FF] text-[16px] font-poppins w-full placeholder:text-[#A0AEC0] resize-none outline-none"
                            rows={3}
                        />
                    ) : (
                        <>
                            <input
                                {...field}
                                type={type}
                                placeholder={placeholder}
                                className="bg-transparent border-none text-[#AD46FF] text-[16px] font-poppins w-full placeholder:text-[#A0AEC0]"
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
                <ErrorMessage name={name} component="div" className="text-red-500 text-sm" />
            </div>
        )}
    </Field>
);

const Section = ({ title }: { title: string }) => (
    <h3 className="text-lg font-semibold text-[#AD46FF] mb-2">{title}</h3>
);

export default AdminCreation;
