import { MovieCard } from "@/components/MovieCart";
import Header from "@/components/Header";
import { Upcoming } from "@/components/Upcoming";
import { Carouselea } from "@/components/Carouselea";
import { Footer } from "@/components/Footer";
export default function home() {
  return (
    <div className="w-auto md:w-auto">
      <div>
        <Header />
        <Carouselea />
        <Upcoming />
      </div>
      <div
        className="grid grid-cols-2 gap-2 md:grid-cols-5 md:gap-3 
 "
      >
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
      </div>
      <Footer />
    </div>
  );
}
