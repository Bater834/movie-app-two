import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
export const Carouselea = () => {
  return (
    // <div className="flex justify-center max-h-[600px]">
    //   <img
    //     className="w-screen h-auto"
    //     src="/wicked.jpg"
    //     alt="zurag"
    //     srcset=""
    //   />
    // </div>
    <div>
      <Carousel>
        <CarouselContent>
          <CarouselItem>...</CarouselItem>
          <CarouselItem>...</CarouselItem>
          <CarouselItem>...</CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};
