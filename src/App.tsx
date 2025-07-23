import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Layoutpage from "./components/layout";
import Dashboard from "./components/dashBoard";
import AddProject from "./components/addProject";
import UpdateProject from "./components/updateProject";
import TaskDashboard from "./components/TaskDashboard";
import Createtask from "./components/createtask";
import UpdateTask from "./components/UpdateTask";
import Createapplication from "./components/createapplication";
import Applicationlist from "./components/applicationlist";
import Applicationslist from "./components/applicationslist";
import Login from "./components/login";
import UpdateApplication from "./components/updateapplication";
import ManageApplication from "./components/manageapplication";
import Employeelist from "./components/employeelist";
import Adminlist from "./components/adminlist";
import Adduser from "./components/adduser";
import Updateuser from "./components/updateuser";
import Updateemployee from "./components/Updateemployee";
import Addemployee from "./components/addemployee";
import Clientmanagement from "./components/clientmanagement";
import Rejectapplication from "./components/rejectapplication";

function App(): JSX.Element {
  const user = localStorage.getItem("user_id");
  const parsedUser = user ? JSON.parse(user) : null;

  return (
    <>
      <BrowserRouter>
        {parsedUser ? (
          <>
            <Layoutpage />
            <div className="sm:ml-64">
              <Routes>
                {/* <Route path="/" element={<Applicationdetails />} /> */}
                <Route path="/" element={<Dashboard />} />
                {/* <Route path="/" element={<Clientmanagement />} /> */}
                {/* <Route path="/" element={<Rejectapplication appid={""} clientname={""} children={undefined} />} /> */}
                <Route path="/manageleadlist" element={<ManageApplication />} />
                <Route path="/Applicationlist" element={<Applicationslist />} />
                <Route path="/AddProject" element={<AddProject />} />
                <Route path="/Employeelist" element={<Employeelist />} />
                <Route path="/addemployee" element={<Addemployee />} />
                <Route path="/adminlist" element={<Adminlist />} />
                <Route path="/adduser" element={<Adduser />} />
                <Route path="/updateuser/:id" element={<Updateuser />} />
                <Route path="/updateemployee/:id" element={<Updateemployee />} />
                <Route path="/UpdateProject/:id" element={<UpdateProject />} />
                <Route path="/TaskDashboard" element={<TaskDashboard />} />
                <Route path="/CreateTask" element={<Createtask />} />
                <Route path="/UpdateTask/:id" element={<UpdateTask />} />
                <Route
                  path="/createapplication"
                  element={<Createapplication />}
                />
                <Route
                  path="/UpdateApplication/:id"
                  element={<UpdateApplication />}
                />
              </Routes>
            </div>
          </>
        ) : (
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<Navigate to="/login" replace />} />
          </Routes>
        )}
      </BrowserRouter>
      <ToastContainer />
    </>
  );
}

export default App;
