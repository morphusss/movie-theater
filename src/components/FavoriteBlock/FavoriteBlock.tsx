import FavoriteIconEmpty from "../../assets/svg/bookmark-small.svg"
import FavoriteIconFilled from "../../assets/svg/bookmark-small-filled.svg"
import { useState } from "react";
import "./FavoriteBlock.scss"

type Props = {
    id: number;
}

export function FavoriteBlock (props: Props) {
    const [isFavoritePicked, setIsFavoritePicked] = useState(false);

    function changeFavoritesList() {
        setIsFavoritePicked((prev) => !prev);
        console.log("click on game with id:", props.id)
    }

    function renderFavoriteImage() {
        if (isFavoritePicked) {
            return <img src={FavoriteIconFilled}/>
        } else {
            return <img src={FavoriteIconEmpty}/>
        }
    }

    return(
        <>
        <section className="fav-wrapper">
            <section className="fav-button" onClick={() => changeFavoritesList()}>
                <section className="fav-button-icon-wrapper">
                    <span className="fav-span">{renderFavoriteImage()}</span>
                </section>
            </section>
        </section>
        </>
    )
}