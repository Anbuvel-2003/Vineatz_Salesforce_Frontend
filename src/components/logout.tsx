import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"

import React from 'react'

function Logout() {
    return (
        <div>
            <div className="flex items-center justify-center">
            <AlertDialog>
                <AlertDialogTrigger ></AlertDialogTrigger>
                <AlertDialogContent className="flex items-center w-[350px] h-[200px] justify-center" >
                <div className=" items-center   ">
                    <AlertDialogHeader>
                        <AlertDialogTitle className="text-center text-[25px]">Logout</AlertDialogTitle>
                        <AlertDialogDescription className="text-center text-[16px] py-5">
                           Are you sure
                        </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter className="flex justify-between gap-2">
                        <AlertDialogCancel className="w-28 h-12 px-16">Cancel</AlertDialogCancel>
                        <AlertDialogAction className="bg-red-500  mt-4 sm:mt-0 w-28 gap-4 h-12 px-16 hover:bg-red-700">Yes</AlertDialogAction>
                    </AlertDialogFooter>
                </div>
                </AlertDialogContent>
            </AlertDialog>
        </div>
        </div>
    )
}

export default Logout;
