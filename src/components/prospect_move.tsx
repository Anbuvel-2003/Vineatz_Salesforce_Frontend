import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { Field, ErrorMessage, useFormikContext } from "formik";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";
import DatePicker from "antd/es/date-picker";
import dayjs from "dayjs";


const ProspectMoveLeads = () => {
  const {
    values,
    errors,
    setFieldValue,
    submitCount,
  } = useFormikContext<any>(); // Adjust `any` to your actual form type if defined


  return (
    <div className="pt-5">
      <span className="text-[#000000] text-[20px] font-poppins">
        Details To Be Filled
      </span>

      <div className="grid grid-cols-1">

        {/* Expected Amount */}
        <div className="grid grid-cols-1 w-full pt-10 pb-5 gap-3">
          <span className="text-[#111111] text-lg font-poppins font-medium">
            Expected Amount
          </span>
          <Field
            name="expectedAmount"
            type="string"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setFieldValue("expectedAmount", e.target.value)
            }
            onKeyDown={(e) => {
              if (!/[0-9]/.test(e.key) && e.key !== 'Backspace' && e.key !== 'Tab') {
                e.preventDefault();
              }
            }}
            className="w-[500px] h-[50px] bg-white rounded-xl px-5 text-[#808080] text-md border border-gray-300"
            placeholder="Enter Expected Amount"
          />
          <ErrorMessage
            name="expectedAmount"
            component="div"
            className="text-red-500 text-sm"
          />
        </div>

        <div className="grid grid-cols-1 w-full pb-5 gap-3">
          <span className="text-[#111111] text-lg font-poppins font-medium">
            Expected Date
          </span>

          <DatePicker
            size="large"
            name="expectedDate"
            value={values.expectedDate ? dayjs(values.expectedDate) : null}
            onChange={(date) => {
              setFieldValue("expectedDate", date ? date.toISOString() : "");
            }}
            placeholder="Select Expected Date"
            className="w-[500px] h-[50px] px-4 text-black bg-white rounded-xl border border-gray-300 
         placeholder:text-[#AEAEAE] hover:cursor-pointer hover:border-black hover:border-2"
            suffixIcon={<CalendarIcon className="text-[#AEAEAE]" />}
          />

          {typeof errors.expectedDate === "string" && submitCount > 0 && (
            <div className="text-red-500 text-sm">{errors.expectedDate}</div>
          )}
        </div>
      </div>
    
{/* Type of Business */ }
<div className="grid grid-cols-1 w-full pb-5 gap-3">
  <span className="text-[#111111] text-lg font-poppins font-medium">
    Type Of Business
  </span>
  <Field
    name="typeofbusiness"
    type="text"
    className="w-[500px] h-[50px] bg-white rounded-xl px-4 text-[#808080] text-md border border-gray-300"
    placeholder="Enter type Of business"
  />
  <ErrorMessage
    name="typeofbusiness"
    component="div"
    className="text-red-500 text-sm"
  />
</div>

{/* Confidence Level */ }
<div className="grid grid-cols-1 w-full pb-5 gap-3">
  <span className="text-[#111111] text-lg font-poppins font-medium">
    Confidence Level
  </span>

  <Field name="confidence">
    {({ field, form }: any) => (
      <input
        {...field}
        type="text"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          const value = e.target.value;
          if (/^\d{0,3}$/.test(value)) {
            form.setFieldValue("confidence", value);
          }
        }}
        onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => {
          if (
            !/[0-9]/.test(e.key) &&
            e.key !== "Backspace" &&
            e.key !== "Tab"
          ) {
            e.preventDefault();
          }
        }}
        className="w-[500px] h-[50px] bg-white rounded-xl px-4 text-[#808080] text-md border border-gray-300"
        placeholder="Enter confidence level"
      />
    )}
  </Field>

  <ErrorMessage
    name="confidence"
    component="div"
    className="text-red-500 text-sm"
  />
</div>


    </div >
  );
};

export default ProspectMoveLeads;
