import { Star } from "lucide-react";
export const MovieCard = () => {
  return (
    <div class="rounded-2xl overflow-hidden w-[158px] md:w-[230px]">
      <img class="h-[234px] md:h-[340px]" src="/movie-cart1.jpg" alt="poster" />

      <div class="bg-gray-100 p-2">
        <div class="flex mb-1 text-xs md:text-sm">
          <Star className="fill-amber-300 text-amber-300" />
          <p className="text-black">6.9</p>
          <p class="text-zinc-500">/10</p>
        </div>
        <p class="text-black text-sm md:text-lg">
          How To Train Your Dragon Live Action
        </p>
      </div>
    </div>
  );
};
