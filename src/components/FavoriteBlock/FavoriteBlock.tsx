import FavoriteIconEmpty from "../../assets/svg/bookmark-small.svg"
import FavoriteIconFilled from "../../assets/svg/bookmark-small-filled.svg"
import { useState } from "react";
import "./FavoriteBlock.scss"

type Props = {
    id: number;
    type: string;
}

type FavType = {
    ids: number[],
}

const gameFavIdList: FavType = {
    ids:[]
};

const devFavIdList: FavType = {
    ids: []
};

export function FavoriteBlock (props: Props) {
    const [isFavoritePicked, setIsFavoritePicked] = useState(false);

    function operateFavoritesList() {
        setIsFavoritePicked((prev) => !prev);

        if (isFavoritePicked === false) {
            if (props.type === "game") {
                gameFavIdList.ids.push(props.id);
                localStorage.setItem(`game-list`, JSON.stringify(gameFavIdList));
                console.log(JSON.stringify(gameFavIdList))
            } else if (props.type === "dev") {
                devFavIdList.ids.push(props.id);
                localStorage.setItem(`dev-list`, JSON.stringify(devFavIdList));
                console.log(JSON.stringify(devFavIdList))
            }
        } else if (isFavoritePicked === true) {
            if (props.type === "game") {
                const elemIndex = gameFavIdList.ids.indexOf(props.id);
                gameFavIdList.ids.splice(elemIndex, 1);
                localStorage.setItem(`game-list`, JSON.stringify(gameFavIdList))
            } else if (props.type === "dev") {
                const elemIndex = devFavIdList.ids.indexOf(props.id);
                devFavIdList.ids.splice(elemIndex, 1);
                localStorage.setItem(`dev-list`, JSON.stringify(devFavIdList))
            }
        }
    }

    function renderFavoriteImage() {
        if (isFavoritePicked) {
            return <img src={FavoriteIconFilled}/>
        } else {
            return <img src={FavoriteIconEmpty}/>
        }
    }

    //localStorage.clear();

    return(
        <>
        <section className="fav-wrapper">
            <section className="fav-button" onClick={() => operateFavoritesList()}>
                <section className="fav-button-icon-wrapper">
                    <span className="fav-span">{renderFavoriteImage()}</span>
                </section>
            </section>
        </section>
        </>
    )
}