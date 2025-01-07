import React, { useEffect } from "react";

function TrendingGames({ gameList }) {
  useEffect(() => {
    console.log(gameList);
  }, []);
  return (
    <div className="mt-5 hidden md:block  mr-1">
      <h2 className="font-bold text-[30px] dark:text-white ">
        Trending Games
      </h2>
      <div className="gap-6 md:grid md:grid-cols-3 mt-3 lg:grid-cols-4">
        {gameList.map(
          (item, index) =>
            index < 4 &&
            item && (
              <div
                key={item.id}
                className="bg-gray-400 dark:bg-gray-600 rounded-lg group hover:scale-110 transition-all ease-in-out duration-300 cursor-pointer"
              >
                <img
                  src={item.background_image}
                  alt={item.name}
                  className="h-[280px] rounded-t-lg object-cover"
                />
                <h2 className="dark:text-white text-[18px] font-bold p-3">
                  {item.name}
                </h2>
              </div>
            )
        )}
      </div>
    </div>
  );
}

export default TrendingGames;
