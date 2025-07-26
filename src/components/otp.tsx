// InputOTPDemo.tsx

import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";

interface InputOTPDemoProps {
  value: string;
  onChange: (val: string) => void;
}

export const InputOTPDemo: React.FC<InputOTPDemoProps> = ({ value, onChange }) => {
  return (
    <InputOTP
      value={value}
      onChange={(val) => {
        if (/^\d*$/.test(val)) {
          onChange(val);
        }
      }}
      maxLength={6}
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