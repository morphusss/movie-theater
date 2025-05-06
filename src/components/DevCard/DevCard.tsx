import { DevStat } from "../../types/types"
import { FavoriteBlock } from "../FavoriteBlock/FavoriteBlock"
import "./DevCard.scss"

type Props = {
    dev: DevStat,
}

export function DevCard({ dev }: Props) {

    return(
        <>
        <li key={dev.id} className="dev-item">
            <section className="dev-card">
                <section className="dev-upper-wrapper">
                    <img src={dev.image_background} className="dev-img" />
                    <section className="favorite-button">
                        <FavoriteBlock id={dev.id} type="dev"/>
                    </section>
                </section>
                <section className="dev-lower-wrapper">
                    <span className="dev-card-title">{dev.name}</span>
                </section>
            </section>
        </li>
        </>
    )
}