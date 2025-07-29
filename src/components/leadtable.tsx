import React, { useState, useEffect } from "react";
import demolist from "../data/demolist.json";
import { IoChevronBackOutline, IoChevronForwardOutline } from "react-icons/io5";
import { MdOutlineFilterAlt, MdSort } from "react-icons/md";
import { IoIosCheckmarkCircle } from "react-icons/io";
import ViewIcon from "../assets/viewicon.png";
import { useNavigate } from "react-router-dom";
import FilterSection from "./filtersection";

interface LeadData {
  leadID: string;
  leadName: string;
  leadPhone: string;
  ProductID: string;
  ProductName: string;
  leadStatus: string;
}

const LeadTableSimple: React.FC = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [sortField, setSortField] = useState<keyof LeadData | null>(null);
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [filteredData, setFilteredData] = useState<LeadData[]>([]);
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);
  const [activeFilters, setActiveFilters] = useState<{
    productId: string;
    leadStages: string[];
  }>({ productId: "", leadStages: [] });
  const [currentPage, setCurrentPage] = useState(0);
  useEffect(() => {
    let filtered = [...demolist];
    if (searchTerm) {
      const lowerSearch = searchTerm.toLowerCase();
      filtered = filtered.filter(
        (item) =>
          item.leadID.toLowerCase().includes(lowerSearch) ||
          item.leadName.toLowerCase().includes(lowerSearch) ||
          item.leadPhone.toLowerCase().includes(lowerSearch) ||
          item.ProductID.toLowerCase().includes(lowerSearch) ||
          item.ProductName.toLowerCase().includes(lowerSearch) ||
          item.leadStatus.toLowerCase().includes(lowerSearch)
      );
    }
    if (sortField) {
      filtered.sort((a, b) => {
        const valA = a[sortField];
        const valB = b[sortField];
        if (valA < valB) return sortOrder === "asc" ? -1 : 1;
        if (valA > valB) return sortOrder === "asc" ? 1 : -1;
        return 0;
      });
    }
    if (activeFilters.leadStages.length > 0) {
      filtered = filtered.filter((item) =>
        activeFilters.leadStages.includes(item.leadStatus.toLowerCase())
      );
    } else {
      if (searchTerm) {
        const lowerSearch = searchTerm.toLowerCase();
        filtered = filtered.filter(
          (item) =>
            item.leadID.toLowerCase().includes(lowerSearch) ||
            item.leadName.toLowerCase().includes(lowerSearch) ||
            item.leadPhone.toLowerCase().includes(lowerSearch) ||
            item.ProductID.toLowerCase().includes(lowerSearch) ||
            item.ProductName.toLowerCase().includes(lowerSearch) ||
            item.leadStatus.toLowerCase().includes(lowerSearch)
        );
      } else {
        filtered = [...demolist];
      }
    }
    setFilteredData(filtered);
    setCurrentPage(0);
  }, [searchTerm, sortField, sortOrder, activeFilters]);
  const startIndex = currentPage * itemsPerPage;
  const currentData = filteredData.slice(startIndex, startIndex + itemsPerPage);
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const handleSort = (field: keyof LeadData) => {
    if (sortField === field) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortField(field);
      setSortOrder("asc");
    }
  };
  return (
    <div className="p-6">
      <h2 className="text-xl font-semibold mb-4">Demo Leads Table</h2>
      {/* Filters */}
      <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-4 justify-between w-full">
        <input
          type="text"
          placeholder="Search by Lead Name, Lead ID, Product Name, Product ID, Phone Number, or Status..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="p-2 border border-[#BF9FFF] rounded !w-[50%] sm:w-1/2 placeholder-[#989898] text-sm focus:outline-none focus:border-[#BF9FFF] focus:ring-1 focus:ring-[#BF9FFF]"
        />
        <div className="flex items-center gap-4 ">
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
          <div
            className="group flex items-center gap-1 border border-[#BF9FFF] rounded !p-2 hover:bg-[#BF9FFF] cursor-pointer"
            onClick={() => setIsDrawerOpen(true)}
          >
            <MdOutlineFilterAlt
              size={20}
              className="text-[#BF9FFF] group-hover:text-white transition-colors duration-200"
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
                "leadID",
                "leadName",
                "leadPhone",
                "ProductID",
                "ProductName",
                "leadStatus",
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
              <th className="p-3 border text-center uppercase">View</th>
              <th className="p-3 border text-center uppercase">Actions</th>
            </tr>
          </thead>
          <tbody>
            {currentData.map((lead, index) => (
              <tr key={index} className="text-sm hover:bg-[#f1ebfb]">
                <td className="p-3 border text-[#707070] text-center">
                  {lead.leadID}
                </td>
                <td className="p-3 border text-[#707070] text-center">
                  {lead.leadName}
                </td>
                <td className="p-3 border text-[#707070] text-center">
                  {lead.leadPhone}
                </td>
                <td className="p-3 border text-[#707070] text-center">
                  {lead.ProductID}
                </td>
                <td className="p-3 border text-[#707070] text-center">
                  {lead.ProductName}
                </td>
                <td className="p-3 border text-[#707070] text-center">
                  {lead.leadStatus}
                </td>
                <td
                  className="p-3 border text-[#707070] place-items-center items-center capitalize cursor-pointer"
                  onClick={() => {
                    navigate(`/leaddetails/${lead.leadID}`);
                  }}
                >
                  <img src={ViewIcon} alt="" className="w-8 h-8 " />
                </td>
                <td className="p-3 border flex place-content-center !gap-5">
                  <div className="!p-2 border bg-[#BF9FFF] rounded ">
                    <h2 className="text-white capitalize">move</h2>
                  </div>
                  <div className="!p-2 border border-[#ec6666] rounded ">
                    <h2 className="text-[#ec6666] capitalize">reject</h2>
                  </div>
                </td>
              </tr>
            ))}
            {currentData.length === 0 && (
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
            className="px-4 py-2 rounded bg-[#FFF] border border-[#BF9FFF] hover:bg-[#BF9FFF] disabled:opacity-50 flex items-center gap-2 text-[#BF9FFF] hover:text-white hover:shadow-md"
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
            className="px-4 py-2 rounded bg-[#FFF] border border-[#BF9FFF] hover:bg-[#BF9FFF] disabled:opacity-50 flex items-center gap-2 text-[#BF9FFF] hover:text-white hover:shadow-md"
          >
            Next
            <IoChevronForwardOutline />
          </button>
        </div>
      )}
      <FilterSection
        isDrawerOpen={isDrawerOpen}
        setIsDrawerOpen={setIsDrawerOpen}
        onFilterApply={(filters) => setActiveFilters(filters)}
      />
    </div>
  );
};

export default LeadTableSimple;
