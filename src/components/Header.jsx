import { Film } from "lucide-react";
import { Search } from "lucide-react";
import { Moon } from "lucide-react";
import { ChevronDown } from "lucide-react";
export default function Header() {
  return (
    <div className="mx-auto max-w-[1280px] w-full my-5">
      <div className="flex justify-between  ">
        <div className="flex">
          <Film className="text-indigo-700" />
          <p className="text-indigo-700 font-bold">Movie Z</p>
        </div>
        <div className="hidden md:flex gap-4">
          <div className="flex justify-center gap-[10px] rounded-md outline-2 items-center border-black w-[97px] h-[36px]">
            <ChevronDown className="text-black" />
            <p className="text-black">Genre</p>
          </div>
          <div className="flex rounded-lg outline-2 items-center w-[380px] h-[36px]">
            <Search className="text-gray-400" />
            <p className="text-gray-400">Search..</p>
          </div>
        </div>
        <div className="flex justify-center rounded-lg border-1px outline-2 items-center w-[36px] h-[36px] ">
          <Moon className="text-black" />
        </div>
      </div>
    </div>
  );
}
