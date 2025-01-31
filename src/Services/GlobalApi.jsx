import axios from 'axios';

const key = "c4fd4547b10441129225588d07019c10";

const axiosCreate = axios.create({
    baseURL: 'https://api.rawg.io/api'
});

const getGenreList = axiosCreate.get('/genres?key='+ key);
const getAllGames = axiosCreate.get('/games?key='+ key);
const getGameListByGenreId= (id)=>axiosCreate.get('/games?key='+key+'&genres='+ id );
export default{
    getGenreList,
    getAllGames,
    getGameListByGenreId
}