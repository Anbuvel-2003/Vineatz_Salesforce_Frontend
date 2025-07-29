import React, { useState } from "react";

const tabs = [
  { id: 1, label: "initial" },
  { id: 2, label: "prospect" },
  { id: 3, label: "qualify" },
  { id: 4, label: "demo" },
  { id: 5, label: "proposal" },
  { id: 6, label: "onboard" },
  { id: 7, label: "Account" },
  { id: 8, label: "Notes" },
];

const TabComponent: React.FC = () => {
  const [activeTab, setActiveTab] = useState(1);

  const renderContent = () => {
    switch (activeTab) {
      case 1:
        return (
          <div>
            <div>
              <div>
                <h2>sss</h2>
              </div>
            </div>
          </div>
        );
      case 2:
        return <div>📋 Details content goes here</div>;
      case 3:
        return <div>🕒 Activity content goes here</div>;
      case 4:
        return <div>🕒 Activity content goes here</div>;
      case 5:
        return <div>🕒 Activity content goes here</div>;
      case 6:
        return <div>🕒 Activity content goes here</div>;
      case 7:
        return <div>🕒 Activity content goes here</div>;
      case 8:
        return <div>🕒 Activity content goes here</div>;
      default:
        return null;
    }
  };

  return (
    <div className="w-full mt-10 ">
      {/* Top Tabs */}
      <div className="flex border-b border-gray-200">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-4 py-2 text-sm font-medium border-b-2 transition-all duration-200 ${
              activeTab === tab.id
                ? "border-purple-600 text-purple-600"
                : "border-transparent text-gray-500 hover:text-purple-600"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>
      {/* Tab Content */}
      <div className="p-4 bg-white border border-t-0 rounded-b-lg shadow-sm">
        {renderContent()}
      </div>
    </div>
  );
};

export default TabComponent;
