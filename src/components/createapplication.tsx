import * as Yup from "yup";
import { Formik, ErrorMessage, Field } from "formik";
import { toast } from "react-toastify";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const validationSchema = Yup.object().shape({
  Application_Name: Yup.string().required("Application Name is required *"),
  Application_url: Yup.string().required("Application url is required *"),
  Application_Description: Yup.string().required(
    "Application Description is required *"
  ),
});
function Createapplication() {
  const navigate = useNavigate();
  return (
    <div>
      <div className="p-3">
        <h2 className="text-center text-gray-500 text-3xl capitalize font-serif font-bold">
          Create application
        </h2>
      </div>
      <Formik
        initialValues={{
          Application_Name: "",
          Application_Description: "",
          Application_lanch_date: "",
          Application_url: "",
        }}
        validationSchema={validationSchema}
        onSubmit={async (values) => {
          const DATA = {
            Application_Name: values.Application_Name,
            Application_Description: values.Application_Description,
            Application_url: values?.Application_url,
            Application_lunch_date: values?.Application_lanch_date,
          };
          try {
            const response = await axios.post(
              `${import.meta.env.VITE_LOCALHOST}/api/application`,
              DATA,
              {
                headers: {
                  "Content-Type": "application/json",
                },
              }
            );
            console.log("response", response);
            toast.success("Application Added Successfully");
            navigate("/Applicationlist");
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
          <div className="px-10">
            <div className="p-3">
              <label className="block mb-2  font-medium text-gray-900 text-xl capitalize">
                Application Name
              </label>
              <Field
                type="text"
                name="Application_Name"
                className=" border   text-sm rounded-lg focus:ring-[#9468ec] focus:border-[#9468ec] block w-full p-2.5 bg-gray-200 border-gray-600 placeholder-gray-400 "
                placeholder="Accrix"
                required
              />
              <ErrorMessage
                name="Application_Name"
                component="div"
                className="text-red-500 pt-3"
              />
            </div>
            <div className="p-3">
              <label className="block mb-2  font-medium text-gray-900 text-xl capitalize">
                Application Lanch date
              </label>
              <Field
                type="Date"
                name="Application_lanch_date"
                className=" border   text-sm rounded-lg focus:ring-[#9468ec] focus:border-[#9468ec] block w-full p-2.5 bg-gray-200 border-gray-600 placeholder-gray-400 "
                required
              />
              <ErrorMessage
                name="Application_lanch_date"
                component="div"
                className="text-red-500 pt-3"
              />
            </div>
            <div className="p-3">
              <label className="block mb-2  font-medium text-gray-900 text-xl ">
                Application URL
              </label>
              <Field
                type="text"
                name="Application_url"
                className="border   text-sm rounded-lg focus:ring-[#9468ec] focus:border-[#9468ec] block w-full p-2.5 bg-gray-200 border-gray-600 placeholder-gray-400 "
                placeholder="WWW.Vineatz.com"
                required
              />
              <ErrorMessage
                name="Application_url"
                component="div"
                className="text-red-500 pt-3"
              />
            </div>
            <div className="p-3">
              <label className="block mb-2  font-medium text-gray-900 text-xl capitalize">
                Application description
              </label>
              <Field
                as="textarea"
                name="Application_Description"
                rows={4}
                className="border   text-sm rounded-lg focus:ring-[#9468ec] focus:border-[#9468ec] block w-full p-2.5 bg-gray-200 border-gray-600 placeholder-gray-400  "
                placeholder="Write your thoughts here..."
              ></Field>
              <ErrorMessage
                name="Application_Description"
                component="div"
                className="text-red-500 pt-3"
              />
            </div>

            <div className="p-3">
              <button
                type="button"
                onClick={() => handleSubmit()}
                className="text-white hover:text-[#8253e1] hover:bg-white border bg-[#8253e1] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-gray-500 dark:text-white "
              >
                Create Application
              </button>
            </div>
          </div>
        )}
      </Formik>
    </div>
  );
}

export default Createapplication;
