import axios from 'axios';
import dotenv from 'dotenv'; 
import { useState } from 'react';
import { GameStat } from './types/games.types';
dotenv.config();

const url = "https://api.themoviedb.org/3/trending/movie/day?language=en-US";
const options = {
  method: "GET",
  headers: {
      accept: "application/json",
      Authorization: `Bearer ${import.meta.env.ACCESS_TOKEN}`
  }
};

    const [ test, setTest ] = useState<GameStat[]>([]);

export async function getData() {
  try{
      const response = await axios.get(`https://api.rawg.io/api/games?key=${import.meta.env.ACCESS_TOKEN}&page=1&page_size=24`);
      setTest(response.data.results);
  } catch (error) {
      console.log(error);
  }
}