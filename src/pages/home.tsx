import { Header } from "../components/HeaderBlock/Header";
import { HomeForm } from "../components/HomeForm/HomeForm";
import "../styles/Pages.scss"

export function Home(){

    return(
        <>
        <section className="home-page">
            <section className="header-container">
            <Header/>        
            </section>
            <section className="data-container">
            <HomeForm/>
            </section>
        </section>
        </>
    )
}