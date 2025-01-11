// import React, { useEffect, useState } from "react";

// import GenreList from "../componenets/GenreList";
// import GlobalApi from "../Services/GlobalApi";
// import Banner from "../componenets/Banner";
// import TrendingGames from "../componenets/TrendingGames";
// import GamesByGenreId from "../componenets/GamesByGenreId";

// function Home() {
//   const [allGameList, setAllGameList] = useState();
//    const [gameListByGenres, setGameListByGenres] = useState([]);
//    const [selectedGenresName, setSelectedGenresName]= useState('Action');

//   useEffect(() => {
//     getAllGamesList();
//     getGameListByGenreId(4);
//   }, []);

//   const getAllGamesList = () => {
//     GlobalApi.getAllGames.then((resp) => {
//       // console.log(resp.data.results);
//       setAllGameList(resp.data.results);
//     });
//   };
//   const getGameListByGenreId=(id) =>{
//     // console.log("GENREID: ", id);
//     GlobalApi.getGameListByGenreId(id).then( (resp)=> {
//       console.log("Game List By GenreId: ", resp.data.results);
//       setGameListByGenres(resp.data.results);
//     })
//   } 
//   return (
//     <div className="grid grid-cols-4 px-6 p-3 gap-4">
//       <div className="hidden md:block mr-4">
//         <GenreList genreId = {(genreId)=> getGameListByGenreId(genreId)}
//           selectedGenresName= {(name)=> setSelectedGenresName(name)}
//         />
//       </div>
//       <div className="col-span-4 md:col-span-3">
//         {allGameList?.length > 0 && gameListByGenres.length> 0 ?(
//           <div>
//             <Banner gameBanner={allGameList[0]} />
//             <TrendingGames gameList={allGameList} />
//             <GamesByGenreId  gameList = {gameListByGenres}
//               selectedGenresName= {selectedGenresName}
//             />
//           </div>
//         ) : null}
//       </div>
//     </div>
//   );
// }

// export default Home;
import React, { useEffect, useState } from "react";
import GenreList from "../componenets/GenreList";
import GlobalApi from "../Services/GlobalApi";
import Banner from "../componenets/Banner";
import TrendingGames from "../componenets/TrendingGames";
import GamesByGenreId from "../componenets/GamesByGenreId";

function Home() {
  const [allGameList, setAllGameList] = useState();
  const [gameListByGenres, setGameListByGenres] = useState([]);
  const [selectedGenresName, setSelectedGenresName] = useState("Action");

  useEffect(() => {
    getAllGamesList();
    getGameListByGenreId(4); // Default genre ID to load on page load
  }, []);

  const getAllGamesList = () => {
    GlobalApi.getAllGames.then((resp) => {
      setAllGameList(resp.data.results);
    });
  };

  const getGameListByGenreId = (id) => {
    GlobalApi.getGameListByGenreId(id).then((resp) => {
      setGameListByGenres(resp.data.results);
    });
  };

  return (
    <div className="grid grid-cols-4 px-6 p-3 gap-4 ">
      <div className="hidden md:block mr-4">
        <GenreList
          genreId={getGameListByGenreId} // Pass down the fetch function
          selectedGenresName={setSelectedGenresName} // Pass down the name setter
        />
      </div>
      <div className="col-span-4 md:col-span-3">
        {allGameList?.length > 0 && gameListByGenres.length > 0 ? (
          <div>
            <Banner gameBanner={allGameList[0]} />
            <TrendingGames gameList={allGameList} />
            <GamesByGenreId
              gameList={gameListByGenres}
              selectedGenresName={selectedGenresName}
            />
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default Home;
