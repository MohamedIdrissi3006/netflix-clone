

import { Button } from "@/components/ui/button";
import prisma from "../utils/db";
import MovieButtons from "./MovieButton";
async function getData() {
  const data = await prisma.movie.findFirst({
    select: {
      title: true,
      overview: true,
      videoSource: true,
      imageString: true,
      release: true,
      duration: true,
      id: true,
      age: true,
      youtubeString: true,
    },
  });
  return data;
}
export default async function MovieVideo() {
  const data = await getData();
  console.log(data)
  return (
    <div className="h-[55vh] lg:h-[70vh] w-full flex justify-start items-center">
      <video
        poster={data?.imageString}
        autoPlay
        muted
        loop
        src={data?.videoSource}
        className="w-full absolute top-1 left-0 h-[70vh] object-cover -z-10 brightness-[60%]"

      >


      </video>

      <div className="absolute w-[90%] lg:w-[40%] mx-auto">
        <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold">
          {data?.title}
        </h1>
        <p className="text-white text-lg mt-5 line-clamp-3">{data?.overview}</p>
          <div className="flex gap-x-3 mt-4">
        {/* <Button>See more </Button>
        <Button>Learn more </Button> */}
        <MovieButtons age={data?.age as number}
            duration={data?.duration as number}
            id={data?.id as number}
            overview={data?.overview as string}
            releaseDate={data?.release as number}
            title={data?.title as string}
            youtubeUrl={data?.youtubeString as string}
            key={data?.id}/>
           </div>
      </div>
    </div>
  )
}











