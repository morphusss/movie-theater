import { useEffect, useState } from "react";
import { GameStat, DevStat } from "../../types/types";
import { getData, getDevs } from "../../api"
import { Search } from "../SearchBlock/Search"
import { GameCard } from "../GameBlock/GameBlock";
import { DevCard } from "../DevCard/DevCard";
import { Pagination } from "../Pagination/Pagination";
import "./HomeForm.scss"

export function HomeForm() {
    const [ gameData, setGameData ] = useState<GameStat[]>([]);
    const [ devData, setDevData ] = useState<DevStat[]>([]);
    const [ currentGamePage, setCurrentGamePage ] = useState(1);
    const [ postPerGamePage, setPostPerGamePage] = useState(24);

    // const [ currentDevPage, setCurrentDevPage ] = useState(1);
    // const [ postPerDevPage, setPostPerDevPage ] = useState(10);


    const lastGamePostIndex: number = currentGamePage * postPerGamePage;
    const firstGamePostIndex: number = lastGamePostIndex - postPerGamePage;
    const currentGamePosts: GameStat[] = gameData.slice(firstGamePostIndex, lastGamePostIndex);

    // const lastDevPostIndex: number = currentDevPage * postPerDevPage;
    // const firstDevPostIndex: number = lastDevPostIndex - postPerDevPage;
    // const currentDevPosts: DevStat[] = devData.slice(firstDevPostIndex, lastDevPostIndex)

    useEffect(() => {
        getData({gameData: gameData, setGameData: setGameData}, 
                {page: currentGamePage, page_size: 100});

        getDevs({devData: devData, setDevData: setDevData}, 
                {page: 1, page_size: 10});
    }, []);

    return(
        <>
        <section className="base">
            <section className="upper-wrapper">
                <Search holder="Search for games or developers" valueOfFilter="home"/>
            </section>
            <section className="lower-wrapper">
                <section className="dev-wrapper">
                    <section className="category-wrapper">
                        <h2>Developers</h2>
                    </section>
                    <section className="dev-table-wrapper">
                        <ul className="dev-list">
                            {devData.map((dev) => (
                                <DevCard dev={dev} key={dev.id}/>
                            ))}
                        </ul>
                    </section>
                </section>
                <section className="game-wrapper">
                    <section className="category-wrapper">
                        <h2>Games</h2>
                    </section>
                    <section className="game-table-wrapper">
                        <ul className="game-list">
                                {currentGamePosts.map((game) => (
                                    <GameCard game={game} key={game.id}/>
                                ))}
                            </ul>
                    </section>
                    <section className="pagination-wrapper">
                        <Pagination postPerPage={postPerGamePage} totalPosts={gameData.length} setCurrentPage={setCurrentGamePage} />
                    </section>
                </section>

            </section>
        </section>
        </>
    )
}