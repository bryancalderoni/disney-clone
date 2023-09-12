import React, { useEffect, useRef, useState } from "react";
import GlobalApi from "../Services/GlobalApi";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";
const screenWidth= window.innerWidth;

function Slider() {
  const [movieList, setMovieList] = useState([]);
  const elementRef = useRef();
  useEffect(() => {
    getTrendingMovies();
  }, []);

  const getTrendingMovies = () => {
    GlobalApi.getTrendingVideos.then((resp) => {
      console.log(resp.data.results);
      setMovieList(resp.data.results);
    });
  };
  const sliderRight = (element) => {
    element.scrollLeft += screenWidth-110;
  };
  const sliderLeft = (element) => {
    element.scrollLeft -= screenWidth-110;
  };

  return (
    <div>
      <HiChevronLeft
        className="hidden md:block text-white text-[30px] absolute mx-8 mt-[150px] cursor-pointer"
        onClick={() => sliderLeft(elementRef.current)}
      />
      <HiChevronRight
        className="hidden md:block text-white text-[30px] absolute mx-8 mt-[150px] right-0 cursor-pointer"
        onClick={() => sliderRight(elementRef.current)}
      />
      <div
        ref={elementRef}
        className="flex overflow-x-auto w-full px-16 py-4 scrollbar-none scroll-smooth"
      >
        {movieList && movieList.length > 0 ? (
          movieList.map((e) => (
            <img
              src={IMAGE_BASE_URL + e.backdrop_path}
              key={e.id}
              className="min-w-full h-[310px] object-cover object-[center_30%] mr-5
          rounded-md hover:border-[4px] border-gray-300 transition-all duration-100 ease-in-out"
            />
          ))
        ) : (
          <p>No movies to display</p>
        )}
      </div>
    </div>
  );
}

export default Slider;
