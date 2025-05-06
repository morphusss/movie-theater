import axios from 'axios';
import { Dispatch, SetStateAction } from 'react';
import { GameStat, DevStat } from './types/types';

type GameProps = {
  gameData: GameStat[];
  setGameData: Dispatch<SetStateAction<GameStat[]>>;
}

type DevProps = {
  devData: DevStat[];
  setDevData: Dispatch<SetStateAction<DevStat[]>>;
}

type PageProps = {
  page: number;
  page_size: number;
}

export async function getData(props: GameProps, pageProps: PageProps) {
  const { gameData, setGameData } = props;
  try{
      const response = await axios.get(`https://api.rawg.io/api/games?key=&page=${pageProps.page}&page_size=${pageProps.page_size}`);
      setGameData(response.data.results);
      console.log(response);
  } catch (error) {
      console.log(error);
  }
}

export async function getDevs(props: DevProps, pageProps: PageProps) {
  const { devData, setDevData } = props;
  try{
      const response = await axios.get(`https://api.rawg.io/api/developers?key=&page=${pageProps.page}&page_size=${pageProps.page_size}`);
      setDevData(response.data.results);
  }catch (error) {
      console.log(error)
  }
}