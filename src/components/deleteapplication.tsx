// import { Button } from "@/components/ui/button"
// import {
//   Dialog,
//   DialogContent,
//   DialogFooter,
//   DialogHeader,
//   DialogTitle,
// } from "@/components/ui/dialog"
// import { Input } from "@/components/ui/input"
// import { Label } from "@/components/ui/label"
// import { Textarea } from "@/components/ui/textarea";
// interface RejectApplicationProps {
//   children: React.ReactNode;
//   appid?: string;
//   clientname?: string;
// }

// const RejectApplication: React.FC<RejectApplicationProps> = ({ children, appid, clientname }) => {
//   return (
//     <Dialog>
//       <form>
//         <DialogContent className="h-[550px] rounded-xl">
//           <DialogHeader>
//             <DialogTitle className="text-[24px] font-poppins font-semibold !pb-5">Reject Application</DialogTitle>
//             <hr />
//           </DialogHeader>
//           <div className="grid gap-4">
//             <div className="grid gap-3">
//               <Label htmlFor="name-1" className="text-[20px] font-poppins font-semibold">Rejection Subject</Label>
//               <Input id="name-1" name="name" placeholder="Subject" className="text-[#808080] bg-[#FAFAFA] text-[18px]" />
//             </div>
//             <div className="grid gap-3">
//               <Label htmlFor="username-1" className="text-[20px] font-poppins font-semibold">Details</Label>
//              <Textarea placeholder="Rejection Details (Brief)" className="h-[200px] bg-[#FAFAFA] text-[#808080] text-[18px]" />
//             </div>
//           </div>
//           <DialogFooter>
//             <Button type="submit" className="bg-[#E6001D] hover:bg-red-700 text-white w-full text-[22px] font-poppins">Reject</Button>
//           </DialogFooter>
//         </DialogContent>
//       </form>
//     </Dialog>
//   )
// }

// export default RejectApplication ;


import { ReactNode } from "react";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

interface RejectApplicationProps {
  appid: string;
  clientname: string;
  children: ReactNode;
}

export default function DeleteApplication({
  appid,
  clientname,
  children,
}: RejectApplicationProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="h-[550px] rounded-xl">
        <DialogHeader>
          <DialogTitle className="text-[24px] font-poppins font-semibold !pb-5">
            Delete Application
          </DialogTitle>
          <hr />
        </DialogHeader>
        <form>
          <div className="grid gap-4">
            <div className="grid gap-3">
              <Label htmlFor="subject" className="text-[20px] font-poppins font-semibold">
                 Subject
              </Label>
              <Input
                id="subject"
                name="subject"
                placeholder="Subject"
                className="text-[#808080] bg-[#FAFAFA] text-[18px]"
              />
            </div>
            <div className="grid gap-3 pb-5">
              <Label htmlFor="details" className="text-[20px] font-poppins font-semibold">
                Details
              </Label>
              <Textarea
                id="details"
                placeholder="Details (Brief)"
                className="h-[200px] bg-[#FAFAFA] text-[#808080] text-[18px] "
              />
            </div>
          </div>
          <DialogFooter>
            <Button
              type="submit"
              className="bg-[#E6001D] hover:bg-[#C10019] text-white w-full text-[22px]  font-poppins"
            >
              Delete
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
export { DeleteApplication };