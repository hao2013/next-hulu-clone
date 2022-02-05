import { ThumbUpIcon } from "@heroicons/react/outline";
import Image from "next/image";
import { forwardRef } from 'react';

const Thumbnail = forwardRef(({ result }, ref) => {
    const BASE_URL = "https://image.tmdb.org/t/p/original";

    return <div ref={ref}
        className="p-2 group cursor-pointer transition duration-500 ease-in-out transform sm:hover:scale-110 hover:z-50">
        <Image          
            layout='responsive'
            src={
                `${BASE_URL}${result.backdrop_path || result.poster_path}`
                ||
                `${BASE_URL}${result.poster_path}`
            }
            height={1080}
            width={1920}
        />
        <div className="p-2">
            <h2 className="text-3xl tracking-wide mb-4 text-white transition-all duration-100 ease-in-out font-bold group-hover:text-[#3bb83d]">
                {result.title || result.original_name}
            </h2>

            <p className="flex items-center justify-start gap-4 mb-3">
                <span>公開日：{result.release_date || result.first_air_date}</span>
                <span>評価：{result.vote_average}</span>
                <span className="flex">
                    <ThumbUpIcon className="h-5 mx-2" />{result.vote_count}
                </span>
            </p>

            <p className="truncate max-w-md mb-3 opacity-0 group-hover:opacity-100">
                {result.overview}
            </p>

        </div>
    </div>;
})


export default Thumbnail;
