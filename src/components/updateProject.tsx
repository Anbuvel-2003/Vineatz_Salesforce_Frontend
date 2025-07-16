import * as Yup from "yup";
import { Formik, ErrorMessage, Field } from "formik";
import { toast } from 'react-toastify';
import axios from 'axios';
import { useNavigate, useParams, useLocation } from "react-router-dom";

const validationSchema = Yup.object().shape({
  project_Name: Yup.string().required("Project Name is required *"),
  project_Manager: Yup.string().required(" Project Manager is required *"),
  project_description: Yup.string().required("Project description is required *"),
  project_status: Yup.string().required("Project status is required *"),
  start_Date: Yup.date().required("Start Date is required *"),
  end_Date: Yup.date().required("End Date is required *")
});
function UpdateProject() {
  const params = useParams();
  const navigate = useNavigate();
  let { state } = useLocation();
  console.log(state, "))))");
  const formatDateString = (dateString : any) => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };
  return (
   <div>
    <div className="p-3">
        <h2 className="text-center text-gray-500 text-3xl capitalize font-serif font-bold">Update Project</h2>
    </div>
    <Formik
                    initialValues={{
                      project_Name:state.value.project_Name || "",
                      project_Manager:state.value.project_Manager || "",
                      project_description:state.value.project_description || "",
                      project_status:state.value.project_status || "",
                      start_Date: state?.value?.start_Date ? formatDateString(state.value.start_Date) : "",
                      end_Date: state?.value?.end_Date ? formatDateString(state.value.end_Date) : "",
                    }}
                    validationSchema={validationSchema}
                    onSubmit={async (values) => {
                        const ProjectDATA = {
                            project_Name: values.project_Name,
                            project_Manager: values.project_Manager,
                            project_description: values.project_description,
                            project_status: values.project_status,
                            start_Date: values.start_Date,
                            end_Date: values.end_Date
                        };
                        try {
                          const response = await fetch(
                            `${import.meta.env.VITE_LOCALHOST}/api/updateprojects/${params.id}`,
                            {
                              method: "PUT",
                              headers: {
                                "Content-Type": "application/json",
                              },
                              body: JSON.stringify(ProjectDATA),
                            }
                          );
                            console.log('response', response);
                            toast.success("Project Updated Successfully");
                            navigate("/");  
                        } catch (error) {
                            if (axios.isAxiosError(error) && error.response) {
                                const errorData = error.response.data;
                                console.log('response error', errorData);
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
                    {({ handleSubmit}) => (
      <div className="px-10">
        <div className="p-3">
          <label className="block mb-2  font-medium text-gray-900 text-xl capitalize">project Name</label>
          <Field type="text" name="project_Name" className="bg-gray-50 border border-gray-300 text-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-200 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-900 dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Doe" required />
          <ErrorMessage name="project_Name" component="div" className="text-red-500 pt-3" />
        </div>
        <div className="p-3">
          <label className="block mb-2  font-medium text-gray-900 text-xl capitalize">project Manager name</label>
          <Field type="text" name="project_Manager" className="bg-gray-50 border border-gray-300 text-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-200 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-900 dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Doe" required />
          <ErrorMessage name="project_Manager" component="div" className="text-red-500 pt-3" />
        </div>
        <div className="p-3">
          <label className="block mb-2  font-medium text-gray-900 text-xl capitalize">project description</label>
          <Field as="textarea" name="project_description" rows={4} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-200 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-900  dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your thoughts here..."
          ></Field>
          <ErrorMessage name="project_description" component="div" className="text-red-500 pt-3" />
        </div>
        <div className="p-3">
          <label className="block mb-2  font-medium text-gray-900 text-xl capitalize">project status</label>
          <Field as="select"
          name="project_status"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 foc us:border-blue-500 block w-full p-2.5 dark:bg-gray-200 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-900 dark:focus:ring-blue-500 dark:focus:border-blue-500"    
      >
          <option value="" disabled>Select Project Status</option>
            <option value="Start">Start</option>
            <option value="Wait">Wait</option>
            <option value="End">End</option>
            <option value="Nill">Nill</option>
          </Field>
          <ErrorMessage name="project_status" component="div" className="text-red-500 pt-3" />        </div>
        <div className="p-3">
          <label className="block mb-2  font-medium text-gray-900 text-xl capitalize">Project Start Date</label>
          <Field type="Date" name="start_Date" className="bg-gray-50 border border-gray-300 text-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-200 dark:border-gray-600 dark:placeholder-gray-900 dark:text-gray-900 dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Doe" required />
          <ErrorMessage name="start_Date" component="div" className="text-red-500 pt-3" />
        </div>
        <div className="p-3">
          <label className="block mb-2  font-medium text-gray-900 text-xl capitalize">Project End Date</label>
          <Field type="Date" name="end_Date" className="bg-gray-50 border border-gray-300 text-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-200 dark:border-gray-600 dark:placeholder-gray-500 dark:text-gray-900 dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Doe" required />
          <ErrorMessage name="end_Date" component="div" className="text-red-500 pt-3" />
        </div>
        <div className="p-3">
        <button type="button" className="text-white hover:text-white border bg-blue-700 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-gray-500 dark:text-white dark:hover:text-white dark:hover:bg-gray-900 dark:focus:ring-blue-800"
        onClick={()=>handleSubmit()}
        >Update Project</button>
        </div>
      </div>
                    )}
     </Formik>
</div>
  )
}

export default UpdateProject