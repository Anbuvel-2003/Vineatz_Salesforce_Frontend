import vineatz from "../assets/vineatz.png";
import accrix from "../assets/accrix.png";
import { useNavigate } from "react-router-dom";

const apps = [
  {
    name: "Vineatz Technologies",
    image: vineatz,
    link: "/manageleadlist",
    leads: "5000",
    growth: "+8% from yesterday",
  },
  {
    name: "Accrix",
    image: accrix,
    link: "/manageleadlist",
    leads: "3200",
    growth: "+12% from yesterday",
  },
];

function Applicationslist() {
  const navigate = useNavigate();

  return (
    <div className="bg-[#FDFBFF] min-h-screen w-full">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 px-5 mx-10 py-10">
        {apps.map((app, index) => (
          <div
            key={index}
            className="rounded-[15px] bg-white py-5 shadow hover:shadow-lg transition duration-300 cursor-pointer text-center"
            onClick={() => navigate(app.link)}
          >
            <img
              src={app.image}
              alt={app.name}
              className="w-[76px] h-[48px] mx-auto my-4"
            />
            <h2 className="text-[#030229] font-poppins text-[20px] font-semibold">
              {app.name}
            </h2>
            <p className="text-[14px] my-2 font-poppins text-[#030229]">
              Total Leads
            </p>
            <p className="text-[24px] font-bold text-[#030229]">
              {app.leads}
            </p>
            <p className="text-sm text-[#4079ED] font-poppins">
              {app.growth}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Applicationslist;
