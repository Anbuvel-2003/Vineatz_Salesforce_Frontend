import * as Yup from "yup";
import { Formik, ErrorMessage, Field } from "formik";
import { toast } from 'react-toastify';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const validationSchema = Yup.object().shape({
  Task_Name: Yup.string().required("Task Name is required *"),
  Task_Assigned_To: Yup.string().required(" Task Assigned To is required *"),
  Task_Assigned_By: Yup.string().required("Task Assigned By is required *"),
  Task_Deadline: Yup.string().required("Task_Deadline is required *"),
  Task_Status: Yup.string().required("Task_Status is required *"),
  Task_Description: Yup.string().required("Task_Description is required *")
});
function Createtask() {
  const navigate = useNavigate();
  return (
    <div>
        <div className="p-3">
            <h2 className="text-center text-gray-500 text-3xl capitalize font-serif font-bold">Create Task</h2>
        </div>
        <Formik
                    initialValues={{
                      Task_Name: "",
                      Task_Assigned_To: "",
                      Task_Assigned_By: "",
                      Task_Description:"",
                      Task_Status: "",
                      Task_Deadline: "",
                    }}
                    validationSchema={validationSchema}
                    onSubmit={async (values) => {
                        const DATA = {
                          Task_Name: values.Task_Name,
                          Task_Description: values.Task_Description,
                          Task_Assigned_To: values.Task_Assigned_To,
                          Task_Assigned_By: values.Task_Assigned_By,
                          Task_Deadline: values.Task_Deadline,
                          Task_Status: values.Task_Status
                        };                        
                        try {
                            const response = await axios.post(`${import.meta.env.VITE_LOCALHOST}/api/createtask`, DATA, {
                                headers: {
                                    "Content-Type": "application/json",
                                },
                            });
                            console.log('response', response);
                            toast.success("Task Added Successfully");
                            navigate("/TaskDashboard");  
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
                    {({ handleSubmit }) => (

        <div className="px-10">
        <div className="p-3">
          <label className="block mb-2  font-medium text-gray-900 text-xl capitalize">Task Name</label>
          <Field type="text" name="Task_Name" className="bg-gray-50 border border-gray-300 text-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-200 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-900 dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Doe" required />
          <ErrorMessage name="Task_Name" component="div" className="text-red-500 pt-3" />

        </div>
        <div className="p-3">
          <label className="block mb-2  font-medium text-gray-900 text-xl capitalize">Task description</label>
          <Field as="textarea" name="Task_Description" rows={4} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-200 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-900  dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your thoughts here..."></Field>
          <ErrorMessage name="Task_Description" component="div" className="text-red-500 pt-3" />
          </div>
        <div className="p-3">
          <label className="block mb-2  font-medium text-gray-900 text-xl capitalize">Task Assigned to</label>
          <Field type="text" name="Task_Assigned_To" className="bg-gray-50 border border-gray-300 text-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-200 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-900 dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Doe" required />
                 <ErrorMessage name="Task_Assigned_To" component="div" className="text-red-500 pt-3" />

        </div>
        <div className="p-3">
          <label className="block mb-2  font-medium text-gray-900 text-xl capitalize">Task Assigned by</label>
          <Field type="text" name="Task_Assigned_By" className="bg-gray-50 border border-gray-300 text-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-200 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-900 dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Doe" required />
          <ErrorMessage name="Task_Assigned_By" component="div" className="text-red-500 pt-3" />

        </div>
        
        <div className="p-3">
          <label className="block mb-2  font-medium text-gray-900 text-xl capitalize">Task status</label>
          <Field as="select" name="Task_Status" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-200 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-900 dark:focus:ring-blue-500 dark:focus:border-blue-500">
            <option selected>Select Task Status</option>
            <option value="High">High</option>
            <option value="Medium">Medium</option>
            <option value="Low">Low</option>
            <option value="Hold">Hold</option>
            <option value="Close">Close</option>
          </Field>
          <ErrorMessage name="Task_Status" component="div" className="text-red-500 pt-3" />  

          </div>
        <div className="p-3">
          <label className="block mb-2  font-medium text-gray-900 text-xl capitalize">Task Deadline</label>
          <Field type="Date" name="Task_Deadline" className="bg-gray-50 border border-gray-300 text-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-200 dark:border-gray-600 dark:placeholder-gray-500 dark:text-gray-900 dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Doe" required />
          <ErrorMessage name="Task_Deadline" component="div" className="text-red-500 pt-3" />
        
        </div>
        <div className="p-3">
        <button type="button"
        onClick={()=>handleSubmit()}
        className="text-white hover:text-white border bg-blue-700 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-gray-500 dark:text-white dark:hover:text-white dark:hover:bg-gray-900 dark:focus:ring-blue-800">Create Task</button>
        </div>
      </div>
                    )}
      </Formik>
    </div>
  )
}

export default Createtask