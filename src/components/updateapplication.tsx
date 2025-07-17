import * as Yup from "yup";
import { Formik, ErrorMessage, Field } from "formik";
import { toast } from "react-toastify";
import axios from "axios";
import { useNavigate, useParams, useLocation } from "react-router-dom";

const validationSchema = Yup.object().shape({
  Application_Name: Yup.string().required("Application Name is required *"),
  Application_url: Yup.string().required("Application url is required *"),
  Application_Description: Yup.string().required(
    "Application Description is required *"
  ),
});
function UpdateApplication() {
  const params = useParams();
  const navigate = useNavigate();
  let { state } = useLocation();
  console.log(state?.value);

  const formatDateString = (dateString: any) => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };
  return (
    <div>
      <div className="p-3">
        <h2 className="text-center text-gray-500 text-3xl capitalize font-serif font-bold">
          Update Application
        </h2>
      </div>
      <Formik
        initialValues={{
          Application_Name: state?.value?.Application_Name || "",
          Application_Description: state?.value?.Application_Description || "",
          Application_lanch_date: state?.value?.Application_lunch_date
            ? formatDateString(state.value.Application_lunch_date)
            : "",
          Application_url: state?.value?.Application_url || "",
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
            const response = await fetch(
              `${import.meta.env.VITE_LOCALHOST}/api/application/${params.id}`,
              {
                method: "PUT",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify(DATA),
              }
            );
            console.log("response", response);
            toast.success("Application Updated Successfully");
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
                className="border   text-sm rounded-lg focus:ring-[#9468ec] focus:border-[#9468ec] block w-full p-2.5 bg-gray-200 border-gray-600 placeholder-gray-400 "
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
                className="border   text-sm rounded-lg focus:ring-[#9468ec] focus:border-[#9468ec] block w-full p-2.5 bg-gray-200 border-gray-600 placeholder-gray-400 "
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
                className="border   text-sm rounded-lg focus:ring-[#9468ec] focus:border-[#9468ec] block w-full p-2.5 bg-gray-200 border-gray-600 placeholder-gray-400 "
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
                Update Application
              </button>
            </div>
          </div>
        )}
      </Formik>
    </div>
  );
}

export default UpdateApplication;
