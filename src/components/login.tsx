import { useState } from "react";
import HeaderNavigation from "./HeaderNavigation";
import RegisterPage from "./registerPage";
import LoginPage from "./loginPage";
import homepage from "../assets/homepage.jpg";

function Login() {
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);
  const [isRegisterOpen, setIsRegisterOpen] = useState<boolean>(false);
  return (
    <div>
      <HeaderNavigation />
      <RegisterPage
        isRegisterOpen={isRegisterOpen}
        setIsRegisterOpen={setIsRegisterOpen}
      />
      <LoginPage
        isDrawerOpen={isDrawerOpen}
        setIsDrawerOpen={setIsDrawerOpen}
      />
      <div className="w-full h-[94vh]">
        <img src={homepage} alt="HomePage UI" className="w-full h-full object-cover" />
      </div>
    </div>
  );
}

export default Login;
