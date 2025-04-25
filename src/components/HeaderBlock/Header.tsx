import Logo from "../../assets/svg/cube-logo.svg"
import MenuPage from "../../assets/svg/nav-menu.svg"
import MoviePage from "../../assets/svg/movies.svg"
import TVSeriesPage from "../../assets/svg/tv-series.svg"
import BookmarkPage from "../../assets/svg/bookmark.svg"
import UserImg from "../../assets/svg/user-logo.svg"
import { Link } from "react-router-dom"
import "./header.scss"

export function Header() {

    return(
        <>
        <section className="header-wrapper">
            <section className="left-wrapper">
                <Link to="/"><img src={Logo} /></Link>
            </section>
            <section className="central-wrapper">
                <Link to="/"><img src={MenuPage} className="svg"/></Link>
                <Link to="/movies"><img src={MoviePage} className="svg"/></Link>
                <Link to="/tvseries"><img src={TVSeriesPage} className="svg"/></Link>
                <Link to="/favorites"><img src={BookmarkPage} className="svg"/></Link>
            </section>
            <section className="right-wrapper">
                <Link to="/profile"><img src={UserImg} className="svg"/></Link>
            </section>
        </section>
        </>
    )
}