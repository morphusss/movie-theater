import notFoundImg from "../assets/notFound.jpeg"

export function NotFoundPage() {

    return(
        <>
        <section>
            Oh Shoot! You're in the wrong place buddy
            <img src={notFoundImg} alt="" />
        </section>
        </>
    )

}