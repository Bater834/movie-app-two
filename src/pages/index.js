import { MovieCard } from "@/components/MovieCart";

export default function home() {
  return (
    <div
      className="grid grid-cols-2 gap-2 md:grid-cols-5 md:gap-1 mx-auto w-[1437px] h-[910px]
 "
    >
      <MovieCard />
      <MovieCard />
      <MovieCard />
      <MovieCard />
      <MovieCard />
      <MovieCard />
      <MovieCard />
      <MovieCard />
      <MovieCard />
    </div>
  );
}
