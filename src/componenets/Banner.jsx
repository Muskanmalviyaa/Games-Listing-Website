import React, { useEffect } from "react";

function Banner({ gameBanner }) {
  useEffect(() => {
    // console.log("gameBanner", gameBanner);
  });
  return (
    <div className="relative mr-1">
      <div className="absolute bottom-0 p-5 bg-gradient-to-t from-slate-900 to-transparent w-full">
        <h2 className="font-bold text-[24px] text-white">{gameBanner.name}</h2>
        <button className="bg-blue-700 text-white px-2 p-1 rounded-md hover:bg-blue-900 hover:font-bold hover:scale-110 ease-in-out transition-all"> Get Now</button>
      </div>
      <img
        src={gameBanner.background_image}
        className="w-full object-cover rounded-lg lg:h-[540px] md:min-h-[320px]"  
      />
    </div>
  );
}

export default Banner;