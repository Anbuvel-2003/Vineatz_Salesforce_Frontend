import { useState } from "react";
import LoginPage from "./loginPage";
import RegisterPage from "./registerPage";

function HeaderNavigation() {
    const [isOpen, setIsOpen] = useState<boolean>(false); 

    const [isRegisterOpen, setIsRegisterOpen] = useState<boolean>(false);
    const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);

    return (
        <nav className=" border-gray-200 bg-[#8253e1]">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-end mx-auto p-4">
              {
                localStorage.getItem('user_id') ?
              <div className="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse gap-3">
                  <button type="button" className="flex text-sm bg-gray-800 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" id="user-menu-button" aria-expanded="false"
                   data-dropdown-toggle="user-dropdown" data-dropdown-placement="bottom"
                    onClick={() => setIsOpen(!isOpen)}
                   >
                      <span className="sr-only ">Open user menu</span>
                      {/* <img className="w-8 h-8 rounded-full" src="https://flowbite.com/docs/images/people/profile-picture-5.jpg" alt="user photo"/> */}
                  </button>
                  <div className="flex gap-2 text-center border-gray-900 border-2 p-2 rounded-lg justify-center hover:bg-red-500 hover:border-red-500"
                   onClick={()=>{localStorage.removeItem('user_id'),window.location.reload()}}>
                  
                  <svg className="flex-shrink-0 w-5 h-5 text-gray-100 transition duration-75 dark:text-gray-40 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 16">
                              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 8h11m0 0L8 4m4 4-4 4m4-11h3a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-3" />
                           </svg>
                           <h2 className="cursor-pointer text-gray-50 capitalize text-center justify-center ">logout</h2>
                    </div>
              </div> :
                
                <div className="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                    <div className="flex">
                    <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm0 0a8.949 8.949 0 0 0 4.951-1.488A3.987 3.987 0 0 0 13 16h-2a3.987 3.987 0 0 0-3.951 3.512A8.948 8.948 0 0 0 12 21Zm3-11a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/>
</svg>

                    <h2 className="ms-3 cursor-pointer text-gray-50 capitalize " onClick={() => setIsDrawerOpen(!isDrawerOpen)}>login </h2>
                    <span className="ms-3  text-gray-50">/</span>
                    <h2 className="ms-3 cursor-pointer text-gray-50 capitalize " onClick={() => setIsRegisterOpen(!isRegisterOpen)}>register</h2>
                    </div>
                </div>
            }
            </div>

            {isDrawerOpen ?
            <LoginPage isDrawerOpen={isDrawerOpen} setIsDrawerOpen={setIsDrawerOpen}/>: null   
         } 
         {
            isRegisterOpen ? 
            <RegisterPage isRegisterOpen={isRegisterOpen} setIsRegisterOpen={setIsRegisterOpen}/> :null 
         }
        </nav>
    );
}

export default HeaderNavigation;
