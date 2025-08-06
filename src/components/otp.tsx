// InputOTPDemo.tsx

import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";

interface InputOTPDemoProps {
  value: string;
  onChange: (val: string) => void;
  onBlur: () => void;
}

export const InputOTPDemo: React.FC<InputOTPDemoProps> = ({ value, onChange ,onBlur}) => {
  return (
    <InputOTP
      value={value}
      className="text-[#2D3748]"
      onChange={(val) => {
        if (/^\d*$/.test(val)) {
          onChange(val);
        }
      }}
      maxLength={6}
      containerClassName="gap-5"
    >
      {[0, 1, 2, 3, 4, 5].map((i) => (
        <InputOTPGroup key={i}>
          <InputOTPSlot index={i} />
        </InputOTPGroup>
      ))} 
    </InputOTP>
  );
};

export default InputOTPDemo;