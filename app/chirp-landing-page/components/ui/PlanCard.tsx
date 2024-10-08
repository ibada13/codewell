import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { Button } from "./button";
export default function PlanCard() { 
    return (
        <div className="flex-grow flex flex-col bg-red gap-y-6 w-1/2 p-4 rounded-lg border border-amber-400 mb-10">
        <div className="flex flex-col gap-y-2">
            <p className="font-light">Monthly</p>
            <p className="text-4xl font-bold flex gap-x-1 items-end text-amber-400">$9<span className="text-sm font-light text-white">/mo</span></p>
            </div>
            
        <hr className="w-[90%] mx-auto border-t border-amber-400"/>
        <div className="flex flex-col justify-evenly">
            <p className="flex gap-x-2 text-lg items-center"><IoMdCheckmarkCircleOutline color="#00ff00"/> Lorem ipsum dolor sit amet.</p>
            <p className="flex gap-x-2 text-lg items-center"><IoMdCheckmarkCircleOutline color="#00ff00"/> Lorem ipsum dolor sit amet.</p>
            <p className="flex gap-x-2 text-lg items-center"><IoMdCheckmarkCircleOutline color="#00ff00"/> Lorem ipsum dolor sit amet.</p>

        </div>
        <hr className="w-[90%] mx-auto border-t border-amber-400"/>

        <div className="flex justify-center items-center w-full mb-5">
            <Button className="w-4/5 " content="Start Trail With Twitter" />
        </div>
</div>

    );
}