import { Star } from "lucide-react";
export const MovieCard = () => {
  return (
    <div class="">
      <img class="" src="/movie-cart1.jpg" alt="poster" />

      <div class="bg-gray-100 md:p-2 rounded-b-xl">
        <div class="flex mb-1 text-xs md:flex md:text-sm md:mb-2">
          <Star className="fill-amber-300 text-amber-300" />
          <p className="text-black">6.9</p>
          <p class="text-zinc-500">/10</p>
        </div>
        <p class="text-black text-sm md:text-lg">
          How To Train Your <br></br> Dragon Live Action
        </p>
      </div>
    </div>
  );
};
