import { Formik, Form, Field, ErrorMessage } from "formik";
import React from "react";

interface FilterDrawerProps {
  isDrawerOpen: boolean;
  setIsDrawerOpen: (isOpen: boolean) => void;
  onFilterApply: (filters: { leadStages: number[] }) => void;
}

const stages = [
  "initial",
  "prospect",
  "qualify",
  "demo",
  "proposal",
  "onboard",
  "accounts",
];

const stageToStatusMap: Record<string, number> = {
  initial: 0,
  prospect: 1,
  qualify: 2,
  demo: 3,
  proposal: 4,
  onboard: 5,
  accounts: 6,
};

const FilterSection: React.FC<FilterDrawerProps> = ({
  isDrawerOpen,
  setIsDrawerOpen,
  onFilterApply,
}) => {
  return (
    <div className="relative z-40">
      {/* Backdrop */}
      {isDrawerOpen && (
        <div
          className="fixed inset-0 bg-black/30 backdrop-blur-sm z-30 transition-opacity duration-300"
          onClick={() => setIsDrawerOpen(false)}
        />
      )}
      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 z-40 h-screen p-6 overflow-y-auto transition-transform transform bg-white shadow-lg ${
          isDrawerOpen ? "translate-x-0" : "translate-x-full"
        } w-[90%] sm:w-[60%] md:w-[40%] lg:w-[30%]`}
      >
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold text-gray-800">
            Extended Filters
          </h2>
          <button
            onClick={() => setIsDrawerOpen(false)}
            className="text-gray-600 hover:text-white hover:bg-[#BF9FFF] rounded-full w-8 h-8 flex items-center justify-center"
          >
            ✕
          </button>
        </div>
        {/* Formik Form */}
        <Formik
          initialValues={{ leadStages: [] as string[] }}
          onSubmit={(values, { resetForm }) => {
            const statusArray = values.leadStages.map(
              (stage) => stageToStatusMap[stage]
            );
            console.log("Selected status codes:", statusArray);
            onFilterApply({ leadStages: statusArray });
            setIsDrawerOpen(false);
          }}
        >
          {({ values, setFieldValue, resetForm }) => (
            <Form className="space-y-6">
              {/* Lead Status Section */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-md font-medium text-gray-700">
                    Lead Status
                  </h3>
                  <button
                    type="button"
                    className="text-xs text-purple-600 hover:underline"
                    onClick={() => setFieldValue("leadStages", stages)}
                  >
                    Select All
                  </button>
                </div>
                <div className="flex flex-col gap-2">
                  {stages.map((stage) => (
                    <label
                      key={stage}
                      className="flex items-center gap-2 text-sm"
                    >
                      <Field
                        type="checkbox"
                        name="leadStages"
                        value={stage}
                        className="form-checkbox h-5 w-5   text-[#BF9FFF] rounded-[2px]"
                      />
                      {stage.charAt(0).toUpperCase() + stage.slice(1)}
                    </label>
                  ))}
                </div>
                <ErrorMessage
                  name="leadStages"
                  component="div"
                  className="text-sm text-red-500 mt-1"
                />
              </div>
              {/* Buttons */}
              <div className="flex gap-2 pt-4">
                <button
                  type="submit"
                  className="w-full bg-[#BF9FFF] text-white rounded-md py-2 hover:bg-[#9a6cf6] transition"
                >
                  Search
                </button>
                <button
                  type="button"
                  onClick={() => resetForm()}
                  className="w-full bg-gray-200 text-gray-700 rounded-md py-2 hover:bg-gray-300 transition"
                >
                  Clear
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default FilterSection;
