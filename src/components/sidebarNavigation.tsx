import { Link, useNavigate } from "react-router-dom";
function SidebarNavigation() {
  const navigate = useNavigate();
  return (
    <>
      <aside
        id="sidebar-multi-level-sidebar"
        className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-4 overflow-y-auto bg-[#8253e1]">
          <ul className="space-y-2 font-medium">
            <div className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white pb-6">
              <p
                className="text-xl cursor-pointer capitalize font-serif font-bold"
                onClick={() => {
                  navigate("/");
                }}
              >
                Vineatz Salesforce
              </p>
            </div>

            <Link
              to="/"
              className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white  hover:bg-white  group"
            >
              <svg
                className="w-6 h-6  text-white group-hover:text-[#8253e1] "
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M7 6H5m2 3H5m2 3H5m2 3H5m2 3H5m11-1a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2M7 3h11a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Zm8 7a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"
                />
              </svg>

              <span className="flex-1 ms-3 whitespace-nowrap capitalize  text-white group-hover:text-[#8253e1]">
                Lead list
              </span>
            </Link>
            <Link
              to="/AddProject"
              className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white  hover:bg-white  group"
            >
              <svg
                className="w-6 h-6  text-white group-hover:text-[#8253e1]"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 7.757v8.486M7.757 12h8.486M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>

              <span className="flex-1 ms-3 whitespace-nowrap  text-white group-hover:text-[#8253e1]">Add lead</span>
            </Link>

            <Link
              to="/Applicationlist"
              className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white  hover:bg-white  group"
            >
              <svg
                className="w-6 h-6 text-white group-hover:text-[#8253e1]"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M7 6H5m2 3H5m2 3H5m2 3H5m2 3H5m11-1a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2M7 3h11a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Zm8 7a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"
                />
              </svg>

              <span className="flex-1 ms-3 whitespace-nowrap text-white group-hover:text-[#8253e1]">
                Application list
              </span>
            </Link>
            {/* <Link
              to="/createapplication"
              className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white  hover:bg-white  group"
            >
              <svg
                className="w-6 h-6 text-white group-hover:text-[#8253e1]"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 4h1.5L8 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm.75-3H7.5M11 7H6.312M17 4v6m-3-3h6"
                />
              </svg>

              <span className="flex-1 ms-3 whitespace-nowrap text-white group-hover:text-[#8253e1]">
                Add Application
              </span>
            </Link> */}
            <Link
              to="/TaskDashboard"
              className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white  hover:bg-white  group"
            >
              <svg
                className="w-6 h-6 text-white group-hover:text-[#8253e1]"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="square"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M10 19H5a1 1 0 0 1-1-1v-1a3 3 0 0 1 3-3h2m10 1a3 3 0 0 1-3 3m3-3a3 3 0 0 0-3-3m3 3h1m-4 3a3 3 0 0 1-3-3m3 3v1m-3-4a3 3 0 0 1 3-3m-3 3h-1m4-3v-1m-2.121 1.879-.707-.707m5.656 5.656-.707-.707m-4.242 0-.707.707m5.656-5.656-.707.707M12 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
              </svg>

              <span className="flex-1 ms-3 whitespace-nowrap text-white group-hover:text-[#8253e1]">Profiles</span>
            </Link>
          </ul>
        </div>
      </aside>
    </>
  );
}

export default SidebarNavigation;
