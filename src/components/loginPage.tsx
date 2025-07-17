import * as Yup from "yup";
import { Formik, ErrorMessage, Form, Field } from "formik";
import { toast } from "react-toastify";
import axios from "axios";
interface LoginPageProps {
  isDrawerOpen: boolean;
  setIsDrawerOpen: (isOpen: boolean) => void;
}
const LoginPage: React.FC<LoginPageProps> = (props) => {
  const { setIsDrawerOpen, isDrawerOpen } = props;
  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Invalid email format *")
      .required("Email is required *"),
    password: Yup.string()
      .required("Password is required *")
      .min(8, "Password must be at least 8 characters *")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
        "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character *"
      ),
  });
  return (
    <>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={validationSchema}
        onSubmit={async (values) => {
          const DATA = {
            Email: values.email,
            Password: values.password,
          };
          try {
            const response = await axios.post(
              `${import.meta.env.VITE_LOCALHOST}/api/user/login`,
              DATA,
              {
                headers: {
                  "Content-Type": "application/json",
                },
              }
            );
            localStorage.setItem(
              "user_id",
              JSON.stringify(response?.data?.data?._id)
            );
            localStorage.setItem(
              "user_data",
              JSON.stringify(response?.data?.data)
            );
            toast.success("Login successfully");
            setIsDrawerOpen(!isDrawerOpen);
            setTimeout(() => {
              window.location.href = "/";
            }, 1000);
          } catch (error) {
            if (axios.isAxiosError(error) && error.response) {
              const errorData = error.response.data;
              console.log("response error", errorData);
              if (errorData.message) {
                toast.error(errorData.message);
              } else {
                toast.error("Something went wrong");
              }
            } else {
              console.log("Error Message", error);
            }
          }
        }}
      >
        {({ handleSubmit }) => (
          <div
            className={`fixed top-0 right-0 z-40 h-screen p-4 overflow-y-auto transition-transform transform ${
              isDrawerOpen ? "translate-x-0" : "translate-x-full"
            }  w-1/3 bg-gray-800 `}
            tabIndex={-1}
            aria-labelledby="drawer-label"
          >
            <h2 className="text-center py-5  ">
              <span className="text-2xl font-bold text-gray-50 capitalize">
                Login your Account
              </span>
            </h2>
            <button
              type="button"
              onClick={() => setIsDrawerOpen(!isDrawerOpen)}
              className="text-gray-400 bg-transparent rounded-lg text-sm w-8 h-8 absolute top-2.5 right-2.5 flex items-center justify-center hover:bg-gray-600 hover:text-white"
            >
              <svg
                className="w-3 h-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
              <span className="sr-only">Close menu</span>
            </button>
            <Form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 gap-8">
                <div className="grid grid-cols-1 gap-4">
                  <label className="text-lg text-gray-50 capitalize">
                    Email
                  </label>
                  <Field
                    type="email"
                    name="email"
                    placeholder="john.doe@company.com"
                    className="text-sm rounded-lg ring-blue-500  block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-[#8253e1] focus:border-[#8253e1]"
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="text-red-500"
                  />
                </div>
                <div className="grid grid-cols-1 gap-4">
                  <label className="text-lg text-gray-50 capitalize">
                    Password
                  </label>
                  <Field
                    type="password"
                    name="password"
                    placeholder="•••••••••"
                    className="text-sm rounded-lg ring-blue-500  block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-[#8253e1] focus:border-[#8253e1]"
                  />
                  <ErrorMessage
                    name="password"
                    component="div"
                    className="text-red-500"
                  />
                </div>
                <div className="grid grid-cols-1 gap-4 text-center">
                  <button
                    type="submit"
                    className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-[#8253e1] hover:bg-green-400 rounded-lg  focus:ring-4   focus:outline-none focus:ring-blue-800"
                  >
                    Login
                    <svg
                      className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 10"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M1 5h12m0 0L9 1m4 4L9 9"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </Form>
          </div>
        )}
      </Formik>
    </>
  );
};

export default LoginPage;
