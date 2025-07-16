
// import SidebarNavigation from "./components/sidebarNavigation"

import HeaderNavigation from "./HeaderNavigation";
import LoginPage from "./loginPage";
import RegisterPage from "./registerPage";
import SidebarNavigation from "./sidebarNavigation";
import { useState } from "react";

function Layoutpage() {
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);
  const [isRegisterOpen, setIsRegisterOpen] = useState<boolean>(false);
  return (
    <>
      <SidebarNavigation />
      <HeaderNavigation />
      {/* <RegisterPage isRegisterOpen={isRegisterOpen} setIsRegisterOpen={setIsRegisterOpen} /> */}
      {/* <LoginPage isDrawerOpen={isDrawerOpen} setIsDrawerOpen={setIsDrawerOpen} /> */}
    </>
  )
}

export default Layoutpage