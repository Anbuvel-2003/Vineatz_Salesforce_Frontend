import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Layoutpage from "./components/layout";
import Dashboard from "./components/dashBoard";
import AddProject from "./components/addProject";
import UpdateProject from "./components/updateProject";
import Createapplication from "./components/createapplication";
import Applicationslist from "./components/applicationslist";
import Login from "./components/login";
import UpdateApplication from "./components/updateapplication";
import ManageApplication from "./components/manageapplication";
import Adminlist from "./components/adminlist";
import Adduser from "./components/adduser";
import Updateuser from "./components/updateuser";
import Updateemployee from "./components/Updateemployee";
import Addemployee from "./components/addemployee";
import Clientmanagement from "./components/clientmanagement";
import Applicationdetails from "./components/applicationdetails";
import Applicationdetailsmanual from "./components/applicationdetailmanual";
import Admincreation from "./components/admincreation";
import Adminupdation from "./components/adminupdation";
import LogoutPopup from "./components/logout";
import ForgotPassword from "./components/forgotpassword";
import Otpscreen from "./components/otpscreen";
import NewPassword from "./components/newpassword";
import Leaddetails from "./components/leaddetails";
import RejectTable from "./components/rejecttable";
import Employeelist from "./components/Employeelist";
import Snapscrolling from "./components/snapscrolling";
import Teamleadlist from "./components/teamleadlist";
import Teamlist from "./components/teamlist";
import Addteamlead from "./components/createteamlead";
import Leadtable from "./components/leadtable";

function App(): JSX.Element {
  const user = localStorage.getItem("user_id");
  const parsedUser = user ? JSON.parse(user) : null;

  return (
    <>
      <BrowserRouter>
        {!parsedUser ? (
          <>
            <Layoutpage />
            <div className="sm:ml-64">
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route
                  path="/applicationdetails"
                  element={<Applicationdetails />}
                />
                <Route path="/manageleadlist" element={<ManageApplication />} />
                <Route path="/Admincreation" element={<Admincreation />} />
                <Route path="/Adminupdation" element={<Adminupdation />} />
                <Route path="/RejectTable" element={<RejectTable />} />
                <Route
                  path="/Clientmanagement"
                  element={<Clientmanagement />}
                />
                <Route
                  path="/Applicationdetailsmanual"
                  element={<Applicationdetailsmanual />}
                />
                <Route path="/Applicationlist" element={<Applicationslist />} />
                <Route path="/Createapplication" element={<Createapplication />} />
                <Route path="/Leadlist" element={<Leadtable />} />
                <Route path="/Logout" element={<LogoutPopup />} />
                <Route path="/AddProject" element={<AddProject />} />
                <Route path="/Employeelist" element={<Employeelist />} />
                <Route path="/addemployee" element={<Addemployee />} />
                <Route path="/updateemployee" element={<Updateemployee />} />
                <Route path="/adminlist" element={<Adminlist />} />
                <Route path="/adduser" element={<Adduser />} />
                <Route path="/leaddetails/:id" element={<Leaddetails />} />
                <Route path="/updateuser/:id" element={<Updateuser />} />
                <Route
                  path="/updateemployee/:id"
                  element={<Updateemployee />}
                />
                <Route path="/UpdateProject/:id" element={<UpdateProject />} />
                <Route
                  path="/createapplication"
                  element={<Createapplication />}
                />
                <Route
                  path="/snapscrolling"
                  element={<Snapscrolling />}
                />
                <Route
                  path="/Teamlist"
                  element={<Teamlist />}
                />
                <Route
                  path="/Teamleadlist"
                  element={<Teamleadlist />}
                />
                <Route
                  path="/Addteamlead"
                  element={<Addteamlead />}
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
            <Route
              path="/login"
              element={
                <Login
                  isDrawerOpen={false}
                  setIsDrawerOpen={function (isOpen: boolean): void {
                    throw new Error("Function not implemented.");
                  }}
                />
              }
            />
            <Route path="*" element={<Navigate to="/login" replace />} />
            <Route path="/ForgotPassword" element={<ForgotPassword />} />
            <Route path="/Otpscreen" element={<Otpscreen />} />
            <Route path="/NewPassword" element={<NewPassword />} />
          </Routes>
        )}
      </BrowserRouter>
      <ToastContainer />
    </>
  );
}

export default App;
