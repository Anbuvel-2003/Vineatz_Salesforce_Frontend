import { useEffect, useState } from "react";
import LoginPage from "./loginPage";
import RegisterPage from "./registerPage";
import { FaRegBell } from "react-icons/fa";
import Profileimg from "../assets/profile.png";
import { MdOutlineCancel } from "react-icons/md";
import { authApi } from "@/config/fetchData";
interface NotificationItem {
  id: number;
  name: string;
  isview: boolean;
  message: string;
}
function HeaderNavigation() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [userdata, setUserdata] = useState<any>(null);
  const [isRegisterOpen, setIsRegisterOpen] = useState<boolean>(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);
  const [isopennotification, setIsopennotification] = useState<boolean>(false);
  const [notificationdata, setNotificationdata] = useState<any[]>([]);
  useEffect(() => {
    getuserdata();
    getNotificationData();
  }, []);
  const getuserdata = () => {
    try {
      const user = localStorage.getItem("user_data");
      const parsedUser = user ? JSON.parse(user) : null;
      console.log("parsedUser", parsedUser);

      setUserdata(parsedUser);
    } catch (error) {
      console.log(error, "Get User Error Message");
    }
  };
  const getNotificationData = async () => {
    try {
      const response = await authApi.NotificationApi();
      if (response?.success) {
        console.log("Notification Data:", response.data);
        setNotificationdata(response.data);
      } else {
        console.log("Failed to fetch notifications");
      }
    } catch (error) {
      console.log(error, "Get All Error Message");
    }
  };
  return (
    <nav className=" border-gray-200 bg-[#FDFBFF]">
      <div className="flex justify-between !p-3">
        <div className="!pl-[15%]">
          <h2 className="text-[24px] font-bold">{`Hi,${userdata?.first_Name}`}</h2>
          <h2>Let’s check your Dashboard</h2>
        </div>
        <div>
          <div className="flex place-items-center !gap-5 ">
            <div
              className="bg-white p-3 rounded-full relative cursor-pointer z-1"
              onClick={() => setIsopennotification(!isopennotification)}
            >
              <FaRegBell size={25} color="#BE9EFE" />
              <div className="absolute top-1  right-2 w-2 h-2 bg-[#BE9EFE] rounded-full">
                <span></span>
              </div>
            </div>
            {isopennotification && (
              <div className="absolute right-20 top-20 w-80 bg-white border border-gray-200 rounded-lg shadow-lg z-1 ">
                <div className="flex items-center justify-between p-4">
                  <h3 className="text-[20px] font-semibold">Notification</h3>
                  <div
                    onClick={() => setIsopennotification(false)}
                    className="cursor-pointer"
                  >
                    <MdOutlineCancel size={28} color="red" />
                  </div>
                </div>
                <div className="">
                  {notificationdata.length ? (
                    notificationdata.map((item) => (
                      <div
                        key={item.id}
                        className={`mb-4 px-4 py-2 rounded ${
                          item.is_read
                            ? "bg-[#FFFF]"
                            : "bg-[#F5F1FF] cursor-pointer"
                        }`}
                      >
                        <p className="text-[16px] text-black py-1">
                          Lead Received!
                        </p>
                        <p className="text-sm text-[#808080] pb-1">
                          {`The lead has been received for ${item?.Application_Name}, please check and process it`}
                        </p>
                      </div>
                    ))
                  ) : (
                    <p className="text-sm text-gray-500 text-center">
                      No new notifications
                    </p>
                  )}
                </div>
              </div>
            )}
            <div>
              <img src={Profileimg} className="" />
            </div>
            <div>
              <h3 className="text-black font-bold text-[16px]">
                {userdata?.first_Name}
              </h3>
              <h3 className="text-[#737791] text-[14px]">Admin</h3>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default HeaderNavigation;
