import { ArrowRight } from "lucide-react";
export const Upcoming = () => {
  return (
    <div className="mx-auto max-w-[1280px] w-full mt-[50px] mb-[36px] ">
      <div className="text-black  flex justify-between max-w-[1280px]">
        <h3 className="font-bold w-[114px] h-[32px] text-2xl">Upcoming </h3>
        <p className="flex justify-center items-center  w-[120px] h-[36px]">
          See more <ArrowRight />
        </p>
      </div>
    </div>
  );
};
