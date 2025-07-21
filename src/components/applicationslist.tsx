// Applicationslist.tsx or .js
import vineatz from "../assets/vineatz.png";
import accrix from "../assets/accrix.png";

const apps = [
  {
    name: "Vineatz Technologies",
    image: vineatz,
    link: "/",
    leads: "5000",
    growth: "+8% from yesterday",
  },
  {
    name: "Accrix",
    image: accrix,
    link: "/",
    leads: "3200",
    growth: "+12% from yesterday",
  },
];

function Applicationslist() {
  return (
    <div className="bg-[#F4FFFE] min-h-screen w-full ">
      <div className="grid grid-cols-4 gap-4 px-5 mx-10 mb-10 !py-10">
        {apps.map((app, index) => (
          <div
            key={index}
            className="rounded-[15px] items-center text-center bg-white py-5 shadow hover:shadow-lg transition duration-300"
          >
            <img
              src={app.image}
              alt={app.name}
              className="w-[76px] h-[48px] mx-auto my-4"
            />
            <h2 className="text-[#030229] font-poppins text-[24px] font-medium">
              {app.name}
            </h2>
            <p className="text-[14px] my-2 font-poppins text-[#030229]">
              Total Leads
            </p>
            <a
              href={app.link}
              target="_blank"
             
              className="mt-2 block text-[24px] font-bold text-[#030229]"
            >
              {app.leads}
            </a>
            <p className="text-sm text-[#4079ED] font-poppins">{app.growth}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Applicationslist;
