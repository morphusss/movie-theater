import { useEffect, useState } from "react";
import { GameStat } from "../../types/games.types";
import { Search } from "../SearchBlock/Search"
import { GameCard } from "../GameBlock/GameBlock";
import "./HomeForm.scss"

import axios from "axios";


export function HomeForm() {
    const [ gameData, setGameData ] = useState<GameStat[]>([]);

    useEffect(() => {
        async function getData() {
            try{
                const response = await axios.get(`https://api.rawg.io/api/games?key=ea2e6378cdc144428f44b96164a6272d&page=1&page_size=24`);
                setGameData(response.data.results);
                console.log(response);
            } catch (error) {
                console.log(error);
            }
        }
        getData();
    }, []);

    return(
        <>
        <section className="base">
            <section className="upper-wrapper">
                <Search holder="Search for games or developers" valueOfFilter="home"/>
            </section>
            <section className="lower-wrapper">
                <ul className="game-list">
                    {gameData.map((game) => (
                        <GameCard game={game} key={game.id}/>
                    ))}
                </ul>
            </section>
        </section>
        </>
    )
}