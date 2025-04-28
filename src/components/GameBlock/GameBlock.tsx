import { GameStat } from "../../types/games.types"
import { FavoriteBlock } from "../FavoriteBlock/FavoriteBlock"
import MetacriticLogo from "../../assets/svg/metacritic.svg"
import Dot from "../../assets/svg/dot.svg"
import "./GameBlock.scss"

type Props = {
    game: GameStat;
}

export function GameCard ({ game }: Props) {

    function setShortDate(date: string) {
        let shortDate: string = "";

        for(let char = 0; char < 4; char++) {
            shortDate += date[char];
        }

        return shortDate;
    }

    return (
        <>
        <li key={game.id} className="game-item">
        <section className="game">
            <section className="game-upper-wrapper">
                <img src={game.background_image}  className="game-img"/>
                <section className="favorite-button">
                    <FavoriteBlock id={game.id}/>
                </section>
            </section>
            <section className="game-lower-wrapper">
                <section className="params-wrapper">
                    <section className="params-small-wrapper dat-released">{setShortDate(game.released)}</section>
                    <section className="params-small-wrapper dot"> 
                       <img src={Dot} />
                    </section>
                    <section className="params-small-wrapper rating">
                        <section className="rating-left-wrapper">
                            <img src={MetacriticLogo}/>
                        </section>
                        <section className="rating-left-wrapper">{game.metacritic}</section>
                    </section>
                </section>
                <section className="name-wrapper">{game.name}</section>
            </section>
        </section>
        </li>
        </>
    )
}