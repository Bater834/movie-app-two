import { MovieCard } from "@/components/MovieCart";
import Header from "@/components/Header";
export default function home() {
  return (
    <div>
      <Header />
      <div
        className="grid grid-cols-2 gap-2 md:grid-cols-5 md:gap-3 mx-auto  max-w-[1280px] w-full
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
    </div>
  );
}
