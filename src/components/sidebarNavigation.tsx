import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { RiPieChart2Fill } from "react-icons/ri";
import { MdBarChart } from "react-icons/md";
import { GrUserWorker } from "react-icons/gr";
import { HiOutlineLogout } from "react-icons/hi";
import { toast } from "react-toastify";

function SidebarNavigation() {
  const navigate = useNavigate();
  const [activeItem, setActiveItem] = useState("dashboard");
  const menuItems = [
    {
      name: "dashboard",
      label: "Dashboard",
      icon: <RiPieChart2Fill size={24} />,
      to: "/",
    },
    {
      name: "application",
      label: "Leads",
      icon: <MdBarChart size={24} />,
      to: "/Applicationlist",
    },
    {
      name: "reject ",
      label: "Reject Leads",
      icon: <MdBarChart size={24} />,
      to: "/RejectTable",
    },
    // {
    //   name: "employees",
    //   label: "Employees",
    //   icon: <GrUserWorker size={24} />,
    //   to: "/Employeelist",
    // },
    // {
    //   name: "admins",
    //   label: "Admins",
    //   icon: <GrUserWorker size={24} />,
    //   to: "/adminlist",
    // },
    {
      name: "logout",
      label: "Log Out",
      icon: <HiOutlineLogout size={24} />,
      to: "/",
    },
  ];

  return (
    <aside
      id="sidebar-multi-level-sidebar"
      className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
      aria-label="Sidebar"
    >
      <div className="h-full px-3 py-4 overflow-y-auto bg-[#FDFBFF]">
        <ul className="space-y-2 font-medium">
          <div className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white pb-6">
            <p
              className="text-xl cursor-pointer capitalize font-serif font-bold"
              onClick={() => navigate("/")}
            >
              Vineatz Salesforce
            </p>
          </div>
          {menuItems.map((item) => (
            <Link
              key={item.name}
              to={item.to}
              onClick={() => {
                setActiveItem(item.name);
                if (item.name === "logout") {
                  const Comfirmation = window.confirm(
                    "Are you sure you want to logout?"
                  );
                  if (Comfirmation == true) {
                    try {
                      localStorage.clear();
                      toast.success("Logout Successfully");
                      setTimeout(() => {
                        window.location.reload();
                      }, 2000);
                    } catch (error) {
                      setActiveItem("dashboard");
                      console.log(error, "Error Message");
                    }
                  } else {
                    setActiveItem("dashboard");
                  }
                } else {
                  navigate(item.to);
                }
              }}
              className={`flex items-center p-2 rounded-lg group ${
                activeItem === item.name
                  ? "bg-[#BF9FFF] text-white"
                  : "text-gray-900 hover:bg-[#BF9FFF] hover:text-white"
              }`}
            >
              <div
                className={`${
                  activeItem === item.name
                    ? "text-white"
                    : "text-[#737791] group-hover:text-white"
                }`}
              >
                {item.icon}
              </div>
              <span
                className={`flex-1 ms-3 whitespace-nowrap capitalize ${
                  activeItem === item.name
                    ? "text-white"
                    : "text-[#737791] group-hover:text-white"
                }`}
              >
                {item.label}
              </span>
            </Link>
          ))}
        </ul>
      </div>
    </aside>
  );
}

export default SidebarNavigation;
