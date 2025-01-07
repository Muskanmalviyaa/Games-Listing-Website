import React, { useEffect, useState } from "react";

function GamesByGenreId({ gameList, selectedGenresName}) {
  useEffect(() => {
    console.log("GameList", gameList);
  }, []);
  return (
    <div className=" mt-5 mr-1">
      <h2 className="font-bold text-[30px] dark:text-white"> {selectedGenresName} Games </h2>
      <div className="gap-4 grid grid-cols-1 md:grid-cols-2 mt-3 lg:grid-cols-3">
        {gameList.map((item) => (
          <div
            key={item.id}
            className="h-full bg-gray-400 dark:bg-gray-600 rounded-lg group hover:scale-105 transition-all ease-in-out duration-400 cursor-pointer p-2 mt-2"
          >
            <img
              src={item?.background_image}
              alt={item?.name}
              className="h-[200px] rounded-lg object-cover w-full"
            />
            <h2 className="dark:text-white text-[16px] font-bold mt-1 items-center">
              {item?.name} <span className="text-green-600 font-medium p-1 rounded-sm ml-2 text-[10px] bg-green-100">{item?.metacritic}</span>
            </h2>
            <h2 className="dark:text-zinc-400 items-center mt-1">
              ⭐{item?.rating} 💭{item?.reviews_count}🔥
              {item?.suggestions_count}
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
}

export default GamesByGenreId;
