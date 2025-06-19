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
      <div className="flex justify-center">
        <div className="grid md:grid-cols-5 md:gap-8 md:px-10 grid-cols-2 gap-4 px-4">
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
        </div>
      </div>
      <Footer />
    </div>
  );
}
