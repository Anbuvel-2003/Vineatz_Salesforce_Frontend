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
                Dashboard
              </span>
            </Link>
            <Link
              to="/"
              className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white  hover:bg-white  group"
            >
              <svg
                className="w-6 h-6 text-white group-hover:text-[#8253e1]"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M5 13.17a3.001 3.001 0 0 0 0 5.66V20a1 1 0 1 0 2 0v-1.17a3.001 3.001 0 0 0 0-5.66V4a1 1 0 0 0-2 0v9.17ZM11 20v-9.17a3.001 3.001 0 0 1 0-5.66V4a1 1 0 1 1 2 0v1.17a3.001 3.001 0 0 1 0 5.66V20a1 1 0 1 1-2 0Zm6-1.17V20a1 1 0 1 0 2 0v-1.17a3.001 3.001 0 0 0 0-5.66V4a1 1 0 1 0-2 0v9.17a3.001 3.001 0 0 0 0 5.66Z" />
              </svg>

              <span className="flex-1 ms-3 whitespace-nowrap capitalize  text-white group-hover:text-[#8253e1]">
                Lead list
              </span>
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
                  d="M15 5v14m-8-7h2m0 0h2m-2 0v2m0-2v-2m12 1h-6m6 4h-6M4 19h16c.5523 0 1-.4477 1-1V6c0-.55228-.4477-1-1-1H4c-.55228 0-1 .44772-1 1v12c0 .5523.44772 1 1 1Z"
                />
              </svg>

              <span className="flex-1 ms-3 whitespace-nowrap text-white group-hover:text-[#8253e1]">
                Application list
              </span>
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
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M6 2c-1.10457 0-2 .89543-2 2v4c0 .55228.44772 1 1 1s1-.44772 1-1V4h12v7h-2c-.5523 0-1 .4477-1 1v2h-1c-.5523 0-1 .4477-1 1s.4477 1 1 1h5c.5523 0 1-.4477 1-1V3.85714C20 2.98529 19.3667 2 18.268 2H6Z" />
                <path d="M6 11.5C6 9.567 7.567 8 9.5 8S13 9.567 13 11.5 11.433 15 9.5 15 6 13.433 6 11.5ZM4 20c0-2.2091 1.79086-4 4-4h3c2.2091 0 4 1.7909 4 4 0 1.1046-.8954 2-2 2H6c-1.10457 0-2-.8954-2-2Z" />
              </svg>

              <span className="flex-1 ms-3 whitespace-nowrap text-white group-hover:text-[#8253e1]">
                Employee List
              </span>
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
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  fill-rule="evenodd"
                  d="M8.97 14.316H5.004c-.322 0-.64-.08-.925-.232a2.022 2.022 0 0 1-.717-.645 2.108 2.108 0 0 1-.242-1.883l2.36-7.201C5.769 3.54 5.96 3 7.365 3c2.072 0 4.276.678 6.156 1.256.473.145.925.284 1.35.404h.114v9.862a25.485 25.485 0 0 0-4.238 5.514c-.197.376-.516.67-.901.83a1.74 1.74 0 0 1-1.21.048 1.79 1.79 0 0 1-.96-.757 1.867 1.867 0 0 1-.269-1.211l1.562-4.63ZM19.822 14H17V6a2 2 0 1 1 4 0v6.823c0 .65-.527 1.177-1.177 1.177Z"
                  clip-rule="evenodd"
                />
              </svg>

              <span className="flex-1 ms-3 whitespace-nowrap text-white group-hover:text-[#8253e1]">
                Client Reject List
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

              <span className="flex-1 ms-3 whitespace-nowrap text-white group-hover:text-[#8253e1]">
                Profiles
              </span>
            </Link>
          </ul>
        </div>
      </aside>
    </>
  );
}

export default SidebarNavigation;
