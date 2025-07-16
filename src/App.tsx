// // import SidebarNavigation from "./components/sidebarNavigation"

// // import LoginPage from "./components/loginPage"
// //
// // import RegisterPage from "./components/registerPage"

// // import { useState } from 'react'
// import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// // import HeaderNavigation from "./components/HeaderNavigation";
// // import SidebarNavigation from "./components/sidebarNavigation";
// import Layoutpage from "./components/layout";
// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Dashboard from "./components/dashBoard";
// import AddProject from "./components/addProject";
// import UpdateProject from "./components/updateProject";
// import TaskDashboard from "./components/TaskDashboard";
// import Createtask from "./components/createtask";
// import UpdateTask from "./components/UpdateTask";
// import Createapplication from "./components/createapplication";
// import Applicationlist from "./components/applicationlist";
// function App() {
//   // const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);
//   // const [isRegisterOpen, setIsRegisterOpen] = useState<boolean>(false);

//   return (
//     <>
//       <BrowserRouter>
//         <Layoutpage />
//         <div className="sm:ml-64">
//           <Routes>
//             <Route path="/" element={<Dashboard />} />
//             <Route path="/AddProject" element={<AddProject />} />
//             <Route path="/UpdateProject/:id" element={<UpdateProject />} />
//             <Route path="/TaskDashboard" element={<TaskDashboard />} />
//             <Route path="/CreateTask" element={<Createtask />} />
//             <Route path="/UpdateTask/:id" element={<UpdateTask />} />
//             <Route path="/createapplication" element={<Createapplication />} />
//             <Route path="/Applicationlist" element={<Applicationlist />} />
//           </Routes>
//         </div>
//       </BrowserRouter>
//       <ToastContainer />
//     </>
//   );
// }

// export default App;

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
// import LoginPage from "./components/LoginPage"; // Optional

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
            {/* You can uncomment below to use LoginPage */}
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
