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
import Login from "./components/login";
import UpdateApplication from "./components/updateapplication";

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
                <Route path="/" element={<Dashboard />} />
                <Route path="/AddProject" element={<AddProject />} />
                <Route path="/UpdateProject/:id" element={<UpdateProject />} />
                <Route path="/TaskDashboard" element={<TaskDashboard />} />
                <Route path="/CreateTask" element={<Createtask />} />
                <Route path="/UpdateTask/:id" element={<UpdateTask />} />
                <Route
                  path="/createapplication"
                  element={<Createapplication />}
                />
                <Route path="/Applicationlist" element={<Applicationlist />} />
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
