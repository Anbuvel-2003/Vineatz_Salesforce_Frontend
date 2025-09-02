import React, { useState, useEffect } from "react";
import { IoChevronBackOutline, IoChevronForwardOutline } from "react-icons/io5";
import { MdOutlineFilterAlt } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import ViewIcon from "../assets/viewicon.png";
import { GoPlus } from "react-icons/go";
import FilterSection from "./filtersection";
import { authApi } from "@/config/fetchData";

interface LeadData {
  _id: string;
  Name: string;
  Mobilenumber: string;
  Id: string;
  Application_Id: string;
  Status: number;
  Joining_Date: string;
  Application_Name: string;
  Is_rejected: boolean;
}

const Teamleadlist: React.FC = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [sortField, setSortField] = useState<keyof LeadData | "">("");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(1);
  const [leads, setLeads] = useState<LeadData[]>([]);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [activeFilters, setActiveFilters] = useState({
    leadStages: [] as string[],
  });
  const [loading, setLoading] = useState(false);
  const fetchLeads = async () => {
    setLoading(true);
    try {
      const res = await authApi.GetTeamLeads(
        currentPage + 1,
        itemsPerPage,
        searchTerm,
        sortField,
        sortOrder,
        activeFilters.leadStages
      );
      setLeads(res.data);
      console.log("res", res?.data);

      setTotalPages(res?.totalPages);
    } catch (err) {
      console.error("Failed to fetch leads:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchLeads();
  }, [
    searchTerm,
    sortField,
    sortOrder,
    currentPage,
    itemsPerPage,
    activeFilters,
  ]);

  const handleSort = (field: keyof LeadData) => {
    console.log(field, "field");
    if (sortField === field) {
      setSortOrder((prev) => (prev === "asc" ? "desc" : "asc"));
    } else {
      setSortField(field);
      setSortOrder("asc");
    }
  };

  const statusMap: Record<number, string> = {
    0: "Initial",
    1: "Prospect",
    2: "Qualify",
    3: "Demo",
    4: "Proposal",
    5: "Onboard",
    6: "Account",
  };
  const statusColorMap: Record<string, string> = {
    Initial: "text-blue-500 border-blue-500",
    Prospect: "text-purple-500 border-purple-500",
    Qualify: "text-yellow-500 border-yellow-500",
    Demo: "text-pink-500 border-pink-500",
    Proposal: "text-orange-500 border-orange-500",
    Onboard: "text-green-500 border-green-500",
    Account: "text-gray-500 border-gray-500",
    Unknown: "text-gray-400 border-gray-400",
  };
  return (
    <div className="p-6">
      <h2 className="text-xl font-semibold mb-4"> Team Lead Table</h2>
      {/* Filters */}
      <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-4 justify-between w-full">
        <div className="flex items-center gap-2 w-[90%]">
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              setCurrentPage(0); // reset page on search
            }}
            className="p-2 border border-[#BF9FFF] rounded w-full sm:w-1/2 placeholder-[#989898] text-sm focus:outline-none focus:border-[#BF9FFF] focus:ring-1 focus:ring-[#BF9FFF]"
          />
          <div
            className="group flex items-center gap-1 border border-[#BF9FFF] rounded p-2 hover:bg-[#BF9FFF] cursor-pointer"
            onClick={() => setIsDrawerOpen(true)}
          >
            <MdOutlineFilterAlt
              size={20}
              className="text-[#BF9FFF] group-hover:text-white transition-colors duration-200"
            />
            <h2 className="text-sm text-[#BF9FFF] group-hover:text-white">
              Filter
            </h2>
          </div>
          <div
            className="group flex items-center gap-1 border border-[#BF9FFF] rounded p-2 hover:bg-[#BF9FFF] cursor-pointer"
            onClick={() => navigate("/Addteamlead")}
          >
            <GoPlus
              size={20}
              className="text-[#BF9FFF] group-hover:text-white transition-colors duration-200"
            />
            <h2 className="text-sm text-[#BF9FFF] group-hover:text-white">
              Create
            </h2>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 text-sm">
            <label htmlFor="itemsPerPage">Rows :</label>
            <input
              id="itemsPerPage"
              type="number"
              min={1}
              value={itemsPerPage}
              onChange={(e) => {
                const value = Math.max(1, Number(e.target.value));
                setItemsPerPage(value);
                setCurrentPage(0);
              }}
              className="w-16 p-2 border border-[#BF9FFF] rounded text-[#BF9FFF] focus:outline-none focus:border-[#BF9FFF] focus:ring-1 focus:ring-[#BF9FFF]"
            />
          </div>
        </div>
      </div>
      {/* Table */}
      <div className="overflow-x-auto bg-white shadow rounded-lg">
        <table className="min-w-full text-left border">
          <thead className="bg-[#e6daff] text-sm font-medium text-[#1d1d1d]">
            <tr>
              {[
                "Name",
                "Mobilenumber",
                "ProductID",
                "ProductName",
                "Status",
                "Date",
              ].map((col) => (
                <th
                  key={col}
                  className="p-3 border cursor-pointer select-none uppercase text-center"
                  onClick={() => handleSort(col as keyof LeadData)}
                >
                  {col.toUpperCase()}{" "}
                  {sortField === col && (sortOrder === "asc" ? "▲" : "▼")}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {leads.map((lead, index) => {
              console.log("lead", lead?.Is_rejected == true);
              // if (lead?.Is_rejected == true) {
              //   return null;
              // }
              const statusLabel = statusMap[lead.Status] || "Unknown";
              const colorClass =
                statusColorMap[statusLabel] || "text-gray-400 border-gray-400";
              return (
                <tr
                  key={index}
                  className="text-sm hover:bg-[#f1ebfb] cursor-pointer"
                  onClick={() => {
                    // navigate(`/leaddetails/${lead.leadID}`);
                    navigate(`/leaddetails/${lead._id}`, {
                      state: { value: lead },
                    });
                  }}
                >
                  {/* <td className="p-3 border text-center text-[#707070]">
                  {lead.Id}
                </td> */}
                  <td className="p-3 border text-center text-[#707070]">
                    {lead.Name}
                  </td>
                  <td className="p-3 border text-center text-[#707070]">
                    {lead.Mobilenumber}
                  </td>
                  <td className="p-3 border text-center text-[#707070]">
                    {lead.Application_Id}
                  </td>
                  <td className="p-3 border text-center text-[#707070]">
                    {lead.Application_Name}
                  </td>
                  <td
                    className={`p-3 border text-center text-[#707070] place-items-center `}
                  >
                    <div
                      className={`flex items-center justify-center border py-1 w-[70%] rounded-[10px] ${colorClass}`}
                    >
                      <h2 className="">
                        {" "}
                        {statusMap[lead.Status] || "Unknown"}
                      </h2>
                    </div>
                  </td>
                  <td className="p-3 border text-center text-[#707070]">
                    {new Date(lead?.Joining_Date).toLocaleDateString("en-GB", {
                      day: "2-digit",
                      month: "short",
                      year: "numeric",
                    })}
                  </td>
                </tr>
              );
            })}
            {leads.length === 0 && !loading && (
              <tr>
                <td colSpan={8} className="p-4 text-center text-gray-500">
                  No data found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-between items-center mt-4">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 0))}
            disabled={currentPage === 0}
            className="px-4 py-2 rounded border border-[#BF9FFF] hover:bg-[#BF9FFF] text-[#BF9FFF] hover:text-white flex items-center gap-2 disabled:opacity-50"
          >
            <IoChevronBackOutline />
            Previous
          </button>
          <span className="text-sm text-[#707070]">
            Page <span className="text-[#1d1d1d]">{currentPage + 1}</span> of{" "}
            {totalPages}
          </span>
          <button
            onClick={() =>
              setCurrentPage((prev) => Math.min(prev + 1, totalPages - 1))
            }
            disabled={currentPage >= totalPages - 1}
            className="px-4 py-2 rounded border border-[#BF9FFF] hover:bg-[#BF9FFF] text-[#BF9FFF] hover:text-white flex items-center gap-2 disabled:opacity-50"
          >
            Next
            <IoChevronForwardOutline />
          </button>
        </div>
      )}
      {/* Drawer Filter */}
      <FilterSection
        isDrawerOpen={isDrawerOpen}
        setIsDrawerOpen={setIsDrawerOpen}
        onFilterApply={(filters) => {
          setActiveFilters({
            leadStages: filters.leadStages.map(String),
          });
        }}
      />
    </div>
  );
};

export default Teamleadlist;
